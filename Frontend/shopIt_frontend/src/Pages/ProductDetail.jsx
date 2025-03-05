import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";

const ProductDetail = () => {
  let { id } = useParams();
  const [product, setProduct] = useState();
  const [rating, setRating] = useState(0);

  const getProductDetail = async () => {
    try {
      const response = await axios.get(
        `http://localhost:4000/productDetail/${id}`,
        { withCredentials: true }
      );

      if (response?.status === 200) {
        setProduct(response?.data?.productWithId);
        setRating(product?.rating.rate);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getProductDetail();
  }, [id]);

  if (!id) return null;
  console.log(product);
  return (
    <div>
      <div className="bg-gray-100 h-screen">
        <div className="container mx-auto flex justify-evenly px-4 py-8">
          <div className="flex flex-wrap -mx-4">
            <div class="w-full md:w-1/2 px-4 mb-8">
              <img
                src={product?.image}
                alt="Product"
                class="w-full h-auto rounded-lg shadow-md mb-4"
                id="mainImage"
              />
            </div>
          </div>

          <div className="w-full md:w-1/2 px-4">
            <h2 className="text-3xl font-bold mb-2">{product?.title}</h2>
            <div className="mb-4">
              <span className="text-2xl font-bold mr-2">${product?.price}</span>
            </div>
            <div className="flex items-center mb-4">
              //star here
              <span className="ml-2 text-gray-600">4.5 (120 reviews)</span>
            </div>
            <p className="text-gray-700 mb-6">{product?.description}</p>

            <div className="mb-6">
              <label
                htmlFor="quantity"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Quantity:
                <input
                  className="w-12 text-center rounded-md border-gray-300  shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  type="number"
                  min="1"
                />
              </label>
            </div>

            <div className="flex space-x-4 mb-6">
              <button className="bg-indigo-600 flex gap-2 items-center text-white px-6 py-2 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                  />
                </svg>
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
