// src/pages/FavouritePage.jsx
import React, { useState } from "react";

const FavouritePage = () => {
  // Dummy favourite products (replace with backend or redux later)
  const [favourites, setFavourites] = useState([
    {
      id: 1,
      name: "Red Dress",
      price: "₹1299",
      image: "https://via.placeholder.com/200x250?text=Red+Dress",
    },
    {
      id: 2,
      name: "White T-Shirt",
      price: "₹499",
      image: "https://via.placeholder.com/200x250?text=White+Tshirt",
    },
  ]);

  return (
    <div className="max-w-5xl mx-auto px-4 mt-6">
      <h1 className="text-xl font-semibold mb-4">Your Favourites ❤️</h1>

      {favourites.length === 0 ? (
        <p className="text-gray-500 mt-4">You have no favourite items yet.</p>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {favourites.map((item) => (
            <div
              key={item.id}
              className="border border-gray-200 rounded-lg p-3 hover:shadow-md transition cursor-pointer"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-48 object-cover rounded-md"
              />
              <h2 className="mt-2 font-medium text-gray-800">{item.name}</h2>
              <p className="text-gray-600">{item.price}</p>

              {/* Remove from favourites button */}
              <button
                onClick={() =>
                  setFavourites((prev) =>
                    prev.filter((p) => p.id !== item.id)
                  )
                }
                className="mt-2 w-full text-sm px-2 py-1 border border-gray-300 rounded-md hover:bg-gray-100"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FavouritePage;
