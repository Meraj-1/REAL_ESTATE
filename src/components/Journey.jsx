import React from "react";
import assets from "../assets/assets";
import CountUp from "../animated/CountUp";

const Journey = () => {
  return (
    <div className="bg-black text-white px-5 sm:px-10 lg:px-20 py-10 lg:py-16 flex flex-col lg:flex-row gap-10 lg:gap-20">
      {/* Left Section */}
      <div className="flex-1">
        <img src={assets.star} alt="star" className="mb-3 w-10 h-auto" />
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-medium mb-4">
          Our Journey
        </h1>
        <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
          Our story is one of continuous growth and evolution. We started as a
          small team with big dreams, determined to create a real estate
          platform that transcended the ordinary. Over the years, we've expanded
          our reach, forged valuable partnerships, and gained the trust of
          countless clients.
        </p>

        {/* Stats Section */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4 sm:gap-6 lg:gap-10">
          {/* Customers */}
          <div className="bg-[#1A1A1A] px-6 py-4 rounded-3xl text-center flex-1">
            <div className="flex justify-center items-end">
              <CountUp
                from={0}
                to={200}
                separator=","
                duration={1}
                className="text-3xl sm:text-4xl font-bold"
              />
              <span className="ml-1 text-3xl font-extrabold">+</span>
            </div>
            <p className="text-sm font-light mt-2">Happy Customers</p>
          </div>

          {/* Properties */}
          <div className="bg-[#1A1A1A] px-6 py-4 rounded-3xl text-center flex-1">
            <div className="flex justify-center items-end">
              <CountUp
                from={0}
                to={10}
                separator=","
                duration={1}
                className="text-3xl sm:text-4xl font-bold"
              />
              <span className="text-2xl font-extrabold">K</span>
              <span className="ml-1 text-3xl font-extrabold">+</span>
            </div>
            <p className="text-sm font-light mt-2">Properties For Clients</p>
          </div>

          {/* Years */}
          <div className="bg-[#1A1A1A] px-6 py-4 rounded-3xl text-center flex-1">
            <div className="flex justify-center items-end">
              <CountUp
                from={0}
                to={16}
                separator=","
                duration={1}
                className="text-3xl sm:text-4xl font-bold"
              />
              <span className="ml-1 text-3xl font-extrabold">+</span>
            </div>
            <p className="text-sm font-light mt-2">Years of Experience</p>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex-1 relative flex items-center justify-center">
        <div className="absolute inset-0 bg-[url('../assets/Abstract.png')] bg-cover bg-center opacity-30 rounded-xl"></div>
        <img
          src={assets.about}
          alt="About"
          className="relative w-full max-w-md h-auto rounded-xl"
        />
      </div>
    </div>
  );
};

export default Journey;
