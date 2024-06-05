const express = require("express");
let products = require("./data");
const app = express();

app.use(express.json()); //to teatch express how to read json

app.get("/api/products", (req, res) => {
  return res.json(products);
});
// to get one product
app.get(`/api/products/:id`, (req, res) => {
  const id = req.params.id;
  const products = products.find((product) => {
    return product.id == id;
  });
  if (product) {
    return res.json(product);
  } else {
    return res, json("there is no product with this id");
  }
});
// to add one product
app.post("/api/products", (req, res) => {
  products.push(req.body); //if i didnt write app.use(express.json() he cannot read the body that come from postman)
  return res.json(products);
});
// do delete one product
app.delete(`/api/products/:id`, (req, res) => {
  const id = req.params.id;
  products = products.filter((product) => {
    if (id !== product.id) {
      return true;
    } else {
      return false;
    }
  });
  return res.json(products);
});

app.listen(8000, () => {
  console.log("this is my first express project!!!");
});
