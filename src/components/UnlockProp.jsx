import React from "react";
import assets from "../assets/assets";

const UnlockProp = () => {
  return (
    <div className="bg-black text-white px-10 md:px-20 pt-16">
      {/* Unlock Property Value Section */}
      <img className="h-6 mb-3" src={assets.star} alt="star icon" />
      <h1 className="text-4xl font-semibold mb-3">Unlock Property Value</h1>
      <p className="text-sm text-gray-400 mb-12">
        Selling your property should be a rewarding experience, and at Estatein, we make sure it is. 
        Our Property Selling Service is designed to maximize the value of your property, ensuring you get the best deal possible. 
        Explore the categories below to see how we can help you at every step of your selling journey.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Card 1 */}
        <div className="border border-gray-900 rounded-lg p-6">
          <div className="flex items-center gap-4 mb-3">
            <img className="h-16" src={assets.Oprion1} alt="Tenant Harmony" />
            <p className="text-xl font-bold">Tenant Harmony</p>
          </div>
          <p className="text-sm text-gray-400">
            Our Tenant Harmony service ensures a seamless rental experience for both landlords and tenants. We handle everything from tenant screening to lease agreements.
          </p>
        </div>

        {/* Card 2 */}
        <div className="border border-gray-900 rounded-lg p-6">
          <div className="flex items-center gap-4 mb-3">
            <img className="h-16" src={assets.Option2} alt="Maintenance Ease" />
            <p className="text-xl font-bold">Maintenance Ease</p>
          </div>
          <p className="text-sm text-gray-400">
            Selling a property requires more than just a listing; it demands a strategic marketing approach.
          </p>
        </div>

        {/* Card 3 */}
        <div className="border border-gray-900 rounded-lg p-6">
          <div className="flex items-center gap-4 mb-3">
            <img className="h-16" src={assets.Option3} alt="Financial Peace" />
            <p className="text-xl font-bold">Financial Peace</p>
          </div>
          <p className="text-sm text-gray-400">
            Negotiating the best deal is an art and our experts ensure you get the maximum value.
          </p>
        </div>

        {/* Card 4 */}
        <div className="border border-gray-900 rounded-lg p-6">
          <div className="flex items-center gap-4 mb-3">
            <img className="h-16" src={assets.Option4} alt="Legal Guardian" />
            <p className="text-xl font-bold">Legal Guardian</p>
          </div>
          <p className="text-sm text-gray-400">
            A successful sale is not complete until the closing; we guide you through the intricate closing process.
          </p>
        </div>

        {/* Highlight Card */}
        <div className="bg-[#1a1a1a] col-span-1 lg:col-span-2 border border-gray-900 rounded-lg p-6 bg-[url('./assets/Abstract.png')] bg-cover bg-center">
          <h2 className="text-2xl font-bold mb-3">Unlock the Value of your Property Today</h2>
          <p className="text-sm text-gray-400 mb-3">
            Ready to unlock the true value of your property? Explore our property selling service categories and let us help you achieve the best deal possible for your valuable asset.
          </p>
          <button className="bg-[#703BF7] text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default UnlockProp;
