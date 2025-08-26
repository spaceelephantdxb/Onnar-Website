import React, { useEffect, useRef } from "react";

const Testimonial = () => {
  const carouselRef = useRef(null);
  const trackRef = useRef(null);

  useEffect(() => {
    const carousel = carouselRef.current;
    const track = trackRef.current;
    if (!carousel || !track) return;

    // Save the original nodes (these are the initially rendered testimonials)
    const originalNodes = Array.from(carousel.children);
    const originalCount = originalNodes.length;

    // Remove any previously appended clones (safety)
    while (carousel.children.length > originalCount) {
      carousel.removeChild(carousel.lastChild);
    }

    // Append a clone of the entire set to make seamless loop
    originalNodes.forEach((node) => {
      carousel.appendChild(node.cloneNode(true));
    });

    // Layout / animation variables
    let animId = null;
    let lastTimestamp = null;
    let x = 0; // current translateX in px (negative moves left)
    // px per millisecond (adjust to taste). Example: 0.05 px/ms => 50 px/s
    const pxPerMs = window.innerWidth < 768 ? 0.07 : 0.04;

    // Use will-change for smoother transforms
    carousel.style.willChange = "transform";

    const resetThreshold = () => carousel.scrollWidth / 2; // half the scrollWidth

    const animate = (timestamp) => {
      if (!lastTimestamp) lastTimestamp = timestamp;
      const delta = timestamp - lastTimestamp;
      lastTimestamp = timestamp;

      // move left
      x -= delta * pxPerMs;

      // seamless wrap: when we've moved past half the scroll width, jump forward by half width
      const halfWidth = resetThreshold();
      if (Math.abs(x) >= halfWidth) {
        // add back the halfWidth so visual position is continuous
        x += halfWidth;
      }

      carousel.style.transform = `translateX(${x}px)`;
      animId = requestAnimationFrame(animate);
    };

    // Start animation
    animId = requestAnimationFrame(animate);

    // Pause/resume handlers (preserve x so no jump)
    const pause = () => {
      if (animId) cancelAnimationFrame(animId);
      animId = null;
      lastTimestamp = null; // will be set on resume to current timestamp
    };
    const resume = () => {
      if (!animId) {
        lastTimestamp = null;
        animId = requestAnimationFrame(animate);
      }
    };

    // Hover / focus listeners
    track.addEventListener("mouseenter", pause);
    track.addEventListener("mouseleave", resume);
    track.addEventListener("focusin", pause);
    track.addEventListener("focusout", resume);

    // Handle resize: rebuild clones & recalc
    let resizeTimer = null;
    const handleResize = () => {
      // debounce
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        // stop animation
        if (animId) cancelAnimationFrame(animId);
        animId = null;

        // remove all clones (anything after originalCount)
        while (carousel.children.length > originalCount) {
          carousel.removeChild(carousel.lastChild);
        }

        // re-clone originals
        originalNodes.forEach((node) => {
          carousel.appendChild(node.cloneNode(true));
        });

        // reset transform and x to keep it consistent (don't force jump)
        // keep x within new halfWidth range
        const halfWidth = resetThreshold();
        x = ((x % halfWidth) + halfWidth) % halfWidth; // normalize
        carousel.style.transform = `translateX(${x}px)`;

        // restart animation
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
    };
  }, []);

  return (
    <section className="py-16 bg-white relative overflow-hidden">
      <h2 className="text-5xl text-[#46171A] font-wa-flat font-medium text-center mb-8 relative z-10">
        Client Testimonials
      </h2>
      <div
        ref={trackRef}
        className="max-w-[100%] md:max-w-[75%] mx-auto relative px-4 overflow-hidden"
        tabIndex={0} // allows focusin/focusout for keyboard users
      >
        <div ref={carouselRef} className="flex gap-6 w-max ">
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
    className="w-[250px] md:w-[450px] flex-shrink-0 mt-4 mb-4 bg-[#d6bfa4] text-black rounded-2xl p-6 md:p-8 shadow-lg border border-[rgba(226,205,179,0.15)] transition-all duration-300 hover:scale-[1.02] hover:bg-[#46171A] hover:text-[#fff] cursor-pointer"
    // keep hover styles simple and applied via CSS class
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
