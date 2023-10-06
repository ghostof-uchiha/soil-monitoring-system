const User = require('../models/UserModel'); 
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


const registerUser = async (req, res) => {
  const { emailOrMobile, password } = req.body;

  try {
    // Determine whether emailOrMobile is an email or a mobile number
    const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailOrMobile);
    const isMobileNumber = /^[0-9]{10}$/.test(emailOrMobile);

    const existingUser = isEmail
      ? await User.findOne({ email: emailOrMobile })
      : isMobileNumber
      ? await User.findOne({ mobileNumber: emailOrMobile })
      : null;

    if (existingUser) {
      return res.status(400).json({ message: 'Email or mobile number is already registered' });
    }

    let newUser;

    if (isEmail) {
      newUser = new User({
        email: emailOrMobile,
        password: password, // Hash the password and assign it directly
      });
    } else if (isMobileNumber) {
      newUser = new User({
        mobileNumber: emailOrMobile,
        password: password, // Hash the password and assign it directly
      });
    } else {
      return res.status(400).json({ message: 'Invalid email or mobile number format' });
    }

    await newUser.save(); // Save the user to the database

    return res.status(201).json({ message: 'User created successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

const LoginUser = async (req, res) => {
  
  try {
    const { emailOrMobile, password } = req.body;
    // Determine whether emailOrMobile is an email or a mobile number
    const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailOrMobile);
    const isMobileNumber = /^[0-9]{10}$/.test(emailOrMobile);

    // Find the user by username
    const existingUser = isEmail
      ? await User.findOne({ email: emailOrMobile })
      : isMobileNumber
        ? await User.findOne({ mobileNumber: emailOrMobile })
        : null;


    // If the user does not exist, send an error response
    if (!existingUser) {
      return res.status(401).json({ message: 'Invalid Id or password' });
    }

    bcrypt.compare(password, existingUser.password, function(err, result) {
      if (err){
        return response.json({success: false, message: err});
      }
      if (result) {
        // Send JWT
        const token = jwt.sign({ userId: existingUser._id }, process.env.JWT_SECRET, { expiresIn: '7d' });
        return res.status(200).json({ token });
      } else {
        // response is OutgoingMessage object that server response http request
        return res.status(401).json({ message: 'Invalid Id or password' });
      }
    });


  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
};

module.exports = {
  registerUser,
  LoginUser,
};
