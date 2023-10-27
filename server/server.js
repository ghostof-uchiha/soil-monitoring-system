const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv'); // For loading environment variables from .env file
const cors = require('cors'); // For handling CORS issues
const userRoutes = require('./routes/userRoutes'); 
const soilDataRoutes = require('./routes/soilDataRoutes'); 
const connectDB = require('./db/db');
const nodemailer = require('nodemailer');
const otpGenerator = require('otp-generator');

dotenv.config(); // Load environment variables from .env file
const app = express();
const PORT = process.env.PORT || 3000;
app.use(cors()); // Enable All CORS Requests

// Connect to MongoDB database

async function main() {
  try {
    await connectDB();
    // Middleware
    app.use(express.json({limit:'50mb'})); // Parse JSON request bodies
    app.use(cors()); // Enable All CORS Requests
    app.use(express.urlencoded({limit:'50mb',extended:true})); //

    // Routes
    app.use('/api/users', userRoutes); // User routes
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



