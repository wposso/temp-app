const express = require("express");
const router = express.Router();
const { getProducts } = require("../model/model_products");

router.get("/", (req, res) => {
  const products = getProducts();
  if (!products) {
    return res.status(500).json({ message: "Error to read products" });
  } else {
    res.json(products);
  }
});

module.exports = router;
