const Author = require("../../models/Author");
const Book = require("../../models/Book");

const getAllBooks = async (req, res, next) => {
  try {
    const allBooks = await Book.find();
    return res.status(200).json(allBooks);
  } catch (error) {
    next(error);
  }
};

const createBook = async (req, res, next) => {
  try {
    const authorId = req.param.author_id;
    const book = {
      name: req.body.name,
      price: req.body.price,
      author: authorId,
    };
    const newBook = await Book.create(book);

    newBook._id; // after i create the newBook mongoose will create id for it,so i bring her to use in the code to update the author information

    // update the author
    await Author.findByIdAndUpdate(authorId, { $push: { books: newBook._id } }); //this will add the newbook_id to the author schema
    return res.status(201).json(newBook);
  } catch (error) {
    next(error);
  }
};
module.exports = { getAllBooks, createBook };
