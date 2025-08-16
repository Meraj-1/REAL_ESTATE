import React, { useState } from "react";
import assets from "../assets/assets";
import { faqs } from "../assets/data";


const Question = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleReadMore = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="bg-black text-white md:px-70 md:py-40">
      {/* Section Header */}
      <div className="mb-8">
        <img src={assets.star} alt="" className="w-12 mb-4" />
        <h1 className="text-4xl font-bold mb-3">Frequently Asked Questions</h1>
        <p className="text-gray-400">
          Find answers to common questions about Estatein's services, property
          listings, and the real estate process. We're here to provide clarity
          and assist you every step of the way.
        </p>
      </div>

      {/* FAQ Boxes */}
      <div className="grid md:grid-cols-3 gap-6">
        {faqs.map((faq, index) => {
          const isExpanded = expandedIndex === index;
          const shortText = faq.answer.slice(0, 100) + "...";

          return (
            <div
              key={index}
              className="bg-black border px-10 py-20 border-gray-700 p-6 rounded-xl shadow-md"
            >
              <h3 className="text-lg font-semibold mb-3">{faq.question}</h3>
              <p className="text-gray-400 text-sm mb-3">
                {isExpanded ? faq.answer : shortText}
              </p>
              <button
                onClick={() => toggleReadMore(index)}
                className="text-gray-700 border px-4 py-3 text-sm font-medium cursor-pointer rounded-lg hover:bg-gray-800 transition"
              >
                {isExpanded ? "Read Less" : "Read More"}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Question;
