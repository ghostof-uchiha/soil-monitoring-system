const express = require('express');
const SoilData = require('../models/soilDataFerti.models');
const { requireAuth } = require('../middleware/authMiddleware');
const validateApiKey = require('../middleware/apiKeyMiddleware');

const router = express.Router();

// Route to save soil data
router.post('/soil-data', async (req, res) => {
  const {
    N_level,
    P_level,
    K_level,
    temperature,
    humidity,
    ph,
    rainfall,
    predictions,
  } = req.body;

  const userId = req.user._id;

  try {
    const soilData = new SoilData({
      userId,
      N_level,
      P_level,
      K_level,
      temperature,
      humidity,
      ph,
      rainfall,
      predictions,
    });

    await soilData.save();
    res.status(201).json({ message: 'Soil data saved successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

// Route to fetch predicted soil data for a specific user
router.get('/predicted-soil-data', validateApiKey, requireAuth, async (req, res) => {
  const userId = req.user._id;

  try {
    // Fetch predicted soil data from MongoDB for the specified user
    const predictedSoilData = await SoilData.find({ userId }).sort({ timestamp: -1 });

    // Send the fetched predicted soil data as a response
    res.status(200).json({ predictedSoilData });
  } catch (error) {
    // Handle errors
    console.error('Error fetching predicted soil data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Route to fetch specific soil data based on _id
router.get('/single-soil-data/:id', validateApiKey, requireAuth, async (req, res) => {
  const userId = req.user._id;
  const soilDataId = req.params.id;

  try {
    // Fetch specific soil data from MongoDB for the specified user and _id
    const soilData = await SoilData.findOne({ _id: soilDataId, userId });

    if (!soilData) {
      // Return a 404 status if the soil data is not found
      return res.status(404).json({ error: 'Soil data not found' });
    }

    // Send the fetched soil data as a response
    res.status(200).json({ soilData });
  } catch (error) {
    // Handle errors
    console.error('Error fetching soil data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Route to delete specific soil data based on _id
router.delete('/delete-soil-data/:id', validateApiKey, requireAuth, async (req, res) => {
  const userId = req.user._id;
  const soilDataId = req.params.id;

  try {
    const deletedSoilData = await SoilData.findOneAndRemove({ _id: soilDataId, userId });

    if (!deletedSoilData) {
      return res.status(404).json({ error: 'Soil data not found' });
    }

    res.status(200).json({ message: 'Soil data deleted successfully' });
  } catch (error) {
    console.error('Error deleting soil data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


module.exports = router;
