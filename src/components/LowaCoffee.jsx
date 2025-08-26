import React from "react";

const HeroSection = () => {
  return (
    <div className="relative w-full h-screen">
      {/* Background Image */}
      <img
        src="/lowacoffee.png" // Desktop image
        alt="Hero"
        className="hidden md:block w-[90%] h-full object-contain mx-auto "
      />
      <img
        src="/mobilecoffee.png" // Mobile image
        alt="Hero"
        className="block md:hidden w-full h-full object-contain"
      />

      {/* Overlay (optional, for better contrast on button/text) */}
      <div className="absolute"></div>

      {/* Button at bottom center */}
      <div className="absolute bottom-50 md:bottom-2 w-full flex justify-center">
        <a href="/" className="bg-[#46171A] text-white px-10 py-3 rounded-lg shadow-lg hover:[#46171A]transition">
          Home
        </a>
      </div>
    </div>
  );
};

export default HeroSection;
