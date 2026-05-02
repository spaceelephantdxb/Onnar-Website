import React, { useState } from "react";

const MENU_ITEMS = [
  "Chicken Shawarma",
  "Beef Shawarma",
  "Tawook",
  "Falafel",
  "Halloumi Sandwich",
  "Fries",
  "Soft Drinks",
];

const todayISO = () => {
  const d = new Date();
  const tz = d.getTimezoneOffset() * 60000;
  return new Date(d - tz).toISOString().slice(0, 10);
};

const ReservationForm = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    pickupDate: todayISO(),
    pickupTime: "",
    notes: "",
  });
  const [items, setItems] = useState(
    MENU_ITEMS.reduce((acc, n) => ({ ...acc, [n]: 0 }), {})
  );

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const updateQty = (name, delta) => {
    setItems((prev) => ({
      ...prev,
      [name]: Math.max(0, (prev[name] || 0) + delta),
    }));
  };

  const ordered = Object.entries(items).filter(([, qty]) => qty > 0);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (ordered.length === 0) {
      alert("Please add at least one item to your order.");
      return;
    }

    const phoneNumber = "+971503668880";

    const itemsList = ordered
      .map(([name, qty]) => `• ${name} x ${qty}`)
      .join("\n");

    const message = `Hello! I would like to place a pickup order:

Name: ${formData.name}
${formData.email ? `Email: ${formData.email}\n` : ""}Phone: ${formData.phone}
Pickup Date: ${formData.pickupDate}
Pickup Time: ${formData.pickupTime}

Items:
${itemsList}
${formData.notes ? `\nNotes: ${formData.notes}` : ""}`;

    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
    onClose();
  };

  return (
    <div
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-[9999] p-3 sm:p-4"
      onClick={onClose}
    >
      <div
        className="bg-white shadow-xl rounded-2xl sm:rounded-3xl p-4 sm:p-8 md:p-10 w-full max-w-2xl relative max-h-[85vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute top-2 right-3 sm:top-4 sm:right-4 text-gray-600 hover:text-gray-900 font-bold text-3xl leading-none cursor-pointer z-10"
        >
          &times;
        </button>

        <h2 className="text-xl sm:text-3xl md:text-4xl font-bold text-center text-[#46171A] mb-0.5 sm:mb-2 px-8">
          Order for Pickup
        </h2>
        <p className="text-center text-red-900 font-medium text-xs sm:text-base mb-3 sm:mb-6">
          Pickup hours: 8 AM - 11 PM
        </p>

        <form onSubmit={handleSubmit} className="space-y-2.5 sm:space-y-5">
          <div className="flex flex-col md:flex-row gap-3 sm:gap-4">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              className="flex-1 px-4 py-2 sm:py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500"
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              className="flex-1 px-4 py-2 sm:py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500"
              required
            />
          </div>

          <div className="flex flex-col md:flex-row gap-3 sm:gap-4">
            <input
              type="date"
              name="pickupDate"
              value={formData.pickupDate}
              onChange={handleChange}
              className="flex-1 px-4 py-2 sm:py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500"
              required
            />
            <input
              type="time"
              name="pickupTime"
              value={formData.pickupTime}
              onChange={handleChange}
              className="flex-1 px-4 py-2 sm:py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500"
              required
            />
          </div>

          <input
            type="email"
            name="email"
            placeholder="Email (optional)"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 sm:py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500"
          />

          <div className="border rounded-xl p-3 sm:p-4">
            <p className="font-semibold text-[#46171A] mb-2 sm:mb-3 text-sm sm:text-base">
              Select Items
            </p>
            <ul className="divide-y divide-gray-200 max-h-44 sm:max-h-56 overflow-y-auto pr-1">
              {MENU_ITEMS.map((name) => (
                <li
                  key={name}
                  className="flex items-center justify-between py-1.5 sm:py-2"
                >
                  <span className="text-sm sm:text-base text-gray-800">
                    {name}
                  </span>
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => updateQty(name, -1)}
                      className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-[#46171A]/30 text-[#46171A] flex items-center justify-center hover:bg-[#46171A] hover:text-white transition-colors"
                      aria-label={`Decrease ${name}`}
                    >
                      −
                    </button>
                    <span className="w-6 text-center text-sm sm:text-base font-medium">
                      {items[name]}
                    </span>
                    <button
                      type="button"
                      onClick={() => updateQty(name, 1)}
                      className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-[#46171A]/30 text-[#46171A] flex items-center justify-center hover:bg-[#46171A] hover:text-white transition-colors"
                      aria-label={`Increase ${name}`}
                    >
                      +
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <textarea
            name="notes"
            placeholder="Notes (allergies, preparation requests, etc.)"
            value={formData.notes}
            onChange={handleChange}
            className="w-full px-4 py-2 sm:py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 resize-none"
            rows="2"
          ></textarea>

          <button
            type="submit"
            className="w-full py-2 sm:py-3 bg-[#46171A] text-white font-semibold rounded-xl hover:bg-orange-600 transition-colors"
          >
            Place Pickup Order
          </button>
        </form>
      </div>
    </div>
  );
};

export default ReservationForm;
