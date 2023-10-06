const mongoose = require('mongoose');

const soilDataSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
    sparse: true,
  },
  mobileNumber: {
    type: String,
    unique: true,
    sparse: true,
  },
  nutrient1: Number,
  nutrient2: Number,
  nutrient3: Number,
  moistureLevel: Number,
  otherData: String,
});

const SoilData = mongoose.model('SoilData', soilDataSchema);

module.exports = SoilData;
