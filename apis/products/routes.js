const express = require(`express`);
const {
  getAllProducts,
  getOneProduct,
  addOneProduct,
  deleteOneProduct,
} = require("./controllers");
const router = express.Router();

router.get(`/`, getAllProducts);
router.get(`/:id`, getOneProduct);
router.post(`/`, addOneProduct);
router.delete(`/:id`, deleteOneProduct);

module.exports = router;
