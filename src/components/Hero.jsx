import React from "react";
import assets from "../assets/assets";
import CountUp from "../animated/CountUp";
import CircularText from "../animated/CircularText";

const Hero = () => {
  return (
    <div className="flex w-full">
      {/* Left Section */}
      <div className="bg-black px-30 py-30 text-white flex-1">
        <h1 className="text-7xl">
          Discover Your Dream <br /> Property with Estatein
        </h1>
        <p className="mt-10 text-gray-400">
          Your journey to finding the perfect property begins here. Explore our
          listings to find the home that matches your dreams.
        </p>
        <div className="flex gap-4 mt-6">
          <button className="px-6 text-sm cursor-pointer py-3 border border-gray-400 bg-black text-white rounded-lg">
            Learn More
          </button>
          <button className="px-6 cursor-pointer py-3 text-sm bg-purple-700 text-white rounded-lg">
            Browse Properties
          </button>
        </div>
        <div className="mt-10 flex gap-10">
          <div className="bg-gray-900 px-10 py-3 rounded-3xl p-2">
            <div>
            <CountUp
            from={0}
            to={200}
            separator=","
            direction="up"
            duration={1}
            className="count-up-text text-4xl font-bold"
            />
            <span className="font-extrabold text-3xl">+</span>
            </div>
            <p className="font-extralight text-sm mt-2">Happy Customers</p>
          </div>
          <div className="bg-gray-900 px-10 py-3 rounded-3xl p-2">
           <div>
            <CountUp
            from={0}
            to={10}
            separator=","
            direction="up"
            duration={1}
            className="count-up-text text-4xl font-bold"
            />
            <span className="text-2xl font-extrabold">K</span>
            <span className="text-3xl  font-extrabold ml-1">+</span>
            </div>
            <p className="font-extralight text-sm mt-2">Properties For Clients</p>
          </div>
          <div className="bg-gray-900 px-10 py-3 rounded-3xl p-2">
          <div>
            <CountUp
            from={0}
            to={16}
            separator=","
            direction="up"
            duration={1}
            className="count-up-text text-4xl font-bold"
            />
            <span className="text-3xl font-extrabold">+</span>
            </div>
            <p className="font-extralight text-sm mt-1">Years of Experience</p>
          </div>
        </div>
      </div>
<div className="bg-gray-900 h-20 w-20 rounded-full absolute top-70 left-270 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
  <CircularText
  text="1 2 3 4 5 6 7 8 "
  onHover="speedUp"
  spinDuration={20}
  className="custom-class"
  />
  <div className="absolute cursor-pointer inset-0 flex items-center justify-center border-2 border-gray-500 p-0 rounded-full">
  <img className="fixed" src={assets.arrow} alt="" />
  </div>
</div>
      {/* Right Section */}
      <div className="flex-1 bg-gradient-to-b from-[#2A213F] to-[#191919]">
        
        <div className="bg-[url('./assets/Abstract.png')] bg-cover bg-center h-full flex items-center justify-center">
          <img className="h-[700px]" src={assets.Hero} alt="" />
          
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Hero;
