const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const User = require('../models/UserModel');
const jwt = require('jsonwebtoken');




router.post('/register', async (req, res) => {
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


    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user instance
    let newUser = {};
    if (isEmail) {
      newUser = new User({
        email: emailOrMobile,
        password: hashedPassword,
      });
    } else if (isMobileNumber) {
      newUser = new User({
        mobileNumber: emailOrMobile,
        password: hashedPassword,
      });
    } else {
      return res.status(400).json({ message: 'Invalid email or mobile number format' });
    }

    if (newUser) {
      await newUser.save();
      return res.status(201).json({ message: 'User created successfully' });
    } else {
      return res.status(400).json({ message: 'Invalid email or mobile number format' });
    }

    res.status(201).json({ message: 'User created successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

router.post('/login', async (req, res) => {
  const { emailOrMobile, password } = req.body;

  try {
    // Determine whether emailOrMobile is an email or a mobile number
    const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailOrMobile);
    const isMobileNumber = /^[0-9]{10}$/.test(emailOrMobile);

    // Find the user by username
    const existingUser = isEmail
      ? await User.findOne({ email: emailOrMobile })
      : isMobileNumber
        ? await User.findOne({ mobileNumber: emailOrMobile })
        : null;

    console.log(existingUser);

    // If the user does not exist, send an error response
    if (!existingUser) {
      return res.status(401).json({ message: 'Invalid username or password' });
    }

    // Compare the provided password with the stored hashed password
    // Compare the provided password with the hashed password stored in the database
    const passwordMatch = await bcrypt.compare(password, existingUser.password);

    console.log(password, passwordMatch);

    if (passwordMatch) {
      // Passwords match, proceed with generating a JWT token
      // ...
      const token = jwt.sign({ userId: existingUser._id }, process.env.JWT_SECRET, { expiresIn: '7d' });
      return res.status(200).json({ token });
    } else {
      // Passwords do not match, send an error response
      console.log("Password doesn't match");
      return res.status(401).json({ message: 'Invalid username or password' });
    }

  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
});

module.exports = router;
