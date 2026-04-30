import React, { useEffect, useMemo, useState } from "react";
import { FaStar } from "react-icons/fa";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

const testimonialsData = [
  {
    rating: "4.8",
    text: "Everything tasted fresh and well-balanced. You can really tell care goes into every dish.",
    name: "Jason Miller",
    title: "Local Food Enthusiast",
  },
  {
    rating: "4.9",
    text: "The food was consistent, comforting, and honestly better than expected. A solid spot.",
    name: "Emily Richardson",
    title: "Regular Customer",
  },
  {
    rating: "5.0",
    text: "Authentic flavors that took me right back to Beirut. The shawarma is the best I've had outside the Levant.",
    name: "Ahmed Khalifa",
    title: "Hospitality Consultant",
  },
  {
    rating: "4.9",
    text: "A warm, welcoming space with food that feels like home. Will be back many times over.",
    name: "Sarah Al-Mansoori",
    title: "Travel Writer",
  },
  {
    rating: "5.0",
    text: "Generous portions, beautifully presented, and the staff make every visit feel personal.",
    name: "Raj Patel",
    title: "Food Blogger",
  },
  {
    rating: "4.8",
    text: "From the manakeesh to the kunafa, every bite is crafted with intent. A standout in Uluwatu.",
    name: "Fatima Al-Qassimi",
    title: "Resident",
  },
];

const FOOD_IMAGES = [
  "https://res.cloudinary.com/dop8fg4uo/image/upload/v1775564799/ShawarmaPlate-chicken_cc8o3v.jpg",
  "https://res.cloudinary.com/dop8fg4uo/image/upload/v1775564933/ShawarmaPlate-Beef_sghtjg.jpg",
  "https://res.cloudinary.com/dop8fg4uo/image/upload/v1775569061/Tawook_wo88la.webp",
  "https://res.cloudinary.com/dop8fg4uo/image/upload/v1775569056/Halloumi_Sandwich_thtkxj.jpg",
  "https://res.cloudinary.com/dop8fg4uo/image/upload/v1775569053/Falafel_ajhc7j.jpg",
  "https://res.cloudinary.com/dop8fg4uo/image/upload/v1775569057/easy-french-fries-1_hj0bys.jpg",
];

const Testimonial = () => {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(3);

  useEffect(() => {
    const onResize = () => setVisible(window.innerWidth < 768 ? 1 : 3);
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // Build alternating track: review, image, review, image, ...
  const items = useMemo(() => {
    const arr = [];
    testimonialsData.forEach((t, i) => {
      arr.push({ kind: "review", data: t, key: `r-${i}` });
      arr.push({ kind: "image", src: FOOD_IMAGES[i % FOOD_IMAGES.length], key: `i-${i}` });
    });
    return arr;
  }, []);

  const maxIndex = Math.max(0, items.length - visible);
  const safeIndex = Math.min(index, maxIndex);

  const prev = () => setIndex((i) => Math.max(0, i - 1));
  const next = () => setIndex((i) => Math.min(maxIndex, i + 1));

  const itemWidth = `${100 / visible}%`;
  const translate = `${-(safeIndex * (100 / visible))}%`;

  return (
    <section className="bg-white py-12 md:py-20 px-4 md:px-8 font-wa-flat">
      <div className="max-w-6xl mx-auto bg-[#46171A] rounded-2xl md:rounded-3xl p-6 md:p-12 lg:p-14 relative overflow-hidden">
        {/* Top Row */}
        <div className="flex items-start justify-between gap-4 mb-8 md:mb-10">
          <div>
            <span className="inline-block text-[#EED9CC] text-[10px] md:text-xs tracking-[0.25em] uppercase border border-[#EED9CC]/40 rounded-full px-3 py-1">
              From Our Guests
            </span>
            <h2 className="text-white text-3xl md:text-5xl lg:text-6xl font-semibold mt-4 md:mt-6 leading-tight">
              What People Love About Us
            </h2>
          </div>

          <div className="flex gap-2 md:gap-3 shrink-0 mt-1">
            <button
              onClick={prev}
              disabled={safeIndex === 0}
              aria-label="Previous"
              className="w-9 h-9 md:w-11 md:h-11 rounded-full bg-[#5a2225] hover:bg-[#EED9CC] hover:text-[#46171A] text-white flex items-center justify-center transition-all duration-300 cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-[#5a2225] disabled:hover:text-white"
            >
              <FiArrowLeft className="text-base md:text-lg" />
            </button>
            <button
              onClick={next}
              disabled={safeIndex >= maxIndex}
              aria-label="Next"
              className="w-9 h-9 md:w-11 md:h-11 rounded-full bg-[#5a2225] hover:bg-[#EED9CC] hover:text-[#46171A] text-white flex items-center justify-center transition-all duration-300 cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-[#5a2225] disabled:hover:text-white"
            >
              <FiArrowRight className="text-base md:text-lg" />
            </button>
          </div>
        </div>

        {/* Sliding Track */}
        <div className="overflow-hidden -mx-2 md:-mx-3">
          <div
            className="flex"
            style={{
              transform: `translateX(${translate})`,
              transition: "transform 700ms cubic-bezier(0.22, 1, 0.36, 1)",
            }}
          >
            {items.map((item) => (
              <div
                key={item.key}
                style={{ width: itemWidth }}
                className="flex-shrink-0 px-2 md:px-3"
              >
                {item.kind === "review" ? (
                  <ReviewCard data={item.data} />
                ) : (
                  <ImageCard src={item.src} />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const ReviewCard = ({ data }) => (
  <div className="text-[#EED9CC] flex flex-col justify-between min-h-[260px] md:min-h-[360px] h-full py-2">
    <div>
      <div className="flex items-center gap-2 mb-4 md:mb-6">
        <FaStar className="text-[#F15A24] text-base md:text-lg" />
        <span className="text-white font-medium text-sm md:text-base">
          {data.rating}
        </span>
      </div>
      <p className="text-white/95 text-base md:text-lg leading-relaxed">
        &ldquo;{data.text}&rdquo;
      </p>
    </div>
    <div className="mt-6 md:mt-8 pt-4 border-t border-[#EED9CC]/15">
      <h4 className="text-white text-lg md:text-xl font-semibold">
        {data.name},
      </h4>
      <p className="text-[#EED9CC]/70 text-xs md:text-sm tracking-wide mt-1">
        {data.title}
      </p>
    </div>
  </div>
);

const ImageCard = ({ src }) => (
  <div className="relative rounded-2xl overflow-hidden min-h-[260px] md:min-h-[360px] h-full group">
    <img
      src={src}
      alt="Onnar dish"
      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-[#46171A]/40 via-transparent to-transparent" />
  </div>
);

export default Testimonial;
