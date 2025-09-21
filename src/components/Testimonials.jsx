import React, { useState } from "react";
import assets from "../assets/assets";
import { testimonal } from "../assets/data"; // Your JSON testimonials

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
    <div className="bg-black px-5 sm:px-10 lg:px-20 py-10 lg:py-16 text-white">
      {/* Section Header */}
      <div className="mb-6">
        <img className="mb-4 w-10 h-auto" src={assets.star} alt="star" />
        <h1 className="text-3xl sm:text-4xl mb-3 font-bold">
          What Our Clients Say
        </h1>
        <p className="text-gray-400 text-sm sm:text-base max-w-3xl">
          Read the success stories and heartfelt testimonials from our valued
          clients. Discover why they chose Estatein for their real estate needs.
        </p>
      </div>

      {/* Testimonials Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {visibleTestimonials.map((item, index) => (
          <div
            key={index}
            className="px-6 py-8 rounded-xl shadow-md border border-gray-700 bg-[#111] hover:scale-[1.02] hover:shadow-lg transition-transform"
          >
            {/* Client Info */}
            <div className="flex items-center gap-4 mb-4">
              <img
                src={item.avatar}
                alt={item.name}
                className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border-2 border-gray-600"
              />
              <div>
                <h2 className="text-base sm:text-lg font-semibold">
                  {item.name}
                </h2>
                <p className="text-xs sm:text-sm text-gray-400">
                  {item.place}
                </p>
              </div>
            </div>

            {/* Testimonial Text */}
            <p className="text-gray-300 text-sm mb-3 leading-relaxed">
              {item.text}
            </p>
            <p className="font-medium text-[#703BF7]">{item.compliment}</p>
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
