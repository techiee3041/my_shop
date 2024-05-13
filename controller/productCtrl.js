const Product = require("../models/productModel");
const asyncHandler = require("express-async-handler");

const createProduct = asyncHandler(async (req, res) => {
  try {
    const newProduct = await Product.create(req.body);
    res.json(newProduct);
    s;
  } catch (error) {
    throw new Error(error);
  }
});

const getProduct = asyncHandler(async (req, res) => {
  const { id } = req.params;
  try {
    const findProduct = await Product.findById(id);
    res.json(findProduct);
  } catch (error) {
    throw new Error(error);
  }
});

const fetchProducts = asyncHandler(async(req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (error) {
        throw new Error(error);
    }
})

module.exports = { createProduct, getProduct, fetchProducts };
