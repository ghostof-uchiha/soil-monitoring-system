const express = require('express');
const router = express.Router();
const SoilData = require('../models/soilDataModel'); // Import the Mongoose model
const pickle = require('pickle'); // For loading the pickled model

// Load the trained model using pickle
const modelData = require('');
const modelBytes = Buffer.from(modelData.model_scaler_encoder, 'base64');
const [loadedModel, loadedScaler, loadedLabelEncoder] = pickle.loads(modelBytes);

// POST route to handle user's soil nutrient data
router.post('/submit-soil-data', async (req, res) => {
  try {
    const {
      N_level,
      P_level,
      K_level,
      temperature,
      ph,
      rainfall,
      moistureLevel,
      userId,
    } = req.body;

    // Standardize the user's soil nutrient data using the loaded scaler
    const standardizedData = loadedScaler.transform([[N_level, P_level, K_level, temperature, ph, rainfall, moistureLevel]]);

    // Make prediction using the loaded model
    const predictedCropLabel = loadedModel.predict(standardizedData)[0];
    const predictedCrop = loadedLabelEncoder.inverse_transform([predictedCropLabel])[0];

    // Create a new SoilData instance and save it to the database
    const soilData = new SoilData({
      userId,
      N_level,
      P_level,
      K_level,
      temperature,
      ph,
      rainfall,
      moistureLevel,
      prediction: {
        crop: predictedCrop,
      },
    });

    await soilData.save();

    res.status(201).json({ message: 'Soil data saved successfully!', predictedCrop });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
