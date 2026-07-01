const express = require('express');
const Pricing = require('../models/Pricing');
const router = express.Router();

// Get all pricing packages
router.get('/', async (req, res) => {
  try {
    const pricing = await Pricing.find({ isActive: true }).sort({ price: 1 });
    res.json({
      success: true,
      data: pricing,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to fetch pricing',
      error: error.message,
    });
  }
});

// Get pricing by category
router.get('/category/:category', async (req, res) => {
  try {
    const pricing = await Pricing.find({
      category: req.params.category,
      isActive: true,
    }).sort({ price: 1 });

    res.json({
      success: true,
      data: pricing,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to fetch pricing',
      error: error.message,
    });
  }
});

module.exports = router;