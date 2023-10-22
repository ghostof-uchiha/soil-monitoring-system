const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const otpSchema = new Schema({
  emailOrMobile: {
    type: String,
    required: true,
  },
  otp: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    expires: 300, // OTP will expire after 5 minutes (300 seconds)
    default: Date.now,
  },
});

const OTP = mongoose.model('OTP', otpSchema);

module.exports = OTP;
