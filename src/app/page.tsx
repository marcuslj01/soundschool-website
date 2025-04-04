"use client";

import Image from "next/image";
import confetti from "canvas-confetti";

export default function Home() {
  const handleClick = () => {
    confetti({
      particleCount: 150,
      spread: 90,
      origin: { y: 0.6 },
    });
  };
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1 className="text-4xl font-bold">Halla Maria</h1>
      <Image
        src="/Maria.png"
        alt="Philip"
        className="rounded-full"
        width={500}
        height={500}
      />
      <button
        onClick={handleClick}
        className="px-6 py-3 bg-pink-600 text-white font-semibold rounded-xl hover:bg-pink-700 transition"
      >
        Trykk her
      </button>
      <p>Nå är det dags att skriva om min portfolio.</p>
    </div>
  );
}
