const express = require('express');
const router = express.Router();
const validateApiKey = require('../middleware/apiKeyMiddleware'); 
const { updateUserProfile, deleteProfileImage } = require('../controllers/profile');
const { requireAuth } = require('../middleware/authMiddleware');
const multer = require('multer');
const upload = multer(); 


router.put('/userprofile/:userId', requireAuth, validateApiKey, upload.single('profileImage'), updateUserProfile);

router.delete('/profileimage/:userId', requireAuth, validateApiKey, deleteProfileImage);

module.exports = router;