import React, { useState } from "react";
import data from "../assets/data"; // Your data.js
import assets from "../assets/assets";
import { BedDouble ,Bath, Hotel} from "lucide-react";
const Properties = () => {
  const [startIndex, setStartIndex] = useState(0);
  const itemsPerPage = 3;

  const handleNext = () => {
    setStartIndex((prev) =>
      prev + itemsPerPage >= data.length ? 0 : prev + itemsPerPage
    );
  };

  const visibleProperties = data.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="px-5 sm:px-10 lg:px-20 py-10 lg:py-16 bg-black">
      {/* Section Heading */}
      <div className="mb-6">
        <img src={assets.star} alt="star" className="w-10 h-auto mb-4" />
        <h1 className="text-3xl sm:text-4xl font-bold text-white">
          Featured Properties
        </h1>
      </div>

      <p className="text-gray-400 text-sm sm:text-base mb-6 max-w-3xl">
        Explore our handpicked selection of featured properties. Each listing
        offers a glimpse into exceptional homes and investments available
        through Estatein. Click "View Details" for more information.
      </p>
 
      {/* Property Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {visibleProperties.map((property, index) => (
          <div
            key={index}
            className="border cursor-pointer border-gray-800 bg-black rounded-xl shadow-md hover:shadow-lg hover:scale-[1.02] transition-transform"
          >
            <img
              src={property.image}
              alt={property.name}
              className="w-full h-52 sm:h-60 object-cover rounded-t-xl"
            />
            <div className="p-4 flex flex-col justify-between">
              <h2 className="text-lg sm:text-xl text-white font-bold mb-1">
                {property.name}
              </h2>
              <p className="text-gray-500 text-sm mb-1">{property.location}</p>

              <p className="text-gray-400 text-xs mb-3">{property.details}</p>
              <div>
                <div className="flex gap-2 flex-wrap lg:gap-2 text-white mb-4">
                 <div className="flex items-center gap-1 bg-[#1a1a1a] px-8 py-[1px] text-xs rounded-2xl"><BedDouble size={20} className="" color="#f2eded" />{property.bedroom}-Bedroom</div>
                 <div className="flex items-center gap-1 bg-[#1a1a1a] px-8 py-[1px] text-xs  rounded-2xl"><Bath size={20} color="#f2eded" />{property.bathroom}-Bathroom</div>
                 <div className="flex items-center gap-1 bg-[#1a1a1a] px-8 py-[1px]  text-xs  rounded-2xl"> <Hotel size={20} color="#f2eded" />{property.type}</div>
                </div>
             </div>
              {/* Price + Button */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                <div>
                  <p className="text-xs text-gray-300">Price</p>
                  <p className="font-bold text-white">
                    ₹{property.price.toLocaleString()}
                  </p>
                </div>
                <button className="bg-[#703BF7] cursor-pointer px-5 py-2 rounded-lg text-white hover:bg-gray-800 transition">
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
          className="bg-[#703BF7] cursor-pointer text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition"
        >
          Next ➡
        </button>
      </div>
    </div>
  );
};

export default Properties;
