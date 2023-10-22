const User = require('../models/UserModel');
const OTP = require('../models/OTPSchema');

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { cloudinary } = require('../utils/cloudinary');
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
      await OTP.deleteOne({ _id: req.verifiedOTP._id });

      return res.status(201).json({ message: 'User created successfully' });
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
          return res.status(200).json({ token, userId: existingUser._id, name: existingUser?.name });
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

const updateUserProfile = async (req, res) => {
  try {
    const userId = req.params.userId;
    const { name, profileImage } = req.body;
    // const profileImage = req.file ? req.file.path : null; // check if an image was uploaded

    const fileStr = req.body.profileImage;
    console.log(fileStr);
    const uploadResponse = await cloudinary.uploader.upload(fileStr, {
      upload_preset: 'agroApiProfile',
    });

    const updatedFields = {};
    if (name) updatedFields.name = name;
    if (profileImage) updatedFields.profileImage = uploadResponse.secure_url;

    const user = await User.findByIdAndUpdate(userId, updatedFields, { new: true });

    if (!user) {
      return res.status(404).send('User not found');
    }

    res.status(200).send(user);
    console.log(user);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error updating user profile');
  }
};

module.exports = {
  registerUser,
  LoginUser,
  updateUserProfile,
};
