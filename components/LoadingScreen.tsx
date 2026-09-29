"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";

interface LoadingScreenProps {
  isLoading: boolean;
}

export default function LoadingScreen({ isLoading }: LoadingScreenProps) {
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-slate-950 text-white select-none overflow-hidden"
        >
          {/* Central Glow Background */}
          <div className="absolute w-96 h-96 rounded-full bg-pink-500/20 blur-[130px] animate-pulse-glow" />

          {/* Blooming Lily Flower SVG Animation */}
          <motion.div
            initial={{ scale: 0.6, rotate: -20, opacity: 0 }}
            animate={{ scale: 1.1, rotate: 0, opacity: 1 }}
            transition={{ duration: 2, ease: "easeOut" }}
            className="relative w-32 h-32 mb-8"
          >
            {/* Glowing Light Ring */}
            <div className="absolute inset-0 rounded-full border-2 border-pink-300/40 animate-ping" style={{ animationDuration: '3s' }} />

            <svg viewBox="0 0 100 100" className="w-full h-full text-pink-300 drop-shadow-[0_0_20px_rgba(251,207,232,0.9)]">
              {/* Petals blooming outward */}
              <motion.path
                d="M50 50 C40 20, 20 30, 50 10 C80 30, 60 20, 50 50 Z"
                fill="currentColor"
                fillOpacity="0.8"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
              />
              <motion.path
                d="M50 50 C20 40, 30 20, 10 50 C30 80, 20 60, 50 50 Z"
                fill="currentColor"
                fillOpacity="0.8"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.5, delay: 0.2, ease: "easeInOut" }}
              />
              <motion.path
                d="M50 50 C60 80, 80 70, 50 90 C20 70, 40 80, 50 50 Z"
                fill="currentColor"
                fillOpacity="0.8"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.5, delay: 0.4, ease: "easeInOut" }}
              />
              <motion.path
                d="M50 50 C80 60, 70 80, 90 50 C70 20, 80 40, 50 50 Z"
                fill="currentColor"
                fillOpacity="0.8"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.5, delay: 0.6, ease: "easeInOut" }}
              />
              {/* Center Stamen */}
              <circle cx="50" cy="50" r="7" fill="#FFF" className="animate-pulse" />
            </svg>
          </motion.div>

          {/* Text sequence */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="text-center"
          >
            <h3 className="text-xl md:text-2xl font-heading font-medium tracking-wide text-pink-200 mb-2">
              Preparing Something Special... 🌸
            </h3>
            <p className="text-xs text-pink-300/70 font-mono">Azalia Fitriani (Lily)</p>
          </motion.div>

          {/* Loading bar */}
          <div className="w-48 h-1 bg-slate-800 rounded-full mt-8 overflow-hidden">
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: "0%" }}
              transition={{ duration: 2.2, ease: "easeInOut" }}
              className="w-full h-full bg-gradient-to-r from-pink-300 via-purple-300 to-rose-300"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
