import React, { useEffect, useState } from "react";
import { FaStar, FaRegStar, FaHeart } from "react-icons/fa";
import StarComponent from "./StarComponent";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ singleProduct }) => {
  const [rating, setRating] = useState(0);
  const navigate = useNavigate();

  const handleRedirectToProductDetail = () => {
    navigate(`/productDetail/${singleProduct.id}`);
  };

  useEffect(() => {
    setRating(singleProduct?.rating.rate);
  }, []);
  return (
    <div className="bg-white shadow-md rounded-lg  overflow-hidden w-64">
      <div>
        <div className="cursor-pointer" onClick={handleRedirectToProductDetail}>
          <img
            src={singleProduct.image}
            alt={singleProduct.name}
            className="w-full h-72 object-contain
"
          />
        </div>

        <div className="p-4">
          <h3 className="font-bold text-lg">{singleProduct.name}</h3>
          <p className="text-gray-600 text-sm truncate">
            {singleProduct.description}
          </p>
          <div className="flex justify-between items-center gap-2 mt-2">
            <span className="text-lg font-semibold">
              ${singleProduct.price}
            </span>
            {<StarComponent starValue={rating} />}
          </div>
        </div>
        <div className="flex items-center justify-between py-2 px-2">
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
