import React from "react";
import { useParams } from "react-router-dom";
import { Star } from "lucide-react";
import homeProducts from "../data/homeProducts";

const HomeProductDetails = () => {
  const { id } = useParams();

  const product = homeProducts.find((p) => p.id === id);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Product not found
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-14">

        {/* IMAGE */}
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-[600px] object-cover rounded-xl"
        />

        {/* DETAILS */}
        <div>
          <h1 className="text-3xl font-semibold mb-2">{product.name}</h1>

          {/* RATING */}
          <div className="flex items-center gap-1 mb-3">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={16}
                className={
                  i < Math.round(product.rating)
                    ? "fill-yellow-400 text-yellow-400"
                    : "text-gray-300"
                }
              />
            ))}
            <span className="ml-2 text-sm text-gray-500">
              {product.rating}/5
            </span>
          </div>

          <p className="text-gray-600 mb-4">{product.description}</p>

          <p className="text-2xl font-semibold mb-6">
            ₹{product.price}
          </p>

          <button className="bg-black text-white px-8 py-3 rounded hover:bg-gray-800 transition">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeProductDetails;
