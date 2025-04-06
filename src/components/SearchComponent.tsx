import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

const SearchComponent = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="grid place-items-center min-h-[calc(100vh-104px)]">
      <div className="text-center space-y-8">
        <h1 className="text-6xl font-bold">Find your MIDI 🎹</h1>

        <p className="text-2xl mt-16">
          Type the name of the MIDI you&apos;re looking for.
        </p>

        <div className="relative w-full max-w-md mx-auto">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search our MIDI-files"
            className="w-full px-5 py-3 pl-12 rounded-xl bg-white/10 backdrop-blur-sm 
                     border border-white/20 text-white placeholder-white/70
                     focus:outline-none focus:ring-2 focus:ring-white/30"
          />
          <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-white/70" />
        </div>

        <div className="space-y-2 text-2xl mt-16">
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
