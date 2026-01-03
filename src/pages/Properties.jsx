import React, { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Search } from "lucide-react";

const properties = [
  {
    id: 1,
    title: "Luxury Villa in Los Angeles",
    location: "Los Angeles",
    price: 2500000,
    img: "https://source.unsplash.com/600x400/?villa,house",
  },
  {
    id: 2,
    title: "Modern Apartment in New York",
    location: "New York",
    price: 1200000,
    img: "https://source.unsplash.com/600x400/?apartment,building",
  },
  {
    id: 3,
    title: "Beachfront House in Miami",
    location: "Miami",
    price: 3100000,
    img: "https://source.unsplash.com/600x400/?beach,house",
  },
  {
    id: 4,
    title: "Cozy Cabin in Aspen",
    location: "Aspen",
    price: 950000,
    img: "https://source.unsplash.com/600x400/?cabin,mountain",
  },
];

const Properties = () => {
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("All");
  const [maxPrice, setMaxPrice] = useState("");

  const locations = ["All", ...new Set(properties.map(p => p.location))];

  const filteredProperties = useMemo(() => {
    return properties.filter(p => {
      const matchesSearch =
        p.title.toLowerCase().includes(search.toLowerCase()) ||
        p.location.toLowerCase().includes(search.toLowerCase());

      const matchesLocation =
        location === "All" || p.location === location;

      const matchesPrice =
        !maxPrice || p.price <= Number(maxPrice);

      return matchesSearch && matchesLocation && matchesPrice;
    });
  }, [search, location, maxPrice]);

  return (
    <section className="min-h-screen bg-black text-white py-20 px-4 md:px-16">

      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-[#C778DD] mb-3">
          Explore Properties
        </h2>
        <p className="text-gray-400 max-w-xl mx-auto">
          Search and filter premium properties tailored to your needs.
        </p>
      </div>

      {/* Filters */}
      <div className="flex flex-col md:flex-row gap-4 max-w-4xl mx-auto mb-14">

        {/* Search */}
        <div className="relative flex-1">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
          <input
            type="text"
            placeholder="Search by title or location"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-11 pr-4 py-3 rounded-xl bg-white/5 border border-white/10
                       focus:outline-none focus:ring-2 focus:ring-[#C778DD]"
          />
        </div>

        {/* Location */}
        <select
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="py-3 px-4 rounded-xl bg-white/5 border border-white/10
                     focus:outline-none focus:ring-2 focus:ring-[#C778DD]"
        >
          {locations.map(loc => (
            <option key={loc} value={loc} className="bg-black">
              {loc}
            </option>
          ))}
        </select>

        {/* Price */}
        <select
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
          className="py-3 px-4 rounded-xl bg-white/5 border border-white/10
                     focus:outline-none focus:ring-2 focus:ring-[#C778DD]"
        >
          <option value="" className="bg-black">Any Price</option>
          <option value="1000000" className="bg-black">Under $1M</option>
          <option value="2000000" className="bg-black">Under $2M</option>
          <option value="3000000" className="bg-black">Under $3M</option>
        </select>
      </div>

      {/* Listings */}
      {filteredProperties.length === 0 ? (
        <p className="text-center text-gray-400">
          No properties found. Try adjusting filters.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredProperties.map(property => (
            <motion.div
              key={property.id}
              whileHover={{ y: -8, scale: 1.03 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="group bg-white/5 border border-white/10 rounded-2xl
                         overflow-hidden cursor-pointer backdrop-blur"
            >
              <div className="relative overflow-hidden">
                <img
                  src={property.img}
                  alt={property.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition duration-500"
                />
                <span className="absolute top-3 right-3 bg-black/70 text-xs px-3 py-1 rounded-full">
                  {property.location}
                </span>
              </div>

              <div className="p-5">
                <h3 className="text-lg font-semibold mb-1">
                  {property.title}
                </h3>
                <p className="text-gray-400 text-sm mb-2">
                  ${property.price.toLocaleString()}
                </p>
                <button className="mt-3 text-sm text-[#C778DD] hover:underline">
                  View Details →
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </section>
  );
};

export default Properties;
