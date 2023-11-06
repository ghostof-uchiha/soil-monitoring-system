const express = require('express');
const router = express.Router();
const fetch = require('isomorphic-fetch'); // Import the isomorphic-fetch module

router.post('/soil-data', async (req, res) => {
  try {
    // Extract soil nutrient data from the request body
    const { N_level, P_level, K_level, temperature, humidity, ph, rainfall } = req.body;

    // Make a POST request to the Flask server for prediction
    console.log('Making request to Flask server...');

    const response = await fetch('http://127.0.0.1:5000/predict', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        N: N_level,
        P: P_level,
        K: K_level,
        temperature,
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
    const predictedCrop = responseData.predicted_crop;

    // Send a success response with the predicted crop
    res.status(201).json({ message: 'Soil data stored successfully!', predictedCrop });
  } catch (error) {
    // Handle errors
    console.error('Error making request:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
