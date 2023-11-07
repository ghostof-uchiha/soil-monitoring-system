const express = require('express');
const router = express.Router();
const fetch = require('isomorphic-fetch'); // Import the isomorphic-fetch module
const validateApiKey = require('../middleware/apiKeyMiddleware'); 
const { requireAuth } = require('../middleware/authMiddleware');


router.post('/soil-data',validateApiKey,requireAuth, async (req, res) => {
  try {
    // Extract soil nutrient data from the request body
    const { N, P, K, tempreture, humidity, ph, rainfall } = req.body;
    console.log(rainfall);

    // Make a POST request to the Flask server for prediction
    console.log('Making request to Flask server...');

    const response = await fetch('http://127.0.0.1:5000/predict', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        N: N.level,
        P: P.level,
        K: K.level,
        temperature:tempreture,
        humidity,
        ph,
        rainfall
      })
    });

    // Parse JSON response
    const responseData = await response.json();

    // Log response details
    console.log('Response status:', response.status);
    console.log('Response data:', responseData);

    // Extract predicted crop data from the Flask server response
    const predictedCrop = responseData.predicted_crops;

    // Send a success response with the predicted crop
    res.status(200).json({ message: 'Soil data stored successfully!', responseData });
  } catch (error) {
    // Handle errors
    console.error('Error making request:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
