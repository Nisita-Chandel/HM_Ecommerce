// src/components/ui/ProductCard.jsx
import React from "react";
import { Link } from "react-router-dom";
import { formatPrice } from "../../utils/helpers.js";

const ProductCard = ({ product }) => {
  return (
    <div
      style={{
        border: "1px solid #e5e7eb",
        borderRadius: "0.75rem",
        padding: "0.75rem",
        backgroundColor: "white",
      }}
    >
      <div
        style={{
          width: "100%",
          height: "180px",
          backgroundColor: "#f3f4f6",
          borderRadius: "0.5rem",
          marginBottom: "0.5rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
        }}
      >
        {product.image ? (
          <img
            src={product.image}
            alt={product.name}
            style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "cover" }}
          />
        ) : (
          <span style={{ color: "#9ca3af", fontSize: "0.9rem" }}>No Image</span>
        )}
      </div>
      <h3 style={{ fontSize: "1rem", fontWeight: 600, marginBottom: "0.25rem" }}>
        {product.name}
      </h3>
      <p style={{ fontSize: "0.9rem", color: "#6b7280", marginBottom: "0.25rem" }}>
        {product.brand || product.category}
      </p>
      <p style={{ fontWeight: 600, marginBottom: "0.5rem" }}>{formatPrice(product.price)}</p>
      <Link
        to={`/products/${product._id}`}
        style={{
          fontSize: "0.85rem",
          padding: "0.35rem 0.75rem",
          borderRadius: "0.5rem",
          border: "1px solid #111827",
        }}
      >
        View Details
      </Link>
    </div>
  );
};

export default ProductCard;
