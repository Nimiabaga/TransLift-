const express = require('express');
const app = express();
const donationRoutes = require('./routes/donationRoutes'); // Updated import for donation routes
require('dotenv').config();
const connectDB = require('./config/db');
connectDB();

// Middleware to parse incoming requests with JSON payloads
app.use(express.json());

// Use the updated donation route
app.use('/api/donations', donationRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
