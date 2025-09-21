import React from "react";
import assets from "../assets/assets";

const Achievements = () => {
  const achievementData = [
    {
      title: "3+ Years of Excellence",
      description:
        "With over 3 years in the industry, we've amassed a wealth of knowledge and experience, becoming a go-to resource for all things real estate.",
      icon: assets.Excellence, // Optional: add icons
    },
    {
      title: "Happy Clients",
      description:
        "Our greatest achievement is the satisfaction of our clients. Their success stories fuel our passion for what we do.",
      icon: assets.Client, // Optional: add icons
    },
    {
      title: "Industry Recognition",
      description:
        "We've earned the respect of our peers and industry leaders, with accolades and awards that reflect our commitment to excellence.",
      icon: assets.Trust, // Optional: add icons
    },
  ];

  return (
    <div className="bg-black text-white px-5 sm:px-10 lg:px-20 py-16">
      {/* Section Header */}
      <div className="max-w-2xl mb-10">
        <img src={assets.star} alt="star" className="mb-3 w-10 h-auto" />
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-medium mb-4">
          Our Achievements
        </h1>
        <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
          Our story is one of continuous growth and evolution. We started as a
          small team with big dreams, determined to create a real estate
          platform that transcended the ordinary.
        </p>
      </div>

      {/* Achievements Cards */}
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {achievementData.map((achieve, index) => (
          <div
            key={index}
            className="bg-[#1A1A1A] border border-gray-700 rounded-lg p-6 flex flex-col transition-transform transform hover:scale-105 hover:shadow-xl"
          >
            {/* Optional Icon */}
            {achieve.icon && (
              <img src={achieve.icon} alt={achieve.title} className="w-10 h-10 mb-3" />
            )}
            <h2 className="text-white text-2xl font-medium mb-3">{achieve.title}</h2>
            <p className="text-gray-400 text-sm leading-relaxed">{achieve.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Achievements;
