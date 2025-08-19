import React from "react";
import assets from "../assets/assets";

const Team = () => {
  return (
    <div className="bg-black text-white md:px-70 pt-30">
      <div>
        <img src={assets.star} className="h-6 mb-3" alt="" />
        <h1 className="text-3xl font-medium mb-3">Meet the Estatein Team</h1>
        <p className="text-sm text-gray-400">
          At Estatein, our success is driven by the dedication and expertise of
          our team. Get to know the people behind our mission to make your real
          estate dreams a reality.
        </p>
      </div>
      <div className="flex justify-around mt-10">
        <div className="border rounded-3xl bg-[#1A1A1A]">
          <div className="">
            <img src={assets.team1} className="p-5 h-60" alt="" />
     <div className="flex justify-center">
            <img src={assets.twitter} className="h-7" alt="" />
         </div>
          </div>
          <div className="flex mt-4 flex-col justify-center items-center">
            <p className="text-sm font-medium">Sarah Johnson</p>
            <p className="text-xs  text-gray-400">Founder</p>
          </div>
          <div className="px-5 py-4 ">
          <div className="flex rounded-3xl items-center border border-gray-700  bg-[#1A1A1A] justify-between px-3 py-1 gap-10">
            <p className="text-dm font-extralight">Say Hello</p>
            <img src={assets.share} className="h-7" alt="" />
          </div>
          </div>
        </div>
        <div className="border rounded-3xl bg-[#1A1A1A]">
          <div>
            <img src={assets.team2} className="p-5 h-60" alt="" />
            <div className="flex justify-center">
            <img src={assets.twitter} className="h-7" alt="" />
            </div>
          </div>
          <div className="flex mt-4 flex-col justify-center items-center ">
            <p className="text-sm font-medium">Michael Turner</p>
            <p className="text-xs  text-gray-400">Legal Councel</p>
          </div>
          <div className="px-5 py-4 ">
            <div className="flex rounded-3xl items-center border border-gray-700  bg-[#1A1A1A] justify-between px-3 py-1 gap-10">
            <p className="text-dm font-extralight">Say Hello</p>
            <img src={assets.share} className="h-7" alt="" />
            </div>
          </div>
        </div>
          <div className="border rounded-3xl bg-[#1A1A1A]">
          <div>
            <img src={assets.team3} className="p-5 h-60" alt="" />
            <div className="flex justify-center">
            <img src={assets.twitter} className="h-7" alt="" />
            </div>
          </div>
          <div className="flex mt-4 flex-col justify-center items-center ">
            <p className="text-sm font-medium">David Brown</p>
            <p className="text-xs  text-gray-400">Property Management</p>
          </div>
          <div className="px-5 py-4 ">
            <div className="flex rounded-3xl items-center border border-gray-700  bg-[#1A1A1A] justify-between px-3 py-1 gap-10">
            <p className="text-dm font-extralight">Say Hello</p>
            <img src={assets.share} className="h-7" alt="" />
            </div>
          </div>
        </div>
           <div className="border rounded-3xl bg-[#1A1A1A]">
          <div>
            <img src={assets.team4} className="p-5 h-60" alt="" />
            <div className="flex justify-center">
            <img src={assets.twitter} className="h-7" alt="" />
            </div>
          </div>
          <div className="flex mt-4 flex-col justify-center items-center ">
            <p className="text-sm font-medium">Max Mitchell</p>
            <p className="text-xs  text-gray-400">Founder</p>
          </div>
          <div className="px-5 py-4 ">
            <div className="flex rounded-3xl items-center border border-gray-700  bg-[#1A1A1A] justify-between px-3 py-1 gap-10">
            <p className="text-dm font-extralight">Say Hello</p>
            <img src={assets.share} className="h-7" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
