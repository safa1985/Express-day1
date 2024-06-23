const express = require("express");
let products = require("./data");
const connectDB = require("./database");
const productsRouter = require("./apis/products/routes");
const app = express();
const morgan = require("morgan");
const cors = require("cors");
const notFound = require("./middlewares/notFoundHandler");
const errorHandler = require("./middlewares/errorHandler");
const path = require("path");
const authorRouter = require("./apis/authors/routes");
const booksRouter = require("./apis/books/routes");
app.use(express.json()); //to teach express how to read json that come from the body of frontEnd requests, without this command express cannot read any req come from "postman" Or any clinet, the languge for communication between applications is "jason"
app.use("/media", express.static(path.join(__dirname, "media")));
app.use(morgan("dev"));
app.use(cors()); // its asecurity middleware that restricts web applications from making req from a domain different from the one that served the web application

app.use(`/api/products`, productsRouter); // to teach express how to read the routes that we just made in routes.js with name "productsRoutes" // "/api/products" found  in every path for products so i put it before "productsRoutes" to continue the path
app.use("/api/authors", authorRouter);
app.use("/api/books", booksRouter);
app.use(notFound);
app.use(errorHandler);
connectDB();

app.listen(8000, () => {
  console.log("this is my first express project!!!");
}); //let the app listen on port 8000
