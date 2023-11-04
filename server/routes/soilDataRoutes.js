const express = require('express');
const SoilData = require('../models/soilData.models');
const { requireAuth } = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/soil-data', requireAuth, async (req, res) => {
  const { nutrient1, nutrient2, nutrient3, moistureLevel, otherData } = req.body;
  const userId = req.user._id;

  try {
    const soilData = new SoilData({
      userId,
      nutrient1,
      nutrient2,
      nutrient3,
      moistureLevel,
      otherData,
    });

    await soilData.save();
    res.status(201).json({ message: 'Soil data saved successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

module.exports = router;
