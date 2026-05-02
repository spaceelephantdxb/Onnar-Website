import React from "react";

const VentureSection = () => {
  return (
    <div className="flex justify-center items-center py-2 md:py-4 px-0">
      <div className="bg-[#46171A] border border-[#EED9CC]/20 rounded-xl md:rounded-2xl p-4 md:p-8 flex flex-row items-center gap-3 md:gap-6 max-w-6xl w-full">
        {/* Image Placeholder */}
        <div className="w-20 h-20 md:w-50 md:h-40 flex-shrink-0 flex items-center justify-center">
          <img
            className="rounded-lg md:rounded-2xl w-full h-full object-cover"
            src="https://jazmen.vercel.app/images/mainlogo.jpeg"
            alt="Venture Logo"
          />
        </div>

        {/* Text */}
        <div className="text-left flex flex-col justify-center">
          <p className="text-[#EED9CC] text-[10px] md:text-lg leading-snug md:leading-relaxed">
            A venture by <span className=" italic text-white">Amir al Ali Group</span>, Uluwatu,
            Bali. <br />{" "}
            <span className="font-bold inter italic text-md md:text-2xl text-white">
              Culturally rooted hospitality, crafted to <br className="hidden md:block" /> global standards.
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default VentureSection;
