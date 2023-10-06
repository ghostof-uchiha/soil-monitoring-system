const express = require('express');
const router = express.Router();
const validateApiKey = require('../middleware/apiKeyMiddleware'); 


const { registerUser,LoginUser } = require('../controllers/userController');

router.post('/register', validateApiKey, registerUser);

router.post('/login', validateApiKey, LoginUser);

module.exports = router;
