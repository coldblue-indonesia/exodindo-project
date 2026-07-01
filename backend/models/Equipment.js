const mongoose = require('mongoose');

const equipmentSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please provide equipment name'],
      trim: true,
    },
    category: {
      type: String,
      enum: ['software', 'hardware', 'tool', 'service'],
      required: true,
    },
    description: String,
    manufacturer: {
      type: String,
      trim: true,
    },
    model: {
      type: String,
      trim: true,
    },
    serialNumber: {
      type: String,
      unique: true,
      sparse: true,
    },
    purchaseDate: Date,
    purchaseCost: Number,
    warranty: {
      startDate: Date,
      endDate: Date,
    },
    status: {
      type: String,
      enum: ['active', 'inactive', 'maintenance', 'retired'],
      default: 'active',
    },
    location: String,
    assignedTo: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      default: null,
    },
    specifications: mongoose.Schema.Types.Mixed,
    licenseKey: String,
    renewalDate: Date,
    supplier: String,
    cost: Number,
    currency: {
      type: String,
      enum: ['IDR', 'USD', 'EUR'],
      default: 'IDR',
    },
    notes: String,
    createdAt: {
      type: Date,
      default: Date.now,
    },
    updatedAt: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Equipment', equipmentSchema);
