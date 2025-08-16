import React, { useState } from "react";
import assets from "../assets/assets";
import { testimonal } from "../assets/data"; // your JSON testimonials

const Testimonials = () => {
  const [startIndex, setStartIndex] = useState(0);
  const itemsPerPage = 3;

  const handleNext = () => {
    setStartIndex((prev) =>
      prev + itemsPerPage >= testimonal.length ? 0 : prev + itemsPerPage
    );
  };

  const visibleTestimonials = testimonal.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  return (
    <div className="bg-black md:px-70 md:py-40 text-white">
      {/* Section Header */}
      <div className="mb-6">
        <img className="mb-4 w-12 h-auto" src={assets.star} alt="" />
        <h1 className="text-4xl mb-5 font-bold">What Our Clients Say</h1>
      </div>

      <p className="text-gray-400 text-sm mb-6">
        Read the success stories and heartfelt testimonials from our valued
        clients. Discover why they chose Estatein for their real estate needs.
      </p>

      {/* Testimonials Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {visibleTestimonials.map((item, index) => (
          <div
            key={index}
            className="px-10 py-20 rounded-xl shadow-md border border-gray-700"
          >
            <div className="flex items-center gap-4 mb-4">
              <img
                src={item.avatar}
                alt={item.name}
                className="w-14 h-14 rounded-full border-2 border-gray-600"
              />
              <div>
                <h2 className="text-lg font-semibold">{item.name}</h2>
                <p className="text-sm text-gray-400">{item.place}</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm mb-3">{item.text}</p>
            <p className="font-medium">{item.compliment}</p>
          </div>
        ))}
      </div>

      {/* Next Button */}
      <div className="flex justify-center mt-8">
        <button
          onClick={handleNext}
          className="bg-[#703BF7] px-6 py-2 rounded-lg hover:bg-gray-800 transition"
        >
          Next ➡
        </button>
      </div>
    </div>
  );
};

export default Testimonials;
