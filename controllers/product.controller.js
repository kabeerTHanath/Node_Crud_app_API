// const express = require('express');
// const mongoose = require('mongoose');
const Product = require('../models/product.model.js');
// const app = express();

// List All products
const getProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// List Single product
const getSingleProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const singleProduct = await Product.findById(id);
    res.status(200).json(singleProduct);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// create products
const createProduct = async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// ipdate products
const updataProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByIdAndUpdate(id, req.body);

    if (!product) {
      return res.status(404).json({ message: 'Product not Found' });
    }

    const updataedProduct = await Product.findById(id);
    res.status(200).json(updataedProduct);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// delete products
const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;

    const product = await Product.findByIdAndDelete(id);

    if (!product) {
      return res.status(404).json({ message: 'Product not Found' });
    }

    res.status(200).json({ message: 'Product successfully deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getProducts,
  getSingleProduct,
  createProduct,
  updataProduct,
  deleteProduct,
};
