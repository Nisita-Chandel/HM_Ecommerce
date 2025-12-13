// src/pages/KidsPage.jsx
import React from "react";
import { Heart } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { addToFavorites } from "../store/favoritesSlice";
import { useDispatch } from "react-redux";



const KidsPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();


  // 🔥 PRODUCTS DATA WITH DETAILS
  const kidsProducts = [
    {
      id: 1,
      img: "https://i.pinimg.com/736x/c2/ae/81/c2ae818c1fe58590b22fe19da359a6c0.jpg",
      price: "Rs. 1,299.00",
      title: "Kids Winter Hoodie",
      description: "Soft cotton winter hoodie with warm inner lining.",
      rating: 4.5,
    },
    {
      id: 2,
      img: "https://i.pinimg.com/1200x/61/de/20/61de20d6abae0249f3513943aeccf060.jpg",
      price: "Rs. 999.00",
      title: "Printed Sweatshirt",
      description: "Comfortable sweatshirt perfect for daily wear.",
      rating: 4.2,
    },
    {
      id: 3,
      img: "https://i.pinimg.com/1200x/9a/16/d6/9a16d6c2d9f2adead65efa085cbc7a1b.jpg",
      price: "Rs. 1,149.00",
      title: "Casual Jacket",
      description: "Stylish jacket suitable for winter outings.",
      rating: 4.6,
    },
    {
      id: 4,
      img: "https://i.pinimg.com/1200x/24/37/7b/24377ba86e87051d331fd922d0352d60.jpg",
      price: "Rs. 1,599.00",
      title: "Denim Jacket",
      description: "Premium denim jacket with modern fit.",
      rating: 4.8,
    },
    {
      id: 5,
      img: "https://i.pinimg.com/736x/a1/63/40/a1634041fe9d1e2692a2cdc15e26d5f0.jpg",
      price: "Rs. 899.00",
      title: "Kids T-Shirt",
      description: "Breathable cotton t-shirt with fun prints.",
      rating: 4.1,
    },
    {
      id: 6,
      img: "https://i.pinimg.com/736x/e8/68/94/e86894b070a6c1b6b51743d0fd1b5299.jpg",
      price: "Rs. 1,249.00",
      title: "Warm Sweater",
      description: "Cozy sweater designed for cold days.",
      rating: 4.4,
    },
    {
      id: 7,
      img: "https://i.pinimg.com/1200x/1e/57/6d/1e576d1503723ef0a1b0e52d38f6dbde.jpg",
      price: "Rs. 1,799.00",
      title: "Party Wear Jacket",
      description: "Stylish party wear jacket for kids.",
      rating: 4.7,
    },
    {
      id: 8,
      img: "https://i.pinimg.com/1200x/6b/67/59/6b6759ba4ca77338163412cf1c87d836.jpg",
      price: "Rs. 1,050.00",
      title: "Everyday Hoodie",
      description: "Lightweight hoodie for everyday comfort.",
      rating: 4.3,
    },
  ];

  return (
    <div className="min-h-screen bg-white">

      {/* 🔥 HERO BANNER */}
      <img
        src="https://i.pinimg.com/1200x/dd/b8/36/ddb836001cc1791ead0fd171ea2ee221.jpg"
        className="w-full h-[500px] md:h-[600px] object-cover"
        alt="Kids Banner"
      />

      {/* 🔥 NEW IN SECTION */}
      <div className="px-4 mt-10">
        <h2 className="text-xl font-semibold mb-4">NEW IN</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {kidsProducts.map((item) => (
            <div key={item.id} className="relative cursor-pointer">

              {/* ❤️ HEART ICON */}
              <button
  onClick={(e) => {
    e.stopPropagation(); // stop image click
    dispatch(addToFavorites(item));
  }}
  className="absolute top-2 right-2 bg-white p-1 rounded-full shadow"
>
  <Heart
    size={18}
    className="text-gray-700 hover:text-red-500"
  />
</button>


              {/* 🖱 IMAGE CLICK → DETAILS */}
              <img
                src={item.img}
                alt={item.title}
                onClick={() =>
                  navigate(`/kids/${item.id}`, { state: item })
                }
                className="w-full h-60 object-cover rounded"
              />

              <p className="mt-2 text-sm font-medium">{item.price}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 🔥 DESCRIPTION */}
      <div className="px-4 mt-14 mb-20 max-w-4xl mx-auto">
        <h2 className="text-lg font-semibold">KIDS' CLOTHING</h2>
        <p className="mt-3 text-sm leading-6 text-gray-700">
          Discover stylish and comfortable kidswear for every season.
          From cozy hoodies to trendy jackets and playful prints,
          our kids’ collection ensures comfort, warmth, and fashion
          for every occasion.
        </p>
      </div>

    </div>
  );
};

export default KidsPage;
