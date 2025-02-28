import React, { useEffect, useState } from "react";
import Header from "../Components/Header";
import Categories from "../Components/Categories";
import axios from "axios";

const Home = () => {
  const [categories, setCategories] = useState([]);
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

    useEffect(() => {
      getCategories();
    }, []);

  return (
    <div>
      <Header />
      <Categories categories={categories} />
    </div>
  );
};

export default Home;
