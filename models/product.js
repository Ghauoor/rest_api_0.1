const mongooes = require("mongoose");

const productSchema = new mongooes.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: [true, "Price Must be Added"],
  },
  featured: {
    type: Boolean,
    default: false,
  },

  rating: {
    type: Number,
    default: 4.5,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  company: {
    type: String,
    enum: {
      values: ["apple", "msi", "samsung", "dell"],
      message: `{VALUE} is not supported`,
    },
  },
});

module.exports = mongooes.model("Product", productSchema);
