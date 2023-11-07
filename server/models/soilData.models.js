const mongoose = require('mongoose');

const soilDataSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // Reference to the User model
    required: true,
  },
  N_level: Number,
  P_level: Number,
  K_level: Number,
  tempreture: Number,
  humidity: Number,
  ph: Number,
  rainfall: Number,
  moistureLevel: Number,
  pridiction:{
    crop:String,
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
});

const SoilData = mongoose.model('SoilData', soilDataSchema);

module.exports = SoilData;
