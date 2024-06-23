const errorHandler = require("../../middlewares/errorHandler");
const Author = require("../../models/Author");

const getAllAuthors = async (req, res, next) => {
  try {
    const authors = await Author.find().populate("books"); //populate the books to see all deatails for the book not only its id
    return res.status(200).json(authors);
  } catch (error) {
    next(error);
  }
};

const createAuthor = async (req, res, next) => {
  try {
    const author = await Author.create(req.body);
    return res.status(201).json(author);
  } catch (error) {
    next(error);
  }
};
module.exports = { getAllAuthors, createAuthor };
