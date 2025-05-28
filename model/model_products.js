const fs = require('fs');
const path = require('path');

function getProducts() {
    const data = fs.readFileSync(path.join(__dirname, '../data/products.json'), 'utf8');
    return JSON.parse(data);
}

module.exports = {
    getProducts
};
