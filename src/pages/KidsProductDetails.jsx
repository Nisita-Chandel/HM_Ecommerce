// src/pages/KidsProductDetails.jsx
import React from "react";
import { useLocation } from "react-router-dom";
import { Star } from "lucide-react";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/cartSlice";

const KidsProductDetails = () => {
  const { state } = useLocation();
  const dispatch = useDispatch();

  if (!state) {
    return <div className="p-10">Product not found</div>;
  }

  const handleAddToCart = () => {
    dispatch(
      addToCart({
        id: state.id,
        name: state.title,
        image: state.img,
        price: Number(state.price.replace(/[^\d]/g, "")),
        qty: 1,
      })
    );
  };

  return (
    <div className="max-w-5xl mx-auto p-6 grid md:grid-cols-2 gap-8">
      {/* IMAGE */}
      <img
        src={state.img}
        alt={state.title}
        className="w-full h-[500px] object-cover rounded"
      />

      {/* DETAILS */}
      <div>
        <h1 className="text-2xl font-semibold">{state.title}</h1>
        <p className="text-lg mt-2">{state.price}</p>

        {/* RATING */}
        <div className="flex items-center gap-1 mt-2">
          <Star size={18} className="text-yellow-500" />
          <span className="text-sm">{state.rating} / 5</span>
        </div>

        <p className="mt-4 text-gray-700">{state.description}</p>

        {/* ADD TO CART */}
        <button
          onClick={handleAddToCart}
          className="mt-6 bg-black text-white px-6 py-2 rounded hover:bg-gray-800 transition"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default KidsProductDetails;
