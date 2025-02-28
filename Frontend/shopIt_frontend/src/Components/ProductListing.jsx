import React from "react";
import ProductCard from "./ProductCard";

const ProductListing = ({ product }) => {
  return (
    <div>
      <div className="flex flex-wrap justify-center gap-4">
        {product.map((singleProduct, index) => (
          <ProductCard
            singleProduct={singleProduct}
            key={index}
            className="w-1/3"
          />
        ))}
      </div>
    </div>
  );
};

export default ProductListing;
