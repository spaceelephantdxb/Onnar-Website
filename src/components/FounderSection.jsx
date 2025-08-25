import React from 'react';
import "../index.css"; // <-- add CSS file with your styles

const FounderSection = () => {
  return (
    <section className="bg-[#EDE9DC] py-16 md:py-24 px-4 md:px-8" id='founder'>
      <div className="max-w-6xl mx-auto">
        {/* Founder Card */}
        <div className="founder-card">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16 w-full">
            
            {/* Photo with Hover Effect */}
            <div className="photo-wrapper">
              <div className="back-plate"></div>
              <div className="photo">
                <img 
                  src="founder.png" 
                  alt="Founder Portrait" 
                  loading="lazy"
                />
              </div>
            </div>

            {/* Text Content */}
            <div className="text-left max-w-xl">
              <h2 className="text-3xl md:text-5xl font-wa-flat tracking-wider font-medium mb-4 text-[#46171a]">
                Message from<br />
                <span className="font-semibold">The Founder</span>
              </h2>
              
              <blockquote className="inter text-sm md:text-lg mb-6 leading-relaxed text-[#46171a]">
                "At Ulu Amir Group, we believe every venture is an extension of our identity and must reflect
                excellence and cultural vision. From Uluwatu we begin, to the world we aspire."
              </blockquote>
              
              <div className="border-t border-[#46171a]/30 pt-4">
                <div className="font-semibold inter text-xl text-[#46171a]">Amir Hassan Al Ali</div>
                <div className="text-[#46171a]/80 inter">Founder & CEO</div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderSection;
