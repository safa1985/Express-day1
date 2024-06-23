const products = require("../../data");
const Product = require("../../models/Product");

const getAllProducts = async (req, res, next) => {
  try {
    const products = await Product.find();
    return res.json(products);
  } catch (error) {
    return next(error);
  }
};

const getOneProduct = async (req, res, next) => {
  const id = req.params.id;
  try {
    const product = await Product.findById(id);
    if (product) {
      return res.status(200).json(product);
    } else
      return res
        .status(400)
        .json({ meg: "Product with this id is not found!!" });
  } catch (error) {
    next(error);
  }
  // const product = products.find((product) => {
  //   return product.id == id;
  // });
  // if (product) {
  //   return res.json(product);
  // } else {
  //  return res, json("there is no product with this id");
  //}
};

const createOneProduct = async (req, res, next) => {
  try {
    if (req.file) {
      req.body.image = req.file.path;
    }
    const newProduct = await Product.create(req.body); //if i didnt write app.use(express.json() he cannot read the body that come from postman)
    return res.status(201).json(newProduct);
  } catch (error) {
    next(error);
  }
};

const deleteOneProduct = async (req, res, next) => {
  try {
    const id = req.params.id;
    await Product.findByIdAndDelete(id);
  } catch (error) {
    next(error);
  }

  //const deletedProduct = products.filter((product) => {
  // if (id != product.id) {
  //   return true;
  // } else {
  //   return false;
  // }
  //};
  //return res.json(deletedProduct);
  return res.status(200).json({ meg: "product deleted succsessfully" });
};

const updateProduct = async (req, res, next) => {
  const id = req.params.id;
  try {
    const updated = await Product.findByIdAndUpdate(id, req.body);
    return res.status(200).json(updated);
  } catch (error) {
    next(error);
  }
};
// GiCy7aa3zW4Ds8Da

module.exports = {
  getAllProducts,
  getOneProduct,
  createOneProduct,
  deleteOneProduct,
  updateProduct,
};
