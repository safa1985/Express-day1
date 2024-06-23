const mongoose = require(`mongoose`);

const bookSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  author: { type: mongoose.Schema.Types.ObjectId, ref: "author" }, //(one-to-many) one author for many books
  // so i need "objectId" for "author" so i write ref:author which is mean id from the Author schema
  // author نوعه id "objectId" from author schema
});
module.exports = mongoose.model("book", bookSchema);
