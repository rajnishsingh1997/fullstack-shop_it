const express = require("express");
const app = express();
var cors = require("cors");
const bcrypt = require("bcrypt");
const validator = require("validator");
const cookieParser = require("cookie-parser");
const jwt = require("jsonwebtoken");
const { connectToDatabase } = require("./config/database");
const User = require("./models/userModel");
const Product = require("./models/productMode");
app.use(express.json());
app.use(cors());
app.use(cookieParser());
const { userCheckMiddleware } = require("./Middleware/authMiddle");

const authRouter = require("./routes/auth"); 
app.use("/", authRouter)




app.get("/products", async (req, res) => {
  try {
    const products = await Product.find({});
    if (!products) {
      res.status(400).send("Something went wrong");
    }
    res.status(200).send(products);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Something went wrong, please try again later" });
  }
});

app.get("/categories", async (req, res) => {
  try {
    res
      .status(200)
      .send(["electronics", "jewelery", "men's clothing", "women's clothing"]);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Something went wrong, please try again later" });
  }
});

app.get("/products/category/:id", async (req, res) => {
  const category = req?.params;
  const { id } = category;
  if (!category) {
    return res.status(500).send("something went wrong!");
  }
  try {
    const product = await Product.find({ category: id });
    if (product.length === 0) {
      res.status(400).send("unable to find any product");
    }
    res.status(200).send(product);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Something went wrong, please try again later" });
  }
});

connectToDatabase()
  .then(() => {
    console.log("connection Made");
    app.listen(4000, () => {
      console.log("server started");
    });
  })
  .catch((err) => {
    console.log(err);
  });
