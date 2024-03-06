const express = require("express");
const connectDB = require("./db/connect");
const app = express();
// const port = 3000;
const port = process.env.PORT || 3000;

const products_routes = require("./routes/products");
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// middleware or to set router

app.use("/api/products", products_routes);

const start = async () => {
  try {
    await connectDB();
    app.listen(port, () => {
      console.log(`App listening at http://localhost:${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();

// app.listen(port, () => {
//   console.log(`App listening at http://localhost:${port}`);
// });
