const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
    sparse: true,
  },
  mobileNumber: {
    type: String,
    unique: true,
    sparse: true,
  },
  name: {
    type: String,
  },
  password: {
    type: String,
  },
  bio: {
    type: String,
  },
  profileImage: {
    type: String, // store the file path to the image
  },
  googleId: { 
    type: String,
    unique: true,
    sparse: true,
  }  
});

userSchema.pre('save', async function (next) {
  const user = this;
  if (user.isModified('password')) {
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);
  }
  next();
});

const User = mongoose.model('user', userSchema);

module.exports = User;
