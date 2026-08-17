"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ROLES = ["Fullstack Developer", "Android Developer", "Network Engineer"];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % ROLES.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="hero"
      className="snap-section relative flex flex-col items-center justify-center px-6 overflow-hidden"
    >
      <div className="absolute inset-0 -z-10 opacity-20">
        <svg width="100%" height="100%">
          <defs>
            <pattern id="dot-grid" width="32" height="32" patternUnits="userSpaceOnUse">
              <circle cx="1" cy="1" r="1" fill="#8A94A6" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dot-grid)" />
        </svg>
      </div>

      <motion.p
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="font-mono text-sm text-signal mb-4"
      >
        {"// available for work"}
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="font-display font-bold text-5xl md:text-7xl text-offwhite text-center"
      >
        Pranata Yudha Pratama
      </motion.h1>

      <div className="h-8 mt-6 flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.p
            key={ROLES[roleIndex]}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
            className="font-mono text-base md:text-lg text-slate"
          >
            {`> ${ROLES[roleIndex]}`}
          </motion.p>
        </AnimatePresence>
      </div>

      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
        className="mt-12 font-mono text-xs text-slate hover:text-signal transition-colors"
      >
        scroll down ↓
      </motion.button>
    </section>
  );
}