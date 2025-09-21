import React from "react";
import assets from "../assets/assets";
import CountUp from "../animated/CountUp";
// import CircularText from "../animated/CircularText"; // Uncomment if needed

const Hero = () => {
  return (
    <div className="w-full flex flex-col md:flex-row relative">
      {/* Left Section */}
      <div className="bg-black px-6 sm:px-10 md:px-16 lg:px-20 py-16 md:py-20 text-white flex-1 flex flex-col justify-center">
        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
          Discover Your Dream <br /> Property with Estatein
        </h1>

        {/* Subtext */}
        <p className="mt-6 text-gray-400 max-w-xl text-sm sm:text-base">
          Your journey to finding the perfect property begins here. Explore our
          listings to find the home that matches your dreams.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap gap-4 mt-6">
          <button className="px-6 py-3 border border-gray-400 bg-black text-white rounded-lg text-sm hover:bg-gray-800 transition">
            Learn More
          </button>
          <button className="px-6 py-3 bg-purple-700 text-white rounded-lg text-sm hover:bg-purple-800 transition">
            Browse Properties
          </button>
        </div>

        {/* Stats Section */}
        <div className="mt-10 flex flex-wrap gap-4 sm:gap-6 md:gap-8">
          {/* Customers */}
          <StatCard count={200} suffix="+" label="Happy Customers" />
          {/* Properties */}
          <StatCard count={10} suffix="K+" label="Properties For Clients" />
          {/* Years */}
          <StatCard count={16} suffix="+" label="Years of Experience" />
        </div>
      </div>

      {/* Right Section */}
      <div className="flex-1 relative bg-gradient-to-b from-[#2A213F] to-[#191919] flex items-center justify-center">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[url('./assets/Abstract.png')] bg-cover bg-center opacity-70"></div>

        {/* Hero Image */}
        <img
          className="relative h-[350px] sm:h-[450px] md:h-[600px] lg:h-[700px] object-contain z-10"
          src={assets.Hero}
          alt="Hero"
        />

        {/* Circular Button Placeholder */}
        {/* 
        <div className="absolute bottom-6 right-6 md:bottom-10 md:right-10 bg-[#1A1A1A] h-20 w-20 md:h-24 md:w-24 rounded-full flex items-center justify-center shadow-lg">
          <CircularText text="Explore More • Explore More • " spinDuration={20} />
        </div> 
        */}
      </div>
    </div>
  );
};

// ✅ Reusable StatCard component for cleaner code
const StatCard = ({ count, suffix, label }) => (
  <div className="bg-[#1A1A1A] px-6 sm:px-8 py-4 rounded-3xl text-center flex-1 min-w-[120px]">
    <div className="flex justify-center items-end">
      <CountUp
        from={0}
        to={count}
        separator=","
        direction="up"
        duration={1}
        className="count-up-text text-3xl sm:text-4xl font-bold"
      />
      {suffix && (
        <span className="font-extrabold text-xl sm:text-3xl ml-1">{suffix}</span>
      )}
    </div>
    <p className="font-extralight text-xs sm:text-sm mt-2">{label}</p>
  </div>
);

export default Hero;
