import React, { useState } from "react";
import { Menu, X } from "lucide-react"; // hamburger + close icons
import assets from "../assets/assets";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "Properties", path: "/properties" },
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/service" },
  ];

  return (
    <nav className="bg-[#1A1A1A] shadow-md">
      <div className="flex justify-between items-center p-4">
        {/* Logo */}
        <div className="flex gap-2 items-center">
          <img className="h-8 w-auto" src={assets.Symbol} alt="logo" />
          <p className="text-2xl text-white font-bold">Estatein</p>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 font-light text-sm text-white">
          {menuItems.map((item) => (
            <Link key={item.path} to={item.path}>
              <li className="relative cursor-pointer after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full">
                {item.name}
              </li>
            </Link>
          ))}
        </ul>

        {/* Contact Button (Desktop only) */}
        <div className="hidden md:block">
          <button className="bg-black px-4 py-2 rounded-md text-white text-sm font-light hover:bg-gray-800 transition">
            Contact Us
          </button>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} color="white" /> : <Menu size={28} color="white" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#1A1A1A] px-6 pb-4 animate-slideDown">
          <ul className="flex flex-col gap-4 font-light text-sm text-white">
            {menuItems.map((item) => (
              <Link key={item.path} to={item.path} onClick={() => setIsOpen(false)}>
                <li className="relative cursor-pointer after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full">
                  {item.name}
                </li>
              </Link>
            ))}
          </ul>

          <div className="mt-4 text-center">
            <button className="bg-black px-4 py-2 rounded-md text-white text-sm font-light hover:bg-gray-800 transition w-full">
              Contact Us
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
