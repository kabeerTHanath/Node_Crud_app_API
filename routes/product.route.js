const express = require('express');
const Product = require('../models/product.model.js');
const router = express.Router();

const {
  getProducts,
  getSingleProduct,
  createProduct,
  updataProduct,
  deleteProduct,
} = require('../controllers/product.controller.js');

// List All products
router.get('/', getProducts);

// Show Single Prodcut
router.get('/:id', getSingleProduct);

//Create a new product
router.post('/', createProduct);

// update products
router.put('/:id', updataProduct);

// delete products
router.delete('/:id', deleteProduct);

module.exports = router;
