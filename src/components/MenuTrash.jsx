import React from "react";

const RestaurantMenu = () => {
  return (
    <div className="min-h-screen bg-[#FFFFFF] py-10 px-5 md:py-16 md:px-8 font-wa-flat tracking-wider">
      <h2 className="text-4xl sm:text-5xl font-wa-flat font-medium tracking-wide text-center text-[#46171A] mb-12">
        Our Delicious Menu
      </h2>
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1.8fr_1fr] gap-6 lg:gap-8 bg-[#ECE7DA] backdrop-blur-sm rounded-3xl p-6 md:p-8 shadow-2xl">
        {/* Left Column - 3 sections */}
        <div className="grid grid-rows-0 gap-5 lg:gap-6">
          {/* Salads & Appetizers */}
          <div className="group bg-white/95 rounded-2xl p-6 md:p-7 shadow-lg border border-white/20 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 hover:bg-white cursor-pointer relative overflow-hidden">
            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-orange-500/10 to-transparent"></div>
            <div className="relative z-10">
              <h3 className="text-orange-600 font-bold text-2xl md:text-2xl uppercase mb-5 relative pb-2 text-center md:text-left">
                Salads & Appetizers
                <div className="absolute bottom-0 left-1/2 md:left-0 transform -translate-x-1/2 md:translate-x-0 h-1 w-10 bg-gradient-to-r from-orange-600 to-orange-400 rounded-full transition-all duration-300 group-hover:w-60"></div>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:gap-2 ">
                {[
                  "Fattoush",
                  "Fatteh Salad",
                  "Arabic Salad",
                  "Hummus",
                  "Tabbouleh",
                  "Hummus with Meat",
                  "Rocca Salad",
                  "Moutabal Eggplant",
                  "Baba Ghanouj",
                  "Muhammara",
                ].map((item, index) => (
                  <div
                    key={index}
                    className="text-red-900 font-medium text-xl p-0 lg:p-2 text-center md:text-left rounded-lg transition-all duration-200 hover:bg-orange-500/5 hover:translate-x-2 hover:text-red-950 cursor-pointer relative before:content-['•'] before:text-orange-600 before:font-bold before:absolute before:-left-1 before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-200"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Breakfast */}
          <div className="group bg-white/95 rounded-2xl p-6 md:p-7 shadow-lg border border-white/20 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 hover:bg-white cursor-pointer relative overflow-hidden">
            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-orange-500/10 to-transparent"></div>
            <div className="relative z-10">
              <h3 className="text-orange-600 font-bold text-2xl md:text-2xl uppercase mb-5 relative pb-2 text-center md:text-left">
                Breakfast
                <div className="absolute bottom-0 left-1/2 md:left-0 transform -translate-x-1/2 md:translate-x-0 h-1 w-8 bg-gradient-to-r from-orange-600 to-orange-400 rounded-full transition-all duration-300 group-hover:w-33"></div>
              </h3>

              {/* MOBILE VIEW (stacked) */}
              <div className="block md:hidden space-y-6">
                {/* Individual Set */}
                <div>
                  <h4 className="text-red-900 font-bold text-xl mb-2 text-center">
                    Individual Set (1 Person)
                  </h4>
                  <div className="space-y-1">
                    {[
                      {
                        name: "Eggs",
                        note: "(One Choose On Style / Two Choose On Style)",
                      },
                      { name: "Halloumi" },
                      {
                        name: "Fatteh",
                        note: "(One Choose On Style / Two Choose On Style)",
                      },
                      { name: "Foul" },
                      { name: "Falafel Plate / Sandwich" },
                      {
                        name: "Manakeesh",
                        note: "(One Choose On Style / Two Choose On Style)",
                      },
                      { name: "Seasonal Veg & Olives" },
                    ].map((item, index) => (
                      <div
                        key={index}
                        className="text-red-900 font-medium text-lg p-1 rounded-lg transition-all duration-300 hover:bg-orange-500/8 cursor-pointer text-center"
                      >
                        {item.name}
                        {item.note && (
                          <span className="block text-sm text-red-900">
                            {item.note}
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Duo Set */}
                <div>
                  <h4 className="text-red-900 font-bold text-xl mb-2 text-center">
                    Duo Set (2 Persons)
                  </h4>
                  <div className="space-y-1">
                    {[
                      {
                        name: "Eggs",
                        note: "(One Choose On Style / Two Choose On Style)",
                      },
                      { name: "Halloumi" },
                      {
                        name: "Fatteh",
                        note: "(One Choose On Style / Two Choose On Style)",
                      },
                      { name: "Foul" },
                      { name: "Falafel Plate / Sandwich" },
                      {
                        name: "Manakeesh",
                        note: "(One Choose On Style / Two Choose On Style)",
                      },
                      { name: "Seasonal Veg & Olives" },
                    ].map((item, index) => (
                      <div
                        key={index}
                        className="text-red-900 font-medium text-lg p-1 rounded-lg transition-all duration-300 hover:bg-orange-500/8 cursor-pointer text-center"
                      >
                        {item.name}
                        {item.note && (
                          <span className="block text-sm text-red-900">
                            {item.note}
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* DESKTOP VIEW (side by side) */}
              <div className="hidden md:block">
                <div className="space-y-1">
                  {[
                    {
                      name: "Individual Set (1 Person)",
                      right: "Duo Set (2 persons)",
                    },
                    {
                      name: "Eggs",
                      right: "Eggs",
                      note: "(One Choose On Style / Two Choose On Style)",
                    },
                    { name: "Halloumi", right: "Halloumi" },
                    {
                      name: "Fatteh",
                      right: "Fatteh",
                      note: "(One Choose On Style / Two Choose On Style)",
                    },
                    { name: "Foul", right: "Foul" },
                    {
                      name: "Falafel Plate / Sandwich",
                      right: "Falafel Plate / Sandwich",
                    },
                    {
                      name: "Manakeesh",
                      right: "Manakeesh",
                      note: "(One Choose On Style / Two Choose On Style)",
                    },
                    {
                      name: "Seasonal Veg & Olives",
                      right: "Seasonal Veg & Olives",
                    },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-center text-red-900 font-medium text-xl p-1 lg:p-2 rounded-lg transition-all duration-300 hover:bg-orange-500/8 cursor-pointer"
                    >
                      <span>
                        {item.name} <br />
                        {item.note && (
                          <span className="text-sm text-red-900 ml-1">
                            {item.note}
                          </span>
                        )}
                      </span>
                      <span className="text-red-900 text-xl text-right">
                        {item.right} <br />
                        {item.note && (
                          <span className="text-sm text-red-900 ml-1">
                            {item.note}
                          </span>
                        )}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Sandwiches */}
          <div className="group bg-white/95 rounded-2xl p-6 md:p-7 shadow-lg border border-white/20 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 hover:bg-white cursor-pointer relative overflow-hidden">
            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-orange-500/10 to-transparent"></div>
            <div className="relative z-10">
              <h3 className="text-orange-600 font-bold text-2xl md:text-2xl uppercase mb-5 relative pb-2 text-center md:text-left">
                Sandwiches
                <div className="absolute bottom-0 left-1/2 md:left-0 transform -translate-x-1/2 md:translate-x-0 h-1 w-8 bg-gradient-to-r from-orange-600 to-orange-400 rounded-full transition-all duration-300 group-hover:w-38"></div>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-0 md:gap-4">
                {[
                  "Tawook",
                  "Musakhan Chicken",
                  "Shawarma",
                  "Halloumi Sandwich",
                  "Falafel",
                  "Sausage",
                ].map((item, index) => (
                  <div
                    key={index}
                    className="text-red-900 font-medium text-xl md:text-xl p-0 lg:p-2 text-center md:text-left rounded-lg transition-all duration-200 hover:bg-orange-500/5 hover:translate-x-2 hover:text-red-950 cursor-pointer relative before:content-['•'] before:text-orange-600 before:font-bold before:absolute before:-left-1 before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-200"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - 5 sections */}
        <div className="grid grid-rows-0 gap-3 lg:gap-4">
          {/* Manakeesh */}
          <div className="group bg-white/95 rounded-2xl p-4 md:p-5 shadow-lg border border-white/20 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 hover:bg-white cursor-pointer relative overflow-hidden">
            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-orange-500/10 to-transparent"></div>
            <div className="relative z-10">
              <h3 className="text-orange-600 font-bold text-2xl md:text-2xl uppercase mb-4 relative pb-2 text-center md:text-left">
                Manakeesh
                <div className="absolute bottom-0 left-1/2 md:left-0 transform -translate-x-1/2 md:translate-x-0 h-1 w-10 bg-gradient-to-r from-orange-600 to-orange-400 rounded-full transition-all duration-300 group-hover:w-30"></div>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-0 md:gap-2 ">
                {[
                  "Labneh",
                  "Cheese",
                  "Falafel",
                  "Spinach",
                  "Cheese with Thyme",
                  "Muhammara",
                  "Cheese with Meat",
                  "Cheese with Soujouk",
                  "Pizza Manakeesh",
                  "Meat with Dough",
                  "Thyme and Cheese & Veg",
                ].map((item, index) => (
                  <div
                    key={index}
                    className="text-red-900 font-medium text-xl md:text-xl p-0 lg:p-2 text-center md:text-left rounded-lg transition-all duration-200 hover:bg-orange-500/5 hover:translate-x-2 hover:text-red-950 cursor-pointer relative before:content-['•'] before:text-orange-600 before:font-bold before:absolute before:-left-1 before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-200"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* On Side */}
          <div className="group bg-white/95 rounded-2xl p-4 md:p-5 shadow-lg border border-white/20 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 hover:bg-white cursor-pointer relative overflow-hidden">
            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-orange-500/10 to-transparent"></div>
            <div className="relative z-10">
              <h3 className="text-orange-600 font-bold text-2xl md:text-2xl uppercase mb-4 relative pb-2 text-center md:text-left">
                On Side
                <div className="absolute bottom-0 left-1/2 md:left-0 transform -translate-x-1/2 md:translate-x-0 h-1 w-6 bg-gradient-to-r from-orange-600 to-orange-400 rounded-full transition-all duration-300 group-hover:w-23"></div>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-2 md:gap-3">
                {[
                  "French fries",
                  "mini muhammara",
                  "spicy potatoes",
                  "mini moutable",
                  "falafel (3PIC)",
                  "mini labneh",
                  "halloumi slices",
                  "mini baba ghanouj",
                  "mini hummus",
                  "mini fatteh bowl",
                ].map((item, index) => (
                  <div
                    key={index}
                    className="text-red-900 font-medium text-xl md:text-xl p-0 lg:p-2 text-center md:text-left rounded-lg transition-all duration-200 hover:bg-orange-500/5 hover:translate-x-2 hover:text-red-950 cursor-pointer relative before:content-['•'] before:text-orange-600 before:font-bold before:absolute before:-left-1 before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-200"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Drinks */}
          <div className="group bg-white/95 rounded-2xl p-4 md:p-5 shadow-lg border border-white/20 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 hover:bg-white cursor-pointer relative overflow-hidden">
            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-orange-500/10 to-transparent"></div>
            <div className="relative z-10">
              <h3 className="text-orange-600 font-bold text-2xl md:text-2xl uppercase mb-4 relative pb-2 text-center md:text-left">
                Drinks
                <div className="absolute bottom-0 left-1/2 md:left-0 transform -translate-x-1/2 md:translate-x-0 h-1 w-6 bg-gradient-to-r from-orange-600 to-orange-400 rounded-full transition-all duration-300 group-hover:w-23"></div>
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {/* Cold Drinks */}
                <div>
                  <div className="text-red-900 font-medium text-xl md:text-xl p-0 lg:p-2 text-center md:text-left rounded-lg mb-2">
                    <span className="font-bold">Cold</span>
                  </div>
                  {[
                    "Orange",
                    "Moro tea",
                    "Lemon mint",
                    "On nar tea",
                    "Water",
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="text-red-900 font-medium text-xl md:text-xl p-0 lg:p-2 text-center md:text-left rounded-lg transition-all duration-200 hover:bg-orange-500/5 hover:translate-x-2 hover:text-red-950 cursor-pointer relative before:content-['•'] before:text-orange-600 before:font-bold before:absolute before:-left-1 before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-200"
                    >
                      {item}
                    </div>
                  ))}
                </div>

                {/* Hot Drinks */}
                <div>
                  <div className="text-red-900 font-medium text-xl md:text-xl p-0 lg:p-2 text-center md:text-left rounded-lg mb-2">
                    <span className="font-bold">Hot</span>
                  </div>
                  {["Black coffee", "Soft drinks", "Turkish coffee"].map(
                    (item, index) => (
                      <div
                        key={index}
                        className="text-red-900 font-medium text-xl md:text-xl p-0 lg:p-2 text-center md:text-left rounded-lg transition-all duration-200 hover:bg-orange-500/5 hover:translate-x-2 hover:text-red-950 cursor-pointer relative before:content-['•'] before:text-orange-600 before:font-bold before:absolute before:-left-1 before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-200"
                      >
                        {item}
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Main Course */}
          <div className="group bg-white/95 rounded-2xl p-4 md:p-5 shadow-lg border border-white/20 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 hover:bg-white cursor-pointer relative overflow-hidden">
            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-orange-500/10 to-transparent"></div>
            <div className="relative z-10">
              <h3 className="text-orange-600 font-bold text-2xl md:text-2xl uppercase mb-4 relative pb-2 text-center md:text-left">
                Main Course
                <div className="absolute bottom-0 left-1/2 md:left-0 transform -translate-x-1/2 md:translate-x-0 h-1 w-6 bg-gradient-to-r from-orange-600 to-orange-400 rounded-full transition-all duration-300 group-hover:w-35"></div>
              </h3>
              <div className="space-y-2 md:space-y-1">
                {[
                  "Chicken Shawarma Plate",
                  "Musakhan Chicken",     
                  "Shish Barak",
                  "Zucchini in Labani",
                  "Kibbeh in Labani Potato and Meat",
                  "Mushroom and Meat",
                  "Kofta Tahina/Tomato",
                  "Falafel Plate",
                ].map((item, index) => (
                  <div
                    key={index}
                    className="text-red-900 font-medium text-xl md:text-xl p-0 lg:p-2 text-center md:text-left rounded-lg transition-all duration-200 hover:bg-orange-500/5 hover:translate-x-2 hover:text-red-950 cursor-pointer relative before:content-['•'] before:text-orange-600 before:font-bold before:absolute before:-left-1 before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-200"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Desserts */}
          <div className="group bg-white/95 rounded-2xl p-4 md:p-5 shadow-lg border border-white/20 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 hover:bg-white cursor-pointer relative overflow-hidden">
            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-orange-500/10 to-transparent"></div>
            <div className="relative z-10">
              <h3 className="text-orange-600 font-bold text-2xl md:text-2xl uppercase mb-4 relative pb-2 text-center md:text-left">
                Desserts
                <div className="absolute bottom-0 left-1/2 md:left-0 transform -translate-x-1/2 md:translate-x-0 h-1 w-6 bg-gradient-to-r from-orange-600 to-orange-400 rounded-full transition-all duration-300 group-hover:w-28"></div>
              </h3>
              <div className="space-y-2  md:space-y-1">
                {["Halwa Cheese", "Kunafa On Nar", "Ice Cream,"].map(
                  (item, index) => (
                    <div
                      key={index}
                      className="text-red-900 font-medium text-xl md:text-xl p-0 lg:p-2 text-center md:text-left rounded-lg transition-all duration-200 hover:bg-orange-500/5 hover:translate-x-2 hover:text-red-950 cursor-pointer relative before:content-['•'] before:text-orange-600 before:font-bold before:absolute before:-left-1 before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-200"
                    >
                      {item}
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantMenu;
