"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";
import { Gift, Sparkles, Heart } from "lucide-react";

export default function VirtualGiftBox() {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpening, setIsOpening] = useState(false);

  const handleOpenGift = () => {
    if (isOpen || isOpening) return;
    setIsOpening(true);

    setTimeout(() => {
      setIsOpen(true);
      setIsOpening(false);
      // Trigger romantic confetti blast
      confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.5 },
        colors: ["#ffd6e7", "#fbcfe8", "#e9d5ff", "#c4b5fd", "#ffffff"],
      });
    }, 1200);
  };

  return (
    <section id="gift" className="py-24 px-6 relative z-10 select-none">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full glass-card-pink text-pink-300 text-xs font-semibold uppercase tracking-wider mb-4"
        >
          <Gift className="w-3.5 h-3.5" />
          <span>Interactive Gift</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-3xl md:text-5xl font-bold font-heading text-transparent bg-clip-text bg-gradient-to-r from-pink-200 via-rose-200 to-purple-200 text-glow-pink mb-12"
        >
          One More Surprise 🎁
        </motion.h2>

        {!isOpen ? (
          <div className="relative flex flex-col items-center">
            {/* 3D Animated Gift Box */}
            <motion.div
              onClick={handleOpenGift}
              animate={
                isOpening
                  ? { rotate: [0, -10, 10, -10, 10, 0], scale: [1, 1.1, 1.15] }
                  : { y: [0, -12, 0] }
              }
              transition={
                isOpening
                  ? { duration: 1.2 }
                  : { duration: 4, repeat: Infinity, ease: "easeInOut" }
              }
              className="w-56 h-56 md:w-64 md:h-64 relative cursor-pointer group"
            >
              {/* Outer Glow */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-pink-400 via-purple-400 to-rose-300 blur-xl opacity-60 group-hover:opacity-100 transition duration-500 animate-pulse-glow" />

              {/* Gift Box Body */}
              <div className="relative w-full h-full glass-card-pink rounded-3xl border border-pink-200/40 p-6 flex flex-col items-center justify-center shadow-2xl overflow-hidden">
                {/* Cross Ribbon Vertical */}
                <div className="absolute top-0 bottom-0 w-10 bg-gradient-to-b from-pink-300 to-rose-400 shadow-md opacity-90" />
                {/* Cross Ribbon Horizontal */}
                <div className="absolute left-0 right-0 h-10 bg-gradient-to-r from-pink-300 to-rose-400 shadow-md opacity-90" />

                {/* Bow Icon */}
                <div className="relative z-10 w-16 h-16 rounded-full bg-white text-rose-500 flex items-center justify-center shadow-xl group-hover:scale-125 transition-transform">
                  <Gift className="w-9 h-9" />
                </div>
              </div>
            </motion.div>

            <p className="mt-8 text-sm text-pink-300/80 font-mono tracking-wide">
              {isOpening ? "Opening surprise... ✨" : "Click box to open your gift 🌸"}
            </p>
          </div>
        ) : (
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="glass-card-pink p-10 md:p-16 rounded-3xl border border-pink-300/40 shadow-2xl relative overflow-hidden max-w-2xl mx-auto"
          >
            {/* Blooming flower */}
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-tr from-pink-300 via-rose-300 to-purple-300 p-0.5 shadow-xl shadow-pink-500/30 flex items-center justify-center animate-bounce">
              <Sparkles className="w-10 h-10 text-slate-950" />
            </div>

            <h3 className="text-2xl md:text-4xl font-bold font-heading text-white mb-4">
              Something special was made only for you 🌸
            </h3>

            <p className="text-base md:text-lg text-pink-100/90 leading-relaxed font-light mb-6">
              &quot;Sometimes the smallest things carry the biggest feelings.&quot;
            </p>

            <div className="pt-6 border-t border-pink-200/20 text-pink-200 font-mono text-sm flex items-center justify-center space-x-2">
              <Heart className="w-4 h-4 text-rose-400 fill-current" />
              <span>Thank you for being part of my story.</span>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
