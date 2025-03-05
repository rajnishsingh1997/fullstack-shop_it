import React, { useEffect, useState } from "react";
import { FaStar, FaRegStar, FaHeart } from "react-icons/fa";
import StarComponent from "./StarComponent";

const ProductCard = ({ singleProduct }) => {
  const [rating, setRating] = useState(0);

  const handleRedirectToProductDetail = () => {
  
  };

  useEffect(() => {
    setRating(singleProduct?.rating.rate);
  }, []);
  return (
    <div
      onClick={handleRedirectToProductDetail}
      className="bg-white shadow-md rounded-lg cursor-pointer overflow-hidden w-64"
    >
      <img
        src={singleProduct.image}
        alt={singleProduct.name}
        className="w-full h-72 object-contain
"
      />
      <div className="p-4">
        <h3 className="font-bold text-lg">{singleProduct.name}</h3>
        <p className="text-gray-600 text-sm truncate">
          {singleProduct.description}
        </p>
        <div className="flex justify-between items-center gap-2 mt-2">
          <span className="text-lg font-semibold">${singleProduct.price}</span>
          {<StarComponent starValue={rating} />}
        </div>
        <div className="flex items-center mt-2">{}</div>
        <div className="flex items-center justify-between mt-4">
          <button className="p-2 border rounded-full text-pink-500 hover:bg-pink-100">
            <FaHeart />
          </button>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
