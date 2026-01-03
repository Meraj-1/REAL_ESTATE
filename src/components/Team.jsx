import React from "react";
import { motion } from "framer-motion";
import assets from "../assets/assets";

const teamMembers = [
  {
    name: "Sarah Johnson",
    role: "Founder",
    photo: assets.team1,
    social: assets.twitter,
  },
  {
    name: "Michael Turner",
    role: "Legal Counsel",
    photo: assets.team2,
    social: assets.twitter,
  },
  {
    name: "David Brown",
    role: "Property Management",
    photo: assets.team3,
    social: assets.twitter,
  },
  {
    name: "Max Mitchell",
    role: "Co-Founder",
    photo: assets.team4,
    social: assets.twitter,
  },
];

const Team = () => {
  return (
    <section className="bg-black text-white px-5 sm:px-10 lg:px-20 py-20">

      {/* Header */}
      <div className="max-w-3xl mx-auto text-center mb-16">
        <img src={assets.star} className="h-6 mb-3 mx-auto" alt="star" />
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">
          Meet the Estatein Team
        </h1>
        <p className="text-gray-400 text-sm sm:text-base max-w-xl mx-auto">
          Our success is driven by the dedication and expertise of our team. Get to know the people behind our mission to make your real estate dreams a reality.
        </p>
      </div>

      {/* Team Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {teamMembers.map((member, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.15 }}
            className="bg-[#1A1A1A] border border-gray-700 rounded-3xl overflow-hidden
                       flex flex-col shadow-lg hover:shadow-purple-600/40 transition-transform transform
                       hover:-translate-y-2"
          >
            {/* Photo */}
            <div className="relative overflow-hidden rounded-t-3xl">
              <img
                src={member.photo}
                alt={member.name}
                className="w-full h-60 object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Social */}
            <div className="flex justify-center -mt-8 mb-4">
              <a href="#" className="bg-gradient-to-r from-purple-500 to-indigo-500 p-2 rounded-full hover:scale-110 transition-transform">
                <img src={member.social} alt="social" className="h-6 w-6" />
              </a>
            </div>

            {/* Name & Role */}
            <div className="text-center mb-6 px-4">
              <p className="text-lg font-semibold">{member.name}</p>
              <p className="text-gray-400 text-sm">{member.role}</p>
            </div>

            {/* CTA Button */}
            <div className="px-5 pb-5">
              <button className="w-full flex items-center justify-center gap-2 rounded-3xl border border-purple-600
                                 bg-gradient-to-r from-purple-600 to-indigo-600 text-black font-semibold py-2
                                 hover:opacity-90 transition-all">
                Say Hello
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Team;
