const fs = require("fs");
const path = require("path");

function getProducts() {
  const data = fs.readFileSync(
    path.join(__dirname, "../data/products.json"),
    "utf8"
  );
  return JSON.parse(data);
}

function addProduct(product) {
  const products = getProducts();
  const newProduct = {
    id: Date.now(),
    nombre: product.nombre,
    categoria: product.categoria,
    precio: product.precio,
    unidad: product.unidad,
    stock: product.stock,
    imagen: product.imagen,
  };
  products.push(newProduct);
  fs.writeFileSync(
    path.join(__dirname, "../data/products.json"),
    JSON.stringify(products, null, 2),
    "utf8"
  );
  return product;
}

function deleteProduct(id) {
  const products = getProducts();
  const productExists = products.some((p) => p.id === id);
  if (!productExists) {
    return { success: false, message: "Product not found" };
  }
  const updateProducts = products.filter((p) => p.id !== id);
  fs.writeFileSync(
    path.join(__dirname, "../data/products.json"),
    JSON.stringify(updateProducts, null, 2),
    "utf8"
  );
  return { success: true, message: "Product deleted successfully" };
}

module.exports = {
  getProducts,
  addProduct,
  deleteProduct,
};
