import React, { useState } from "react";
import assets from "../assets/assets";
import { faqs } from "../assets/data";

const Question = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleReadMore = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="bg-black text-white px-5 sm:px-10 lg:px-20 py-10 lg:py-16">
      {/* Section Header */}
      <div className="mb-8 max-w-3xl">
        <img src={assets.star} alt="star" className="w-10 mb-4" />
        <h1 className="text-3xl sm:text-4xl font-bold mb-3">
          Frequently Asked Questions
        </h1>
        <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
          Find answers to common questions about Estatein's services, property
          listings, and the real estate process. We're here to provide clarity
          and assist you every step of the way.
        </p>
      </div>

      {/* FAQ Boxes */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {faqs.map((faq, index) => {
          const isExpanded = expandedIndex === index;
          const shortText = faq.answer.length > 100 ? faq.answer.slice(0, 100) + "..." : faq.answer;

          return (
            <div
              key={index}
              className="bg-[#111] border border-gray-700 p-6 rounded-xl shadow-md hover:shadow-lg transition"
            >
              <h3 className="text-lg font-semibold mb-3">{faq.question}</h3>
              <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                {isExpanded ? faq.answer : shortText}
              </p>
              {faq.answer.length > 100 && (
                <button
                  onClick={() => toggleReadMore(index)}
                  className="text-[#703BF7] border border-gray-700 px-4 py-2 text-sm font-medium cursor-pointer rounded-lg hover:bg-gray-800 transition"
                >
                  {isExpanded ? "Read Less" : "Read More"}
                </button>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Question;
