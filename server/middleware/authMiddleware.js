const jwt = require('jsonwebtoken');
const User = require('../models/UserModel'); // Assuming you have a User model

const requireAuth = (req, res, next) => {
  const token = req.headers.authorization;

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

module.exports = { requireAuth };
