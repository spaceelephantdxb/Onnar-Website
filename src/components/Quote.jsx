import React from "react";

const VentureSection = () => {
  return (
    <div className="bg-[#ECE7DA] flex justify-center items-center py-10 px-4">
      <div className="bg-[#46171A] border border-[#EED9CC]/20 shadow-sm rounded-2xl p-10 flex flex-col md:flex-row items-center gap-6 max-w-6xl w-full">
        {/* Image Placeholder */}
        <div className="w-40 h-40 md:w-50 md:h-40 flex items-center justify-center">
          <img
            className="rounded-2xl w-full h-full object-cover"
            src="https://jazmen.vercel.app/images/mainlogo.jpeg"
            alt="Venture Logo"
          />
        </div>

        {/* Text */}
        <div className="text-center md:text-left flex flex-col justify-center">
          <p className="text-[#EED9CC] text-base md:text-lg leading-relaxed">
            A venture by <span className="font-semibold italic text-white">Ulu Amir Group</span>, Uluwatu,
            Bali. <br />{" "}
            <span className="font-bold inter italic text-xl md:text-2xl text-white">
              Culturally rooted hospitality, crafted to <br className="hidden md:block" /> global standards.
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default VentureSection;
