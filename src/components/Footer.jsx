import React from 'react'
import assets from '../assets/assets'
import { motion } from 'framer-motion'

const Footer = () => {
  return (
    <footer className="relative bg-black text-white md:px-20 md:py-16 px-6 py-10 overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-[-50px] left-[-50px] w-[250px] h-[250px] bg-[#C778DD]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-[-50px] right-[-50px] w-[300px] h-[300px] bg-indigo-500/20 rounded-full blur-3xl pointer-events-none" />

      {/* Top Section */}
      <div className="grid md:grid-cols-4 gap-10 relative z-10">
        {/* Logo + Brand */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <img src={assets.Symbol} className="h-8 w-auto" alt="Estatein Logo" />
            <p className="font-bold text-2xl">Estatein</p>
          </div>
          <p className="text-gray-400 text-sm leading-relaxed">
            Your trusted partner in real estate. Discover your dream property with us.
          </p>

          {/* Social Icons */}
          <div className="flex gap-4 mt-4">
            <a href="https://www.linkedin.com" className="hover:scale-110 transition-transform">
              <img src={assets.Linkedin} alt="LinkedIn" className="w-7 h-7" />
            </a>
            <a href="https://twitter.com" className="hover:scale-110 transition-transform">
              <img src={assets.Twitter} alt="Twitter" className="w-7 h-7" />
            </a>
            <a href="https://github.com" className="hover:scale-110 transition-transform">
              <img src={assets.github} alt="GitHub" className="w-7 h-7" />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold text-lg mb-3">Quick Links</h3>
          <ul className="space-y-2 text-gray-400">
            {["Home", "About Us", "Properties", "Contact"].map((link, i) => (
              <li key={i}>
                <a href={`#${link.replace(/\s/g, "").toLowerCase()}`} 
                   className="hover:text-[#C778DD] transition-colors">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="font-semibold text-lg mb-3">Services</h3>
          <ul className="space-y-2 text-gray-400">
            {["Buy Property", "Sell Property", "Rent Property", "Consultation"].map((service, i) => (
              <li key={i}>
                <a href="#" className="hover:text-[#C778DD] transition-colors">{service}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="font-semibold text-lg mb-3">Newsletter</h3>
          <p className="text-gray-400 text-sm mb-4">Stay updated with our latest listings.</p>
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="flex rounded-lg overflow-hidden shadow-lg bg-white/10 backdrop-blur-md border border-white/20"
          >
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="px-3 py-2 w-full text-black focus:outline-none bg-transparent placeholder-gray-500"
            />
            <button className="bg-gradient-to-r from-[#C778DD] to-indigo-500 px-4 py-2 font-semibold text-white hover:scale-105 transition-transform">
              Subscribe
            </button>
          </motion.div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-700 mt-12 pt-6 flex flex-col md:flex-row justify-between text-gray-500 text-sm gap-2 relative z-10">
        <p>© {new Date().getFullYear()} Estatein. All rights reserved.</p>
        <p className="hover:text-[#C778DD] transition-colors">Privacy Policy | Terms & Conditions</p>
      </div>
    </footer>
  )
}

export default Footer
