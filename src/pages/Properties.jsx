import React from "react";
import { motion } from "framer-motion";

// Example property data
const properties = [
  {
    id: 1,
    title: "Luxury Villa in Los Angeles",
    location: "Los Angeles, CA",
    price: "$2,500,000",
    img: "https://source.unsplash.com/600x400/?villa,house",
  },
  {
    id: 2,
    title: "Modern Apartment in New York",
    location: "New York, NY",
    price: "$1,200,000",
    img: "https://source.unsplash.com/600x400/?apartment,building",
  },
  {
    id: 3,
    title: "Beachfront House in Miami",
    location: "Miami, FL",
    price: "$3,100,000",
    img: "https://source.unsplash.com/600x400/?beach,house",
  },
  {
    id: 4,
    title: "Cozy Cabin in Aspen",
    location: "Aspen, CO",
    price: "$950,000",
    img: "https://source.unsplash.com/600x400/?cabin,mountain",
  },
];

const Properties = () => {
  return (
    <section className="min-h-screen bg-black text-white py-20 px-4 md:px-16">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-[#C778DD] mb-2">Properties</h2>
        <p className="text-gray-400 max-w-lg mx-auto">
          Explore our curated list of exclusive properties. Click on any card for details.
        </p>
      </div>

      {/* Property Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {properties.map((property) => (
          <motion.div
            key={property.id}
            whileHover={{ scale: 1.05, y: -5 }}
            className="bg-white/5 backdrop-blur border border-white/10 rounded-2xl overflow-hidden cursor-pointer shadow-lg hover:shadow-[#C778DD]/40 transition"
          >
            <img
              src={property.img}
              alt={property.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-5">
              <h3 className="text-lg font-semibold text-white mb-2">
                {property.title}
              </h3>
              <p className="text-gray-400 text-sm mb-2">{property.location}</p>
              <p className="text-[#C778DD] font-bold">{property.price}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Properties;
