const express = require(`express`);
const { getAllBooks, createBook } = require("./controllers");
const booksRouter = express.Router();
booksRouter.get(`/`, getAllBooks);
booksRouter.post(`/:author_id`, createBook);
module.exports = booksRouter;
