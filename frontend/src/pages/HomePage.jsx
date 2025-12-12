// src/pages/HomePage.jsx
import React from "react";
import { ArrowRight } from "lucide-react";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* HERO BANNER */}
      <section className="w-full bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="mt-4 rounded-xl overflow-hidden">
            <img
              src="https://www.paclights.com/wp-content/uploads/2025/03/image-2203.jpg"
              alt="Cosy winter bedding"
              className="w-full h-[340px] md:h-[460px] lg:h-[540px] object-cover"
            />
          </div>

          {/* HERO TEXT + ARROW */}
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

      {/* 2-COLUMN FEATURE IMAGES */}
      <section className="mt-10">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-4">
          {/* LEFT IMAGE */}
          <div className="relative rounded-xl overflow-hidden">
            <img
            src ="https://i.pinimg.com/1200x/ec/f5/69/ecf5695118c97bc7774561dfec167e4d.jpg"
              alt="Tableware"
              className="w-full h-[260px] md:h-[360px] object-cover"
            />
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
              className="w-full h-[260px] md:h-[360px] object-cover"
            />
            <div className="absolute bottom-4 left-4 text-white text-xs md:text-sm">
              <p className="uppercase font-semibold">Playful Kids Room</p>
              <p className="text-gray-200 mt-1">Soft bedding & décor</p>
            </div>
          </div>
        </div>
      </section>

      {/* "NEW IN" STRIP OF PRODUCTS */}
      <section className="mt-10">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-between mb-4">
            <h2 className="uppercase text-sm md:text-base font-semibold">
              New In
            </h2>
            <button className="inline-flex items-center gap-1 text-xs md:text-sm uppercase hover:underline">
              <span>View all</span>
              <ArrowRight size={16} />
            </button>
          </div>

          {/* Simple image grid to mimic “New In” row */}
          <div className="grid grid-cols-3 md:grid-cols-5 gap-4">
            {[
              "https://i.pinimg.com/1200x/01/ee/ac/01eeac1d314cd5eb4dfaae857d390271.jpg",
             "https://i.pinimg.com/736x/ba/5b/c8/ba5bc82c48e8d073ccc4781de2b158c5.jpg",
             "https://i.pinimg.com/1200x/bf/8d/68/bf8d681b906493c0c1c3ce7938e35d5a.jpg",
             "https://i.pinimg.com/736x/0e/79/81/0e7981ff8cc87eb389506f52ba5abdf4.jpg",
             "https://i.pinimg.com/736x/48/bd/b3/48bdb3d380213d6623f027879b9d9a5b.jpg"
            ].map((src, idx) => (
              <div key={idx} className="flex flex-col items-center gap-2">
                <div className="w-full aspect-[3/4] rounded-xl overflow-hidden bg-gray-50">
                  <img
                    src={src}
                    alt={`New in ${idx + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECOND 2-COLUMN FEATURE LIKE LAST IMAGE */}
      <section className="mt-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="rounded-xl overflow-hidden">
              <img
              src="https://i.pinimg.com/1200x/b2/5a/48/b25a4876507a9cf1babbcc76a057b55f.jpg"
                alt="Glass décor"
                className="w-full h-[260px] md:h-[360px] object-cover"
              />
            </div>
            <div className="rounded-xl overflow-hidden">
              <img
              src="https://i.pinimg.com/1200x/1d/11/5a/1d115aff9f37c9cf36da988c00817fb1.jpg"
                alt="Cushion décor"
                className="w-full h-[260px] md:h-[360px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* HOME DÉCOR TEXT SECTION (like screenshot) */}
      <section className="mt-12 mb-10">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="uppercase text-sm font-semibold mb-2">Home décor</h2>
          <p className="text-sm md:text-[15px] leading-relaxed text-gray-700">
            Level up your interior aesthetics with our home décor range. Whether
            you’ve moved into a new home, or you want to breathe new life into
            your existing living space, our collection has every room in the
            house covered. From cosy bedding and cushions to stylish lighting,
            glassware and decorative pieces, find everything you need to create
            a calming ambience and personal touch in your home.
          </p>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
