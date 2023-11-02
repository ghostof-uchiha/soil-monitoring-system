const mongoose = require('mongoose');

const soilDataSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // Reference to the User model
    required: true,
  },
  nutrient1: Number,
  nutrient2: Number,
  nutrient3: Number,
  moistureLevel: Number,
  otherData: String,
  timestamp: {
    type: Date,
    default: Date.now,
  },
});

const SoilData = mongoose.model('SoilData', soilDataSchema);

module.exports = SoilData;
