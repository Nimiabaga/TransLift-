const mongoose = require('mongoose');

const donationSchema = new mongoose.Schema({
  amount: {
    type: Number,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    default: 'pending',
  },
  stripePaymentIntentId: {
    type: String,
  },
}, { timestamps: true });

module.exports = mongoose.model('Donation', donationSchema);
