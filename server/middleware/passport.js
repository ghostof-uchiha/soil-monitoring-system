const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const User = require('../models/UserModel');

passport.use(new GoogleStrategy({
  clientID: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  callbackURL: 'http://localhost:4000/g/google/callback',
  scope: ["profile", "email"],
  userProfileURL: 'https://www.googleapis.com/oauth2/v3/userinfo',
},
async (accessToken, refreshToken, profile, done) => {
  const { id, displayName, emails,photos } = profile;
  const email = emails[0].value;

  try {
    let user = await User.findOne({ email: email });

    if (user) {
      return done(null, user);
    } else {
      // Attempt to create a new user, handle duplicate key error if email already exists
      try {
        user = new User({
          googleId: id,
          name: displayName,
          email: email,
          profileImage: photos[0].value,
        });
        console.log(user);
        await user.save();
        return done(null, user);
      } catch (error) {
        // Check if the error is a duplicate key error for the email field
        if (error.code === 11000 && error.keyPattern && error.keyPattern.email === 1) {
          // Handle duplicate email error here
          return done(null, false, { message: 'Email address is already registered' });
        }
        // Handle other database errors
        console.error('Error saving user:', error);
        return done(error, null);
      }
    }
  } catch (error) {
    console.error('Error finding user:', error);
    return done(error, null);
  }
}));

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findById(id);
    done(null, user);
  } catch (error) {
    done(error, null);
  }
});