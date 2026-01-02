import React from "react";
import { motion } from "framer-motion";

const NotFound = () => {
  return (
    <section className="min-h-screen bg-black flex flex-col items-center justify-center text-center px-4">
      {/* Animated 404 */}
      <motion.h1
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, type: "spring", stiffness: 120 }}
        className="text-[120px] sm:text-[160px] font-extrabold text-[#C778DD] mb-6 select-none"
      >
        404
      </motion.h1>

      {/* Message */}
      <motion.p
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="text-white text-lg sm:text-xl mb-10 max-w-md"
      >
        Oops! The page you are looking for doesn’t exist.
        <br />
        But don’t worry, you can go back to the homepage and continue exploring.
      </motion.p>

      {/* CTA Button */}
      <motion.a
        href="/"
        whileHover={{ scale: 1.05, backgroundColor: "#C778DD", color: "#000" }}
        whileTap={{ scale: 0.95 }}
        className="px-8 py-3 border border-[#C778DD] rounded-md text-[#C778DD] font-semibold transition-colors duration-300"
      >
        Go Home
      </motion.a>

      {/* Optional floating background dots */}
      <motion.div
        animate={{ x: [-20, 20, -20], y: [-10, 10, -10] }}
        transition={{ repeat: Infinity, duration: 6 }}
        className="absolute top-10 left-10 w-24 h-24 bg-[#C778DD]/20 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ x: [20, -20, 20], y: [10, -10, 10] }}
        transition={{ repeat: Infinity, duration: 8 }}
        className="absolute bottom-10 right-10 w-32 h-32 bg-indigo-500/20 rounded-full blur-3xl"
      />
    </section>
  );
};

export default NotFound;
