const dotenv = require('dotenv'); // For loading environment variables from .env file
const mongoose = require('mongoose');
const connectDB = require('./db/db');
const express = require('express');
const session = require('express-session');
const cookieSession = require('cookie-session');
const cors = require('cors'); // For handling CORS issues
const passport = require('passport');

// Routes
const soilDataRoutes = require('./routes/soilDataRoutes'); 
const authRoutes = require('./routes/authRoutes'); 
const settingRoutes = require('./routes/settingRoutes'); 
const googleAuthRoutes = require('./routes/googleAuthRoute');

dotenv.config(); // Load environment variables from .env file
const app = express();
const PORT = process.env.PORT || 3000;


// Initialize Passport middleware
app.use(session({ secret: 'genshin-impact', resave: true, saveUninitialized: true }));
// app.use(cookieSession({ 
//   name:"session",
//   keys:["cyberwolve"],
//   maxAge:24*60*60*100,
// }));
app.use(passport.initialize());
app.use(passport.session());

// Include Passport configuration and routes
require('./middleware/passport'); 

const allowedOrigins = ['http://localhost:5173'];

const corsOptions = {
  origin: function (origin, callback) {
    if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true, // Enable credentials (cookies, authorization headers, etc.)
};


async function main() {
  try {
    await connectDB();
    // Middleware
    app.use(express.json({limit:'50mb'})); // Parse JSON request bodies
    app.use(express.urlencoded({limit:'50mb',extended:true})); //
    
    app.use(cors(corsOptions)); 
    // Routes
    app.use('/auth', authRoutes); // Auth routes
    app.use('/g', googleAuthRoutes); // Auth routes
    app.use('/setting', settingRoutes); // setting update routes
    app.use('/api/soil', soilDataRoutes); // Soil data routes

    // Default route
    app.get('/', (req, res) => {
      res.send('Welcome to the Soil Monitoring System API');
    });

    // Start the server
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });

  } catch (error) {
    console.log(error);
  }
}
main()



