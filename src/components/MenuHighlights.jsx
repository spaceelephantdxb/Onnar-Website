import React, { useState } from "react";

const BADGES = [
  { title: "Authentic Flavor", desc: "Genuine taste made the way it should be." },
  { title: "Fresh", desc: "Prepared fresh at its finest moment." },
  { title: "On the Go", desc: "Always ready, no waiting." },
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
  const [activeIndex, setActiveIndex] = useState(
    LIST_ITEMS.findIndex((i) => i.name === "Falafel")
  );
  const active = LIST_ITEMS[activeIndex];

  return (
    <section id="menu" className="bg-[#ECE7DA] py-8 md:py-20 px-3 md:px-10 font-wa-flat scroll-mt-24">
      {/* Top badges */}
      <div className="max-w-6xl mx-auto grid grid-cols-3 gap-2 md:gap-10 pb-6 md:pb-16 border-b border-[#46171A]/15">
        {BADGES.map((b) => (
          <div key={b.title} className="text-center group cursor-default flex flex-col items-center">
            <div className="w-4 md:w-8 h-[1.5px] md:h-[2px] bg-[#46171A] mb-1.5 md:mb-3 transition-all duration-300 group-hover:w-6 md:group-hover:w-12" />
            <h4 className="text-[#46171A] font-semibold text-[10px] md:text-lg tracking-wide leading-tight">
              {b.title}
            </h4>
            <p className="text-[#46171A]/70 text-[8px] md:text-sm mt-0.5 md:mt-1 leading-snug md:leading-relaxed">
              {b.desc}
            </p>
          </div>
        ))}
      </div>

      {/* Heading row */}
      <div className="max-w-6xl mx-auto flex flex-row items-end justify-between gap-2 md:gap-3 mt-6 md:mt-16 mb-4 md:mb-10">
        <h2 className="text-2xl md:text-6xl font-bold tracking-normal text-[#46171A]">
          Best Sellers
        </h2>
        <p className="text-[#46171A]/70 text-[9px] md:text-base tracking-wide">
          Build it your way — crafted to your taste with your choice of additions.
        </p>
      </div>

      {/* Three featured cards */}
      <div className="max-w-6xl mx-auto grid grid-cols-3 gap-2 md:gap-6">
        {FEATURED.map((item) => (
          <div
            key={item.name}
            className="group relative overflow-hidden rounded-lg md:rounded-2xl aspect-[3/4] cursor-pointer shadow-[0_14px_28px_rgba(70,23,26,0.4),0_6px_10px_rgba(70,23,26,0.3)] md:shadow-[0_30px_60px_-12px_rgba(70,23,26,0.6),0_18px_30px_-10px_rgba(70,23,26,0.45)] ring-1 ring-[#46171A]/15 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_40px_70px_-12px_rgba(70,23,26,0.7),0_22px_35px_-12px_rgba(70,23,26,0.5)]"
          >
            <img
              src={item.img}
              alt={item.name}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#46171A]/85 via-[#46171A]/20 to-transparent transition-opacity duration-500 group-hover:from-[#46171A]/95" />
            <div className="absolute bottom-0 left-0 right-0 p-2 md:p-6 text-white transform transition-transform duration-500 group-hover:-translate-y-1">
              <h3 className="text-[11px] md:text-2xl font-semibold tracking-wide leading-tight">{item.name}</h3>
              <p className="hidden md:block text-xs md:text-sm text-white/80 mt-1 max-w-xs">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Hover-driven list + image */}
      <div className="max-w-6xl mx-auto mt-5 md:mt-14 grid grid-cols-2 gap-3 md:gap-10 bg-[#ECE7DA] rounded-lg md:rounded-2xl overflow-hidden shadow-[0_10px_30px_rgba(70,23,26,0.2)] md:shadow-[0_25px_60px_-15px_rgba(70,23,26,0.4)] ring-1 ring-[#46171A]/10">
        {/* List */}
        <div className="p-3 md:p-12 flex flex-col justify-center">
          <h3 className="text-[#46171A] text-base md:text-3xl font-bold mb-2 md:mb-8">
            MENU
          </h3>
          <ul className="divide-y divide-[#46171A]/10">
            {LIST_ITEMS.map((item, i) => {
              const isActive = i === activeIndex;
              return (
                <li
                  key={item.name}
                  onMouseEnter={() => setActiveIndex(i)}
                  onClick={() => setActiveIndex(i)}
                  className="group py-1.5 md:py-4 cursor-pointer"
                >
                  <div className="flex items-center justify-between gap-2 md:gap-4">
                    <div className="flex-1">
                      <h4
                        className={`text-[11px] md:text-xl font-semibold tracking-wide transition-colors duration-300 ${isActive ? "text-[#46171A]" : "text-[#46171A]/60 group-hover:text-[#46171A]"
                          }`}
                      >
                        {item.name}
                      </h4>
                      <p
                        className={`text-[8px] md:text-sm mt-0.5 md:mt-1 transition-all duration-500 overflow-hidden leading-snug ${isActive ? "max-h-20 opacity-100 text-[#46171A]/70" : "max-h-0 opacity-0"
                          }`}
                      >
                        {item.desc}
                      </p>
                    </div>
                    <span
                      className={`text-[#46171A] text-xs md:text-base transition-transform duration-300 ${isActive ? "translate-x-1" : "-translate-x-2 opacity-40 group-hover:translate-x-0 group-hover:opacity-100"
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
        <div className="relative min-h-full md:min-h-[560px] overflow-hidden bg-[#ECE7DA]">
          {LIST_ITEMS.map((item, i) => (
            <img
              key={item.name}
              src={item.img}
              alt={item.name}
              className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-out ${i === activeIndex ? "opacity-100 scale-100" : "opacity-0 scale-105"
                }`}
            />
          ))}
          <div className="absolute inset-0 bg-gradient-to-t from-[#46171A]/40 via-transparent to-transparent pointer-events-none" />
          <div className="absolute bottom-2 left-2 md:bottom-6 md:left-6 text-white">
            <p className="text-[8px] md:text-xs uppercase tracking-[0.15em] md:tracking-[0.2em] opacity-80">Now Showing</p>
            <h4 className="text-sm md:text-3xl font-semibold mt-0.5 md:mt-1 leading-tight">{active.name}</h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MenuHighlights;
