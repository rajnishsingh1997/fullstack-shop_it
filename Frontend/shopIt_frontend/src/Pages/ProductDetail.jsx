import React, { useEffect } from "react";
import { useParams } from "react-router";
import axios from "axios";

const ProductDetail = () => {
  let { id } = useParams();

//   const getProductDetails = async () => {
//     try {
//       const response = await axios.get(`/productDetail/${id}`);
//       console.log(response);
//     } catch (error) {}
//   };
//   useEffect(() => {
//     getProductDetails();
//   }, [id]);
  return <div>ProductDetail</div>;
};

export default ProductDetail;
