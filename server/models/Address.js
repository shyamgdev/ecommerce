const mongoose = require("mongoose");

// USER SCHEMA
const addressSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product',
    required: true
  },
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  mobile: {
    type: Number,
    minLength: 10,
    maxLength: 10,
    required: true,
  },
  address: {
    type: String,
    required: true
  },
  state: {
    type: String,
    required: true
  },
  city: {
    type: String,
    required: true
  },
  pinCode: {
    type: String,
    required: true
  },
}, { timestamps: true });

const AddressModel = mongoose.model('address', addressSchema);

module.exports = AddressModel;