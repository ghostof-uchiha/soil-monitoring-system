const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv'); // For loading environment variables from .env file
const cors = require('cors'); // For handling CORS issues
const userRoutes = require('./routes/userRoutes'); // Import your user routes
const soilDataRoutes = require('./routes/soilDataRoutes'); // Import your soil data routes
const connectDB = require('./db/db');

dotenv.config(); // Load environment variables from .env file
const app = express();
const PORT = process.env.PORT || 3000;
app.use(cors()); // Enable All CORS Requests

// Connect to MongoDB database

async function main() {
  try {
    await connectDB();
    // Middleware
    app.use(express.json()); // Parse JSON request bodies
    app.use(cors()); // Enable All CORS Requests

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



