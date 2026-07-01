const express = require('express');
const Project = require('../models/Project');
const { authMiddleware } = require('../middleware/auth');
const router = express.Router();

// Get all projects
router.get('/', async (req, res) => {
  try {
    const projects = await Project.find()
      .populate('client', 'name company')
      .populate('createdBy', 'name email')
      .sort({ createdAt: -1 });
    res.json({
      success: true,
      data: projects,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to fetch projects',
      error: error.message,
    });
  }
});

// Get project by ID
router.get('/:id', async (req, res) => {
  try {
    const project = await Project.findById(req.params.id)
      .populate('client')
      .populate('team.user', 'name email role')
      .populate('createdBy', 'name email');

    if (!project) {
      return res.status(404).json({
        success: false,
        message: 'Project not found',
      });
    }

    res.json({
      success: true,
      data: project,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to fetch project',
      error: error.message,
    });
  }
});

// Create project
router.post('/', authMiddleware, async (req, res) => {
  try {
    const { title, description, client, category, budget, startDate, endDate } = req.body;

    const project = new Project({
      title,
      description,
      client,
      category,
      budget,
      startDate,
      endDate,
      createdBy: req.user.id,
    });

    await project.save();
    await project.populate('client', 'name company');

    res.status(201).json({
      success: true,
      message: 'Project created successfully',
      data: project,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to create project',
      error: error.message,
    });
  }
});

module.exports = router;