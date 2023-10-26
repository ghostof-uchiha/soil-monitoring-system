const express = require('express');
const router = express.Router();
const validateApiKey = require('../middleware/apiKeyMiddleware'); 
const { requireAuth,requireAuthReset } = require('../middleware/authMiddleware');
const { verifyOTP,verifyOTPPass } = require('../middleware/verifyOTP');
const multer = require('multer');
const upload = multer(); 

const { registerUser,LoginUser,ResetPassword } = require('../controllers/authentication');
const { updateUserProfile,deleteProfileImage } = require('../controllers/profile');
const { SendOtp, ForgetPass } = require('../controllers/userOTP');

router.post('/register', validateApiKey,verifyOTP, registerUser);

router.post('/login', validateApiKey, LoginUser);

router.put('/user/:userId', requireAuth, validateApiKey, upload.single('profileImage'), updateUserProfile);

router.delete('/profileimage/:userId', requireAuth, validateApiKey, deleteProfileImage);

router.post('/userotp', validateApiKey, SendOtp);

router.post('/forgetpass', validateApiKey, ForgetPass);

router.post('/verifyOtp', validateApiKey, verifyOTPPass);

router.put('/resetpassword',validateApiKey,requireAuthReset, ResetPassword);

module.exports = router;