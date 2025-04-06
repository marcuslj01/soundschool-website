import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

const SearchComponent = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="grid place-items-center min-h-[calc(100vh-104px)] px-4">
      <div className="text-center space-y-8 w-full">
        <h1 className="text-4xl lg:text-6xl font-bold">Find your MIDI 🎹</h1>

        <p className="text-lg lg:text-2xl mt-8 lg:mt-16">
          Type the name of the MIDI you&apos;re looking for.
        </p>

        <div className="relative w-full max-w-xs lg:max-w-md mx-auto">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search our MIDI-files"
            className="w-full px-4 lg:px-5 py-2.5 lg:py-3 pl-10 lg:pl-12 rounded-lg lg:rounded-xl 
                     bg-white/10 backdrop-blur-sm border border-white/20 
                     text-white placeholder-white/70 text-sm lg:text-base
                     focus:outline-none focus:ring-2 focus:ring-white/30"
          />
          <FaSearch className="absolute left-3 lg:left-4 top-1/2 -translate-y-1/2 text-white/70 text-sm lg:text-base" />
        </div>

        <div className="space-y-2 text-lg lg:text-2xl mt-8 lg:mt-16">
          <p>Not sure what you&apos;re looking for?</p>
          <a href="/browse" className="underline hover:text-white/80">
            Browse all MIDI-files
          </a>
        </div>
      </div>
    </div>
  );
};

export default SearchComponent;
