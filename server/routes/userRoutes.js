const express = require('express');
const router = express.Router();
const validateApiKey = require('../middleware/apiKeyMiddleware'); 
const { requireAuth } = require('../middleware/authMiddleware');
const uploadMiddleware = require('../middleware/uploadMiddleware');


const { registerUser,LoginUser,updateUserProfile } = require('../controllers/userController');

router.post('/register', validateApiKey, registerUser);

router.post('/login', validateApiKey, LoginUser);

router.put('/user/:userId', requireAuth, validateApiKey, updateUserProfile);


module.exports = router;
