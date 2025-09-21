import React, { useState } from "react";

const Header = () => {
  const [visible, setVisible] = useState(true); // Track if header is visible

  if (!visible) return null;

  return (
    <div className="relative bg-[#1A1A1A] border-b border-gray-700 py-3 px-4 bg-[url('./assets/Abstract.png')] bg-cover bg-center">
      {/* Main Banner */}
      <div className="flex flex-col md:flex-row md:justify-center items-center gap-2 md:gap-4 text-center md:text-left">
        <p className="text-[10px] sm:text-xs md:text-sm lg:text-base text-white font-light">
          ✨ Discover Your Dream Property with <span className="font-semibold">Estatein</span>
        </p>
        <a
          href="#"
          className="text-[10px] sm:text-xs md:text-sm lg:text-base text-white hover:underline"
        >
          Learn More
        </a>
      </div>

      {/* Close Icon */}
      <button
        onClick={() => setVisible(false)}
        className="absolute top-2 cursor-pointer right-3 md:top-3 md:right-7 bg-gray-600 hover:bg-gray-500 p-1.5 rounded-full flex items-center justify-center shadow-md transition"
      >
        <img
          className="w-3 md:w-4"
          src="https://cdn-icons-png.flaticon.com/128/2961/2961937.png"
          alt="close"
        />
      </button>
    </div>
  );
};

export default Header;
