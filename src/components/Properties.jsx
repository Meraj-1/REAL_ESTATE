import React, { useState } from "react";
import data from "../assets/data"; // apna data.js import
import assets from "../assets/assets";

const Properties = () => {
  const [startIndex, setStartIndex] = useState(0);
  const itemsPerPage = 3;

  const handleNext = () => {
    // agar end aaya to wapas 0 se start karega
    setStartIndex((prev) =>
      prev + itemsPerPage >= data.length ? 0 : prev + itemsPerPage
    );
  };

  const visibleProperties = data.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="px-10 py-10 md:px-70 md:py-40 bg-black">
      <div className="mb-6">
        <img src={assets.star} alt="star" className="w-13 mb-4 h-auto" />
        <h1 className="text-4xl font-bold text-white">Featured Properties</h1>
      </div>
      <p className="text-gray-400 text-sm mb-6">
      Explore our handpicked selection of featured properties. Each listing offers a glimpse into exceptional homes and investments available through Estatein. Click "View Details" for more information.      </p>

      {/* Property Cards (3 per row) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {visibleProperties.map((property, index) => (
          <div
            key={index}
            className="border p-6 rounded-xl shadow-md overflow-hidden bg-black border-gray-800 "
          >
            <img
              src={property.photo}
              alt={property.name}
              className="w-full rounded-xl h-68 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl text-white font-bold mb-2">{property.name}</h2>
              <p className="text-gray-600 text-sm mb-2">{property.location}</p>
              <p className="text-gray-600 text-xs mb-3">{property.details}</p>
          
              {/* <div className="flex justify-between text-sm text-gray-500 mb-3">
                {/* <span>{property.bedrooms} 🛏️</span>
                <span>{property.bathrooms} 🛁</span>
                <span>{property.type}</span> */}
              {/* </div> */} 
              <p className="text-xs text-gray-300">Price</p>
              <div className="flex gap-3">
              <p className="font-bold py-2 text-blue-600">
                ₹{property.price.toLocaleString()}
              </p>
              <button className="bg-[#703BF7] cursor-pointer px-20 py-2 text-white  rounded-lg hover:bg-gray-800 transition">
                View Details
              </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Next Button */}
      <div className="flex justify-center mt-8">
        <button
          onClick={handleNext}
          className="bg-[#703BF7] text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Next Properties
        </button>
      </div>
    </div>
  );
};

export default Properties;


//  