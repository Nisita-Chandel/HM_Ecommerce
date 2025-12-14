import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Heart, Star } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import ladiesProducts from "../data/ladiesProducts";
import { addToCart } from "../store/cartSlice";
import {
  addToFavorites,
  removeFromFavorites,
} from "../store/favoritesSlice";

const ProductDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const product = ladiesProducts.find((p) => p.id === id);
  const favourites = useSelector((state) => state.favorites.items);

  const [size, setSize] = useState("");
  const [qty, setQty] = useState(1);
  const [selectedColor, setSelectedColor] = useState(null);
  const [mainImage, setMainImage] = useState(null);

  // ✅ SET DEFAULT COLOR & IMAGE SAFELY
  useEffect(() => {
    if (product?.colors) {
      const firstColor = Object.keys(product.colors)[0];
      setSelectedColor(firstColor);
      setMainImage(product.colors[firstColor]);
    }
  }, [product]);

  if (!product) {
    return <div className="p-10">Product not found</div>;
  }

  const isFavourite = favourites.some((item) => item.id === product.id);

  const payload = {
    id: product.id,
    name: product.name,
    price: product.price,
    image: mainImage,
    selectedSize: size,
    selectedColor,
    qty,
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-14">

        {/* ✅ IMAGE (NO EMPTY SRC) */}
        {mainImage ? (
          <img
            src={mainImage}
            alt={product.name}
            className="w-full h-[600px] object-cover rounded-xl"
          />
        ) : (
          <div className="w-full h-[600px] bg-gray-100 rounded-xl" />
        )}

        {/* DETAILS */}
        <div>
          <h1 className="text-3xl font-semibold mb-2">{product.name}</h1>

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
          <p className="text-2xl font-semibold mb-6">₹{product.price}</p>

          {/* COLOR */}
          <div className="mb-6">
            <p className="font-medium mb-2">Color</p>
            <div className="flex gap-3">
              {Object.entries(product.colors).map(([color, img]) => (
                <button
                  key={color}
                  onClick={() => {
                    setSelectedColor(color);
                    setMainImage(img);
                  }}
                  className={`w-8 h-8 rounded-full border-2 ${
                    selectedColor === color
                      ? "border-black scale-110"
                      : "border-gray-300"
                  }`}
                  title={color}
                />
              ))}
            </div>
          </div>

          {/* SIZE */}
          <div className="mb-6">
            <p className="font-medium mb-2">Size</p>
            <div className="flex gap-3">
              {product.sizes.map((s) => (
                <button
                  key={s}
                  onClick={() => setSize(s)}
                  className={`px-4 py-2 border rounded ${
                    size === s
                      ? "bg-black text-white border-black"
                      : "border-gray-300"
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          {/* QUANTITY */}
          <div className="mb-8">
            <p className="font-medium mb-2">Quantity</p>
            <div className="flex items-center gap-4">
              <button
                onClick={() => setQty(Math.max(1, qty - 1))}
                className="px-3 py-1 border"
              >
                −
              </button>
              <span>{qty}</span>
              <button
                onClick={() => setQty(qty + 1)}
                className="px-3 py-1 border"
              >
                +
              </button>
            </div>
          </div>

          {/* ACTIONS */}
          <div className="flex items-center gap-5">
            <button
              disabled={!size}
              onClick={() => dispatch(addToCart(payload))}
              className={`px-8 py-3 rounded ${
                size
                  ? "bg-black text-white hover:bg-gray-800"
                  : "bg-gray-300 text-gray-600 cursor-not-allowed"
              }`}
            >
              Add to Cart
            </button>

            <button
              onClick={() =>
                isFavourite
                  ? dispatch(removeFromFavorites(product.id))
                  : dispatch(addToFavorites(payload))
              }
              className="w-12 h-12 rounded-full border flex items-center justify-center"
            >
              <Heart
                size={22}
                className={
                  isFavourite
                    ? "fill-red-500 text-red-500"
                    : "text-gray-600"
                }
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
