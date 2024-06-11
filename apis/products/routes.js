const express = require(`express`);
const {
  getAllProducts,
  getOneProduct,
  createOneProduct,
  deleteOneProduct,
  updateProduct,
} = require("./controllers");
const upload = require("../../middlewares/multer");
const productsRouter = express.Router(); // this router is for products to know the path to do any req(add,delete,update...) for a product

productsRouter.get(`/`, getAllProducts);
productsRouter.get(`/:id`, getOneProduct);
productsRouter.post(`/`, upload.single("image"), createOneProduct);
productsRouter.delete(`/:id`, deleteOneProduct);
productsRouter.put(`/:id`, updateProduct);
module.exports = productsRouter;
