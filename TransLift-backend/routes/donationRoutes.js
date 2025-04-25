const express = require('express');
const router = express.Router();
const { createDonation } = require('../controllers/donationController');

// Route to create a donation
router.post('/create', createDonation);

module.exports = router;
