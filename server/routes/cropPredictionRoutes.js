const express = require('express');
const router = express.Router();
const fetch = require('isomorphic-fetch');
const validateApiKey = require('../middleware/apiKeyMiddleware');
const { requireAuth } = require('../middleware/authMiddleware');
const SoilData = require('../models/soilData.models');

router.post('/soil-data/:userId', validateApiKey, requireAuth, async (req, res) => {
  const userId = req.params.userId;
  try {
    // Extract soil nutrient data from the request body
    const { N, P, K, temperature, humidity, ph, rainfall } = req.body;

    const totalNPK = N.level + P.level + K.level;
    const N_ratio = N.level / totalNPK;
    const P_ratio = P.level / totalNPK;
    const K_ratio = K.level / totalNPK;
    
    // Make a POST request to the Flask server for prediction
    console.log('Making request to Flask server...');
    const response = await fetch('http://127.0.0.1:5000/predict', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        N: N_ratio*100,
        P: P_ratio*100,
        K: K_ratio*100,
        temperature: temperature,
        humidity,
        ph,
        rainfall,
      }),
    });

    // Parse JSON response from Flask server
    const responseData = await response.json();
    console.log('Flask server response:', responseData); // Log the Flask response

    // Extract predicted crop data from the Flask server response
    const predictedCrops = responseData.map(prediction => ({
      crop: prediction.crop,
      probability: parseFloat(prediction.probability), // Parse probability as float
    }));

    // Create a new SoilData document with the received data and predicted crop information
    const soilData = new SoilData({
      userId: userId,
      N_level: N.level,
      P_level: P.level,
      K_level: K.level,
      temperature:temperature,
      humidity,
      ph,
      rainfall,
      predictions: predictedCrops,
    });

    // Save the soil data to MongoDB
    await soilData.save();

    // Send a success response
    res.status(200).json({ message: 'Soil data stored successfully!', soilData  });
  } catch (error) {
    // Handle errors
    console.error('Error making request:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
