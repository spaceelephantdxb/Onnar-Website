import React, { useState } from "react";

const ReservationForm = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",          // email optional
    phone: "",
    date: "",
    guests: "1",
    requests: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // WhatsApp number (international format, no symbols)
    const phoneNumber = "+971503668880";

    const message = `Hello! I would like to reserve a table:\n
Name: ${formData.name}\n
${formData.email ? `Email: ${formData.email}\n` : ""}
Phone: ${formData.phone}\n
Date: ${formData.date}\n
Guests: ${formData.guests}\n
Special Requests: ${formData.requests}`;

    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    window.open(url, "_blank");

    onClose();
  };

  return (
    <div
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <div
        className="bg-white shadow-xl rounded-3xl p-8 md:p-12 w-full max-w-2xl relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-600 hover:text-gray-900 font-bold text-2xl cursor-pointer"
        >
          &times;
        </button>

        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#46171A] mb-2">
          Book a Table
        </h2>
        <p className="text-center text-red-900 font-medium mb-6">
          Breakfast time: 8 AM - 11 AM
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              className="flex-1 px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500"
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              className="flex-1 px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500"
              required
            />
          </div>

          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="flex-1 px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500"
              required
            />
            <input
              type="number"
              name="guests"
              min="1"
              value={formData.guests}
              onChange={handleChange}
              placeholder="Number of Guests"
              className="flex-1 px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500"
              required
            />
          </div>

          {/* Now placing optional email field here */}
          <input
            type="email"
            name="email"
            placeholder="Email (optional)"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500"
          />

          <textarea
            name="requests"
            placeholder="Special Requests"
            value={formData.requests}
            onChange={handleChange}
            className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 resize-none"
            rows="4"
          ></textarea>

          <button
            type="submit"
            className="w-full py-3 bg-[#46171A] text-white font-semibold rounded-xl hover:bg-orange-600 transition-colors"
          >
            Reserve Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default ReservationForm;
