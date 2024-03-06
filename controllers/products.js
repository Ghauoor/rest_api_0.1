const getAllProducts = async (req, res) => {
  res.status(200).json({ msg: "i'm getting all the products" });
};
const getAllProductsTesting = async (req, res) => {
  res.status(200).json({ msg: "i'm getting all the products Testing" });
};

module.exports = { getAllProducts, getAllProductsTesting };
