const express = require('express');
const Client = require('../models/Client');
const { authMiddleware } = require('../middleware/auth');
const router = express.Router();

// Get all clients
router.get('/', async (req, res) => {
  try {
    const clients = await Client.find().sort({ createdAt: -1 });
    res.json({
      success: true,
      data: clients,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to fetch clients',
      error: error.message,
    });
  }
});

// Create client
router.post('/', authMiddleware, async (req, res) => {
  try {
    const { name, email, phone, company, website, industry, type } = req.body;

    const client = new Client({
      name,
      email,
      phone,
      company,
      website,
      industry,
      type,
    });

    await client.save();

    res.status(201).json({
      success: true,
      message: 'Client created successfully',
      data: client,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to create client',
      error: error.message,
    });
  }
});

module.exports = router;