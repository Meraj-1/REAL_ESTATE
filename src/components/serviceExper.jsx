import React from "react";
import assets from "../assets/assets";

const ServiceExper = () => {
  return (
    <div className="bg-[#1A1A1A] flex flex-col pt-14 text-white">
      <div className="px-10 md:px-20">
        <h1 className="text-4xl pb-4 font-semibold">
          Elevate Your Real Estate Experience
        </h1>
        <p className="text-sm text-gray-400">
          Welcome to Estatein, where your real estate aspirations meet expert
          guidance. Explore our comprehensive range of services, each designed
          to cater to your unique needs and dreams.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10 px-5 md:px-10">
        <div className="flex flex-col justify-center items-center gap-4 bg-[#1A1A1A] rounded-lg p-6 text-center">
          <img className="h-20" src={assets.Oprion1} alt="Find Your Dream Home" />
          <p className="text-base font-medium">Find Your Dream Home</p>
        </div>
        <div className="flex flex-col justify-center items-center gap-4 bg-[#1A1A1A] rounded-lg p-6 text-center">
          <img className="h-20" src={assets.Option2} alt="Unlock Property Value" />
          <p className="text-base font-medium">Unlock Property Value</p>
        </div>
        <div className="flex flex-col justify-center items-center gap-4 bg-[#1A1A1A] rounded-lg p-6 text-center">
          <img className="h-20" src={assets.Option3} alt="Effortless Property Management" />
          <p className="text-base font-medium">Effortless Property Management</p>
        </div>
        <div className="flex flex-col justify-center items-center gap-4 bg-[#1A1A1A] rounded-lg p-6 text-center">
          <img className="h-20" src={assets.Option4} alt="Smart Investments" />
          <p className="text-base font-medium">Smart Investments, Informed Decisions</p>
        </div>
      </div>
    </div>
  );
};

export default ServiceExper;
