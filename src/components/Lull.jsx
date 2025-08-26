import React from "react";

const LullPage = () => {
  return (
    <div className="relative w-full h-screen">
      {/* Background Image */}
      <img
        src="/lull.png" // Desktop image
        alt="Hero"
        className="hidden md:block w-full h-full object-cover mx-auto "
      />
      <img
        src="/mobileLull.png" // Mobile image
        alt="Hero"
        className="block md:hidden w-full h-full object-fit"
      />

      {/* Overlay (optional, for better contrast on button/text) */}
      <div className="absolute"></div>

      {/* Button at bottom center */}
      <div className="absolute bottom-30 md:bottom-2 w-full flex justify-center">
        <a href="/" className="bg-[#46171A] text-white px-10 py-3 rounded-lg shadow-lg hover:[#46171A]transition">
          Home
        </a>
      </div>
    </div>
  );
};

export default LullPage;
