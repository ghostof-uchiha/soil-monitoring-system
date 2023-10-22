const express = require('express');
const router = express.Router();
const validateApiKey = require('../middleware/apiKeyMiddleware'); 
const { requireAuth } = require('../middleware/authMiddleware');
const uploadMiddleware = require('../middleware/uploadMiddleware');
const verifyOTP = require('../middleware/verifyOTP');


const { registerUser,LoginUser,updateUserProfile } = require('../controllers/userController');
const { SendOtp } = require('../controllers/userOTP');

router.post('/register', validateApiKey,verifyOTP, registerUser);

router.post('/login', validateApiKey, LoginUser);

router.put('/user/:userId', requireAuth, validateApiKey, updateUserProfile);

router.post('/userotp', validateApiKey, SendOtp);

module.exports = router;
