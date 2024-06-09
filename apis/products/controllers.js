const products = require("../../data");

const getAllProducts = (req, res) => {
  return res.json(products);
};

const getOneProduct = (req, res) => {
  const id = req.params.id;
  const product = products.find((product) => {
    return product.id == id;
  });
  if (product) {
    return res.json(product);
  } else {
    return res, json("there is no product with this id");
  }
};

const addOneProduct = (req, res) => {
  products.push(req.body); //if i didnt write app.use(express.json() he cannot read the body that come from postman)
  return res.json(products);
};

const deleteOneProduct = (req, res) => {
  const id = req.params.id;
  const productx = products.filter((product) => {
    if (id !== product.id) {
      return true;
    } else {
      return false;
    }
  });
  return res.json(productx);
};

// GiCy7aa3zW4Ds8Da

module.exports = {
  getAllProducts,
  getOneProduct,
  addOneProduct,
  addOneProduct,
  deleteOneProduct,
};
