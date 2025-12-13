import React from "react";
import { ArrowRight, Heart } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { addToFavorites, removeFromFavorites } from "../store/favoritesSlice";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const favourites = useSelector((state) => state.favorites.items);
  console.log("FAVS:", favourites);


  const isFavourite = (id) =>
    favourites.some((item) => item.id === id);

  const toggleFavourite = (product) => {
    isFavourite(product.id)
      ? dispatch(removeFromFavorites(product.id))
      : dispatch(addToFavorites(product));
  };

  return (
    <div className="min-h-screen bg-white">

      {/* ================= HERO BANNER (NO HEART, NO CLICK) ================= */}
      <section className="w-full bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="mt-4 rounded-xl overflow-hidden">
            <img
              src="https://www.paclights.com/wp-content/uploads/2025/03/image-2203.jpg"
              alt="Cosy winter bedding"
              className="w-full h-[340px] md:h-[460px] lg:h-[540px] object-cover"
            />
          </div>

          <div className="flex items-center justify-between mt-4 text-xs md:text-sm tracking-wide">
            <div>
              <h2 className="font-semibold uppercase">
                COSY, WINTER BEDDING
              </h2>
              <p className="text-gray-500 mt-1 uppercase">
                Refresh your bedroom
              </p>
            </div>

            <button className="inline-flex items-center gap-1 text-xs md:text-sm uppercase hover:underline">
              <span>Explore</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* ================= FEATURE IMAGES ================= */}
      <section className="mt-10">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-4">

          {/* LEFT IMAGE */}
          <div className="relative rounded-xl overflow-hidden">
            <img
              src="https://i.pinimg.com/1200x/ec/f5/69/ecf5695118c97bc7774561dfec167e4d.jpg"
              alt="Tableware"
              className="w-full h-[260px] md:h-[360px] object-cover cursor-pointer"
              onClick={() =>
                navigate("/product-details", {
                  state: {
                    id: "home-tableware",
                    img: "https://i.pinimg.com/1200x/ec/f5/69/ecf5695118c97bc7774561dfec167e4d.jpg",
                    title: "Minimal Tableware",
                    price: "Rs. 2,499",
                    description: "Elegant tableware for modern dining.",
                    rating: 4.4,
                  },
                })
              }
            />

            <button
              onClick={(e) => {
                e.stopPropagation();
                toggleFavourite({
                  id: "home-tableware",
                  img: "https://i.pinimg.com/1200x/ec/f5/69/ecf5695118c97bc7774561dfec167e4d.jpg",
                  title: "Minimal Tableware",
                  price: "Rs. 2,499",
                  description: "Elegant tableware for modern dining.",
                  rating: 4.4,
                });
              }}
              className="absolute top-3 right-3 bg-white p-1 rounded-full shadow"
            >
              <Heart
                size={16}
                className={
                  isFavourite("home-tableware")
                    ? "text-red-500 fill-red-500"
                    : "text-gray-700"
                }
              />
            </button>

            <div className="absolute bottom-4 left-4 text-white text-xs md:text-sm">
              <p className="uppercase font-semibold">Minimal Tableware</p>
              <p className="text-gray-200 mt-1">Set the mood at dinner</p>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative rounded-xl overflow-hidden">
            <img
              src="https://i.pinimg.com/736x/6f/bf/53/6fbf53e976b078c162cccf87c67ece18.jpg"
              alt="Kids room"
              className="w-full h-[260px] md:h-[360px] object-cover cursor-pointer"
              onClick={() =>
                navigate("/product-details", {
                  state: {
                    id: "home-kids",
                    img: "https://i.pinimg.com/736x/6f/bf/53/6fbf53e976b078c162cccf87c67ece18.jpg",
                    title: "Kids Room Décor",
                    price: "Rs. 1,899",
                    description: "Playful décor for kids’ rooms.",
                    rating: 4.3,
                  },
                })
              }
            />

            <button
              onClick={(e) => {
                e.stopPropagation();
                toggleFavourite({
                  id: "home-kids",
                  img: "https://i.pinimg.com/736x/6f/bf/53/6fbf53e976b078c162cccf87c67ece18.jpg",
                  title: "Kids Room Décor",
                  price: "Rs. 1,899",
                  description: "Playful décor for kids’ rooms.",
                  rating: 4.3,
                });
              }}
              className="absolute top-3 right-3 bg-white p-1 rounded-full shadow"
            >
              <Heart
                size={16}
                className={
                  isFavourite("home-kids")
                    ? "text-red-500 fill-red-500"
                    : "text-gray-700"
                }
              />
            </button>

            <div className="absolute bottom-4 left-4 text-white text-xs md:text-sm">
              <p className="uppercase font-semibold">Playful Kids Room</p>
              <p className="text-gray-200 mt-1">Soft bedding & décor</p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= NEW IN IMAGES ================= */}
      <section className="mt-10">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-3 md:grid-cols-5 gap-4">
            {[
              {
                id: "new-1",
                img: "https://i.pinimg.com/1200x/01/ee/ac/01eeac1d314cd5eb4dfaae857d390271.jpg",
              },
              {
                id: "new-2",
                img: "https://i.pinimg.com/736x/ba/5b/c8/ba5bc82c48e8d073ccc4781de2b158c5.jpg",
              },
              {
                id: "new-3",
                img: "https://i.pinimg.com/1200x/bf/8d/68/bf8d681b906493c0c1c3ce7938e35d5a.jpg",
              },
              {
                id: "new-4",
                img: "https://i.pinimg.com/736x/0e/79/81/0e7981ff8cc87eb389506f52ba5abdf4.jpg",
              },
              {
                id: "new-5",
                img: "https://i.pinimg.com/736x/48/bd/b3/48bdb3d380213d6623f027879b9d9a5b.jpg",
              },
            ].map((item) => (
              <div key={item.id} className="relative">
                <img
                  src={item.img}
                  className="w-full h-full object-cover cursor-pointer"
                  onClick={() =>
                    navigate("/product-details", {
                      state: {
                        id: item.id,
                        img: item.img,
                        title: "New Arrival",
                        price: "Rs. 1,499",
                        description: "Latest home décor arrival.",
                        rating: 4.2,
                      },
                    })
                  }
                />

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleFavourite({
                      id: item.id,
                      img: item.img,
                      title: "New Arrival",
                      price: "Rs. 1,499",
                      description: "Latest home décor arrival.",
                      rating: 4.2,
                    });
                  }}
                  className="absolute top-2 right-2 bg-white p-1 rounded-full shadow"
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
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="mt-12">
  <div className="max-w-6xl mx-auto px-4">
    <div className="grid md:grid-cols-2 gap-4">

      {/* LEFT IMAGE */}
      <div className="relative rounded-xl overflow-hidden">
        <img
          src="https://i.pinimg.com/1200x/b2/5a/48/b25a4876507a9cf1babbcc76a057b55f.jpg"
          alt="Glass décor"
          className="w-full h-[260px] md:h-[360px] object-cover cursor-pointer"
          onClick={() =>
            navigate("/product-details", {
              state: {
                id: "home-glass",
                img: "https://i.pinimg.com/1200x/b2/5a/48/b25a4876507a9cf1babbcc76a057b55f.jpg",
                title: "Glass Décor",
                price: "Rs. 2,299",
                description: "Stylish glass décor pieces for modern interiors.",
                rating: 4.5,
              },
            })
          }
        />

        {/* ❤️ HEART */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            toggleFavourite({
              id: "home-glass",
              img: "https://i.pinimg.com/1200x/b2/5a/48/b25a4876507a9cf1babbcc76a057b55f.jpg",
              title: "Glass Décor",
              price: "Rs. 2,299",
              description: "Stylish glass décor pieces for modern interiors.",
              rating: 4.5,
            });
          }}
          className="absolute top-3 right-3 bg-white p-1 rounded-full shadow"
        >
          <Heart
            size={16}
            className={
              isFavourite("home-glass")
                ? "text-red-500 fill-red-500"
                : "text-gray-700"
            }
          />
        </button>
      </div>

      {/* RIGHT IMAGE */}
      <div className="relative rounded-xl overflow-hidden">
        <img
          src="https://i.pinimg.com/1200x/1d/11/5a/1d115aff9f37c9cf36da988c00817fb1.jpg"
          alt="Cushion décor"
          className="w-full h-[260px] md:h-[360px] object-cover cursor-pointer"
          onClick={() =>
            navigate("/product-details", {
              state: {
                id: "home-cushion",
                img: "https://i.pinimg.com/1200x/1d/11/5a/1d115aff9f37c9cf36da988c00817fb1.jpg",
                title: "Cushion Décor",
                price: "Rs. 1,999",
                description: "Soft and stylish cushions to elevate your home.",
                rating: 4.4,
              },
            })
          }
        />

        {/* ❤️ HEART */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            toggleFavourite({
              id: "home-cushion",
              img: "https://i.pinimg.com/1200x/1d/11/5a/1d115aff9f37c9cf36da988c00817fb1.jpg",
              title: "Cushion Décor",
              price: "Rs. 1,999",
              description: "Soft and stylish cushions to elevate your home.",
              rating: 4.4,
            });
          }}
          className="absolute top-3 right-3 bg-white p-1 rounded-full shadow"
        >
          <Heart
            size={16}
            className={
              isFavourite("home-cushion")
                ? "text-red-500 fill-red-500"
                : "text-gray-700"
            }
          />
        </button>
      </div>

    </div>
  </div>
</section>


    </div>
  );
};

export default HomePage;
