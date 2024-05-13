const express = require('express');
const { createProduct, getProduct, fetchProducts } = require('../controller/productCtrl');
const router = express.Router();

router.post("/", createProduct);
router.get("/:id", getProduct);
router.get("/", fetchProducts);

module.exports = router;