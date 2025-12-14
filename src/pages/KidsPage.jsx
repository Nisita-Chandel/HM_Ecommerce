// src/pages/KidsPage.jsx
import React from "react";
import { Heart, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { addToFavorites, removeFromFavorites } from "../store/favoritesSlice";
import { useDispatch, useSelector } from "react-redux";

const KidsPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const favourites = useSelector((state) => state.favorites.items);

  const kidsProducts = [
    {
      id: "kids-1",
      img: "https://i.pinimg.com/1200x/de/4f/34/de4f34e7c7c5c18aa5d741fe6a02d135.jpg",
      price: "Rs. 1,299",
      title: "Kids Winter Hoodie",
    },
    {
      id: "kids-2",
      img: "https://i.pinimg.com/1200x/61/de/20/61de20d6abae0249f3513943aeccf060.jpg",
      price: "Rs. 999",
      title: "Printed Sweatshirt",
    },
    {
      id: "kids-3",
      img: "https://i.pinimg.com/1200x/9a/16/d6/9a16d6c2d9f2adead65efa085cbc7a1b.jpg",
      price: "Rs. 1,149",
      title: "Casual Jacket",
    },
    {
      id: "kids-4",
      img: "https://i.pinimg.com/1200x/24/37/7b/24377ba86e87051d331fd922d0352d60.jpg",
      price: "Rs. 1,599",
      title: "Denim Jacket",
    },
  ];

  const isFavourite = (id) =>
    favourites.some((item) => item.id === id);

  const toggleFavourite = (product) => {
    isFavourite(product.id)
      ? dispatch(removeFromFavorites(product.id))
      : dispatch(addToFavorites(product));
  };

  return (
    <div className="min-h-screen bg-white">

      {/* ================= HERO BANNER (NO HOVER) ================= */}
      <section className="w-full bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="mt-4 rounded-xl overflow-hidden">
            <img
              src="https://i.pinimg.com/1200x/72/b1/e6/72b1e6e16e9a1179a6a5ed3af01ef4a7.jpg"
              alt="Kids Collection"
              className="w-full h-[340px] md:h-[460px] lg:h-[540px] object-cover"
            />
          </div>

          <div className="flex items-center justify-between mt-4 text-xs md:text-sm tracking-wide">
            <div>
              <h2 className="font-semibold uppercase">
                KIDS WINTER COLLECTION
              </h2>
              <p className="text-gray-500 mt-1 uppercase">
                Warm, playful & comfortable
              </p>
            </div>

            <button className="inline-flex items-center gap-1 uppercase hover:underline">
              <span>Explore</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* ================= FEATURE IMAGES ================= */}
      <section className="mt-10">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-4">
          {kidsProducts.slice(0, 2).map((item) => (
            <div
              key={item.id}
              className="relative rounded-xl overflow-hidden group cursor-pointer"
              onClick={() =>
                navigate("/product-details", { state: item })
              }
            >
              <img
                src={item.img}
                className="w-full h-[260px] md:h-[360px] object-cover transition-transform duration-500 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition" />

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  toggleFavourite(item);
                }}
                className="absolute top-3 right-3 bg-white p-1 rounded-full shadow opacity-0 group-hover:opacity-100 transition"
              >
                <Heart
                  size={16}
                  className={
                    isFavourite(item.id)
                      ? "text-red-500 fill-red-500"
                      : "text-gray-700"
                  }
                />
              </button>

              <div className="absolute bottom-4 left-4 text-white text-sm">
                <p className="uppercase font-semibold">{item.title}</p>
                <p className="text-gray-200 mt-1">{item.price}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= NEW IN GRID ================= */}
      <section className="mt-12">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-xl font-semibold mb-4">NEW IN</h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {kidsProducts.map((item) => (
              <div
                key={item.id}
                className="relative group cursor-pointer"
                onClick={() =>
                  navigate("/product-details", { state: item })
                }
              >
                <img
                  src={item.img}
                  className="w-full h-60 object-cover transition-transform duration-500 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition" />

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleFavourite(item);
                  }}
                  className="absolute top-2 right-2 bg-white p-1 rounded-full shadow opacity-0 group-hover:opacity-100 transition"
                >
                  <Heart
                    size={14}
                    className={
                      isFavourite(item.id)
                        ? "text-red-500 fill-red-500"
                        : "text-gray-700"
                    }
                  />
                </button>

                <p className="mt-2 text-sm">{item.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default KidsPage;
