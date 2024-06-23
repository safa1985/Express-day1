const mongoose = require(`mongoose`);

const authorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  phone_number: { type: Number },
  dob: Date,
  books: [{ type: mongoose.Schema.Types.ObjectId, ref: "book" }], // one-to-many many books for one author
  // so books should be array and its type is id SO I write "Types.objectId"
  // but id for which schema?? id for book schema so i write ref:"book"
});
module.exports = mongoose.model("author", authorSchema);
