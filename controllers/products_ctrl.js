const express = require("express");
const router = express.Router();
const { getProducts } = require("../model/model_products");

router.get("/products", (req, res) => {
  if (!getProducts) {
    return res.status(500).json({ message: "Error to read products" });
  } else {
    res.json(getProducts);
  }
});

module.exports = router;
