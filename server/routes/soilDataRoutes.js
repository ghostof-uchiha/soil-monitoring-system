const express = require('express');
const router = express.Router();
const authenticateUser = require('../middleware/authMiddleware');
const authorizeUser = require('../middleware/authorizeMiddleware');
const SoilData = require('../models/soilDataModel')

// Define routes related to soil data
router.post('/submit', authorizeUser, async (req, res) => {
  try {
    // Extract data from the request body
    const { nutrient1, nutrient2, nutrient3, moistureLevel, otherData } = req.body;

    // Create a new SoilData instance based on the Mongoose model
    const newSoilData = new SoilData({
      nutrient1,
      nutrient2,
      nutrient3,
      moistureLevel,
      otherData,
    });

    // Save the data to the database
    await newSoilData.save();

    res.status(201).json({ message: 'Soil data submitted successfully!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

module.exports = router;


