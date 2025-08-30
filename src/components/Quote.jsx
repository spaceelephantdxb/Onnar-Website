import React from "react";

const VentureSection = () => {
  return (
    <div className="bg-[#F9F6ED] flex justify-center items-center py-10 px-4">
      <div className="bg-white/60 border border-gray-200 shadow-sm rounded-2xl p-10 flex flex-col md:flex-row items-center gap-6 max-w-5xl w-full">
        {/* Image Placeholder */}
        <div className="w-40 h-40 md:w-50 md:h-40 flex items-center justify-center">
          <img
            className="rounded-2xl w-full h-full object-cover"
            src="logo.jpg"
            alt="Venture Logo"
          />
        </div>

        {/* Text */}
        <div className="text-center md:text-left flex flex-col justify-center">
          <p className="text-[#7B2E1C] text-base md:text-lg leading-relaxed">
            A venture by <span className="font-semibold italic">Ulu Amir Group</span>, Uluwatu,
            Bali. <br />{" "}
            <span className="font-bold inter italic text-xl md:text-2xl">
              Culturally rooted hospitality, crafted to <br className="hidden md:block" /> global standards.
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default VentureSection;
