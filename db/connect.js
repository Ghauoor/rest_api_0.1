const mongoose = require("mongoose");

const connectDB = (uri) => {
  console.log("I'm Connected");
  return mongoose.connect(uri);
};

module.exports = connectDB;
