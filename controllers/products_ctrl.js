const express = require("express");
const router = express.Router();
const { getProducts, deleteProduct, addProduct } = require("../model/model_products");
// const { addProduct } = require("../model/model_products");
// const { deleteProduct } = require("../model/model_products");

router.get("/", (req, res) => {
  const products = getProducts();
  if (!products) {
    return res.status(500).json({ message: "Error to read products" });
  } else {
    res.json(products);
  }
});

router.post("/", (req, res) => {
  const { nombre, categoria, precio, unidad, stock, imagen } = req.body;

  if (!nombre || !categoria || !precio || !unidad || !stock || !imagen) {
    return res.status(400).json({ message: "All fields are required" });
  }

  const newProduct = addProduct({
    nombre,
    categoria,
    precio,
    unidad,
    stock,
    imagen,
  });

  res.status(201).json({ message: "Product added successfully" });
});

router.delete("/:id", (req, res) => {
  const id = parseInt(req.params.id);

  if (!id) {
    return res.status(400).json({ message: "Product ID is required" });
  }

  const products = getProducts();
  const productExists = products.some((p) => p.id === id);

  if (!productExists) {
    return res.status(404).json({ message: "Product not found" });
  }

  const result = deleteProduct(id);

  if (!result.success) {
    return res.status(500).json({ message: "Error deleting product" });
  }

  res.json(result);
});

module.exports = router;
