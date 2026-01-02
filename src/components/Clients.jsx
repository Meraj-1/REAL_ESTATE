import React from "react";
import { motion } from "framer-motion";
import assets from "../assets/assets";

const clientData = [
  {
    name: "ABC Corporation",
    since: "2019",
    domain: "Commercial Real Estate",
    category: "Luxury Home Development",
    testimonial:
      "Estatein's expertise in finding the perfect office space for our expanding operations was invaluable. They truly understand our business needs.",
  },
  {
    name: "GreenTech Enterprises",
    since: "2018",
    domain: "Commercial Real Estate",
    category: "Retail Space",
    testimonial:
      "Estatein's ability to identify prime retail locations helped us expand our brand presence. They are a trusted partner in our growth.",
  },
];

const Clients = () => {
  return (
    <section className="relative bg-black text-white px-5 sm:px-10 lg:px-20 py-20 overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute -top-16 -left-16 w-[300px] h-[300px] bg-[#703BF7]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-16 -right-16 w-[400px] h-[400px] bg-[#C778DD]/20 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col items-center text-center mb-16"
      >
        <img src={assets.star} className="h-8 mb-3" alt="star" />
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#C778DD] mb-4">
          Our Valued Clients
        </h1>
        <p className="text-gray-400 max-w-2xl">
          At Estatein, we have had the privilege of working with a diverse range of clients across various industries. Here are some of the clients we've had the pleasure of serving.
        </p>
      </motion.div>

      {/* Client Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {clientData.map((client, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            whileHover={{ scale: 1.03, y: -5 }}
            className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl p-8 flex flex-col justify-between hover:shadow-[#C778DD]/50 transition"
          >
            <div className="flex justify-between items-start mb-6">
              <div>
                <p className="text-gray-400 text-sm">Since {client.since}</p>
                <h2 className="text-white text-2xl font-semibold mt-1">{client.name}</h2>
              </div>
              <div className="bg-white/5 px-4 py-2 rounded-xl hover:bg-[#C778DD]/20 transition cursor-pointer">
                <button className="text-xs font-medium text-white">Visit Website</button>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row justify-between gap-4 mb-6">
              <div>
                <p className="text-gray-400 text-xs">Domain</p>
                <p className="text-sm mt-1">{client.domain}</p>
              </div>
              <div>
                <p className="text-gray-400 text-xs">Category</p>
                <p className="text-sm mt-1">{client.category}</p>
              </div>
            </div>

            <div className="p-4 bg-white/5 backdrop-blur-md rounded-lg">
              <p className="text-gray-400 text-xs mb-2">What They Said</p>
              <p className="text-white text-sm leading-relaxed">{client.testimonial}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* CTA Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="mt-20 border-t border-b border-white/20 py-12 flex flex-col md:flex-row justify-between items-center gap-6"
      >
        <div className="flex-1">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-3">Start Your Real Estate Journey Today</h2>
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
            Your dream property is just a click away. Whether you're looking for a new home, a strategic investment, or expert real estate advice, Estatein is here to assist you every step of the way.
          </p>
        </div>
        <div>
          <button className="bg-gradient-to-r from-[#C778DD] to-[#703BF7] px-10 py-3 rounded-lg text-white font-semibold hover:scale-105 hover:shadow-lg transition">
            Explore Properties
          </button>
        </div>
      </motion.div>
    </section>
  );
};

export default Clients;
