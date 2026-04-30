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
    { name: "Our Venture", url: "/" },
    { name: "Privacy Policy", url: "/privacy" },
    { name: "Terms & Conditions", url: "/terms" },
  ];

  const contactItems = [
    { icon: FaPhoneAlt, text: "+62 811 3960 6303" },
    { icon: FaEnvelope, text: "office@uluamirgroup.com" },
    { icon: FaMapMarkerAlt, text: "Uluwatu, Bali – Indonesia" },
  ];

  return (
    <footer
      id="contantus"
      className="bg-[#46171A] text-[#e6e4d8] pt-16 md:pt-20 pb-10 px-5 md:px-10 font-wa-flat"
    >
      <div className="max-w-[1300px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-10 justify-items-center">
        {/* Get In Touch */}
        <div className="flex flex-col items-center text-center w-full max-w-sm">
          <h3 className="text-[#d9cfa8] tracking-[0.25em] text-base md:text-lg uppercase mb-6">
            Get In Touch With Us
          </h3>
          <a
            href="https://maps.google.com/?q=Uluwatu+Bali"
            target="_blank"
            rel="noopener noreferrer"
            className="group block w-full max-w-[320px] rounded-xl overflow-hidden shadow-lg relative transition-transform duration-500 hover:-translate-y-1"
          >
            <img
              src="./onnar-location.png"
              alt="Onnar location map"
              loading="lazy"
              className="w-full h-auto block transition-transform duration-700 group-hover:scale-105"
            />
            <span className="absolute top-3 left-3 bg-white text-[#46171A] text-xs font-medium px-3 py-1.5 rounded-md flex items-center gap-1.5 shadow-md">
              Open in Maps <FiExternalLink className="text-xs" />
            </span>
          </a>
        </div>

        {/* Socials */}
        <div className="flex flex-col items-center text-center w-full max-w-sm">
          <h3 className="text-[#d9cfa8] tracking-[0.25em] text-base md:text-lg uppercase mb-6">
            Socials
          </h3>

          <ul className="space-y-4 mb-8 w-full max-w-xs">
            {contactItems.map(({ icon: Icon, text }, i) => (
              <li
                key={i}
                className="flex items-center justify-center gap-3 group cursor-default"
              >
                <span className="w-9 h-9 rounded-full bg-[rgba(255,255,255,0.08)] flex items-center justify-center text-[#d9cfa8] transition-all duration-300 group-hover:bg-[#eed9cc] group-hover:text-[#46171A]">
                  <Icon className="text-sm" />
                </span>
                <span className="text-base md:text-lg text-[#ede4d4]">{text}</span>
              </li>
            ))}
          </ul>

          <div className="flex gap-3 justify-center flex-wrap">
            {socialLinks.map(({ icon: Icon, url, label }, idx) => (
              <a
                key={idx}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-11 h-11 rounded-full bg-[#d9cfa8] flex items-center justify-center text-[#46171A]
                           transition-all duration-300 hover:bg-white hover:scale-110
                           ring-2 ring-transparent hover:ring-[#eed9cc]/50"
              >
                <Icon className="text-base" />
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col items-center text-center w-full max-w-sm">
          <h3 className="text-[#d9cfa8] tracking-[0.25em] text-base md:text-lg uppercase mb-6">
            Quick Links
          </h3>
          <ul className="space-y-3">
            {quickLinks.map(({ name, url }) => (
              <li key={name}>
                <Link
                  to={url}
                  className="text-[#ede4d4] text-base md:text-lg inline-block transition-all duration-300
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

      {/* Bottom bar */}
      <div className="max-w-[1300px] mx-auto mt-12 pt-6 border-t border-[#ede4d4]/15 flex flex-col md:flex-row items-center justify-between gap-3 text-sm text-[#ede4d4]/70">
        <p>&copy; {new Date().getFullYear()} Onnar Bali. All rights reserved.</p>
        <p>Crafted with care in Uluwatu, Bali.</p>
      </div>
    </footer>
  );
};

export default Footer;
