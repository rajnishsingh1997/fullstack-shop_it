const express = require("express");
const productAuth = express.Router();
const Product = require("../models/productModel");
const { userCheckMiddleware } = require("../Middleware/authMiddle");

productAuth.get("/products", userCheckMiddleware, async (req, res) => {
  try {
    const { categories } = req.query;
    if (categories) {
      const specificProduct = await Product.find({ category: categories });
      res.status(200).send(specificProduct);
    } else {
      const products = await Product.find({});
      if (products.length===0) {
        res.status(400).send("Something went wrong");
      }
      res.status(200).send(products);
    }
  } catch (error) {
    res
      .status(500)
      .json({ error: "Something went wrong, please try again later" });
  }
});

productAuth.get("/categories", userCheckMiddleware, async (req, res) => {
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

// productAuth.get("/product/categories", async (req, res) => {
//   try {
//     const { categories } = req.query;
//     if (!categories) {
//       throw new Error("Something went wrong!");
//     }
//     const product = await Product.find({ category: categories });
//     if (product.length === 0) {
//       return res
//         .status(404)
//         .json({ error: "No products found for this category" });
//     }
//     res.status(200).send(product);
//   } catch (error) {
//     console.log(error);
//     res
//       .status(500)
//       .json({ error: "Something went wrong, please try again later" });
//   }
// });

module.exports = productAuth;

