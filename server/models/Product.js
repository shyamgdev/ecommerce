const mongoose = require("mongoose");

// PRODUCT SCHEMA
const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true
  },
  image: {
    public_id: {
      type: String,
    },
    url: {
      type: String
    }
  },
  category: {
    type: String,
    required: true
  },
  stock: {
    type: Number,
    required: true
  },
  rating: {
    rate: {
      type: Number,
      default: 0
    },
    count: {
      type: Number,
      default: 0
    }
  }
}, { timestamps: true });

const ProductModel = mongoose.model('product', ProductSchema);

module.exports = ProductModel;