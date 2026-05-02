import React from "react";

const Hero = () => {
  return (
    <section id="hero" className="relative w-full font-wa-flat overflow-hidden scroll-mt-24 pt-14 md:pt-24">
      {/* Background image */}
      <img
        src="/herobg.jpeg"
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-black/0" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />

      <div className="relative grid grid-cols-2">
        {/* Left — Copy */}
        <div className="relative flex flex-col justify-center px-3 py-6 md:px-12 lg:px-20 md:py-16">
          <span className="inline-block w-fit text-white text-[7px] md:text-xs tracking-[0.2em] md:tracking-[0.3em] uppercase border border-white/40 rounded-full px-1.5 md:px-3 py-0.5 md:py-1 mb-2 md:mb-7">
            Lebanese · Uluwatu
          </span>

          <img
            src="/onnar logo.png"
            alt="On Nar"
            className="w-32 md:w-72 lg:w-96 h-auto object-contain"
          />

          <p className="text-white/90 text-[12px] md:text-lg lg:text-xl mt-2 md:mt-7 max-w-md leading-snug md:leading-relaxed">
            Freshly roasted, grilled, and fried selections — made from local ingredients with an authentic Arabic taste. Order to go.
          </p>
        </div>

        {/* Right — spacer to preserve hero height */}
        <div className="relative h-full min-h-[260px] md:min-h-[560px]"></div>
      </div>
    </section>
  );
};

export default Hero;
