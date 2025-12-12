// src/pages/MenPage.jsx
import React from "react";
import { ArrowRight } from "lucide-react";

const MenPage = () => {
  // simple mock data for "new in" products
  const newInMen = [
    "https://i.pinimg.com/736x/3d/a1/ab/3da1ab45e298f0245306b74c2d259279.jpg",
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* HERO SECTION – full width image like H&M men video frame */}
      <section className="w-full bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="mt-4 rounded-xl overflow-hidden">
            <img
              src="https://i.pinimg.com/1200x/54/9b/19/549b19af70a39d806dcf757279826e80.jpg"
              alt="Men cosy collection"
              className="w-full h-[340px] md:h-[460px] lg:h-[540px] object-cover"
            />
          </div>
        </div>
      </section>

      {/* COSY SEASON – two images with price tags */}
      <section className="mt-8">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-between mb-3">
            <h2 className="uppercase text-sm md:text-base tracking-wide font-semibold">
              Cosy season
            </h2>
            <button className="inline-flex items-center gap-1 text-xs md:text-sm uppercase hover:underline">
              <span>Explore</span>
              <ArrowRight size={16} />
            </button>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {/* LEFT IMAGE */}
            <div className="relative rounded-xl overflow-hidden">
              <img
                src="https://i.pinimg.com/1200x/ab/6e/89/ab6e8923ddce0e79593b1c7c542b6fa5.jpg"
                alt="Striped knit"
                className="w-full h-[320px] md:h-[380px] object-cover"
              />
              <div className="absolute bottom-5 left-6 bg-white px-3 py-[3px] text-[11px] font-semibold tracking-wide">
                Rs. 2,999.00
              </div>
            </div>

            {/* RIGHT IMAGE */}
            <div className="relative rounded-xl overflow-hidden">
              <img
                src="https://i.pinimg.com/1200x/96/7e/86/967e86ba0bf93a9a6b807f58e8056195.jpg"
                alt="Puffer jacket"
                className="w-full h-[320px] md:h-[380px] object-cover"
              />
              <div className="absolute bottom-5 left-6 bg-white px-3 py-[3px] text-[11px] font-semibold tracking-wide">
                Rs. 2,999.00
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NEW IN – grid of men products on white background */}
      <section className="mt-10">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-between mb-4">
            <h2 className="uppercase text-sm md:text-base font-semibold">
              New in
            </h2>
            <button className="inline-flex items-center gap-1 text-xs md:text-sm uppercase hover:underline">
              <span>View all</span>
              <ArrowRight size={16} />
            </button>
          </div>

          <div className="grid grid-cols-3 md:grid-cols-4 gap-6 bg-white">
            {newInMen.map((src, idx) => (
              <div key={idx} className="flex flex-col items-center gap-2">
                <div className="w-full aspect-[3/4] overflow-hidden bg-white">
                  <img
                    src={src}
                    alt={`Men new in ${idx + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* JEANS / JACKETS section */}
      <section className="mt-12">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-4">
          {/* JEANS */}
          <div className="rounded-xl overflow-hidden bg-[#f7f7f7]">
            <img
              src="https://i.pinimg.com/1200x/f5/89/83/f58983d57ee328999761ac3ab746235b.jpg"
              alt="Jeans"
              className="w-full h-[320px] md:h-[360px] object-cover"
            />
            <div className="px-6 py-4">
              <p className="uppercase text-xs tracking-wide">Jeans</p>
              <button className="mt-1 text-xs uppercase hover:underline">
                Explore
              </button>
            </div>
          </div>

          {/* JACKETS */}
          <div className="rounded-xl overflow-hidden bg-[#f7f7f7]">
            <img
              src="https://i.pinimg.com/736x/82/ef/d4/82efd43343fd1ce2966a2a234eac29bd.jpg"
              alt="Jackets"
              className="w-full h-[320px] md:h-[360px] object-cover"
            />
            <div className="px-6 py-4">
              <p className="uppercase text-xs tracking-wide">Jackets</p>
              <button className="mt-1 text-xs uppercase hover:underline">
                Explore
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* TROUSERS / SWEATERS section (below, like screenshot) */}
      <section className="mt-10 mb-14">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-4">
          {/* TROUSERS */}
          <div className="rounded-xl overflow-hidden bg-[#f7f7f7]">
            <img
              src="https://i.pinimg.com/736x/3b/a2/f3/3ba2f39a5c6d0b69d59f17942cf511aa.jpg"
              alt="Trousers"
              className="w-full h-[320px] md:h-[360px] object-cover"
            />
            <div className="px-6 py-4">
              <p className="uppercase text-xs tracking-wide">Trousers</p>
              <button className="mt-1 text-xs uppercase hover:underline">
                Explore
              </button>
            </div>
          </div>

          {/* SWEATERS */}
          <div className="rounded-xl overflow-hidden bg-[#f7f7f7]">
            <img
              src="https://i.pinimg.com/736x/68/72/b6/6872b6eed01722b91f49d8df8a2d5bd6.jpg"
              alt="Sweaters"
              className="w-full h-[320px] md:h-[360px] object-cover"
            />
            <div className="px-6 py-4">
              <p className="uppercase text-xs tracking-wide">Sweaters</p>
              <button className="mt-1 text-xs uppercase hover:underline">
                Explore
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="mt-12 mb-10">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="uppercase text-[19px] font-semibold mb-2">MEN'S Clothing</h2>
          <p className="text-sm md:text-[14px] leading-relaxed ">
          Check out all the freshest styles your closet needs in our men's clothing range. You'll find a roundup of everyday essentials, including tops and T-Shirts, as well as comfy lounge sets and underwear. Formal event coming up? Scroll no further than our men's blazers and suits for the sharpest looks and nail the dress code. When it comes to men's pants, there's chinos, joggers and cargo styles in all the staple colors. dreaming of denim? our men's jeans offer a range of fits to suit your style, including skinny, straight and tapered, to name just a few. Wear yours with a trendy oversized shirt or a classic denim number from our men's shirts edit. and when it comes to chilly weather, our men's jackets and coats have you covered – we've got puffer jackets and trench coats, as well as leather jackets and bomber jackets in year-round colors.
          </p>
        </div>
      </section>
    </div>
  );
};

export default MenPage;
