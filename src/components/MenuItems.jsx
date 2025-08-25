import React, { useState } from "react";
import food1 from "/food1.png"; // placeholder for now (replace per item later)

const MenuItems = () => {
  const categories = {
    "ON NAR MAIN COURSE": [
      { name: "Chicken Shawarma Plate", img: food1 },
      { name: "Musakhan Chicken", img: food1 },
      { name: "Shish Barak", img: food1 },
      { name: "Zucchini in Labani", img: food1 },
      { name: "Kibbeh in Labani", img: food1 },
      { name: "Potato and Meat", img: food1 },
      { name: "Mushroom and Meat", img: food1 },
      { name: "Kofta Tahina/Tomato", img: food1 },
      { name: "Falafel Plate", img: food1 },
    ],
    MANAKEESH: [
      { name: "Labneh", img: food1 },
      { name: "Falafel", img: food1 },
      { name: "Cheese with Thyme", img: food1 },
      { name: "Cheese with Meat", img: food1 },
      { name: "Cheese with Soujouk", img: food1 },
      { name: "Meat with Dough", img: food1 },
      { name: "Cheese", img: food1 },
      { name: "Spinach", img: food1 },
      { name: "Muhammara", img: food1 },
      { name: "Thyme and Cheese & Veg", img: food1 },
      { name: "Pizza Manakeesh", img: food1 },
    ],
    SANDWICHES: [
      { name: "Tawook", img: food1 },
      { name: "Shawarma", img: food1 },
      { name: "Falafel", img: food1 },
      { name: "Musakhan Chicken", img: food1 },
      { name: "Halloumi Sandwich", img: food1 },
      { name: "Sausage", img: food1 },
    ],
    DESSERTS: [
      { name: "Halwa Cheese", img: food1 },
      { name: "Kunafa On Nar", img: food1 },
      { name: "Ice Cream", img: food1 },
    ],
    "SALADS & APPETIZERS": [
      { name: "Fattoush", img: food1 },
      { name: "Arabic Salad", img: food1 },
      { name: "Tabbouleh", img: food1 },
      { name: "Rocca Salad", img: food1 },
      { name: "Baba Ghanouj", img: food1 },
      { name: "Fatteh Salad", img: food1 },
      { name: "Hummus", img: food1 },
      { name: "Hummus with Meat", img: food1 },
      { name: "Moutabal Eggplant", img: food1 },
      { name: "Muhammara", img: food1 },
    ],
    "ON SIDE": [
      { name: "French Fries", img: food1 },
      { name: "Spicy Potatoes", img: food1 },
      { name: "Falafel (3pcs)", img: food1 },
      { name: "Halloumi Slices", img: food1 },
      { name: "Mini Hummus", img: food1 },
      { name: "Mini Moutabal", img: food1 },
      { name: "Mini Muhammara", img: food1 },
      { name: "Mini Labneh", img: food1 },
      { name: "Mini Baba Ghanouj", img: food1 },
      { name: "Mini Fatteh Bowl", img: food1 },
    ],
    "BREAKFAST": [
      { name: "Halloumi", img: food1 },
      { name: "Fatteh, One Choose on Style", img: food1 },
      { name: "Foul", img: food1 },
      { name: "Falafel Plate / Sandwich", img: food1 },
      { name: "Manakeesh, Two Choose on Style", img: food1 },
      { name: "Seasonal Veg & Olives", img: food1 },
    ],
    "BREAKFAST - EGGS": [
      { name: "On Nar Style", img: food1 },
      { name: "Sunny Side", img: food1 },
      { name: "Omelet", img: food1 },
      { name: "Egg with Sujok", img: food1 },
      { name: "Egg with Kawarma", img: food1 },
      { name: "Shakshuka", img: food1 },
    ],
    "DRINKS - COLD": [
      { name: "Orange", img: food1 },
      { name: "Lemon Mint", img: food1 },
      { name: "Water", img: food1 },
      { name: "Soft Drinks", img: food1 },
    ],
    "DRINKS - HOT": [
      { name: "Moro Tea", img: food1 },
      { name: "On Nar Tea", img: food1 },
      { name: "Black Coffee", img: food1 },
      { name: "Turkish Coffee", img: food1 },
    ],
  };

  const [activeCategory, setActiveCategory] = useState("ON NAR MAIN COURSE");

  return (
    <div className="bg-orange-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <h2 className="text-4xl sm:text-5xl font-wa-flat font-medium tracking-wide text-center text-[#46171A] mb-12">
          Our Delicious Menu
        </h2>

        {/* Category Buttons */}
        <div className="flex flex-wrap justify-center w-[90%] gap-2 sm:gap-3 mb-12">
          {Object.keys(categories).map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3 py-1 text-xs sm:px-6 sm:py-2 sm:text-sm rounded-lg font-semibold transition-colors duration-300 ${
                activeCategory === cat
                  ? "bg-[#46171A] text-white"
                  : "bg-[#ede9dc] text-[#46171A] hover:bg-[#F15A24] hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Menu Cards (Flex Layout) */}
        <div className="flex flex-wrap justify-center gap-x-12 gap-y-30 mb-40">
          {categories[activeCategory].map((item, index) => (
            <div
              key={index}
              className="relative w-full md:w-[45%] lg:w-[30%] flex justify-center"
            >
              <div className="bg-[#ede9dc] rounded-3xl pt-10 pb-40 text-center relative overflow-visible shadow-lg w-full">
                {/* Content */}
                <div className="mb-8">
                  <h3 className="font-wa-flat text-[#46171A] tracking-wider text-lg sm:text-2xl font-light">
                    {item.name}
                  </h3>
                  <p className="text-[#46171A] text-xs sm:text-sm font-medium mb-6 opacity-90">
                    {activeCategory}
                  </p>
                  <button className="px-6 py-1 text-xs sm:px-8 sm:py-2 sm:text-sm font-bold rounded-lg transition-colors cursor-pointer duration-300 bg-white text-red-700 hover:bg-[#F15A24] hover:text-white">
                    Add to Cart
                  </button>
                </div>

                {/* Food Image */}
                {item.img && (
                  <img
                    src={item.img}
                    alt={item.name}
                    className="absolute -bottom-20 left-1/2 transform -translate-x-1/2 w-52 sm:w-70 h-48 sm:h-62 object-cover rounded-full shadow-xl z-10"
                  />
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
          <button className="bg-[#46171A] cursor-pointer text-white font-wa-flat text-base sm:text-xl tracking-widest px-6 py-2 sm:px-8 sm:py-3 rounded-xl font-light hover:bg-[#D44D1F] transition-colors duration-300">
            MAKE A RESERVATION
          </button>
          <button className="bg-[#D6BFA4] cursor-pointer font-wa-flat text-[#46171A] text-base sm:text-xl tracking-widest px-6 py-2 sm:px-8 sm:py-3 rounded-xl font-semibold hover:bg-[#F15A24] hover:text-white transition-colors duration-300">
            DOWNLOAD THE MENU CARD
          </button>
        </div>
      </div>
    </div>
  );
};

export default MenuItems;
