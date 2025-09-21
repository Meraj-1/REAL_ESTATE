import React from "react";

const Thought = () => {
  return (
    <div className="bg-black text-white px-5 sm:px-10 lg:px-20 py-10 lg:py-16">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        {/* Left Section */}
        <div className="max-w-2xl">
          <h1 className="text-3xl sm:text-4xl font-bold mb-5">
            Start Your Real Estate Journey Today
          </h1>
          <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
            Your dream property is just a click away. Whether you're looking for
            a new home, a strategic investment, or expert real estate advice,
            Estatein is here to assist you every step of the way. Take the first
            step towards your real estate goals and explore our available
            properties or get in touch with our team for personalized assistance.
          </p>
        </div>

        {/* Right Section */}
        <div className="flex-shrink-0">
          <button className="px-6 py-3 bg-[#703BF7] rounded-xl hover:bg-purple-800 transition text-white font-medium shadow-md">
            Explore Properties
          </button>
        </div>
      </div>
    </div>
  );
};

export default Thought;
