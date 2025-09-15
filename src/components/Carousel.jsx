import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import img1 from "../assets/sliderImgs/slider1.png";
import img2 from "../assets/sliderImgs/slider2.png";
import img3 from "../assets/sliderImgs/slider3.png";
import img4 from "../assets/sliderImgs/slider4.png";
import img5 from "../assets/sliderImgs/slider5.png";

import Mimg1 from "../assets/sliderImgs/mobileSlider1.png";
import Mimg2 from "../assets/sliderImgs/mobileSlider2.png";
import Mimg3 from "../assets/sliderImgs/mobileSlider3.png";
import Mimg4 from "../assets/sliderImgs/mobileSlider4.png";
import Mimg5 from "../assets/sliderImgs/mobileSlider5.png";

const images = [img1, img2, img3, img4, img5];
const mobileImages = [Mimg1, Mimg2, Mimg3, Mimg4, Mimg5];

const Carousel = () => {
  const [index, setIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Detect screen size
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768); // Mobile breakpoint
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Auto-slide every 3s
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % (isMobile ? mobileImages.length : images.length));
    }, 3000);
    return () => clearInterval(interval);
  }, [isMobile]);

  // Handle drag/swipe
  const handleDragEnd = (e, { offset, velocity }) => {
    const length = isMobile ? mobileImages.length : images.length;
    if (offset.x > 100 || velocity.x > 500) {
      setIndex((prev) => (prev - 1 + length) % length);
    } else if (offset.x < -100 || velocity.x < -500) {
      setIndex((prev) => (prev + 1) % length);
    }
  };

  const currentImages = isMobile ? mobileImages : images;

  return (
    <div
      className="
        relative w-full 
        h-[30vh] sm:h-[40vh] lg:h-[70vh]
        overflow-hidden 
        p-2 sm:p-10 
        bg-[#ECE7DA] cursor-pointer
      "
    >
      <AnimatePresence>
        <motion.img
          key={index}
          src={currentImages[index]}
          alt={`Slide ${index}`}
          className="absolute w-full h-full object-contain"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.6 }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          onDragEnd={handleDragEnd}
        />
      </AnimatePresence>
    </div>
  );
};

export default Carousel;
