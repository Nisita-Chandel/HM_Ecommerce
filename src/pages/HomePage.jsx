import React from "react";
import { ArrowRight, Heart } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { addToFavorites, removeFromFavorites } from "../store/favoritesSlice";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const favourites = useSelector((state) => state.favorites.items);

  const isFavourite = (id) =>
    favourites.some((item) => item.id === id);

  const toggleFavourite = (product) => {
    isFavourite(product.id)
      ? dispatch(removeFromFavorites(product.id))
      : dispatch(addToFavorites(product));
  };

  return (
    <div className="min-h-screen bg-white">

      {/* ================= HERO BANNER ================= */}
      <section className="w-full bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="mt-4 rounded-xl overflow-hidden">
            <img
              src="https://www.paclights.com/wp-content/uploads/2025/03/image-2203.jpg"
              alt="Cosy winter bedding"
              className="w-full h-[340px] md:h-[460px] lg:h-[540px] object-cover"
            />
          </div>
        </div>
      </section>

      {/* ================= FEATURE IMAGES ================= */}
      <section className="mt-10">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-4">

          {/* LEFT FEATURE */}
          <div
            className="relative rounded-xl overflow-hidden group cursor-pointer"
            onClick={() => navigate("/home/home-tableware")}
          >
            <img
              src="https://i.pinimg.com/1200x/ec/f5/69/ecf5695118c97bc7774561dfec167e4d.jpg"
              className="w-full h-[260px] md:h-[360px] object-cover group-hover:scale-105 transition"
            />

            {/* ❤️ HEART */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                toggleFavourite({
                  id: "home-tableware",
                  name: "Minimal Tableware",
                  image:
                    "https://i.pinimg.com/1200x/ec/f5/69/ecf5695118c97bc7774561dfec167e4d.jpg",
                  price: 2499,
                });
              }}
              className="absolute top-3 right-3 bg-white p-1 rounded-full shadow"
            >
              <Heart
                size={16}
                className={
                  isFavourite("home-tableware")
                    ? "fill-red-500 text-red-500"
                    : "text-gray-700"
                }
              />
            </button>
          </div>

          {/* RIGHT FEATURE */}
          <div
            className="relative rounded-xl overflow-hidden group cursor-pointer"
            onClick={() => navigate("/home/home-kids")}
          >
            <img
              src="https://i.pinimg.com/736x/6f/bf/53/6fbf53e976b078c162cccf87c67ece18.jpg"
              className="w-full h-[260px] md:h-[360px] object-cover group-hover:scale-105 transition"
            />

            {/* ❤️ HEART */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                toggleFavourite({
                  id: "home-kids",
                  name: "Kids Room Décor",
                  image:
                    "https://i.pinimg.com/736x/6f/bf/53/6fbf53e976b078c162cccf87c67ece18.jpg",
                  price: 1899,
                });
              }}
              className="absolute top-3 right-3 bg-white p-1 rounded-full shadow"
            >
              <Heart
                size={16}
                className={
                  isFavourite("home-kids")
                    ? "fill-red-500 text-red-500"
                    : "text-gray-700"
                }
              />
            </button>
          </div>
        </div>
      </section>

      {/* ================= NEW IN ================= */}
      <section className="mt-10">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-3 md:grid-cols-5 gap-4">
            {[
              { id: "new-1", image: "https://i.pinimg.com/1200x/01/ee/ac/01eeac1d314cd5eb4dfaae857d390271.jpg" },
              { id: "new-2", image: "https://i.pinimg.com/736x/ba/5b/c8/ba5bc82c48e8d073ccc4781de2b158c5.jpg" },
              { id: "new-3", image: "https://i.pinimg.com/1200x/bf/8d/68/bf8d681b906493c0c1c3ce7938e35d5a.jpg" },
              { id: "new-4", image: "https://i.pinimg.com/736x/0e/79/81/0e7981ff8cc87eb389506f52ba5abdf4.jpg" },
              { id: "new-5", image: "https://i.pinimg.com/736x/48/bd/b3/48bdb3d380213d6623f027879b9d9a5b.jpg" },
            ].map((item) => (
              <div
                key={item.id}
                className="relative group cursor-pointer"
                onClick={() => navigate(`/home/${item.id}`)}
              >
                <img
                  src={item.image}
                  className="w-full h-full object-cover group-hover:scale-105 transition"
                />

                {/* ❤️ HEART */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleFavourite({
                      id: item.id,
                      name: "New Arrival",
                      image: item.image,
                      price: 1499,
                    });
                  }}
                  className="absolute top-2 right-2 bg-white p-1 rounded-full shadow"
                >
                  <Heart
                    size={14}
                    className={
                      isFavourite(item.id)
                        ? "fill-red-500 text-red-500"
                        : "text-gray-700"
                    }
                  />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
