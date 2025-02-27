const express = require("express"); 
const productAuth = express.Router();
const Product = require("../models/productModel");
const{userCheckMiddleware} = require("../Middleware/authMiddle");

productAuth.get("/products",userCheckMiddleware, async (req, res) => {
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
  
  productAuth.get("/categories",userCheckMiddleware, async (req, res) => {
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
  
  productAuth.get("/products/category/:id",userCheckMiddleware, async (req, res) => {
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


module.exports = productAuth;

