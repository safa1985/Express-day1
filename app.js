const express = require("express");
let products = require("./data");
const connectDB = require("./database");
const productsRouter = require("./apis/products/routes");
const app = express();
const morgan = require("morgan");
const cors = require("cors");
const notFound = require("./middlewares/notFoundHandler");
const errorHandler = require("./middlewares/errorHandler");
app.use(express.json()); //to teach express how to read json that come from the body of frontEnd requests, without this command express cannot read any req come from "postman" Or any clinet, the languge for communication between applications is "jason"
app.use(morgan("dev"));
app.use(cors()); //
app.use(`/api/products`, productsRouter); // to teach express how to read the routes that we just made in routes.js with name "productsRoutes" // "/api/products" found  in every path for products so i put it before "productsRoutes" to continue the path
app.use(notFound);
app.use(errorHandler);
connectDB();

app.listen(8000, () => {
  console.log("this is my first express project!!!");
}); //let the app listen on port 8000
