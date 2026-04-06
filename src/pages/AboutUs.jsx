import React from "react";
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";
import SocialIcons from "../components/ui/SocialIcons";

const values = [
  {
    title: "Authenticity",
    desc: "Every dish we serve is rooted in traditional Arabic culinary heritage, crafted with original spices and time-honoured techniques.",
  },
  {
    title: "Excellence",
    desc: "From the first greeting to the last bite, we hold ourselves to the highest standards of hospitality and quality.",
  },
  {
    title: "Cultural Harmony",
    desc: "Nestled in Uluwatu, Bali, we celebrate the beautiful meeting point of Arab warmth and Indonesian spirit.",
  },
  {
    title: "Community",
    desc: "On Nar is more than a restaurant — it is a gathering place where locals, travellers, and food lovers become family.",
  },
];

const team = [
  {
    name: "Amir Hassan Al Ali",
    role: "Founder & CEO",
    img: "/founder.png",
    bio: "Visionary entrepreneur with roots in the Gulf and a deep love for Bali, Amir founded Ulu Amir Group to bridge cultures through exceptional hospitality.",
  },
];

const AboutUs = () => {
  return (
    <div className="bg-[#ECE7DA] min-h-screen">
      <Navbar />

      {/* ── Hero ── */}
      <section className="relative w-full h-[55vh] md:h-[65vh] overflow-hidden flex items-center justify-center">
        <img
          src="/hero_updated.png"
          alt="On Nar restaurant interior"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-[#46171A]/60" />
        <div className="relative z-10 text-center px-4">
          <p className="inter text-[#EED9CC] tracking-[0.3em] text-sm uppercase mb-3">
            Our Story
          </p>
          <h1 className="font-wa-flat text-5xl md:text-7xl text-white leading-tight">
            About On Nar
          </h1>
        </div>
      </section>

      {/* ── Who We Are ── */}
      <section className="max-w-5xl mx-auto px-6 py-20 text-center">
        <h2 className="font-wa-flat text-4xl md:text-5xl text-[#46171A] mb-6">
          Who We Are
        </h2>
        <div className="w-16 h-[2px] bg-[#F15A24] mx-auto mb-8" />
        <p className="inter text-[#46171A] text-base md:text-lg leading-relaxed max-w-3xl mx-auto">
          On Nar is a distinctive Arabic restaurant bringing authentic Middle
          Eastern flavours to the heart of Bali. Led by a seasoned Arabic chef,
          we offer a rich culinary experience that reflects the warmth and
          hospitality of traditional Arab culture. From fire-grilled shawarma to
          generous mezze platters, every dish is crafted with original spices,
          slow-cooked techniques, and deep respect for heritage. Set in a
          stylish, welcoming space in Uluwatu, On Nar is where locals,
          travellers, and food lovers come together. It's not just a place to
          eat — it's where flavour, fire, and fellowship meet.
        </p>
      </section>

      {/* ── Mission & Vision ── */}
      <section className="bg-[#46171A] py-20 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
          <div className="text-center md:text-left">
            <h3 className="font-wa-flat text-3xl md:text-4xl text-[#EED9CC] mb-4">
              Our Mission
            </h3>
            <div className="w-12 h-[2px] bg-[#F15A24] mb-6 mx-auto md:mx-0" />
            <p className="inter text-[#EDE9DC] text-base leading-relaxed">
              To craft businesses that reflect excellence, elevate local
              identity, and resonate with global standards — starting from
              Uluwatu and reaching the world.
            </p>
          </div>
          <div className="text-center md:text-left">
            <h3 className="font-wa-flat text-3xl md:text-4xl text-[#EED9CC] mb-4">
              Our Vision
            </h3>
            <div className="w-12 h-[2px] bg-[#F15A24] mb-6 mx-auto md:mx-0" />
            <p className="inter text-[#EDE9DC] text-base leading-relaxed">
              To become the most beloved Arabic dining destination in Southeast
              Asia — a place synonymous with authentic flavour, genuine
              hospitality, and cultural pride.
            </p>
          </div>
        </div>
      </section>

      {/* ── Core Values ── */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="font-wa-flat text-4xl md:text-5xl text-[#46171A] text-center mb-4">
          Our Values
        </h2>
        <div className="w-16 h-[2px] bg-[#F15A24] mx-auto mb-12" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map(({ title, desc }) => (
            <div
              key={title}
              className="bg-white rounded-2xl p-8 shadow-md border border-[#EED9CC]
                         hover:bg-[#46171A] hover:text-white transition-colors duration-300 group"
            >
              <h4 className="font-wa-flat text-2xl text-[#46171A] group-hover:text-[#EED9CC] mb-3 transition-colors duration-300">
                {title}
              </h4>
              <p className="inter text-sm leading-relaxed text-[#46171A]/80 group-hover:text-[#EDE9DC] transition-colors duration-300">
                {desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Founder's Message ── */}
      <section className="bg-[#EDE9DC] py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-wa-flat text-4xl md:text-5xl text-[#46171A] text-center mb-4">
            Message from The Founder
          </h2>
          <div className="w-16 h-[2px] bg-[#F15A24] mx-auto mb-14" />

          {team.map(({ name, role, img, bio }) => (
            <div
              key={name}
              className="flex flex-col md:flex-row items-center gap-10 md:gap-16"
            >
              {/* Photo */}
              <div className="relative flex-shrink-0">
                <div className="absolute -top-3 -left-3 w-full h-full rounded-2xl border-2 border-[#46171A]/30" />
                <img
                  src={img}
                  alt={name}
                  loading="lazy"
                  className="relative w-56 h-72 md:w-64 md:h-80 object-cover rounded-2xl shadow-xl"
                />
              </div>

              {/* Text */}
              <div className="text-center md:text-left max-w-xl">
                <blockquote className="inter text-base md:text-lg text-[#46171A] leading-relaxed mb-6 italic">
                  "At Ulu Amir Group, we believe every venture is an extension
                  of our identity and must reflect excellence and cultural
                  vision. From Uluwatu we begin, to the world we aspire."
                </blockquote>
                <p className="inter text-[#46171A]/80 text-sm leading-relaxed mb-6">
                  {bio}
                </p>
                <div className="border-t border-[#46171A]/20 pt-4">
                  <p className="inter font-semibold text-lg text-[#46171A]">
                    {name}
                  </p>
                  <p className="inter text-[#46171A]/70 text-sm">{role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
      <SocialIcons />
    </div>
  );
};

export default AboutUs;
