const { Timestamp } = require('mongodb');
const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please enter a Product Name'],
    },
    price: {
      type: Number,
      required: [true, 'Please enter a Price'],
      default: 0,
    },

    quantity: {
      type: Number,
      required: [true, 'Please enter a Quantity'],
      default: 0,
    },
    image: {
      type: String,
      required: false,
      default: 'no-image.jpg',
    },
  },
  {
    timestamp: true,
  }
);

const Product = mongoose.model('Product', ProductSchema);

module.exports = Product;
