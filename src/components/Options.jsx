import React from "react";
import assets from "../assets/assets";

const optionsData = [
  { img: assets.Oprion1, text: "Find Your Dream Home" },
  { img: assets.Option2, text: "Unlock Property Value" },
  { img: assets.Option3, text: "Effortless Property Management" },
  { img: assets.Option4, text: "Smart Investment, Informed Decisions" },
];

const Options = () => {
  return (
    <div className="bg-black py-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 border border-gray-700 p-5 text-white">
        {optionsData.map((option, index) => (
          <div
            key={index}
            className="flex flex-col rounded-2xl bg-[#1A1A1A] border border-gray-600 p-8 items-center text-center hover:bg-[#222222] transition"
          >
            <img
              src={option.img}
              alt={option.text}
              className="w-16 h-16 mb-4"
            />
            <p className="text-sm font-light">{option.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Options;
