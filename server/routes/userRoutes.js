const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const User = require('../models/UserModel');
const jwt = require('jsonwebtoken');




router.post('/register', async (req, res) => {
  const { emailOrMobile, password } = req.body;

  console.log(emailOrMobile)
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

    console.log(isEmail,isMobileNumber);

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
    } else{
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
  const { credential, password } = req.body;
  try {
    // Find the user by username
    const user = await User.findOne({
      $or: [{ email: credential }, { mobileNumber: credential }],
    });

    // If the user does not exist, send an error response
    if (!user) {
      return res.status(401).json({ message: 'Invalid username or password' });
    }

    // Compare the provided password with the stored hashed password
    const passwordMatch = bcrypt.compare(password, user.password)

    // If passwords match, generate a JWT token and send it in the response
    if (passwordMatch) {
      const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '7d' });
      return res.status(200).json({ token });
    } else {
      console.log("its running");
      // If passwords do not match, send an error response
      return res.status(401).json({ message: 'Invalid username or password' });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
});

module.exports = router;
