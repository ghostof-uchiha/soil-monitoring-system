const express = require('express');
const router = express.Router();
const validateApiKey = require('../middleware/apiKeyMiddleware');
const { requireAuthReset } = require('../middleware/authMiddleware');
const { verifyOTP, verifyOTPPass } = require('../middleware/verifyOTP');


const { registerUser, LoginUser, ResetPassword } = require('../controllers/authentication');
const { SendOtp, ForgetPass } = require('../controllers/userOTP');

router.post('/register', validateApiKey, verifyOTP, registerUser);

router.post('/login', validateApiKey, LoginUser);

router.post('/userotp', validateApiKey, SendOtp);

router.post('/forgetpass', validateApiKey, ForgetPass);

router.post('/verifyOtp', validateApiKey, verifyOTPPass);

router.put('/resetpassword', validateApiKey, requireAuthReset, ResetPassword);




module.exports = router;