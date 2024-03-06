const mongoose = require("mongoose");
const uri =
  "mongodb+srv://ghayoorhussain701:62NjR4JW7EnH9WRO@restapi.q32rw5r.mongodb.net/ghayoorhussain701?retryWrites=true&w=majority&appName=RestAPI";

const connectDB = () => {
  console.log("I'm Connected");
  return mongoose.connect(uri);
};

module.exports = connectDB;
