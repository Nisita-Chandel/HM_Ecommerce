import React from "react";
import { useParams } from "react-router-dom";

const ProductDetailsPage = () => {
  const { id } = useParams();

  return (
    <section>
      <h1>Product Details</h1>
      <p>Product ID: {id}</p>
    </section>
  );
};

export default ProductDetailsPage;
