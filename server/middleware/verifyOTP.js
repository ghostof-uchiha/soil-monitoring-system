const jwt = require('jsonwebtoken');
const OTP = require('../models/OTPSchema');

async function checkOTP(emailOrMobile, otp) {
  // Find the OTP document associated with the provided email or mobile number
  const otpData = await OTP.findOne({
    emailOrMobile: emailOrMobile,
    otp: otp,
  });

  if (!otpData) {
    return null; // Invalid OTP
  }

  // Check if the OTP is expired
  const currentTimestamp = new Date();
  const fiveMinutesAgo = new Date(currentTimestamp.getTime() - 5 * 60 * 1000); // 5 minutes ago
  if (otpData.createdAt < fiveMinutesAgo) {
    return 'expired'; // OTP has expired
  }

  // Update the OTP status to verified
  otpData.verified = true;
  await otpData.save();

  // Return OTP data for further use if needed
  return otpData;
}

const verifyOTP = async (req, res, next) => {
  try {
    const { emailOrMobile, otp } = req.body;

    const otpData = await checkOTP(emailOrMobile, otp);

    if (otpData === null) {
      return res.status(400).json({ message: 'Invalid OTP' });
    }

    if (otpData === 'expired') {
      return res.status(400).json({ message: 'OTP has expired. Please request a new OTP.' });
    }

    // Attach the verified OTP data to the request object for further use if needed
    req.verifiedOTP = otpData;

    // Proceed to the next middleware (registerUser function in this case)
    next();
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
};


const verifyOTPPass = async (req, res) => {
  try {
    const { emailOrMobile, otp } = req.body;

    const otpData = await checkOTP(emailOrMobile, otp);

    if (otpData === null) {
      return res.status(400).json({ message: 'Invalid OTP' });
    }

    if (otpData === 'expired') {
      return res.status(400).json({ message: 'OTP has expired. Please request a new OTP.' });
    }

    // Generate a one-time token for the user
    const token = jwt.sign({ userId: emailOrMobile }, process.env.JWT_SECRET, { expiresIn: '2m' });

    // Send the token to the client for further verification
    res.status(200).json({ message: 'OTP Verified', token: token });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
};

module.exports = {
  verifyOTP,
  verifyOTPPass
}
