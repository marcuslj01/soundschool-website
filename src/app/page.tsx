"use client";

import Navbar from "@/components/Navbar";
import SearchComponent from "@/components/SearchComponent";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-[#1D2671] to-[#C33764] text-white">
      <Navbar />
      <SearchComponent />
    </div>
  );
}
