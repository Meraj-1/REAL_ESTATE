import React from 'react';
import { useState } from 'react';

const Header = () => {

  const [visible, setVisible] = useState(true); // Track if header is visible

  if (!visible) return null;
  return (
    <div className="bg-[url('./assets/Abstract.png')] bg-gray-900 border-b-1  border-gray-700 py-3 relative">
      {/* Main Banner */}
      <div className="flex justify-center items-center gap-4">
        <p className="text-white font-thin">
          ✨ Discover Your Dream Property with Estatein
        </p>
        <a
          href="#"
          className="text-white hover:underline"
        >
          Learn More
        </a>
      </div>

      {/* Icon in corner */}
      <div className="fixed top-2 right-7 bg-gray-500 p-2 rounded-full flex items-center justify-center shadow-md">
        <img
          className="w-3 cursor-pointer"
          onClick={() => setVisible(false)}
          src="https://cdn-icons-png.flaticon.com/128/2961/2961937.png"
          alt="icon"
        />
      </div>
    </div>
  );
};

export default Header;
