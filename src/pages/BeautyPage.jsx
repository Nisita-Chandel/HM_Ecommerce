// import React from "react";
// import { ArrowRight } from "lucide-react";
// import { motion } from "framer-motion";

// export default function BeautyPage() {
//   return (
//     <div className="min-h-screen bg-white text-gray-800">
//       {/* HERO */}
//       <header className="relative">
//         <div className="max-w-6xl mx-auto px-4 py-8">
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 0.6 }}
//             className="rounded-2xl overflow-hidden shadow-lg"
//           >
//             <div className="relative">
//               <img
//               src="https://i.pinimg.com/1200x/24/51/27/2451277bfcba967b2af87eeefa438d19.jpg"
//                 alt="Beauty hero"
//                 className="w-full h-[360px] md:h-[520px] lg:h-[640px] object-cover"
//               />

//               <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

//               <div className="absolute left-6 bottom-8 md:left-12 md:bottom-16 text-white">
//                 <h1 className="text-2xl md:text-4xl lg:text-5xl font-extrabold tracking-tight uppercase">
//                   New Season Beauty
//                 </h1>
//                 <p className="mt-2 text-sm md:text-base text-gray-100/90 uppercase">
//                   Skincare, Makeup & Self-care picks
//                 </p>

//                 <div className="mt-4">
//                   <button className="inline-flex items-center gap-2 rounded-full bg-white/90 text-black px-4 py-2 text-sm md:text-base font-medium shadow hover:scale-105 transform transition">
//                     Shop beauty
//                     <ArrowRight size={16} />
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       </header>

//       {/* FEATURE CARDS */}
//       <section className="max-w-6xl mx-auto px-4 mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
//         {[
//           { title: "Clean Skincare", subtitle: "Gentle & effective", img: "https://i.pinimg.com/1200x/d4/86/ff/d486ff05d54adb869ca17372f4630213.jpg" },
//           { title: "Makeup Essentials", subtitle: "Everyday must-haves", img: "https://i.pinimg.com/736x/fe/9f/c8/fe9fc8a44d69f9b2205605c62d84bc08.jpg" },
//           { title: "Self-care", subtitle: "Rituals for calm", img: "https://i.pinimg.com/1200x/b4/12/38/b41238cf3ab2b56db5dcf919f69b25fa.jpg" },
//         ].map((card, idx) => (
//           <motion.div key={idx} whileHover={{ y: -6 }} className="relative rounded-xl overflow-hidden shadow-md">
//             <img src={card.img} alt={card.title} className="w-full h-[260px] object-cover" />
//             <div className="absolute left-4 bottom-4 text-white">
//               <p className="uppercase font-semibold text-sm md:text-base">{card.title}</p>
//               <p className="text-gray-200 text-xs md:text-sm mt-1">{card.subtitle}</p>
//             </div>
//           </motion.div>
//         ))}
//       </section>

//       {/* NEW IN GRID */}
//       {/* NEW IN GRID */}
// <section className="max-w-6xl mx-auto px-4 mt-10">
//   <div className="flex items-center justify-between mb-4">
//     <h2 className="uppercase text-sm md:text-base font-semibold">New In Beauty</h2>
//     <button className="inline-flex items-center gap-2 text-xs md:text-sm uppercase hover:underline">
//       View all <ArrowRight size={14} />
//     </button>
//   </div>

//   <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
//     {[
//       "https://i.pinimg.com/1200x/fb/b8/b5/fbb8b5d60bdf7a4f0cb4334189737aba.jpg",
//       "https://i.pinimg.com/1200x/da/59/63/da596323ee5e55a9fedd42602e9f1bf6.jpg",
//       "https://i.pinimg.com/1200x/d3/97/b0/d397b03ea83f5f552be770f32b60ea04.jpg",
//       "https://i.pinimg.com/736x/ff/85/24/ff85241f7802574f46a878a95678b80c.jpg",
//       "https://i.pinimg.com/736x/4a/30/c1/4a30c1996fb0f41e2120a551b97eb70d.jpg",
//       "https://i.pinimg.com/736x/92/8a/df/928adf15809b399d9aae90f4c769d970.jpg",
//       "https://i.pinimg.com/736x/7a/b4/b9/7ab4b9bfbe82fa06604633a8694e4b0e.jpg",
//       "https://i.pinimg.com/1200x/ac/11/f4/ac11f4f7ee07bf368c173a62c0898683.jpg",
//       "https://i.pinimg.com/736x/02/21/16/022116ae8c6873785db35ea9cfa29366.jpg",
//       "https://i.pinimg.com/736x/b4/7f/dc/b47fdc6d787cf2535b2abc32913779bd.jpg",
//     ].map((src, i) => (
//       <motion.div
//         key={i}
//         whileHover={{ scale: 1.02 }}
//         className="rounded-xl overflow-hidden bg-gray-50 shadow-sm"
//       >
//         <div className="aspect-[3/4] w-full">
//           <img
//             src={src}
//             alt={`Product ${i + 1}`}
//             className="w-full h-full object-cover"
//           />
//         </div>
//       </motion.div>
//     ))}
//   </div>
// </section>


//       {/* PROMO BANNER */}
//       <section className="max-w-6xl mx-auto px-4 mt-12">
//         <div className="rounded-xl overflow-hidden bg-gradient-to-r from-pink-50 to-yellow-50 p-6 flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0">
//           <div>
//             <h3 className="text-lg md:text-2xl font-semibold">Glow Week — Free samples with every order</h3>
//             <p className="text-sm text-gray-700 mt-1 max-w-xl">Limited time: curated kits and skincare sets to kickstart your routine.</p>
//           </div>

//           <div>
//             <button className="inline-flex items-center gap-2 rounded-full bg-black text-white px-4 py-2 text-sm md:text-base font-medium shadow hover:opacity-90">
//               Explore Kits <ArrowRight size={14} />
//             </button>
//           </div>
//         </div>
//       </section>

//       {/* ABOUT / COPY */}
//       <section className="max-w-6xl mx-auto px-4 mt-12 mb-16">
//         <h3 className="uppercase text-sm font-semibold mb-2">Beauty for you</h3>
//         <p className="text-sm md:text-[15px] leading-relaxed text-gray-700 max-w-3xl">
//           Discover clean, effective and cruelty-free beauty products chosen for every skin type. From daily skincare staples to statement makeup, our beauty edit focuses on quality ingredients and joyful rituals.
//         </p>
//       </section>

//       {/* FOOTER */}
//       <footer className="bg-gray-50 border-t py-8">
//         <div className="max-w-6xl mx-auto px-4 text-center text-sm text-gray-600">
//           © {new Date().getFullYear()} Beauty — Curated with care
//         </div>
//       </footer>
//     </div>
//   );
// }


import React from "react";
import { ArrowRight } from "lucide-react";

export default function BeautyPage() {
  const newInImages = [
    "https://i.pinimg.com/1200x/fb/b8/b5/fbb8b5d60bdf7a4f0cb4334189737aba.jpg",
    "https://i.pinimg.com/1200x/da/59/63/da596323ee5e55a9fedd42602e9f1bf6.jpg",
    "https://i.pinimg.com/1200x/d3/97/b0/d397b03ea83f5f552be770f32b60ea04.jpg",
    "https://i.pinimg.com/736x/ff/85/24/ff85241f7802574f46a878a95678b80c.jpg",
    "https://i.pinimg.com/736x/4a/30/c1/4a30c1996fb0f41e2120a551b97eb70d.jpg",
    "https://i.pinimg.com/736x/92/8a/df/928adf15809b399d9aae90f4c769d970.jpg",
    "https://i.pinimg.com/736x/7a/b4/b9/7ab4b9bfbe82fa06604633a8694e4b0e.jpg",
    "https://i.pinimg.com/1200x/ac/11/f4/ac11f4f7ee07bf368c173a62c0898683.jpg",
    "https://i.pinimg.com/736x/02/21/16/022116ae8c6873785db35ea9cfa29366.jpg",
    "https://i.pinimg.com/736x/b4/7f/dc/b47fdc6d787cf2535b2abc32913779bd.jpg",
  ];

  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* HERO */}
      <header className="relative">
        <div className="max-w-6xl mx-auto px-4 py-8">
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <div className="relative">
              <img
                src="https://i.pinimg.com/1200x/24/51/27/2451277bfcba967b2af87eeefa438d19.jpg"
                alt="Beauty hero"
                className="w-full h-[360px] md:h-[520px] lg:h-[640px] object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

              <div className="absolute left-6 bottom-8 md:left-12 md:bottom-16 text-white">
                <h1 className="text-2xl md:text-4xl lg:text-5xl font-extrabold tracking-tight uppercase">
                  New Season Beauty
                </h1>
                <p className="mt-2 text-sm md:text-base text-gray-100/90 uppercase">
                  Skincare, Makeup & Self-care picks
                </p>

                <div className="mt-4">
                  <button className="inline-flex items-center gap-2 rounded-full bg-white/90 text-black px-4 py-2 text-sm md:text-base font-medium shadow hover:scale-105 transform transition">
                    Shop beauty
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* FEATURE CARDS */}
      <section className="max-w-6xl mx-auto px-4 mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          {
            title: "Clean Skincare",
            subtitle: "Gentle & effective",
            img: "https://i.pinimg.com/1200x/d4/86/ff/d486ff05d54adb869ca17372f4630213.jpg",
          },
          {
            title: "Makeup Essentials",
            subtitle: "Everyday must-haves",
            img: "https://i.pinimg.com/736x/fe/9f/c8/fe9fc8a44d69f9b2205605c62d84bc08.jpg",
          },
          {
            title: "Self-care",
            subtitle: "Rituals for calm",
            img: "https://i.pinimg.com/1200x/b4/12/38/b41238cf3ab2b56db5dcf919f69b25fa.jpg",
          },
        ].map((card, idx) => (
          <div
            key={idx}
            className="relative rounded-xl overflow-hidden shadow-md transform transition hover:-translate-y-2"
          >
            <img src={card.img} alt={card.title} className="w-full h-[260px] object-cover" />
            <div className="absolute left-4 bottom-4 text-white">
              <p className="uppercase font-semibold text-sm md:text-base">{card.title}</p>
              <p className="text-gray-200 text-xs md:text-sm mt-1">{card.subtitle}</p>
            </div>
          </div>
        ))}
      </section>

      {/* NEW IN GRID */}
      <section className="max-w-6xl mx-auto px-4 mt-10">
        <div className="flex items-center justify-between mb-4">
          <h2 className="uppercase text-sm md:text-base font-semibold">New In Beauty</h2>
          <button className="inline-flex items-center gap-2 text-xs md:text-sm uppercase hover:underline">
            View all <ArrowRight size={14} />
          </button>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {newInImages.map((src, i) => (
            <div
              key={i}
              className="rounded-xl overflow-hidden bg-gray-50 shadow-sm transform transition hover:scale-105"
            >
              <div className="aspect-[3/4] w-full">
                <img src={src} alt={`Product ${i + 1}`} className="w-full h-full object-cover" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PROMO BANNER */}
      <section className="max-w-6xl mx-auto px-4 mt-12">
        <div className="rounded-xl overflow-hidden bg-gradient-to-r from-pink-50 to-yellow-50 p-6 flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0">
          <div>
            <h3 className="text-lg md:text-2xl font-semibold">Glow Week — Free samples with every order</h3>
            <p className="text-sm text-gray-700 mt-1 max-w-xl">
              Limited time: curated kits and skincare sets to kickstart your routine.
            </p>
          </div>

          <div>
            <button className="inline-flex items-center gap-2 rounded-full bg-black text-white px-4 py-2 text-sm md:text-base font-medium shadow hover:opacity-90">
              Explore Kits <ArrowRight size={14} />
            </button>
          </div>
        </div>
      </section>

      {/* ABOUT / COPY */}
      <section className="max-w-6xl mx-auto px-4 mt-12 mb-16">
        <h3 className="uppercase text-sm font-semibold mb-2">Beauty for you</h3>
        <p className="text-sm md:text-[15px] leading-relaxed text-gray-700 max-w-3xl">
          Discover clean, effective and cruelty-free beauty products chosen for every skin type. From daily skincare staples to
          statement makeup, our beauty edit focuses on quality ingredients and joyful rituals.
        </p>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-50 border-t py-8">
        <div className="max-w-6xl mx-auto px-4 text-center text-sm text-gray-600">
          © {new Date().getFullYear()} Beauty — Curated with care
        </div>
      </footer>
    </div>
  );
}
