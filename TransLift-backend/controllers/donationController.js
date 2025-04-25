require('dotenv').config(); // ✅ Load env variables

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY); // ✅ Use secret key from .env
const Donation = require('../models/Donation'); // ✅ Import the Donation model

// @desc    Create a donation
// @route   POST /api/donations/create
// @access  Public
const createDonation = async (req, res) => {
  const { amount, email } = req.body;

  if (!amount || !email) {
    return res.status(400).json({ message: 'Please provide both amount and email' });
  }

  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount * 100,
      currency: 'usd',
      receipt_email: email,
    });

    // ✅ Save the donation to MongoDB
    await Donation.create({
      amount,
      email,
      stripePaymentIntentId: paymentIntent.id,
      status: 'pending',
    });

    res.status(201).json({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = { createDonation };

