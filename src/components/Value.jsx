import React from "react";
import assets from "../assets/assets";

const Value = () => {
  return (
    <div className="bg-black text-white px-5 sm:px-10 lg:px-20 py-16 flex flex-col lg:flex-row gap-10">
      {/* Left Section */}
      <div className="flex-1 flex flex-col justify-center max-w-lg">
        <img src={assets.star} alt="star" className="mb-3 w-10 h-auto" />
        <h2 className="text-2xl sm:text-3xl font-medium mb-4">Our Values</h2>
        <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
          Our story is one of continuous growth and evolution. We started as a
          small team with big dreams, determined to create a real estate
          platform that transcended the ordinary.
        </p>
      </div>

      {/* Right Section */}
      <div className="flex-1">
        <div className="border border-gray-700 rounded-xl bg-[#1A1A1A] p-2">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 p-6 bg-black rounded-xl">
            {/* Trust */}
            <div>
              <div className="flex gap-2 items-center mb-2">
                <img src={assets.Trust} className="h-8" alt="Trust" />
                <p className="text-lg font-medium">Trust</p>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Trust is the cornerstone of every successful real estate
                transaction.
              </p>
            </div>

            {/* Excellence */}
            <div>
              <div className="flex gap-2 items-center mb-2">
                <img src={assets.Excellence} className="h-8" alt="Excellence" />
                <p className="text-lg font-medium">Excellence</p>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                We set the bar high for ourselves, from the properties we list
                to the services we provide.
              </p>
            </div>

            {/* Client-Centric */}
            <div>
              <div className="flex gap-2 items-center mb-2">
                <img src={assets.Client} className="h-8" alt="Client-Centric" />
                <p className="text-lg font-medium">Client-Centric</p>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Your dreams and needs are at the center of our universe. We
                listen and understand.
              </p>
            </div>

            {/* Commitment */}
            <div>
              <div className="flex gap-2 items-center mb-2">
                <img src={assets.Commitment} className="h-8" alt="Commitment" />
                <p className="text-lg font-medium">Our Commitment</p>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                We are dedicated to providing you with the highest level of
                service, professionalism, and support.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Value;
