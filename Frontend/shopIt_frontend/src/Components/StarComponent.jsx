import React from "react";
import { FaStar, FaRegStar, FaStarHalfAlt } from "react-icons/fa";

const StarComponent = ({ starValue }) => {
  const maxStars = 5;
  const fullStars = Math.floor(starValue);
  const hasHalfStar = starValue % 1 !== 0;
  const emptyStars = maxStars - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div className="flex">
      {Array(fullStars).fill(<FaStar className="text-yellow-500" />)}
      {hasHalfStar && <FaStarHalfAlt className="text-yellow-500" />}
      {Array(emptyStars).fill(<FaRegStar className="text-gray-400" />)}
    </div>
  );
};

export default StarComponent;
