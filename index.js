const express = require('express');
const app = express();
const port = 3000;

const { getProducts } = require('./model/model_products');
const products = getProducts();

app.get('/products', (req, res) => {
    res.json(products);
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});