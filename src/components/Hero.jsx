import React from "react";
import assets from "../assets/assets";
import CountUp from "../animated/CountUp";
import CircularText from "../animated/CircularText";

const Hero = () => {
  return (
    <div className="w-full md:flex relative">
      {/* Left Section */}
      <div className="bg-black px-10 md:px-20 py-20 text-white flex-1 flex flex-col justify-center">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
          Discover Your Dream <br /> Property with Estatein
        </h1>

        <p className="mt-6 text-gray-400 max-w-xl">
          Your journey to finding the perfect property begins here. Explore our
          listings to find the home that matches your dreams.
        </p>

        <div className="flex gap-4 mt-6">
          <button className="px-6 py-3 border border-gray-400 bg-black text-white rounded-lg text-sm hover:bg-gray-800">
            Learn More
          </button>
          <button className="px-6 py-3 bg-purple-700 text-white rounded-lg text-sm hover:bg-purple-800">
            Browse Properties
          </button>
        </div>

        {/* Stats Section */}
        <div className="mt-10 flex flex-wrap gap-6 md:gap-10">
          {/* Customers */}
          <div className="bg-gray-900 px-8 py-4 rounded-3xl text-center">
            <div className="flex justify-center items-end">
              <CountUp
                from={0}
                to={200}
                separator=","
                direction="up"
                duration={1}
                className="count-up-text text-4xl font-bold"
              />
              <span className="font-extrabold text-3xl ml-1">+</span>
            </div>
            <p className="font-extralight text-sm mt-2">Happy Customers</p>
          </div>

          {/* Properties */}
          <div className="bg-gray-900 px-8 py-4 rounded-3xl text-center">
            <div className="flex justify-center items-end">
              <CountUp
                from={0}
                to={10}
                separator=","
                direction="up"
                duration={1}
                className="count-up-text text-4xl font-bold"
              />
              <span className="text-2xl font-extrabold">K</span>
              <span className="text-3xl font-extrabold ml-1">+</span>
            </div>
            <p className="font-extralight text-sm mt-2">
              Properties For Clients
            </p>
          </div>

          {/* Years */}
          <div className="bg-gray-900 px-8 py-4 rounded-3xl text-center">
            <div className="flex justify-center items-end">
              <CountUp
                from={0}
                to={16}
                separator=","
                direction="up"
                duration={1}
                className="count-up-text text-4xl font-bold"
              />
              <span className="text-3xl font-extrabold ml-1">+</span>
            </div>
            <p className="font-extralight text-sm mt-2">
              Years of Experience
            </p>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex-1 relative bg-gradient-to-b from-[#2A213F] to-[#191919] flex items-center justify-center">
        {/* Background */}
        <div className="absolute inset-0 bg-[url('./assets/Abstract.png')] bg-cover bg-center opacity-70"></div>

        {/* Hero Image */}
        <img className="relative h-[500px] md:h-[700px] z-10" src={assets.Hero} alt="Hero" />

        {/* Circular Button */}
        <div className="absolute bottom-10 right-10 bg-gray-900 h-24 w-24 rounded-full flex items-center justify-center">
          {/* <CircularText */}
            {/* text="1 2 3 4 5 6 7 8 "
            onHover="speedUp"
            spinDuration={20}
            className="custom-class"
          /> */}
          <div className="absolute cursor-pointer inset-0 flex items-center justify-center border-2 border-gray-500 rounded-full">
            <img className="w-6" src={assets.arrow} alt="arrow" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
