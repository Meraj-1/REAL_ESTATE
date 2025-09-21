import React from "react";
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
    <div className="bg-black text-white px-5 sm:px-10 lg:px-20 pt-16">
      {/* Header */}
      <div className="flex items-center mb-6">
        <img src={assets.star} className="h-6 mr-4" alt="star" />
        <h1 className="text-2xl font-medium">Our Valued Clients</h1>
      </div>
      <p className="text-gray-400 text-sm mb-10">
        At Estatein, we have had the privilege of working with a diverse range
        of clients across various industries. Here are some of the clients
        we've had the pleasure of serving.
      </p>

      {/* Client Cards */}
      <div className="flex flex-col md:flex-row gap-6">
        {clientData.map((client, index) => (
          <div
            key={index}
            className="border-2 border-gray-600 p-6 md:p-10 rounded-lg flex-1 flex flex-col"
          >
            <div className="flex justify-between mb-4">
              <div>
                <p className="text-lg text-gray-500 font-medium">Since {client.since}</p>
                <h2 className="text-2xl font-medium mt-2">{client.name}</h2>
              </div>
              <div className="bg-[#1A1A1A] rounded-xl px-4 py-2">
                <button className="text-xs font-medium">Visit Website</button>
              </div>
            </div>

            <div className="flex flex-col md:flex-row justify-between mb-6 gap-4">
              <div>
                <p className="text-sm text-gray-400">Domain</p>
                <p className="text-sm mt-1">{client.domain}</p>
              </div>
              <div>
                <p className="text-sm text-gray-400">Category</p>
                <p className="text-sm mt-1">{client.category}</p>
              </div>
            </div>

            <div className="p-4 bg-[#1A1A1A] rounded-lg">
              <p className="text-sm text-gray-400 mb-2">What They Said</p>
              <p className="text-white text-sm">{client.testimonial}</p>
            </div>
          </div>
        ))}
      </div>

      {/* CTA Section */}
      <div className="border-t border-b border-gray-400 mt-16 flex flex-col md:flex-row justify-between items-center gap-6 py-10">
        <div className="flex-1">
          <h2 className="text-2xl font-medium mb-2">Start Your Real Estate Journey Today</h2>
          <p className="text-sm text-gray-400">
            Your dream property is just a click away. Whether you're looking for a
            new home, a strategic investment, or expert real estate advice, Estatein
            is here to assist you every step of the way. Explore our properties or
            get personalized assistance from our team.
          </p>
        </div>
        <div>
          <button className="bg-[#703BF7] px-10 py-3 rounded-lg text-white text-sm mt-4">
            Explore Properties
          </button>
        </div>
      </div>
    </div>
  );
};

export default Clients;
