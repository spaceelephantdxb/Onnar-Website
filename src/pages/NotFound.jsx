import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-[#46171A] flex flex-col items-center justify-center px-6 text-center">
      <img src="/Group.png" alt="On Nar logo" className="w-20 h-20 object-contain mb-8 opacity-60" />

      <p className="inter text-[#EED9CC] tracking-[0.3em] text-sm uppercase mb-4">
        Page Not Found
      </p>
      <h1 className="font-wa-flat text-[120px] md:text-[180px] text-white leading-none mb-2">
        404
      </h1>
      <p className="inter text-[#EDE9DC]/70 text-base max-w-sm mb-10">
        Looks like this page wandered off into the desert. Let's get you back to something delicious.
      </p>

      <Link
        to="/"
        className="inter bg-[#EED9CC] text-[#46171A] font-semibold px-8 py-3 rounded-full hover:bg-white transition-colors duration-300 tracking-wider text-sm"
      >
        BACK TO HOME
      </Link>
    </div>
  );
};

export default NotFound;
