const express = require('express');
const router = express.Router();
const User = require('../models/user.models');

router.get('/alluser', async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;