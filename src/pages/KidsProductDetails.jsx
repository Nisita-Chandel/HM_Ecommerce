import React from "react";
import { useLocation } from "react-router-dom";
import { Star } from "lucide-react";

const KidsProductDetails = () => {
  const { state } = useLocation();

  if (!state) return <p className="p-10">Product not found</p>;

  return (
    <div className="max-w-5xl mx-auto p-6 grid md:grid-cols-2 gap-8">
      
      {/* Image */}
      <img
        src={state.img}
        alt={state.title}
        className="w-full h-[500px] object-cover rounded"
      />

      {/* Details */}
      <div>
        <h1 className="text-2xl font-semibold">{state.title}</h1>
        <p className="text-lg mt-2">{state.price}</p>

        {/* Rating */}
        <div className="flex items-center gap-1 mt-2">
          <Star size={18} className="text-yellow-500" />
          <span className="text-sm">{state.rating} / 5</span>
        </div>

        <p className="mt-4 text-gray-700">{state.description}</p>

        <button className="mt-6 bg-black text-white px-6 py-2 rounded">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default KidsProductDetails;
