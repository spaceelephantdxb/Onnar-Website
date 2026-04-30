import React, { useState } from "react";
import ReservationForm from "./ReservationForm";

const Hero = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <section className="relative w-full bg-[#ECE7DA] font-wa-flat overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2 h-screen min-h-[640px]">
        {/* Left — Copy */}
        <div className="relative flex flex-col justify-center px-6 py-10 md:px-12 lg:px-20 md:py-16 order-2 md:order-1">
          <div className="absolute -top-16 -left-16 w-64 h-64 rounded-full border border-[#46171A]/15 pointer-events-none" />
          <div className="absolute bottom-10 left-10 w-2 h-2 rounded-full bg-[#F15A24]/80 pointer-events-none" />

          <span className="inline-block w-fit text-[#46171A] text-[10px] md:text-xs tracking-[0.3em] uppercase border border-[#46171A]/30 rounded-full px-3 py-1 mb-5 md:mb-7">
            Authentic Lebanese · Uluwatu
          </span>

          <h1 className="text-[#46171A] text-4xl sm:text-5xl md:text-6xl 2xl:text-8xl leading-[1.05] font-semibold tracking-normal">
            A Taste of
            <br />
            the Levant
            <br />
            <span className="font-light text-[#46171A]/70">in Bali.</span>
          </h1>

          <p className="text-[#46171A]/80 text-sm md:text-base lg:text-lg mt-5 md:mt-7 max-w-md leading-relaxed">
            Slow-roasted shawarma, charcoal-grilled tawook and stone-baked
            manakeesh — crafted with family recipes and the freshest local
            ingredients. Reserve your table or order ahead for pickup.
          </p>

          {/* CTA */}
          <div className="mt-7 md:mt-9">
            <button
              onClick={() => setShowForm(true)}
              className="bg-[#46171A] w-60 md:w-100 cursor-pointer font-wa-flat tracking-widest text-white hover:text-[#46171A] font-light text-xl lg:text-2xl py-2 md:py-3 px-6 md:px-16 rounded-xl shadow-lg hover:bg-[#eed9cc] focus:bg-[#eed9cc] active:bg-[#eed9cc] transition-colors border border-[#46171A]/20"
            >
              MAKE A RESERVATION
            </button>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap items-center gap-x-5 gap-y-3 mt-8 md:mt-12 text-[#46171A]/75 text-xs md:text-sm tracking-wide">
            <div className="flex items-center gap-2">
              <span className="text-[#46171A] text-base md:text-lg font-semibold">
                1,200+
              </span>
              <span>guest reviews</span>
            </div>
            <span className="w-1 h-1 rounded-full bg-[#46171A]/40" />
            <div className="flex items-center gap-2">
              <span className="text-[#46171A] text-base md:text-lg font-semibold">
                Family
              </span>
              <span>recipes</span>
            </div>
            <span className="w-1 h-1 rounded-full bg-[#46171A]/40" />
            <div className="flex items-center gap-2">
              <span className="text-[#46171A] text-base md:text-lg font-semibold">
                15-min
              </span>
              <span>pickup</span>
            </div>
          </div>
        </div>

        {/* Right — Image */}
        <div className="relative order-1 md:order-2 h-[40vh] md:h-full overflow-hidden">
          <img
            src="./hero_updated.png"
            alt="Hero Desktop"
            className="hidden md:block absolute inset-0 w-full h-full object-cover"
          />
          <img
            src="./MobileHeroz.png"
            alt="Hero Mobile"
            className="block md:hidden absolute inset-0 w-full h-full object-cover"
          />

          <div className="hidden md:block absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-[#ECE7DA] to-transparent pointer-events-none" />
          <div className="md:hidden absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#ECE7DA] to-transparent pointer-events-none" />

          {/* Floating chip */}
          <div className="absolute bottom-5 right-5 md:bottom-8 md:right-8 bg-white/95 backdrop-blur rounded-full px-4 py-2 shadow-xl flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#F15A24] animate-pulse" />
            <span className="text-[#46171A] text-xs md:text-sm font-medium tracking-wide">
              Open today · 8AM – 11PM
            </span>
          </div>
        </div>
      </div>

      {showForm && <ReservationForm onClose={() => setShowForm(false)} />}
    </section>
  );
};

export default Hero;
