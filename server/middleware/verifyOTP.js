const OTP = require('../models/OTPSchema');

const verifyOTP = async (req, res, next) => {
  try {
    const { emailOrMobile, otp } = req.body;

    // Find the OTP document associated with the provided email or mobile number
    const otpData = await OTP.findOne({
      emailOrMobile: emailOrMobile,
      otp: otp,
    });

    if (!otpData) {
      return res.status(400).json({ message: 'Invalid OTP' });
    }

    // Check if the OTP is expired
    const currentTimestamp = new Date();
    const fiveMinutesAgo = new Date(currentTimestamp.getTime() - 5 * 60 * 1000); // 5 minutes ago
    if (otpData.createdAt < fiveMinutesAgo) {
      return res.status(400).json({ message: 'OTP has expired. Please request a new OTP.' });
    }

    // Update the OTP status to verified
    otpData.verified = true;
    await otpData.save();

    // Attach the verified OTP data to the request object for further use if needed
    req.verifiedOTP = otpData;

    // Proceed to the next middleware (registerUser function in this case)
    next();
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
};

module.exports = verifyOTP;
