const mongoose = require('mongoose');

const soilDataFertiSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // Reference to the User model
    required: true,
  },
  Temparature: Number,
  Humidity: Number,
  Moisture: Number,
  Soil_Type: Number,
  Crop_Type: Number,
  Nitrogen: Number,
  Phosphorous: Number,
  Potassium: Number,
  ph: Number,
  fertilizer : String,
  timestamp: {
    type: Date,
    default: Date.now,
  },
});

const SoilDataFerti = mongoose.model('SoilDataFerti', soilDataFertiSchema);

module.exports = SoilDataFerti;
