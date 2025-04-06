"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function Middle1() {
  return (
    <section className="relative w-full overflow-hidden bg-black py-32 px-6">
      {/* 🌌 Cosmic layered background */}
      <div className="absolute inset-0 z-0">
        {/* Dark gradient to match parent black bg */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#000000] via-[#0f0f2e] to-black opacity-90" />
        {/* Stars / nebula */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.03),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(255,255,255,0.02),transparent_60%)]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto flex flex-col items-center text-center">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-transparent bg-clip-text"
        >
          Welcome to Your Family Universe
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-lg md:text-xl text-neutral-400 max-w-2xl mt-6"
        >
          Kinnected turns your family into a living constellation — every member a radiant star, every connection a timeless thread.
        </motion.p>

        {/* Full Image */}
        <motion.div
          initial={{ scale: 0.96, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.4 }}
          className="relative w-full max-w-5xl mt-16 aspect-square rounded-3xl overflow-hidden shadow-[0_0_60px_rgba(255,255,255,0.05)] border border-neutral-800"
        >
          <Image
            src="/photo7.png"
            alt="Family Tree Galaxy"
            fill
            className="object-cover object-top"
          />
          {/* Optional overlay for glassy vibe */}
          <div className="absolute inset-0 bg-black/10 " />
        </motion.div>
      </div>
    </section>
  );
}
