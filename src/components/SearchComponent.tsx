import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { motion } from "framer-motion";

const SearchComponent = () => {
  const [searchQuery, setSearchQuery] = useState("");

  // Slide in animation
  const slideIn = {
    initial: { opacity: 0, x: -20 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.5 },
  };

  return (
    <div className="grid place-items-center min-h-[calc(100vh-104px)] px-4">
      <div className="text-center space-y-8 w-full">
        <motion.h1 {...slideIn} className="text-4xl lg:text-6xl font-bold">
          Find your MIDI 🎹
        </motion.h1>

        <motion.p
          {...slideIn}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-lg lg:text-2xl mt-8 lg:mt-16"
        >
          Type the name of the MIDI you&apos;re looking for.
        </motion.p>

        <motion.div
          {...slideIn}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="relative w-full max-w-xs lg:max-w-md mx-auto"
        >
          <motion.div
            className="absolute inset-0 rounded-lg lg:rounded-xl bg-gradient-to-r from-pink-500 to-blue-500 opacity-50"
            animate={{
              opacity: [0.3, 0.15, 0.3],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "linear",
            }}
          />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search our MIDI-files"
            className="relative w-full px-4 lg:px-5 py-2.5 lg:py-3 pl-10 lg:pl-12 rounded-lg lg:rounded-xl 
                     bg-white/10 backdrop-blur-sm border border-white/20 
                     text-white placeholder-white/70 text-sm lg:text-base
                     focus:outline-none focus:ring-2 focus:ring-white/30"
          />
          <FaSearch className="absolute left-3 lg:left-4 top-1/2 -translate-y-1/2 text-white/70 text-sm lg:text-base" />
        </motion.div>

        <motion.div
          {...slideIn}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="space-y-2 text-lg lg:text-2xl mt-8 lg:mt-16"
        >
          <p>Not sure what you&apos;re looking for?</p>
          <a href="/browse" className="underline hover:text-white/80">
            Browse all MIDI-files
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default SearchComponent;
