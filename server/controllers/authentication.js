const User = require('../models/user.models');
const OTP = require('../models/OTP.models');

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const sizeOf = require('image-size');
const e = require('cors');


const registerUser = async (req, res) => {
  const { emailOrMobile, password, name, confirmpassword } = req.body;

  if (password === confirmpassword) {

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
          name: name,
          email: emailOrMobile,
          password: password, // Hash the password and assign it directly
        });
      } else if (isMobileNumber) {
        newUser = new User({
          name: name,
          mobileNumber: emailOrMobile,
          password: password, // Hash the password and assign it directly
        });
      } else {
        return res.status(400).json({ message: 'Invalid email or mobile number format' });
      }

      await newUser.save(); // Save the user to the database
      // Delete the verified OTP after user registration

      const token = jwt.sign({ userId: newUser._id }, process.env.JWT_SECRET, { expiresIn: '7d' });
      await OTP.deleteOne({ _id: req.verifiedOTP._id });

      return res.status(200).json({
        message: "User Created successfully",
        token, userId: newUser._id,
        name: newUser?.name,
        email: newUser?.email,
        mobileNumber: newUser?.mobileNumber,
      });

    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  } else {
    res.status(400).json({ message: 'Password do not match' });
  }
};

const LoginUser = async (req, res) => {
  try {
    const { emailOrMobile, password } = req.body;
    // Determine whether emailOrMobile is an email or a mobile number
    const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailOrMobile);
    const isMobileNumber = /^[0-9]{10}$/.test(emailOrMobile);
    // Find the user by username

    if (isEmail || isMobileNumber) {
      const existingUser = isEmail
        ? await User.findOne({ email: emailOrMobile })
        : isMobileNumber
          ? await User.findOne({ mobileNumber: emailOrMobile })
          : null;

      // If the user does not exist, send an error response
      if (!existingUser) {
        return res.status(401).json({ message: 'Invalid Id or password' });
      }


      bcrypt.compare(password, existingUser.password, function (err, result) {
        if (err) {
          return res.status(500).json({ message: 'Internal Server Error' });
        }
        if (result) {
          // Send JWT and user ID
          const token = jwt.sign({ userId: existingUser._id }, process.env.JWT_SECRET, { expiresIn: '7d' });
          return res.status(200).json({
            message: 'Logged in successfully',
            token, userId: existingUser._id,
            name: existingUser?.name,
            email: existingUser?.email,
            mobileNumber: existingUser?.mobileNumber,
            bio: existingUser?.bio,
            profileImage: existingUser?.profileImage,
          });
        } else {
          return res.status(401).json({ message: 'Invalid Id or password' });
        }
      });
    } else {
      return res.status(401).json({ status: 401, message: 'Invalid email or mobile number' });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
};

// Update User Data

const ResetPassword = async (req, res) => {
  const { password, confirmpassword } = req.body;
  const userId = req.userId;
  console.log(userId);

  // Validate password and confirmpassword
  if (password !== confirmpassword) {
    return res.status(400).json({ message: 'Passwords do not match' });
  }

  // Validate password strength (add your password strength validation logic here if needed)

  // Reset password logic
  try {
    const user = await User.findById(userId);
    if (!user) {
      return res.status(401).json({ message: 'User not found' });
    }
    user.password = password;
    await user.save();

    return res.status(200).json({ message: 'Password reset successfully' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
};




module.exports = {
  registerUser,
  LoginUser,
  ResetPassword
};
