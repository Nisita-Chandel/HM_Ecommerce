import React from "react";
import { useLocation } from "react-router-dom";
import { Star } from "lucide-react";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/cartSlice";

const ProductDetails = () => {
  const location = useLocation();
  const product = location.state;
  const dispatch = useDispatch();

  if (!product) {
    return (
      <div className="p-10 text-center">
        <h2 className="text-xl font-semibold">Product not found</h2>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-6 py-10 grid md:grid-cols-2 gap-8">
      <img
        src={product.img}
        alt={product.title}
        className="w-full h-[480px] object-cover rounded-xl"
      />

      <div>
        <h1 className="text-2xl font-semibold">{product.title}</h1>
        <p className="text-lg mt-2">{product.price}</p>

        <div className="flex items-center gap-1 mt-2">
          <Star size={18} className="text-yellow-500" />
          <span className="text-sm">{product.rating} / 5</span>
        </div>

        <p className="mt-4 text-gray-700">
          {product.description}
        </p>

        <button
  className="mt-6 bg-black text-white px-6 py-2 rounded"
  onClick={() => dispatch(addToCart(product))}
>
  Add to Cart
</button>

      </div>
    </div>
  );
};

export default ProductDetails;
