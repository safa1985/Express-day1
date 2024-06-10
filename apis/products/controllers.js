const products = require("../../data");
const Product = require("../../models/Product");

const getAllProducts = async (req, res) => {
  const products = await Product.find();
  return res.json(products);
};

const getOneProduct = async (req, res) => {
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
    return res.status(error.status || 500).json(error);
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

const createOneProduct = async (req, res) => {
  try {
    const nemProduct = await Product.create(req.body); //if i didnt write app.use(express.json() he cannot read the body that come from postman)
    return res.status(201).json(nemProduct);
  } catch (error) {
    return res.status(error.status || 500).json(error);
  }
};

const deleteOneProduct = async (req, res) => {
  try {
    const id = req.params.id;
    await Product.findByIdAndDelete(id);
  } catch (error) {
    return res.status(error.status || 500).json(error);
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

const updateProduct = async (req, res) => {
  const id = req.params.id;
  try {
    const updated = await Product.findByIdAndUpdate(id, req.body);
    return res.status(200).json(updated);
  } catch (error) {
    return res.status(error.status || 500).json(error);
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
