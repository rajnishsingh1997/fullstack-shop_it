import React, { useEffect, useState } from "react";
import Header from "../Components/Header";
import Categories from "../Components/Categories";
import axios from "axios";
import ProductListing from "../Components/ProductListing";

const Home = () => {
  const [categories, setCategories] = useState([]);
  const [product, setProduct] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState("");
  async function getCategories() {
    try {
      const response = await axios.get("http://localhost:4000/categories", {
        withCredentials: true,
      });
      if (response.status === 200) {
        setCategories(response?.data);
      }
    } catch (error) {
      console.error(error);
    }
  }

  async function getProduct() {
    try {
      const response = await axios.get("http://localhost:4000/products", {
        withCredentials: true,
      });
      if (response.status === 200) {
        setProduct(response?.data);
      }
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {
    getProduct();
  }, []);
  useEffect(() => {
    getCategories();
  }, []);

  return (
    <div className="flex flex-col gap-2">
      <Header />
      <Categories categories={categories} />
      <ProductListing product={product} />
    </div>
  );
};

export default Home;
