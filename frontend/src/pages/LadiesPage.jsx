import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import ladiesProducts from "../data/ladiesProducts.js";
import { Heart } from "lucide-react";
import { addToCart } from "../store/cartSlice.js";
import { addToWishlist } from "../store/wishlistSlice.js";

const LadiesPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Get wishlist items from Redux
  const wishlistItems = useSelector((state) => state.wishlist.items);

  const isFavourite = (id) => {
    return wishlistItems.some((item) => item.id === id);
  };

  const formatPrice = (amount) => `₹${amount.toFixed(2)}`;

  const handleAddToCart = (e, product) => {
    e.stopPropagation();
    dispatch(addToCart(product));
  };

  const handleAddToFavourite = (e, product) => {
    e.stopPropagation();
    dispatch(addToWishlist(product));
  };

  return (
    <div className="min-h-screen bg-[#fafafa]">

      {/* BANNER */}
      <div className="w-full bg-[#f5f5f5]">
        <div className="max-w-8xl mx-auto px-4 ml-8 mr-8">
          <img
            src="https://i.pinimg.com/736x/a2/f2/4f/a2f24f531c2321bc76def9dfe437d848.jpg"
            alt="Ladies Collection Banner"
            className="w-full h-[350px] md:h-[450px] lg:h-[550px] object-cover rounded-xl shadow-sm mt-3"
          />
        </div>
      </div>

      {/* CONTENT */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        
        <h1 className="text-3xl font-semibold mb-3">Ladies Collection</h1>
        <p className="text-gray-500 mt-2 max-w-xl text-[15px]">
          Explore our latest dresses with premium styles and comfort.
        </p>

        {/* PRODUCT GRID */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mt-5">
          {ladiesProducts.map((product) => {
            
            const fav = isFavourite(product.id); // Check wishlist
            
            return (
              <div
                key={product.id}
                className="group rounded-lg overflow-hidden cursor-pointer"
              >
                {/* IMAGE */}
                <div
                  className="relative w-full h-72 md:h-80 overflow-hidden"
                  onClick={() => navigate(`/product/${product.id}`)}
                  >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition duration-300"
                  />

                  {/* OVERLAY */}
                  <div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-black/85 via-black/30 to-transparent">
                    
                    {/* NAME + PRICE + HEART */}
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-white text-sm font-medium truncate">
                          {product.name}
                        </h3>
                        <p className="text-white text-xs opacity-90">
                          {formatPrice(product.price)}
                        </p>
                      </div>

                      {/* HEART ICON — stays red if favourited */}
                      <button
                        onClick={(e) => handleAddToFavourite(e, product)}
                        className="p-1 rounded-full bg-white/90 hover:bg-white transition"
                      >
                        <Heart
                          size={18}
                          className={
                            fav
                              ? "text-red-500 fill-red-500"
                              : "text-gray-700 hover:text-red-500"
                          }
                        />
                      </button>
                    </div>

                    {/* ADD TO CART */}
                    <button
                      onClick={(e) => handleAddToCart(e, product)}
                      className="mt-2 w-full py-1.5 text-xs md:text-sm bg-white text-gray-900 rounded-md font-medium hover:bg-gray-900 hover:text-white transition"
                    >
                      Add to Cart
                    </button>

                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
      <section className="mt-12 mb-10">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="uppercase text-[19px] font-semibold mb-2">Women's Clothing</h2>
          <p className="text-sm md:text-[14px] leading-relaxed ">
          Refresh your daily rotation with our women’s clothing range. With the freshest styles available all in one place, you can expect everyday basics, like women's tops and skirts, as well as must-have knitwear and cozy loungewear for downtime days. Plans to go out? Our women's dresses line up mini, midi and maxi styles that were made for summer evenings, while our stylish jeans and pants offer something to flatter every silhouette. Solve your wardrobe woes on busy days with cool co-ords, and wrap up to stay warm in our women's jackets and coats when extra layers are required. Finish off your favorite new looks with an array of trendy accessories, and don’t forget to scroll for statement footwear in our women's shoes range. Discover more women’s fashion by scrolling our Conscious collection, which has been crafted with the planet in mind – think sustainably sourced materials, including organic cotton and recycled polyester.
          </p>
        </div>
      </section>
    </div>
  );
};

export default LadiesPage;

