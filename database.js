const dotenv = require("dotenv");
const mongoose = require("mongoose");
dotenv.config();
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_URL);
    console.log("Connected to DB!");
  } catch (error) {
    console.log("error trying to connect to DB!", error);
  }
};
module.exports = connectDB;
