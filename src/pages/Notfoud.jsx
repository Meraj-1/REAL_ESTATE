import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <section className="relative min-h-screen bg-black overflow-hidden
                        flex items-center justify-center px-6 text-center">

      {/* Animated background grid */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,#ffffff12_1px,transparent_0)]
                      bg-[size:40px_40px] opacity-20" />

      {/* Floating glows */}
      <motion.div
        animate={{ x: [-40, 40, -40], y: [-20, 20, -20] }}
        transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
        className="absolute -top-32 -left-32 w-[500px] h-[500px]
                   bg-purple-600/25 rounded-full blur-[120px]"
      />
      <motion.div
        animate={{ x: [30, -30, 30], y: [20, -20, 20] }}
        transition={{ repeat: Infinity, duration: 14, ease: "easeInOut" }}
        className="absolute -bottom-32 -right-32 w-[500px] h-[500px]
                   bg-indigo-500/25 rounded-full blur-[120px]"
      />

      {/* Content */}
      <div className="relative z-10 max-w-2xl">
        
        {/* 404 */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-[120px] sm:text-[160px] font-extrabold tracking-tight
                     bg-gradient-to-b from-white via-[#C778DD] to-[#6E3CBC]
                     bg-clip-text text-transparent select-none"
        >
          404
        </motion.h1>

        {/* Text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mt-4 text-gray-300 text-base sm:text-lg leading-relaxed"
        >
          You’ve reached a page that doesn’t exist — or maybe it moved
          into another dimension.
          <br />
          Let’s get you back on track.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-10 flex justify-center"
        >
          <Link
            to="/"
            className="px-8 py-3 rounded-full font-semibold text-sm
                       bg-white/10 backdrop-blur-md border border-white/20
                       text-white hover:bg-gradient-to-r hover:from-purple-500
                       hover:to-indigo-600 hover:border-transparent
                       transition-all duration-300"
          >
            Back to Home
          </Link>
        </motion.div>

      </div>
    </section>
  );
};

export default NotFound;
