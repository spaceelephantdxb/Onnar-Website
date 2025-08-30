import React, { useEffect, useRef } from "react";

const Testimonial = () => {
  const carouselRef = useRef(null);
  const trackRef = useRef(null);

  useEffect(() => {
    const carousel = carouselRef.current;
    const track = trackRef.current;
    if (!carousel || !track) return;

    const originalNodes = Array.from(carousel.children);
    const originalCount = originalNodes.length;

    // Clear any existing cloned nodes
    while (carousel.children.length > originalCount) {
      carousel.removeChild(carousel.lastChild);
    }

    // Clone nodes for infinite scroll
    originalNodes.forEach((node) => {
      carousel.appendChild(node.cloneNode(true));
    });

    let animId = null;
    let lastTimestamp = null;
    let x = 0;
    const pxPerMs = window.innerWidth < 768 ? 0.07 : 0.04;

    carousel.style.willChange = "transform";

    const getResetThreshold = () => {
      // Calculate the width of original testimonials only
      const firstChild = carousel.firstElementChild;
      if (!firstChild) return 0;
      
      const cardWidth = firstChild.offsetWidth;
      const gap = 24; // 6 * 4px (gap-6 in Tailwind)
      return originalCount * (cardWidth + gap);
    };

    const animate = (timestamp) => {
      if (!lastTimestamp) lastTimestamp = timestamp;
      const delta = timestamp - lastTimestamp;
      lastTimestamp = timestamp;

      x -= delta * pxPerMs;

      const resetThreshold = getResetThreshold();
      
      // Reset position when we've moved one full set width
      if (Math.abs(x) >= resetThreshold) {
        // Smooth reset without visible jump
        x = x + resetThreshold;
      }

      carousel.style.transform = `translateX(${x}px)`;
      animId = requestAnimationFrame(animate);
    };

    // Start animation
    animId = requestAnimationFrame(animate);

    const pause = () => {
      if (animId) {
        cancelAnimationFrame(animId);
        animId = null;
        lastTimestamp = null;
      }
    };

    const resume = () => {
      if (!animId) {
        lastTimestamp = null;
        animId = requestAnimationFrame(animate);
      }
    };

    // Event listeners for pause/resume
    track.addEventListener("mouseenter", pause);
    track.addEventListener("mouseleave", resume);
    track.addEventListener("focusin", pause);
    track.addEventListener("focusout", resume);

    // Handle window resize
    let resizeTimer = null;
    const handleResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        // Pause animation during resize
        if (animId) {
          cancelAnimationFrame(animId);
          animId = null;
        }

        // Clear cloned nodes
        while (carousel.children.length > originalCount) {
          carousel.removeChild(carousel.lastChild);
        }

        // Re-clone nodes
        originalNodes.forEach((node) => {
          carousel.appendChild(node.cloneNode(true));
        });

        // Reset position more carefully
        const resetThreshold = getResetThreshold();
        if (resetThreshold > 0) {
          // Normalize x position within bounds
          x = ((x % resetThreshold) + resetThreshold) % resetThreshold;
          // Ensure x is negative (moving left)
          if (x > 0) x -= resetThreshold;
        }

        carousel.style.transform = `translateX(${x}px)`;

        // Resume animation
        lastTimestamp = null;
        animId = requestAnimationFrame(animate);
      }, 150);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      if (animId) cancelAnimationFrame(animId);
      track.removeEventListener("mouseenter", pause);
      track.removeEventListener("mouseleave", resume);
      track.removeEventListener("focusin", pause);
      track.removeEventListener("focusout", resume);
      window.removeEventListener("resize", handleResize);
      clearTimeout(resizeTimer);
      carousel.style.willChange = "auto";
    };
  }, []);

  return (
    <section className="py-16 bg-white relative overflow-hidden">
      <h2 className="text-5xl text-[#46171A] font-bold text-center mb-8 relative z-10 font-wa-flat">
        Client Testimonials
      </h2>

      <div
        ref={trackRef}
        className="max-w-[100%] md:max-w-[80%] mx-auto relative px-4 overflow-hidden"
        tabIndex={0}
      >
        {/* Faded overlays on both sides */}
        <div className="pointer-events-none absolute top-0 left-0 h-full w-16 bg-gradient-to-r from-white to-transparent z-20"></div>
        <div className="pointer-events-none absolute top-0 right-0 h-full w-16 bg-gradient-to-l from-white to-transparent z-20"></div>

        <div ref={carouselRef} className="flex gap-6 w-max">
          {testimonialsData.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

const TestimonialCard = ({ rating, text, name, title }) => (
  <div
    className="w-[300px] md:w-[450px] flex-shrink-0 mt-4 mb-4 
    bg-[#d6bfa4] text-black rounded-2xl p-6 md:p-8 
    shadow-lg border border-[rgba(226,205,179,0.15)] 
    transition-all duration-300 
    hover:scale-[1.02] hover:bg-[#46171A] hover:text-white cursor-pointer"
  >
    <div className="flex justify-start gap-1 mb-5 text-xl">
      {"★".repeat(rating)}
    </div>
    <p className="text-sm md:text-base italic leading-relaxed mb-6 relative">
      {text}
    </p>
    <div className="pt-5 border-t border-[rgba(226,205,179,0.2)]">
      <h3 className="text-base md:text-lg font-semibold mb-2">{name}</h3>
      <p className="text-xs md:text-sm">{title}</p>
    </div>
  </div>
);

const testimonialsData = [
  {
    rating: 5,
    text: "Ulu Amir Group transformed our hospitality experience in Bali. Their team's expertise in blending Arabic and Balinese culture created something truly unique.",
    name: "Ahmed Khalifa",
    title: "CEO, TechSolutions UAE",
  },
  {
    rating: 5,
    text: "The strategic approach to our restaurant launch helped us establish quickly in the competitive Uluwatu market. Highly recommend their services.",
    name: "Sarah Al-Mansoori",
    title: "CFO, Gulf Enterprises",
  },
  {
    rating: 5,
    text: "We've been working with Ulu Amir for 2 years now. Flawless execution every time with clear communication throughout the process.",
    name: "Raj Patel",
    title: "Director, TradeLinks FZE",
  },
  {
    rating: 5,
    text: "Their understanding of luxury real estate in Bali helped us avoid potential investment pitfalls. Exceptional market knowledge.",
    name: "Fatima Al-Qassimi",
    title: "Founder, Pearl Consulting",
  },
  {
    rating: 5,
    text: "Outstanding service quality and attention to detail. Their team made complex business matters simple and understandable.",
    name: "Mohammad Al-Rashid",
    title: "Managing Partner, Emirates Trade Hub",
  },
];

export default Testimonial;