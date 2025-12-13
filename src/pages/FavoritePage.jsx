import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromFavorites } from "../store/favoritesSlice";
import { Heart } from "lucide-react";
import { useNavigate } from "react-router-dom";

const FavoritePage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const favorites = useSelector((state) => state.favorites.items);

  if (favorites.length === 0) {
    return (
      <div className="p-10 text-center">
        <h2 className="text-xl font-semibold">
          No favourites added ❤️
        </h2>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 mt-10">
      <h1 className="text-2xl font-semibold mb-6">
        Your Favourites
      </h1>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {favorites.map((item) => (
          <div key={item.id} className="relative">

            {/* 🖱 IMAGE → DETAILS */}
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-60 object-cover rounded cursor-pointer"
              onClick={() =>
                navigate("/product-details", { state: item })
              }
            />

            {/* ❤️ REMOVE FROM FAV */}
            <button
              onClick={() =>
                dispatch(removeFromFavorites(item.id))
              }
              className="absolute top-2 right-2 bg-white p-1 rounded-full shadow"
            >
              <Heart
                size={18}
                className="text-red-500 fill-red-500"
              />
            </button>

            {/* INFO */}
            <p className="mt-2 text-sm font-medium">
              {item.title}
            </p>
            <p className="text-sm">
              {item.price}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FavoritePage;
