const mongoose = require("mongoose");
const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://safakhlaifat:GiCy7aa3zW4Ds8Da@cluster0.lfqemnl.mongodb.net/"
    );
    console.log("connected trying to connect to DB");
  } catch (error) {
    console.log("error trying to connect to DB!", error);
  }
};
module.exports = connectDB;
