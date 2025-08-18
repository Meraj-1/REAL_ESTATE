import React from 'react'
import assets from '../assets/assets'

const Footer = () => {
  return (
    <footer className="bg-black text-white md:px-20 md:py-16 px-6 py-10">
      {/* Top Section */}
      <div className="grid md:grid-cols-4 gap-10">
        {/* Logo + Brand */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <img src={assets.Symbol} className="h-8 w-auto" alt="Estatein Logo" />
            <p className="font-bold text-2xl">Estatein</p>
          </div>
          <p className="text-gray-400 text-sm">
            Your trusted partner in real estate. Discover your dream property with us.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold text-lg mb-3">Quick Links</h3>
          <ul className="space-y-2 text-gray-400">
            <li><a href="#" className="hover:text-white">Home</a></li>
            <li><a href="#" className="hover:text-white">About Us</a></li>
            <li><a href="#" className="hover:text-white">Properties</a></li>
            <li><a href="#" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="font-semibold text-lg mb-3">Services</h3>
          <ul className="space-y-2 text-gray-400">
            <li><a href="#" className="hover:text-white">Buy Property</a></li>
            <li><a href="#" className="hover:text-white">Sell Property</a></li>
            <li><a href="#" className="hover:text-white">Rent Property</a></li>
            <li><a href="#" className="hover:text-white">Consultation</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="font-semibold text-lg mb-3">Newsletter</h3>
          <p className="text-gray-400 text-sm mb-4">Stay updated with our latest listings.</p>
          <div className="flex">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="px-3 py-2 w-full rounded-l-lg text-black focus:outline-none"
            />
            <button className="bg-blue-600 px-4 py-2 rounded-r-lg hover:bg-blue-700">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-700 mt-10 pt-6 flex justify-between text-gray-500 text-sm">
        <p>© {new Date().getFullYear()} Estatein. All rights reserved.</p>
        <p>Privacy Policy | Terms & Conditions</p>
      </div>
    </footer>
  )
}

export default Footer
