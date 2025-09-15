import React, { useState } from "react";

const RestaurantMenu = () => {
  const [activeTab, setActiveTab] = useState("Salads & Appetizers");

  const tabs = [
    "Salads & Appetizers",
    "Breakfast",
    "Sandwiches",
    "Manakeesh",
    "On Side",
    "Drinks",
    "Main Course",
    "Desserts",
  ];

  return (
    <div className="min-h-fit bg-[#ECE7DA] py-10 px-5 md:py-16 md:px-8 font-wa-flat tracking-wider">
      <h2 className="text-4xl sm:text-5xl font-wa-flat font-bold tracking-normal text-center text-[#46171A] mb-8">
        Our Delicious Menu
      </h2>

      {/* Tabs */}
      <div className="flex flex-wrap justify-center gap-3 mb-10 ">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 text-lg cursor-pointer ${
              activeTab === tab
                ? "bg-[#46171A] text-white shadow-lg"
                : "bg-white text-[#46171A] hover:bg-orange-500/10"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Content Box */}
      <div className="max-w-5xl mx-auto bg-white rounded-3xl p-6 md:p-8 shadow-2xl">
        {activeTab === "Salads & Appetizers" && (
          <>
            <h3 className="text-[#46171A] font-bold text-2xl uppercase mb-5 text-center md:text-left">
              Salads & Appetizers
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-center md:text-left">
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
                  className="text-red-900 font-medium text-xl rounded-lg transition-all duration-200 hover:bg-orange-500/5 p-0 md:p-1 cursor-pointer capitalize"
                >
                  {item}
                </div>
              ))}
            </div>
          </>
        )}

        {activeTab === "Breakfast" && (
          <>
            <h3 className="text-[#46171A] font-bold text-2xl uppercase mb-5 text-center md:text-left">
              Breakfast
            </h3>

            {/* Desktop view side by side */}
            <div className="hidden md:block space-y-2">
              {[
                { name: "Individual Set (1 Person)", right: "Duo Set (2 Persons)" },
                {
                  name: "Eggs",
                  right: "Eggs",
                  note: "One Choose On Style",
                  noteright: "Two Choose On Style",
                },
                { name: "Halloumi", right: "Halloumi" },
                {
                  name: "Fatteh",
                  right: "Fatteh",
                  note: "One Choose On Style",
                  noteright: "One Choose On Style",
                },
                { name: "Foul", right: "Foul" },
                { name: "Falafel Plate / Sandwich", right: "Falafel Plate / Sandwich" },
                {
                  name: "Manakeesh",
                  right: "Manakeesh",
                  note: "One Choose On Style",
                  noteright: "Two Choose On Style",
                },
                { name: "Seasonal Veg & Olives", right: "Seasonal Veg & Olives" },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex justify-between items-start text-red-900 font-medium text-lg md:text-xl rounded-lg hover:bg-orange-500/10 cursor-pointer capitalize"
                >
                  <span>
                    {item.name}
                    {item.note && (
                      <span className="block text-sm text-red-900">{item.note}</span>
                    )}
                  </span>
                  <span className="text-right">
                    {item.right}
                    {item.noteright && (
                      <span className="block text-sm text-red-900 ">{item.noteright}</span>
                    )}
                  </span>
                </div>
              ))}
            </div>

            {/* Mobile view stacked */}
            <div className="block md:hidden space-y-4 text-center">
              {/* Individual Set */}
              <div className="space-y-1">
                <div className="text-red-900 font-medium text-2xl">
                  Individual Set (1 Person)
                </div>
                {[
                  { name: "Eggs", note: "One Choose On Style" },
                  { name: "Halloumi" },
                  { name: "Fatteh", note: "One Choose On Style" },
                  { name: "Foul" },
                  { name: "Falafel Plate / Sandwich" },
                  { name: "Manakeesh", note: "One Choose On Style" },
                  { name: "Seasonal Veg & Olives" },
                ].map((item, index) => (
                  <div key={index} className="text-red-900 font-medium text-xl">
                    {item.name}
                    {item.note && (
                      <span className="block text-sm text-red-900">{item.note}</span>
                    )}
                  </div>
                ))}
              </div>

              {/* Duo Set */}
              <div className="space-y-1">
                <div className="text-red-900 font-medium text-2xl">Duo Set (2 Persons)</div>
                {[
                  { name2: "Eggs", note2: "Two Choose On Style" },
                  { name2: "Halloumi" },
                  { name2: "Fatteh", note2: "One Choose On Style" },
                  { name2: "Foul" },
                  { name2: "Falafel Plate / Sandwich" },
                  { name2: "Manakeesh", note2: "Two Choose On Style" },
                  { name2: "Seasonal Veg & Olives" },
                ].map((item, index) => (
                  <div key={index} className="text-red-900 font-medium text-xl">
                    {item.name2}
                    {item.note2 && (
                      <span className="block text-sm text-red-900">{item.note2}</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </>
        )}

        {activeTab === "Sandwiches" && (
          <>
            <h3 className="text-[#46171A] font-bold text-2xl uppercase mb-5 text-center md:text-left">
              Sandwiches
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-center md:text-left">
              {["Tawook", "Musakhan Chicken", "Shawarma", "Halloumi Sandwich", "Falafel", "Sausage"].map(
                (item, index) => (
                  <div key={index} className="text-red-900 font-medium text-xl hover:bg-orange-500/5 p-0 md:p-1 cursor-pointer capitalize">
                    {item}
                  </div>
                )
              )}
            </div>
          </>
        )}

        {activeTab === "Manakeesh" && (
          <>
            <h3 className="text-[#46171A] font-bold text-2xl uppercase mb-5 text-center md:text-left">
              Manakeesh
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-center md:text-left">
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
                <div key={index} className="text-red-900 font-medium text-xl hover:bg-orange-500/5 p-0 md:p-1 cursor-pointer capitalize">
                  {item}
                </div>
              ))}
            </div>
          </>
        )}

        {activeTab === "On Side" && (
          <>
            <h3 className="text-[#46171A] font-bold text-2xl uppercase mb-5 text-center md:text-left">
              On Side
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-center md:text-left">
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
                <div key={index} className="text-red-900 font-medium text-xl hover:bg-orange-500/5 p-0 md:p-1 cursor-pointer capitalize">
                  {item}
                </div>
              ))}
            </div>
          </>
        )}

        {activeTab === "Drinks" && (
          <>
            <h3 className="text-[#46171A] font-bold text-2xl uppercase mb-5 text-center md:text-left">
              Drinks
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-center md:text-left">
              <div>
                <h4 className="font-bold text-2xl text-red-900 mb-2">Cold</h4>
                {["Orange", "Lemon mint", "Water", "Soft drinks"].map((item, i) => (
                  <div key={i} className="text-red-900 font-medium text-xl hover:bg-orange-500/5 p-0 md:p-1 cursor-pointer capitalize">
                    {item}
                  </div>
                ))}
              </div>
              <div>
                <h4 className="font-bold text-2xl text-red-900 mb-2">Hot</h4>
                {["Black coffee", "Turkish coffee", "Moro tea", "On nar tea"].map((item, i) => (
                  <div key={i} className="text-red-900 font-medium text-xl hover:bg-orange-500/5 p-0 md:p-1 cursor-pointer capitalize">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </>
        )}

        {activeTab === "Main Course" && (
          <>
            <h3 className="text-[#46171A] font-bold text-2xl uppercase mb-5 text-center md:text-left">
              Main Course
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-center md:text-left">
              {[
                "Chicken Shawarma Plate",
                "Musakhan Chicken",
                "Shish Barak",
                "Zucchini in Labani",
                "Kibbeh in Labani",
                "Potato and Meat",
                "Mushroom and Meat",
                "Kofta Tahina/Tomato",
                "Falafel Plate",
              ].map((item, index) => (
                <div key={index} className="text-red-900 font-medium text-xl hover:bg-orange-500/5 p-0 md:p-1 cursor-pointer capitalize">
                  {item}
                </div>
              ))}
            </div>
          </>
        )}

        {activeTab === "Desserts" && (
          <>
            <h3 className="text-[#46171A] font-bold text-2xl uppercase mb-5 text-center md:text-left">
              Desserts
            </h3>
            <div className="space-y-2 text-center md:text-left">
              {["Halwa Cheese", "Kunafa On Nar", "Ice Cream"].map((item, index) => (
                <div key={index} className="text-red-900 font-medium text-xl hover:bg-orange-500/5 p-0 md:p-1 cursor-pointer capitalize">
                  {item}
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default RestaurantMenu;
