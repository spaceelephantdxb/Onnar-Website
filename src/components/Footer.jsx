import React from "react";
import { Link } from "react-router-dom";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
  FaYoutube,
  FaWhatsapp,
} from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import Quote from "./Quote";

const Footer = () => {
  const socialLinks = [
    { icon: FaFacebookF, url: "https://www.facebook.com/OnnarBali/", label: "Facebook" },
    { icon: FaInstagram, url: "https://www.instagram.com/onnar.bali/", label: "Instagram" },
    { icon: FaLinkedinIn, url: "https://www.linkedin.com/company/uluamirgroup", label: "LinkedIn" },
    { icon: FaWhatsapp, url: "https://wa.me/971561313137", label: "WhatsApp" },
    { icon: FaYoutube, url: "https://www.youtube.com/@uluamirgroup", label: "YouTube" },
  ];

  const quickLinks = [
    { name: "FAQs", url: "/contact" },
    { name: "Blogs", url: "/" },
    { name: "About Us", url: "/about" },
    { name: "Contact Us", url: "/contact" },
    { name: "Privacy Policy", url: "/privacy" },
    { name: "Terms & Conditions", url: "/terms" },
  ];

  const contactItems = [
    { icon: FaPhoneAlt, text: "+62 811 30023333 " },
    { icon: FaEnvelope, text: "office@amiralaligroup.com" },
    { icon: FaMapMarkerAlt, text: "Uluwatu, Bali – Indonesia" },
  ];

  return (
    <footer
      id="contantus"
      className="bg-[#46171A] text-[#e6e4d8] pt-8 md:pt-20 pb-5 md:pb-10 px-3 md:px-10 font-wa-flat"
    >
      <div className="max-w-[1300px] mx-auto grid grid-cols-3 gap-3 md:gap-10 justify-items-center">
        {/* Get In Touch */}
        <div className="flex flex-col items-center text-center w-full max-w-sm">
          <h3 className="text-[#d9cfa8] tracking-[0.15em] md:tracking-[0.25em] text-[9px] md:text-lg uppercase mb-2 md:mb-6 leading-tight">
            Visit Our Restaurant
          </h3>
          <a
            href="https://maps.google.com/?q=Uluwatu+Bali"
            target="_blank"
            rel="noopener noreferrer"
            className="group block w-full max-w-[320px] rounded-md md:rounded-xl overflow-hidden shadow-md md:shadow-lg relative transition-transform duration-500 hover:-translate-y-1"
          >
            <img
              src="./onnar-location.png"
              alt="Onnar location map"
              loading="lazy"
              className="w-full h-auto block transition-transform duration-700 group-hover:scale-105"
            />
            <span className="absolute top-1 left-1 md:top-3 md:left-3 bg-white text-[#46171A] text-[7px] md:text-xs font-medium px-1.5 md:px-3 py-0.5 md:py-1.5 rounded md:rounded-md flex items-center gap-0.5 md:gap-1.5 shadow-md">
              Open in Maps <FiExternalLink className="text-[7px] md:text-xs" />
            </span>
          </a>
        </div>

        {/* Socials */}
        <div className="flex flex-col items-center text-center w-full max-w-sm">
          <h3 className="text-[#d9cfa8] tracking-[0.15em] md:tracking-[0.25em] text-[9px] md:text-lg uppercase mb-2 md:mb-6 leading-tight">
            Socials
          </h3>

          <ul className="space-y-1.5 md:space-y-4 mb-3 md:mb-8 inline-block text-left mx-auto">
            {contactItems.map(({ icon: Icon, text }, i) => (
              <li
                key={i}
                className="flex items-center justify-start gap-1.5 md:gap-3 group cursor-default"
              >
                <span className="w-4 h-4 md:w-9 md:h-9 rounded-full bg-[rgba(255,255,255,0.08)] flex items-center justify-center text-[#d9cfa8] transition-all duration-300 group-hover:bg-[#eed9cc] group-hover:text-[#46171A]">
                  <Icon className="text-[7px] md:text-sm" />
                </span>
                <span className="text-[8px] md:text-lg text-[#ede4d4] leading-tight break-all">{text}</span>
              </li>
            ))}
          </ul>

          <div className="flex gap-1 md:gap-3 justify-center flex-wrap">
            {socialLinks.map(({ icon: Icon, url, label }, idx) => (
              <a
                key={idx}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-5 h-5 md:w-11 md:h-11 rounded-full bg-[#d9cfa8] flex items-center justify-center text-[#46171A]
                           transition-all duration-300 hover:bg-white hover:scale-110
                           ring-1 md:ring-2 ring-transparent hover:ring-[#eed9cc]/50"
              >
                <Icon className="text-[8px] md:text-base" />
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col items-center text-center w-full max-w-sm">
          <h3 className="text-[#d9cfa8] tracking-[0.15em] md:tracking-[0.25em] text-[9px] md:text-lg uppercase mb-2 md:mb-6 leading-tight">
            Quick Links
          </h3>
          <ul className="space-y-1 md:space-y-3">
            {quickLinks.map(({ name, url }) => (
              <li key={name}>
                <Link
                  to={url}
                  className="text-[#ede4d4] text-[9px] md:text-lg inline-block transition-all duration-300
                             hover:text-white hover:tracking-wider relative
                             after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:-bottom-0.5 after:w-0
                             after:h-[1px] after:bg-[#d9cfa8] after:transition-all after:duration-300
                             hover:after:w-full"
                >
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="max-w-[1300px] mx-auto mt-5 md:mt-12">
        <Quote />
      </div>

      {/* Bottom bar */}
      <div className="max-w-[1300px] mx-auto mt-5 md:mt-8 pt-3 md:pt-6 border-t border-[#ede4d4]/15 flex flex-row items-center justify-between gap-2 md:gap-3 text-[8px] md:text-sm text-[#ede4d4]/70">
        <p>&copy; {new Date().getFullYear()} Onnar . All rights reserved.</p>
        <p>Uluwatu, Bali</p>
      </div>
    </footer>
  );
};

export default Footer;
