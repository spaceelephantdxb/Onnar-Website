import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";
import SocialIcons from "../components/ui/SocialIcons";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaWhatsapp, FaClock } from "react-icons/fa";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: wire up to email service / backend
    setSubmitted(true);
  };

  return (
    <div className="bg-[#ECE7DA] min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="bg-[#46171A] pt-28 pb-16 px-6 text-center">
        <p className="inter text-[#EED9CC] tracking-[0.3em] text-sm uppercase mb-3">
          Get in Touch
        </p>
        <h1 className="font-wa-flat text-5xl md:text-6xl text-white">
          Contact Us
        </h1>
        <p className="inter text-[#EDE9DC]/70 text-sm mt-4 max-w-md mx-auto">
          We'd love to hear from you — reservations, enquiries, or just a hello.
        </p>
      </section>

      {/* Info + Form */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12">

        {/* Contact Info */}
        <div>
          <h2 className="font-wa-flat text-3xl md:text-4xl text-[#46171A] mb-4">
            Find Us
          </h2>
          <div className="w-10 h-[2px] bg-[#F15A24] mb-8" />

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-11 h-11 rounded-full bg-[#46171A] flex items-center justify-center flex-shrink-0">
                <FaMapMarkerAlt className="text-[#EED9CC] text-base" />
              </div>
              <div>
                <p className="inter font-semibold text-[#46171A] text-sm uppercase tracking-wider mb-1">Address</p>
                <p className="inter text-[#46171A]/80 text-sm leading-relaxed">
                  Uluwatu, Bali – Indonesia
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-11 h-11 rounded-full bg-[#46171A] flex items-center justify-center flex-shrink-0">
                <FaPhone className="text-[#EED9CC] text-base" />
              </div>
              <div>
                <p className="inter font-semibold text-[#46171A] text-sm uppercase tracking-wider mb-1">Phone</p>
                <a href="tel:+628113960630" className="inter text-[#46171A]/80 text-sm block hover:text-[#F15A24] transition-colors">
                  +62 811 30023333
                </a>
                <a href="tel:+971561313137" className="inter text-[#46171A]/80 text-sm block hover:text-[#F15A24] transition-colors">
                  +971 561 313137
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-11 h-11 rounded-full bg-[#46171A] flex items-center justify-center flex-shrink-0">
                <FaEnvelope className="text-[#EED9CC] text-base" />
              </div>
              <div>
                <p className="inter font-semibold text-[#46171A] text-sm uppercase tracking-wider mb-1">Email</p>
                <a href="mailto:office@amiralaligroup.com" className="inter text-[#46171A]/80 text-sm hover:text-[#F15A24] transition-colors">
                  office@amiralaligroup.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-11 h-11 rounded-full bg-[#46171A] flex items-center justify-center flex-shrink-0">
                <FaClock className="text-[#EED9CC] text-base" />
              </div>
              <div>
                <p className="inter font-semibold text-[#46171A] text-sm uppercase tracking-wider mb-1">Hours</p>
                <p className="inter text-[#46171A]/80 text-sm">Monday – Friday</p>
                <p className="inter text-[#46171A]/80 text-sm">Open daily for dine-in</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-11 h-11 rounded-full bg-[#25d366] flex items-center justify-center flex-shrink-0">
                <FaWhatsapp className="text-white text-base" />
              </div>
              <div>
                <p className="inter font-semibold text-[#46171A] text-sm uppercase tracking-wider mb-1">WhatsApp</p>
                <a
                  href="https://wa.me/971561313137"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inter text-[#46171A]/80 text-sm hover:text-[#25d366] transition-colors"
                >
                  Chat with us on WhatsApp
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Form */}
        <div>
          <h2 className="font-wa-flat text-3xl md:text-4xl text-[#46171A] mb-4">
            Send a Message
          </h2>
          <div className="w-10 h-[2px] bg-[#F15A24] mb-8" />

          {submitted ? (
            <div className="bg-white rounded-2xl p-10 shadow-md text-center">
              <div className="w-16 h-16 rounded-full bg-[#46171A] flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-[#EED9CC]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="font-wa-flat text-2xl text-[#46171A] mb-2">Message Sent!</h3>
              <p className="inter text-[#46171A]/70 text-sm mb-6">
                Thank you for reaching out. We'll get back to you within 24 hours.
              </p>
              <button
                onClick={() => { setSubmitted(false); setFormData({ name: "", email: "", phone: "", subject: "", message: "" }); }}
                className="inter text-sm bg-[#46171A] text-white px-6 py-2 rounded-full hover:bg-[#F15A24] transition-colors"
              >
                Send another
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 shadow-md space-y-5">
              <div>
                <label className="inter text-xs font-semibold text-[#46171A] uppercase tracking-wider block mb-1.5">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="inter w-full border border-[#EED9CC] rounded-xl px-4 py-3 text-sm text-[#46171A] outline-none focus:border-[#46171A] transition-colors bg-[#ECE7DA]/30"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="inter text-xs font-semibold text-[#46171A] uppercase tracking-wider block mb-1.5">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className="inter w-full border border-[#EED9CC] rounded-xl px-4 py-3 text-sm text-[#46171A] outline-none focus:border-[#46171A] transition-colors bg-[#ECE7DA]/30"
                  />
                </div>
                <div>
                  <label className="inter text-xs font-semibold text-[#46171A] uppercase tracking-wider block mb-1.5">
                    Phone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+62..."
                    className="inter w-full border border-[#EED9CC] rounded-xl px-4 py-3 text-sm text-[#46171A] outline-none focus:border-[#46171A] transition-colors bg-[#ECE7DA]/30"
                  />
                </div>
              </div>

              <div>
                <label className="inter text-xs font-semibold text-[#46171A] uppercase tracking-wider block mb-1.5">
                  Subject
                </label>
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="inter w-full border border-[#EED9CC] rounded-xl px-4 py-3 text-sm text-[#46171A] outline-none focus:border-[#46171A] transition-colors bg-[#ECE7DA]/30"
                >
                  <option value="">Select a subject</option>
                  <option value="reservation">Reservation Enquiry</option>
                  <option value="catering">Catering / Events</option>
                  <option value="feedback">Feedback</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="inter text-xs font-semibold text-[#46171A] uppercase tracking-wider block mb-1.5">
                  Message *
                </label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="How can we help you?"
                  className="inter w-full border border-[#EED9CC] rounded-xl px-4 py-3 text-sm text-[#46171A] outline-none focus:border-[#46171A] transition-colors bg-[#ECE7DA]/30 resize-none"
                />
              </div>

              <button
                type="submit"
                className="inter w-full bg-[#46171A] text-white font-semibold py-3 rounded-xl hover:bg-[#F15A24] transition-colors duration-300 tracking-wider text-sm"
              >
                SEND MESSAGE
              </button>
            </form>
          )}
        </div>
      </section>

      {/* Google Map — full width */}
      <section className="max-w-6xl mx-auto px-6 pb-16">
        <h2 className="font-wa-flat text-3xl md:text-4xl text-[#46171A] mb-4">
          Our Location
        </h2>
        <div className="w-10 h-[2px] bg-[#F15A24] mb-8" />
        <div className="rounded-2xl overflow-hidden shadow-xl w-full h-[400px] md:h-[500px]">
          <iframe
            title="On Nar Restaurant Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2800!2d115.0849!3d-8.8291!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd22f40f57ee16b%3A0xc8432bf7f6e5754e!2sUluwatu%2C%20Kuta%20Selatan%2C%20Badung%20Regency%2C%20Bali!5e1!3m2!1sen!2sid!4v1700000000000"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>

      <Footer />
      <SocialIcons />
    </div>
  );
};

export default ContactUs;
