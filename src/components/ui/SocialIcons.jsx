import React from "react";

const SocialIcons = () => {
  return (
    <ul className="fixed bottom-8 right-8 z-[1000] flex-col justify-center items-center gap-2 m-0 p-0 list-none hidden md:flex">
      {/* WhatsApp */}
      <li className="mx-2.5 relative group">
        <a
          data-social="whatsapp"
          aria-label="WhatsApp"
          href="https://wa.me/971561313137"
          target="_blank"
          rel="noopener noreferrer"
          className="relative overflow-hidden flex justify-center items-center w-12 h-12 rounded-full text-gray-600 bg-white transition-all duration-300 ease-in-out no-underline shadow-md hover:shadow-lg hover:-translate-y-1"
        >
          <div className="absolute bottom-0 left-0 w-full h-0 bg-[#25d366] transition-all duration-300 ease-in-out rounded-full group-hover:h-full"></div>
          <i className="fab fa-whatsapp relative z-10 text-xl transition-colors duration-300 ease-in-out group-hover:text-white"></i>
        </a>
        <div className="absolute top-1/2 right-16 -translate-y-1/2 text-white px-2.5 py-1.5 rounded bg-[#25d366] opacity-0 invisible text-sm transition-all duration-300 ease-in-out whitespace-nowrap group-hover:opacity-100 group-hover:visible group-hover:right-[65px]">
          WhatsApp
        </div>
      </li>

      {/* Instagram */}
      <li className="mx-2.5 relative group">
        <a
          data-social="instagram"
          aria-label="Instagram"
          href="https://www.instagram.com/onnar.bali/"
          target="_blank"
          rel="noopener noreferrer"
          className="relative overflow-hidden flex justify-center items-center w-12 h-12 rounded-full text-gray-600 bg-white transition-all duration-300 ease-in-out no-underline shadow-md hover:shadow-lg hover:-translate-y-1"
        >
          <div className="absolute bottom-0 left-0 w-full h-0 bg-gradient-to-r from-[#405de6]  via-[#c135b4]  to-[#fd1f1f] transition-all duration-300 ease-in-out rounded-full group-hover:h-full"></div>
          <i className="fab fa-instagram relative z-10 text-xl transition-colors duration-300 ease-in-out group-hover:text-white"></i>
        </a>
        <div className="absolute top-1/2 right-16 -translate-y-1/2 text-white px-2.5 py-1.5 rounded bg-gradient-to-r from-[#405de6]  via-[#b33ab4]   to-[#fd1f1f] opacity-0 invisible text-sm transition-all duration-300 ease-in-out whitespace-nowrap group-hover:opacity-100 group-hover:visible group-hover:right-[65px]">
          Instagram
        </div>
      </li>

      {/* Facebook */}
      <li className="mx-2.5 relative group">
        <a
          data-social="facebook"
          aria-label="Facebook"
          href="https://www.facebook.com/OnnarBali/"
          target="_blank"
          rel="noopener noreferrer"
          className="relative overflow-hidden flex justify-center items-center w-12 h-12 rounded-full text-gray-600 bg-white transition-all duration-300 ease-in-out no-underline shadow-md hover:shadow-lg hover:-translate-y-1"
        >
          <div className="absolute bottom-0 left-0 w-full h-0 bg-[#1877f2] transition-all duration-300 ease-in-out rounded-full group-hover:h-full"></div>
          <i className="fab fa-facebook-f relative z-10 text-xl transition-colors duration-300 ease-in-out group-hover:text-white"></i>
        </a>
        <div className="absolute top-1/2 right-16 -translate-y-1/2 text-white px-2.5 py-1.5 rounded bg-[#1877f2] opacity-0 invisible text-sm transition-all duration-300 ease-in-out whitespace-nowrap group-hover:opacity-100 group-hover:visible group-hover:right-[65px]">
          Facebook
        </div>
      </li>
    </ul>
  );
};

export default SocialIcons;
