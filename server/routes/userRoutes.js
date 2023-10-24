const express = require('express');
const router = express.Router();
const validateApiKey = require('../middleware/apiKeyMiddleware'); 
const { requireAuth } = require('../middleware/authMiddleware');
const uploadMiddleware = require('../middleware/uploadMiddleware');
const verifyOTP = require('../middleware/verifyOTP');
const multer = require('multer');
const upload = multer(); 

const { registerUser,LoginUser } = require('../controllers/authentication');
const { updateUserProfile,deleteProfileImage } = require('../controllers/profile');
const { SendOtp } = require('../controllers/userOTP');

router.post('/register', validateApiKey,verifyOTP, registerUser);

router.post('/login', validateApiKey, LoginUser);

router.put('/user/:userId', requireAuth, validateApiKey, upload.single('profileImage'), updateUserProfile);

router.delete('/profileimage/:userId', requireAuth, validateApiKey, deleteProfileImage);

router.post('/userotp', validateApiKey, SendOtp);

module.exports = router;
