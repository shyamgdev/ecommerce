const mongoose = require("mongoose");

// PRODUCT SCHEMA
const CategorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  image: {
    public_id: {
      type: String,
    },
    url: {
      type: String
    }
  },
}, { timestamps: true });

const CategoryModel = mongoose.model('category', CategorySchema);

module.exports = CategoryModel;