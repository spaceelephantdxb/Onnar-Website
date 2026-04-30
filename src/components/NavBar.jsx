import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavClick = () => {
    setIsMenuOpen(false);
  };

  const scrollToId = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const handleSectionClick = (e, id) => {
    e.preventDefault();
    handleNavClick();
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => scrollToId(id), 100);
    } else {
      scrollToId(id);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[1000] h-12 md:h-18 mx-auto w-[95%]
      mt-2 md:mt-5 bg-[#46171A] py-1 md:py-[15px] px-3 md:px-[30px]
      md:rounded-[50px] shadow-md flex items-center transition-[border-radius] duration-300
      ${isMenuOpen ? "rounded-t-[20px] rounded-b-none" : "rounded-[20px]"}`}
    >
      {/* Spinning Logo (left on both mobile and desktop) */}
      <div
        className="w-[60px] h-[60px] md:w-[100px] md:h-[100px] bg-[#46171A]
        cursor-pointer rounded-full flex items-center justify-center
        border-[2px] md:border-[3px] border-[#46171A] shadow-md overflow-hidden
        absolute left-0 spin"
      >
        <img
          src="./Group.png"
          alt="logo"
          className="w-[40%] md:w-[40%] h-[80%]"
        />
      </div>

      {/* Mobile menu toggle button */}
      <button
        className="md:hidden text-white p-2 absolute right-3 top-1/2 -translate-y-1/2"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle menu"
      >
        {isMenuOpen ? (
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        )}
      </button>

      {/* Menu links */}
      <div
        className={`md:flex md:flex-row md:static md:w-auto md:bg-transparent md:rounded-none md:py-0 md:px-0 md:gap-5 md:ml-auto md:max-h-none md:opacity-100 md:overflow-visible md:pointer-events-auto md:translate-y-0 md:shadow-none
          flex flex-col absolute top-full left-0 w-full bg-[#46171A] rounded-b-[20px] px-6 gap-1 overflow-hidden shadow-md
          transition-[max-height,opacity,padding] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]
          ${isMenuOpen
            ? "max-h-[500px] opacity-100 py-4 pointer-events-auto"
            : "max-h-0 opacity-0 py-0 pointer-events-none"}
        `}
      >
        <a
          href="#hero"
          onClick={(e) => handleSectionClick(e, "hero")}
          className={`text-white font-medium text-sm md:text-[16px] py-2 px-3 md:py-[10px] md:px-[15px] rounded-[8px] md:rounded-[4px] hover:bg-[#EED9CC] hover:text-[#46171A] transition-all duration-300 w-full md:w-auto
            ${isMenuOpen ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-2"} md:opacity-100 md:translate-x-0
          `}
          style={{ transitionDelay: isMenuOpen ? "120ms" : "0ms" }}
        >
          Home
        </a>
        <a
          href="#menu"
          onClick={(e) => handleSectionClick(e, "menu")}
          className={`text-white font-medium text-sm md:text-[16px] py-2 px-3 md:py-[10px] md:px-[15px] rounded-[8px] md:rounded-[4px] hover:bg-[#EED9CC] hover:text-[#46171A] transition-all duration-300 w-full md:w-auto
            ${isMenuOpen ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-2"} md:opacity-100 md:translate-x-0
          `}
          style={{ transitionDelay: isMenuOpen ? "200ms" : "0ms" }}
        >
          Menu
        </a>
        <a
          href="#contantus"
          onClick={(e) => handleSectionClick(e, "contantus")}
          className={`text-white font-medium text-sm md:text-[16px] py-2 px-3 md:py-[10px] md:px-[15px] rounded-[8px] md:rounded-[4px] hover:bg-[#EED9CC] hover:text-[#46171A] transition-all duration-300 w-full md:w-auto
            ${isMenuOpen ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-2"} md:opacity-100 md:translate-x-0
          `}
          style={{ transitionDelay: isMenuOpen ? "280ms" : "0ms" }}
        >
          Contact Us
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
