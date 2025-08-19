import React from "react";
import assets from "../assets/assets";
import CountUp from "../animated/CountUp";
const Journey = () => {
  return (
    <div className="bg-black text-white flex gap-30 pt-20 md:px-70">
      <div>
        <img src={assets.star} alt="" className="mb-3" />
        <h1 className="text-white  text-3xl font-medium">Our Journey</h1>
        <p className="text-gray-400 text-sm mt-4">
          Our story is one of continuous growth and evolution. We started as a
          small team with big
          <br /> dreams, determined to create a real estate platform that
          transcended the ordinary. Over the
          <br /> years, we've expanded our reach, forged valuable partnerships,
          and gained the trust of <br />
          countless clients.
        </p>
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
                       className="count-up-text text-white text-4xl font-bold"
                     />
                     <span className="text-3xl font-extrabold text-white ml-1">+</span>
                   </div>
                   <p className="font-extralight text-white text-sm mt-2">Years of Experience</p>
                 </div>
               </div>
      </div>
      <div className="">
        <div className="bg-url('../assets/Abstract.png')">
        <img src={assets.about} alt="" className="w- h-120" />
      </div>
      </div>
    </div>
  );
};

export default Journey;
