// src/pages/KidsPage.jsx
import React from "react";

const KidsPage = () => {
  return (
    <div className="min-h-screen bg-white">

      {/* =========================== */}
      {/* 🔥 TOP HERO VIDEO / IMAGE   */}
      {/* =========================== */}
      <div className="w-full">
        <img
src="https://i.pinimg.com/1200x/dd/b8/36/ddb836001cc1791ead0fd171ea2ee221.jpg"
className="w-full h-[500px] md:h-[600px] object-cover"
          alt="Kids Winter Banner"
        />
      </div>

      {/* =========================== */}
      {/* 🔥 TWO LARGE SIDE-BY-SIDE BANNERS */}
      {/* =========================== */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6 px-4">
        <img
src="https://i.pinimg.com/1200x/4d/e6/98/4de698ed0f4ff9fa5ce513539a9c9705.jpg"
alt="Kids Banner Left"
          className="w-full object-cover"
        />
        <img
src="https://i.pinimg.com/736x/c7/b7/a1/c7b7a13b1dde8382a762aa54cafc0a94.jpg"
alt="Kids Banner Right"
          className="w-full object-cover"
        />
      </div>

      {/* =========================== */}
      {/* 🔥 NEW IN SECTION (PRODUCT GRID) */}
      {/* =========================== */}
      <div className="px-4 mt-10">
  <h2 className="text-xl font-semibold mb-4">NEW IN</h2>

  <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
    {[
      {
        img: "https://i.pinimg.com/736x/c2/ae/81/c2ae818c1fe58590b22fe19da359a6c0.jpg",
        price: "Rs. 1,299.00",
      },
      {
        img: "https://i.pinimg.com/1200x/61/de/20/61de20d6abae0249f3513943aeccf060.jpg",
        price: "Rs. 999.00",
      },
      {
        img: "https://i.pinimg.com/1200x/9a/16/d6/9a16d6c2d9f2adead65efa085cbc7a1b.jpg",
        price: "Rs. 1,149.00",
      },
      {
        img: "https://i.pinimg.com/1200x/24/37/7b/24377ba86e87051d331fd922d0352d60.jpg",
        price: "Rs. 1,599.00",
      },
      {
        img: "https://i.pinimg.com/736x/a1/63/40/a1634041fe9d1e2692a2cdc15e26d5f0.jpg",
        price: "Rs. 899.00",
      },
      {
        img: "https://i.pinimg.com/736x/e8/68/94/e86894b070a6c1b6b51743d0fd1b5299.jpg",
        price: "Rs. 1,249.00",
      },
      {
        img: "https://i.pinimg.com/1200x/1e/57/6d/1e576d1503723ef0a1b0e52d38f6dbde.jpg",
        price: "Rs. 1,799.00",
      },
      {
        img: "https://i.pinimg.com/1200x/6b/67/59/6b6759ba4ca77338163412cf1c87d836.jpg",
        price: "Rs. 1,050.00",
      },
    ].map((item, index) => (
      <div key={index} className="cursor-pointer hover:opacity-90 transition">
        <img
          src={item.img}
          className="w-full h-60 object-cover rounded"
          alt="New product"
        />
        <p className="mt-2 text-sm font-medium">{item.price}</p>
      </div>
    ))}
  </div>
</div>

      {/* =========================== */}
      {/* 🔥 CATEGORY SPLIT BANNERS (JEANS, JACKETS, SWEATERS...) */}
      {/* =========================== */}

      {/* JEANS + JACKETS */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-14 px-4">
        <div>
          <img
src="https://i.pinimg.com/1200x/10/7e/95/107e95258b4f67a64b2cd27cc253d1f7.jpg"
className="w-full object-cover"
            alt="Kids Jeans"
          />
          <h3 className="mt-2 font-semibold">JEANS</h3>
          <button className="underline text-sm mt-1">EXPLORE</button>
        </div>

        <div>
          <img
            src="https://i.pinimg.com/1200x/68/36/02/683602197eeed17ec35b854cde01af70.jpg"
            className="w-full object-cover"
            alt="Kids Jackets"
          />
          <h3 className="mt-2 font-semibold">JACKETS</h3>
          <button className="underline text-sm mt-1">EXPLORE</button>
        </div>
      </div>

      {/* TROUSERS + SWEATERS */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-14 px-4">
        <div>
          <img
            src="https://i.pinimg.com/1200x/f2/1d/3a/f21d3a0a3d45dea9f4def519b31ca3d3.jpg"
            className="w-full object-cover"
            alt="Kids Trousers"
          />
          <h3 className="mt-2 font-semibold">TROUSERS</h3>
          <button className="underline text-sm mt-1">EXPLORE</button>
        </div>

        <div>
          <img
            src="https://i.pinimg.com/736x/68/c4/59/68c4596cda31ac1e3c035376db125994.jpg"
            className="w-full object-cover"
            alt="Kids Sweaters"
          />
          <h3 className="mt-2 font-semibold">SWEATERS</h3>
          <button className="underline text-sm mt-1">EXPLORE</button>
        </div>
      </div>

      {/* =========================== */}
      {/* 🔥 TWO MORE BIG BANNERS */}
      {/* =========================== */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-14 px-4">
        <img
          src="https://i.pinimg.com/736x/e7/b3/63/e7b363198fdd6cc5e82ec1c7d799a37c.jpg"
          className="w-full object-cover"
          alt="Kids Banner"
        />
        <img
          src="https://i.pinimg.com/736x/d0/93/75/d09375626f6db675d439fdee29b10fee.jpg"
          className="w-full object-cover"
          alt="Kids Banner"
        />
      </div>

      {/* =========================== */}
      {/* 🔥 TEXT DESCRIPTION SECTION */}
      {/* =========================== */}
      <div className="px-4 mt-14 mb-20 max-w-4xl mx-auto">
        <h2 className="text-lg font-semibold">KIDS' CLOTHING</h2>
        <p className="mt-3 text-sm leading-6 text-gray-700">
          Refill on their everyday essentials with our kids' clothes.
          You'll find an extensive selection of tops, T-Shirts, jeans
          and adorable seasonal outfits. From winter jackets to cute dresses,
          cozy sweaters and playful prints—your kids will stay stylish
          and comfortable for every occasion.
        </p>
      </div>

    </div>
  );
};

export default KidsPage;
