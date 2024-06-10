const express = require(`express`);
const {
  getAllProducts,
  getOneProduct,
  addOneProduct,
  deleteOneProduct,
} = require("./controllers");
const productsRouter = express.Router(); // this router is for products to know the path to reach to any req for a product

productsRouter.get(`/`, getAllProducts);
productsRouter.get(`/:id`, getOneProduct);
productsRouter.post(`/`, addOneProduct);
productsRouter.delete(`/:id`, deleteOneProduct);

module.exports = productsRouter;
