import React from "react";
import assets from "../assets/assets";

const Value = () => {
  return (
    <div className="bg-black pt-30  md:px-70 gap-10 text-white flex justify-around">
   <div ca>
    <img src={assets.star} alt="" className="mb-3" />
      <div className="flex flex-col  justify-center">
        <h2 className="text-3xl font-medium">Our Values</h2>
        <p className="text-gray-400 flex flex-wrap w-sm text-sm mt-4">
          Our story is one of continuous growth and evolution. We started 
          as a small team with big dreams, determined to create a real 
          estate platform that transcended the ordinary.
        </p>
      </div>
      </div>
      <div>
        <div className="border border-[#1A1A1A] p-[7px] rounded-xl bg-[#1A1A1A]">
          <div className=" bg-black rounded-xl gap-10  grid grid-cols-2 p-10">
            <div>
              <div className="flex gap-2 mb-4 items-center">
                <img src={assets.Trust} className="h-8" alt="" />
                <p className="text-xl font-medium">Trust</p>
              </div>
              <p className="text-sm text-gray-400">
                Trust is the cornerstone of every successful real estate
                transaction.
              </p>
            </div>
            <div>
              <div className="flex gap-2 mb-4 items-center">
                <img src={assets.Excellence}  className="h-8" alt="" />
                <p>Excellence</p>
              </div>
              <p className="text-xs text-gray-400">
                We set the bar high for ourselves. From the properties we
                list to the services we provide.
              </p>
            </div>
            <div>
              <div className="flex gap-2 mb-4 items-center">
                <img src={assets.Client} className="h-8" alt="" />
                <p>Client-Centric</p>
              </div>
              <p className="text-xs text-gray-400">
                Your dreams and needs are at the center of our universe.
                We listen, understand.
              </p>
            </div>
            <div>
              <div className="flex gap-2 mb-4 items-center">
                <img src={assets.Trust} className="h-8" alt="" />
                <p className="">Our Commitment</p>
              </div>
              <p className="text-xs text-gray-400">
                We are dedicated to providing you with the highest level
                of service, professionalism, and support.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Value;
