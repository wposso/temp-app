const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
app.use(express.json());

const productsController = require("./controllers/products_ctrl");
const authenticationController = require("./auth/authentication");

app.use("/products", productsController);
app.use("/auth", authenticationController);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
