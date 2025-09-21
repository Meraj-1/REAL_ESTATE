import React from "react";
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
    role: "Founder",
    photo: assets.team4,
    social: assets.twitter,
  },
];

const Team = () => {
  return (
    <div className="bg-black text-white px-5 sm:px-10 lg:px-20 pt-16">
      {/* Header */}
      <div className="max-w-2xl mb-10">
        <img src={assets.star} className="h-6 mb-3" alt="star" />
        <h1 className="text-3xl font-medium mb-3">Meet the Estatein Team</h1>
        <p className="text-sm text-gray-400">
          At Estatein, our success is driven by the dedication and expertise of
          our team. Get to know the people behind our mission to make your real
          estate dreams a reality.
        </p>
      </div>

      {/* Team Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="bg-[#1A1A1A] border border-gray-700 rounded-3xl overflow-hidden flex flex-col"
          >
            <div className="flex flex-col items-center">
              <img
                src={member.photo}
                className="p-5 h-60 w-full object-cover rounded-t-3xl"
                alt={member.name}
              />
              <div className="flex justify-center mb-4">
                <img src={member.social} className="h-7" alt="social" />
              </div>
            </div>

            <div className="flex flex-col items-center mb-4">
              <p className="text-sm font-medium">{member.name}</p>
              <p className="text-xs text-gray-400">{member.role}</p>
            </div>

            <div className="px-5 pb-5">
              <button className="flex items-center justify-between w-full rounded-3xl border border-gray-700 bg-[#1A1A1A] px-3 py-2 hover:bg-gray-800 transition">
                <span className="text-sm font-light">Say Hello</span>
                <img src={assets.share} className="h-5" alt="share" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
