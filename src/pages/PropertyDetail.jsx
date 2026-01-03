import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, MapPin } from "lucide-react";

const properties = [
  {
    id: 1,
    title: "Luxury Villa in Los Angeles",
    location: "Los Angeles, CA",
    price: "$2,500,000",
    description:
      "A stunning luxury villa with modern interiors, private pool, and panoramic city views.",
    features: ["5 Bedrooms", "4 Bathrooms", "Private Pool", "Garage"],
    img: "https://source.unsplash.com/1200x700/?villa,house",
  },
  {
    id: 2,
    title: "Modern Apartment in New York",
    location: "New York, NY",
    price: "$1,200,000",
    description:
      "A sleek modern apartment located in the heart of the city with premium amenities.",
    features: ["2 Bedrooms", "City View", "Gym Access", "24/7 Security"],
    img: "https://source.unsplash.com/1200x700/?apartment,building",
  },
];

const PropertyDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const property = properties.find(p => p.id === Number(id));

  if (!property) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        Property not found
      </div>
    );
  }

  return (
    <section className="min-h-screen bg-black text-white">

      {/* Hero Image */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative h-[60vh]"
      >
        <img
          src={property.img}
          alt={property.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />

        <button
          onClick={() => navigate(-1)}
          className="absolute top-6 left-6 flex items-center gap-2 text-sm bg-black/60 px-4 py-2 rounded-full hover:bg-black"
        >
          <ArrowLeft size={16} /> Back
        </button>
      </motion.div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-6 py-14 grid md:grid-cols-3 gap-12">

        {/* Left */}
        <div className="md:col-span-2">
          <h1 className="text-4xl font-bold mb-3">
            {property.title}
          </h1>

          <p className="flex items-center gap-2 text-gray-400 mb-6">
            <MapPin size={16} /> {property.location}
          </p>

          <p className="text-gray-300 leading-relaxed mb-8">
            {property.description}
          </p>

          <h3 className="text-xl font-semibold mb-4">Features</h3>
          <ul className="grid grid-cols-2 gap-3 text-gray-300">
            {property.features.map((feature, i) => (
              <li key={i} className="bg-white/5 p-3 rounded-lg">
                {feature}
              </li>
            ))}
          </ul>
        </div>

        {/* Right Card */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="bg-white/5 border border-white/10 rounded-2xl p-6 h-fit"
        >
          <p className="text-3xl font-bold text-[#C778DD] mb-6">
            {property.price}
          </p>

          <button className="w-full bg-[#C778DD] text-black py-3 rounded-xl font-semibold hover:opacity-90">
            Contact Agent
          </button>

          <button className="w-full mt-3 border border-[#C778DD] text-[#C778DD] py-3 rounded-xl hover:bg-[#C778DD]/10">
            Schedule Visit
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default PropertyDetail;
