import axios from "axios";
import React, { useEffect, useState } from "react";

const Categories = () => {
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
  if (categories.length === 0) return;

  return (
    <div className="flex justify-center items-center mt-5">
      <div className="flex flex-wrap gap-4">
        {categories.map((eachCategory, index) => (
          <button
            key={index}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition"
          >
            {eachCategory}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Categories;
