import React from "react";
import { useParams } from "react-router-dom";
import ladiesProducts from "../data/ladiesProducts";
import { useDispatch, useSelector } from "react-redux";
import { Heart, Star } from "lucide-react";
import { addToCart } from "../store/cartSlice";
import { addToWishlist } from "../store/wishlistSlice";

const ProductDetailsPage = () => {
  const { id } = useParams(); // get ID from URL

  // find product in data
  const product = ladiesProducts.find((item) => item.id === id);

  const dispatch = useDispatch();
  const wishlistItems = useSelector((state) => state.wishlist.items);
  const isFav = wishlistItems.some((item) => item.id === product?.id);

  if (!product)
    return (
      <p className="text-center mt-20 text-gray-600 text-xl">
        Product not found.
      </p>
    );

  const renderStars = (rating) => {
    const full = Math.floor(rating);
    const hasHalf = rating - full >= 0.5;

    return (
      <div className="flex items-center gap-1">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            size={18}
            className={
              i < full || (hasHalf && i === full)
                ? "text-yellow-400 fill-yellow-400"
                : "text-gray-300"
            }
          />
        ))}
      </div>
    );
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-10 grid md:grid-cols-2 gap-10">

      {/* PRODUCT IMAGE */}
      <div>
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-[450px] object-cover rounded-xl shadow-md"
        />
      </div>

      {/* PRODUCT DETAILS */}
      <div className="flex flex-col justify-center">
        <h1 className="text-3xl font-semibold">{product.name}</h1>

        {/* Rating */}
        <div className="mt-2 flex items-center gap-2">
          {renderStars(product.rating)}
          <span className="text-gray-600 text-sm">{product.rating}/5</span>
        </div>

        <p className="text-gray-600 mt-4 leading-relaxed text-[15px]">
          {product.description}
        </p>

        <p className="text-2xl font-semibold mt-4">₹{product.price}</p>

        {/* BUTTONS */}
        <div className="flex items-center gap-4 mt-6">
          <button
            onClick={() => dispatch(addToCart(product))}
            className="px-6 py-2 bg-black text-white rounded-md hover:bg-gray-900 transition"
          >
            Add to Cart
          </button>

          <button
            onClick={() => dispatch(addToWishlist(product))}
            className="p-2 rounded-full border border-gray-300 hover:bg-gray-200"
          >
            <Heart
              size={28}
              className={isFav ? "text-red-500 fill-red-500" : "text-gray-700"}
            />
          </button>
        </div>
      </div>

    </div>
  );
};

export default ProductDetailsPage;
