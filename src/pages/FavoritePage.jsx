import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Heart } from "lucide-react";
import { removeFromFavorites } from "../store/favoritesSlice";

const FavoritePage = () => {
  const dispatch = useDispatch();
  const favourites = useSelector((state) => state.favorites.items);

  if (favourites.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        No favourites yet ❤️
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-6 py-10">
      <h2 className="text-2xl font-semibold mb-6">
        Your Favourites
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {favourites.map((item) => (
          <div key={item.id} className="relative border p-3">

            {/* ✅ IMAGE FIX */}
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-72 object-cover"
            />

            {/* ❤️ REMOVE */}
            <button
              onClick={() => dispatch(removeFromFavorites(item.id))}
              className="absolute top-2 right-2 bg-white p-1 rounded-full shadow"
            >
              <Heart className="text-red-500 fill-red-500" size={16} />
            </button>

            <p className="mt-2 text-sm">{item.name}</p>
            <p className="text-sm font-medium">₹{item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FavoritePage;
