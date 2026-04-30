import React, { useState } from "react";

const BADGES = [
  { title: "Authentic Recipes", desc: "Traditional flavors, slow-cooked the way they were meant to be." },
  { title: "Fresh Daily", desc: "Locally sourced ingredients prepared from scratch each morning." },
  { title: "All-Day Menu", desc: "From breakfast manakeesh to late-night shawarma." },
  { title: "Fast Pickup", desc: "Order ahead and skip the queue in under 15 minutes." },
];

const FEATURED = [
  {
    name: "Chicken Shawarma",
    desc: "Marinated overnight, carved fresh from the spit, wrapped warm.",
    img: "https://res.cloudinary.com/dop8fg4uo/image/upload/v1775564799/ShawarmaPlate-chicken_cc8o3v.jpg",
  },
  {
    name: "Beef Shawarma",
    desc: "Slow-roasted spiced beef with tahini and pickles.",
    img: "https://res.cloudinary.com/dop8fg4uo/image/upload/v1775564933/ShawarmaPlate-Beef_sghtjg.jpg",
  },
  {
    name: "Tawook",
    desc: "Charcoal-grilled chicken skewers with garlic toum.",
    img: "https://res.cloudinary.com/dop8fg4uo/image/upload/v1775569061/Tawook_wo88la.webp",
  },
];

const LIST_ITEMS = [
  {
    name: "Falafel",
    desc: "Crispy chickpea fritters with herbs and sesame.",
    img: "https://res.cloudinary.com/dop8fg4uo/image/upload/v1775569053/Falafel_ajhc7j.jpg",
  },
  {
    name: "Halloumi Sandwich",
    desc: "Grilled halloumi, fresh greens, soft pita.",
    img: "https://res.cloudinary.com/dop8fg4uo/image/upload/v1775569056/Halloumi_Sandwich_thtkxj.jpg",
  },
  {
    name: "Fries",
    desc: "Golden hand-cut fries, lightly salted.",
    img: "https://res.cloudinary.com/dop8fg4uo/image/upload/v1775569057/easy-french-fries-1_hj0bys.jpg",
  },
  {
    name: "Soft Drinks",
    desc: "Freshly squeezed orange and chilled refreshments.",
    img: "https://res.cloudinary.com/dop8fg4uo/image/upload/v1775569083/Orangejuice_z2jwmz.jpg",
  },
];

const MenuHighlights = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = LIST_ITEMS[activeIndex];

  return (
    <section className="bg-[#ECE7DA] py-14 md:py-20 px-5 md:px-10 font-wa-flat">
      {/* Top badges */}
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10 pb-12 md:pb-16 border-b border-[#46171A]/15">
        {BADGES.map((b) => (
          <div key={b.title} className="text-center md:text-left group cursor-default">
            <div className="w-8 h-[2px] bg-[#46171A] mx-auto md:mx-0 mb-3 transition-all duration-300 group-hover:w-12" />
            <h4 className="text-[#46171A] font-semibold text-base md:text-lg tracking-wide">
              {b.title}
            </h4>
            <p className="text-[#46171A]/70 text-xs md:text-sm mt-1 leading-relaxed">
              {b.desc}
            </p>
          </div>
        ))}
      </div>

      {/* Heading row */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-end md:justify-between gap-3 mt-12 md:mt-16 mb-8 md:mb-10">
        <h2 className="text-4xl md:text-6xl font-bold tracking-normal text-[#46171A]">
          Menu Highlights
        </h2>
        <p className="text-[#46171A]/70 text-sm md:text-base tracking-wide">
          Full menu available in-store and online
        </p>
      </div>

      {/* Three featured cards */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
        {FEATURED.map((item) => (
          <div
            key={item.name}
            className="group relative overflow-hidden rounded-2xl aspect-[4/5] md:aspect-[3/4] cursor-pointer shadow-lg"
          >
            <img
              src={item.img}
              alt={item.name}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#46171A]/85 via-[#46171A]/20 to-transparent transition-opacity duration-500 group-hover:from-[#46171A]/95" />
            <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6 text-white transform transition-transform duration-500 group-hover:-translate-y-1">
              <h3 className="text-xl md:text-2xl font-semibold tracking-wide">{item.name}</h3>
              <p className="text-xs md:text-sm text-white/80 mt-1 max-w-xs">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Hover-driven list + image */}
      <div className="max-w-6xl mx-auto mt-10 md:mt-14 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 bg-white rounded-2xl shadow-lg overflow-hidden">
        {/* List */}
        <div className="p-6 md:p-12 flex flex-col justify-center">
          <h3 className="text-[#46171A] text-2xl md:text-3xl font-bold mb-6 md:mb-8">
            More to Try
          </h3>
          <ul className="divide-y divide-[#46171A]/10">
            {LIST_ITEMS.map((item, i) => {
              const isActive = i === activeIndex;
              return (
                <li
                  key={item.name}
                  onMouseEnter={() => setActiveIndex(i)}
                  onClick={() => setActiveIndex(i)}
                  className="group py-4 cursor-pointer"
                >
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex-1">
                      <h4
                        className={`text-lg md:text-xl font-semibold tracking-wide transition-colors duration-300 ${
                          isActive ? "text-[#46171A]" : "text-[#46171A]/60 group-hover:text-[#46171A]"
                        }`}
                      >
                        {item.name}
                      </h4>
                      <p
                        className={`text-xs md:text-sm mt-1 transition-all duration-500 overflow-hidden ${
                          isActive ? "max-h-20 opacity-100 text-[#46171A]/70" : "max-h-0 opacity-0"
                        }`}
                      >
                        {item.desc}
                      </p>
                    </div>
                    <span
                      className={`text-[#46171A] transition-transform duration-300 ${
                        isActive ? "translate-x-1" : "-translate-x-2 opacity-40 group-hover:translate-x-0 group-hover:opacity-100"
                      }`}
                    >
                      &rarr;
                    </span>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Image preview */}
        <div className="relative aspect-[4/3] md:aspect-auto md:min-h-[560px] overflow-hidden bg-[#ECE7DA]">
          {LIST_ITEMS.map((item, i) => (
            <img
              key={item.name}
              src={item.img}
              alt={item.name}
              className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-out ${
                i === activeIndex ? "opacity-100 scale-100" : "opacity-0 scale-105"
              }`}
            />
          ))}
          <div className="absolute inset-0 bg-gradient-to-t from-[#46171A]/40 via-transparent to-transparent pointer-events-none" />
          <div className="absolute bottom-5 left-5 md:bottom-6 md:left-6 text-white">
            <p className="text-xs uppercase tracking-[0.2em] opacity-80">Now Showing</p>
            <h4 className="text-2xl md:text-3xl font-semibold mt-1">{active.name}</h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MenuHighlights;
