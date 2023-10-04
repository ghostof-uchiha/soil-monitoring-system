const jwt = require('jsonwebtoken');
const User = require('../models/UserModel');

const secretKey = process.env.JWT_SECRET;

const authenticateUser = async (req, res, next) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });

    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).json({ message: 'Invalid username or password' });
    }

    const token = jwt.sign({ userId: user._id }, secretKey, { expiresIn: '7d' });
    req.token = token;
    next();
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

module.exports = authenticateUser;
