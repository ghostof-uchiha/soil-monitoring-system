const express = require('express');
const router = express.Router();
const validateApiKey = require('../middleware/apiKeyMiddleware');
const jwt = require('jsonwebtoken');
const passport = require('passport');


router.get("/login/success",validateApiKey, (req, res) => {
	if (req.user) {
    const token = jwt.sign({ userId: req.user._id }, process.env.JWT_SECRET, {
      expiresIn: '7d' // Token expires in 1 hour, you can adjust this as needed
    });
		res.status(200).json({
			error: false,
			message: "Successfully Loged In",
			user: {
        userId: req.user._id,
        name: req.user?.name,
        email: req.user?.email,
        mobileNumber: req.user?.mobileNumber,
        bio: req.user?.bio,
        profileImage: req.user?.profileImage,},
      token: token
		});
	} else {
		res.status(403).json({ error: true, message: "Not Authorized" });
	}
});

router.get("/login/failed", (req, res) => {
	res.status(401).json({
		error: true,
		message: "Log in failure",
	});
});

router.get("/google", passport.authenticate("google", ["profile", "email"]));

router.get(
	"/google/callback",
	passport.authenticate("google", {
		successRedirect: process.env.CLIENT_URL,
		failureRedirect: "/login/failed",
	})
);

router.get("/logout", (req, res) => {
  req.logout();
	res.status(200).json({ message: "Logged out successfully" });
});

module.exports = router;