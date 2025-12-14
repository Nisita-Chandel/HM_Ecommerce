// src/pages/LadiesPage.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ArrowRight, Heart } from "lucide-react";
import ladiesProducts from "../data/ladiesProducts.js";
import {
  addToFavorites,
  removeFromFavorites,
} from "../store/favoritesSlice.js";

const LadiesPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const favourites = useSelector((state) => state.favorites.items);

  const isFavourite = (id) =>
    favourites.some((item) => item.id === id);

  const toggleFavourite = (product) => {
    isFavourite(product.id)
      ? dispatch(removeFromFavorites(product.id))
      : dispatch(addToFavorites(product));
  };

  const formatPrice = (amount) => `₹${amount.toFixed(2)}`;

  return (
    <div className="min-h-screen bg-white">

      {/* ================= HERO BANNER (NO HOVER) ================= */}
      <section className="w-full bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="mt-4 rounded-xl overflow-hidden">
            <img
              src="https://i.pinimg.com/1200x/0d/8a/5b/0d8a5b079aa966e9b79768fc0c7219c2.jpg"
              alt="Ladies Collection"
              className="w-full h-[340px] md:h-[460px] lg:h-[540px] object-cover"
            />
          </div>

          <div className="flex items-center justify-between mt-4 text-xs md:text-sm tracking-wide">
            <div>
              <h2 className="font-semibold uppercase">
                WOMEN’S NEW SEASON
              </h2>
              <p className="text-gray-500 mt-1 uppercase">
                Fresh styles & elegant fits
              </p>
            </div>

            <button className="inline-flex items-center gap-1 uppercase hover:underline">
              <span>Explore</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* ================= FEATURE IMAGES (HOVER ADDED) ================= */}
      <section className="mt-10">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-4">

          {/* LEFT FEATURE */}
          <div
            className="relative rounded-xl overflow-hidden cursor-pointer group"
            onClick={() => navigate(`/product/${ladiesProducts[0].id}`)}
          >
            <img
              src={ladiesProducts[0].image}
              className="w-full h-[260px] md:h-[360px] object-cover transition-transform duration-500 group-hover:scale-105"
              alt={ladiesProducts[0].name}
            />
            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition" />
            <div className="absolute bottom-4 left-4 text-white text-sm">
              <p className="uppercase font-semibold">Trending Dresses</p>
              <p className="text-gray-200 mt-1">Elegant silhouettes</p>
            </div>
          </div>

          {/* RIGHT FEATURE */}
          <div
            className="relative rounded-xl overflow-hidden cursor-pointer group"
            onClick={() => navigate(`/product/${ladiesProducts[1].id}`)}
          >
            <img
              src={ladiesProducts[1].image}
              className="w-full h-[260px] md:h-[360px] object-cover transition-transform duration-500 group-hover:scale-105"
              alt={ladiesProducts[1].name}
            />
            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition" />
            <div className="absolute bottom-4 left-4 text-white text-sm">
              <p className="uppercase font-semibold">Party Wear</p>
              <p className="text-gray-200 mt-1">Made to stand out</p>
            </div>
          </div>

        </div>
      </section>

      {/* ================= NEW IN (HOVER ADDED) ================= */}
      <section className="mt-12">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-xl font-semibold mb-4 uppercase">New in</h2>

          <div className="grid grid-cols-3 md:grid-cols-5 gap-4">
            {ladiesProducts.slice(0, 5).map((product) => (
              <div
                key={product.id}
                className="relative cursor-pointer group"
                onClick={() => navigate(`/product/${product.id}`)}
              >
                <img
                  src={product.image}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  alt={product.name}
                />

                {/* subtle overlay */}
                <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition" />

                {/* ❤️ FAVORITE */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleFavourite(product);
                  }}
                  className="absolute top-2 right-2 bg-white p-1 rounded-full shadow opacity-0 group-hover:opacity-100 transition"
                >
                  <Heart
                    size={14}
                    className={
                      isFavourite(product.id)
                        ? "text-red-500 fill-red-500"
                        : "text-gray-700"
                    }
                  />
                </button>

                <p className="mt-2 text-sm">
                  {formatPrice(product.price)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= DESCRIPTION ================= */}
      <section className="mt-14 mb-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="uppercase text-lg font-semibold mb-2">
            WOMEN’S CLOTHING
          </h2>
          <p className="text-sm leading-relaxed text-gray-700">
            Refresh your daily rotation with our women’s clothing range.
            From everyday essentials to elegant dresses, cozy knitwear,
            stylish denim and statement outerwear — discover fashion
            designed for confidence and comfort.
          </p>
        </div>
      </section>

    </div>
  );
};

export default LadiesPage;
