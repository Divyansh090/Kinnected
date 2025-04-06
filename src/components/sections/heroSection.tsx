"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function Hero() {
  const [positions, setPositions] = useState<{ top: string; left: string }[]>(
    []
  );

  useEffect(() => {
    const newPositions = [...Array(10)].map(() => ({
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
    }));
    setPositions(newPositions);
  }, []);

  return (
    <div className="relative h-[100vh] w-full overflow-hidden bg-gradient-to-b from-[#020202] via-[#000000] to-[#000000] text-white flex items-center justify-center">
      {/* Floating Cubes */}
      {positions.map((pos, i) => (
        <motion.div
          key={i}
          className="absolute w-10 h-10 bg-white/10 backdrop-blur-md border border-white/10 rounded-xl shadow-lg"
          style={{
            top: pos.top,
            left: pos.left,
          }}
          animate={{ y: [0, -20, 0], rotate: [0, 30, 0] }}
          transition={{ repeat: Infinity, duration: 6 + i }}
        />
      ))}

      {/* Animated Threads */}
      <div className="absolute inset-0 z-0 pointer-events-none bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-transparent via-white/5 to-transparent animate-pulse" />

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-2xl px-4">
        <motion.h1
          className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-fuchsia-400 to-cyan-400 text-transparent bg-clip-text"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
        >
          Kinnected
        </motion.h1>
        <motion.p
          className="mt-6 text-lg text-white/70"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          Dive into your family timeline, connect generations, and visualize the story of your roots — all in one futuristic space.
        </motion.p>

        <motion.div
          className="mt-8 flex justify-center space-x-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          <button className="bg-white text-black px-6 py-3 rounded-xl font-semibold shadow hover:scale-105 transition">
            Join Your Family
          </button>
          <button className="border border-white px-6 py-3 rounded-xl text-white/80 hover:bg-white/10 transition">
            Explore Lineage
          </button>
        </motion.div>
      </div>
    </div>
  );
}
