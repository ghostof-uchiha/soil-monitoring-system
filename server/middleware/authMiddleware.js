const jwt = require('jsonwebtoken');
const User = require('../models/user.models'); // Assuming you have a User model

const requireAuth = (req, res, next) => {
  const token = req.headers.authorization;
  console.log(token);

  if (token) {
    jwt.verify(token, process.env.JWT_SECRET, async (err, decodedToken) => {
      if (err) {
        return res.status(401).json({ message: 'Invalid token' });
      }
      try {
        const user = await User.findById(decodedToken.userId);
        if (!user) {
          return res.status(401).json({ message: 'User not found' });
        }
        req.user = user;
        next();
      } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Internal Server Error' });
      }
    });
  } else {
    res.status(401).json({ message: 'Token required' });
  }
};

const requireAuthReset = (req, res, next) => {
  const token = req.headers.authorization;

  if (token) {
    jwt.verify(token, process.env.JWT_SECRET, async (err, decodedToken) => {
      if (err) {
        return res.status(401).json({ message: 'Session Expired' });
      }
      
      try {
        const user = await User.findOne({
          $or: [
            { email: decodedToken.userId },
            { mobileNumber: decodedToken.userId }
          ]
        });
        if (!user) {
          console.log("runn");
          return res.status(401).json({ message: 'User not found' });
        }
        req.userId = user._id; // Attach user information to the request object
        next();
      } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Internal Server Error' });
      }
    });
  } else {
    res.status(401).json({ message: 'Token required' });
  }
};

module.exports = { requireAuth,requireAuthReset };
