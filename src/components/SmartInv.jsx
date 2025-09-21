import React from 'react';
import assets from '../assets/assets';

const SmartInv = () => {
  return (
    <div className="bg-black text-white px-5 md:px-20 lg:px-40 pt-20 md:pt-40 flex flex-col lg:flex-row gap-10">
      
      {/* Left Section */}
      <div className="flex-1 flex flex-col gap-10">
        <div>
          <img className="h-7 mb-2" src={assets.star} alt="" />
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            Smart Investments, Informed Decisions
          </h1>
          <p className="pt-5 text-sm md:text-base text-gray-400">
            Building a real estate portfolio requires a strategic approach.
            Estatein's Investment Advisory Service empowers you to make smart investments and informed decisions.
          </p>
        </div>

        <div className="bg-[#1a1a1a] rounded-2xl p-5 md:p-10 bg-[url('./assets/Abstract.png')] bg-cover bg-center">
          <h1 className="text-lg md:text-xl font-semibold">
            Unlock Your Investment Potential
          </h1>
          <p className="text-sm md:text-base pt-3 text-gray-400">
            Explore our Property Management Service categories and let us handle the complexities while you enjoy the benefits of property ownership.
          </p>
          <div className="flex justify-center md:justify-start pt-6">
            <button className="bg-black text-gray-500 px-8 py-2 md:px-12 md:py-3 rounded-lg hover:bg-gray-900 transition">
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-5">
        {/* Card 1 */}
        <div className="bg-black border border-gray-800 rounded-2xl flex flex-col justify-center p-5 md:p-8">
          <div className="flex items-center gap-3">
            <img className="h-10 md:h-15" src={assets.Oprion1} alt="" />
            <h1 className="text-lg md:text-xl font-bold">Market Insight</h1>
          </div>
          <p className="text-sm md:text-base text-gray-400 pt-3 md:pt-6">
            Make investment decisions with confidence. Our ROI Assessment services evaluate the potential returns on your investments.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-black border border-gray-800 rounded-2xl flex flex-col justify-center p-5 md:p-8">
          <div className="flex items-center gap-3">
            <img className="h-10 md:h-15" src={assets.Option2} alt="" />
            <h1 className="text-lg md:text-xl font-bold">ROI Assessment</h1>
          </div>
          <p className="text-sm md:text-base text-gray-400 pt-3 md:pt-6">
            Stay ahead of market trends with our expert Market Analysis. We provide in-depth insights into real estate market conditions.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-black border border-gray-800 rounded-2xl flex flex-col justify-center p-5 md:p-8">
          <div className="flex items-center gap-3">
            <img className="h-10 md:h-15" src={assets.Option3} alt="" />
            <h1 className="text-lg md:text-xl font-bold">Customized Strategies</h1>
          </div>
          <p className="text-sm md:text-base text-gray-400 pt-3 md:pt-6">
            Every investor is unique, and so are their goals. We develop Customized Investment Strategies tailored to your specific needs.
          </p>
        </div>

        {/* Card 4 */}
        <div className="bg-black border border-gray-800 rounded-2xl flex flex-col justify-center p-5 md:p-8">
          <div className="flex items-center gap-3">
            <img className="h-10 md:h-15" src={assets.Option4} alt="" />
            <h1 className="text-lg md:text-xl font-bold">Diversification Mastery</h1>
          </div>
          <p className="text-sm md:text-base text-gray-400 pt-3 md:pt-6">
            Diversify your real estate portfolio effectively. Our experts guide you in spreading your investments across various property types and locations.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SmartInv;
