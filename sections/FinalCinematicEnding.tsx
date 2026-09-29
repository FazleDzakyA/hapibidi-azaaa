"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Heart, RotateCcw, Moon, Sparkles } from "lucide-react";

interface FinalCinematicEndingProps {
  onReplay: () => void;
}

export default function FinalCinematicEnding({ onReplay }: FinalCinematicEndingProps) {
  const endingSentences = [
    "If someday...",
    "You forget how precious you are...",
    "Come back to this little place.",
    "Because somewhere...",
    "There will always be someone...",
    "Who thinks you are incredibly special.",
    "You are one of the most beautiful parts of my story."
  ];

  return (
    <section className="py-28 px-6 relative z-10 select-none text-center bg-slate-950/90 backdrop-blur-xl overflow-hidden">
      {/* Background Big Moon Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] rounded-full bg-gradient-to-tr from-pink-300/15 via-purple-300/15 to-white/30 blur-[120px] pointer-events-none animate-pulse-glow" />

      <div className="max-w-3xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full glass-card-pink text-pink-300 text-xs font-semibold uppercase tracking-wider mb-6"
        >
          <Moon className="w-3.5 h-3.5" />
          <span>Final Chapter</span>
        </motion.div>

        <h2 className="text-3xl md:text-5xl font-bold font-heading text-transparent bg-clip-text bg-gradient-to-r from-pink-200 via-rose-200 to-purple-200 text-glow-pink mb-12">
          Before You Leave 🌙
        </h2>

        {/* Text Sequence Cards */}
        <div className="space-y-6 mb-16">
          {endingSentences.map((sentence, idx) => (
            <motion.p
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.8, delay: idx * 0.15 }}
              className="text-lg md:text-2xl font-heading font-light text-pink-100/90 leading-relaxed tracking-wide italic"
            >
              &quot;{sentence}&quot;
            </motion.p>
          ))}
        </div>

        {/* Big Finale Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="glass-card-pink p-10 md:p-14 rounded-3xl border border-pink-300/40 shadow-2xl mb-12"
        >
          <Sparkles className="w-10 h-10 mx-auto text-pink-300 mb-4 animate-spin" style={{ animationDuration: '6s' }} />
          <h3 className="text-4xl md:text-6xl font-bold font-heading text-transparent bg-clip-text bg-gradient-to-r from-pink-200 via-rose-200 to-purple-200 text-glow-pink mb-3">
            Happy Birthday Lily 🌸
          </h3>
          <p className="text-sm md:text-base font-mono text-pink-300 uppercase tracking-widest mb-6">
            10 October 2026
          </p>
          <p className="text-xs md:text-sm text-pink-200/80 font-light italic">
            Made with love, time, and countless thoughts about you.
          </p>
        </motion.div>

        {/* Replay Button */}
        <button
          onClick={onReplay}
          className="group inline-flex items-center space-x-3 px-8 py-4 rounded-full bg-gradient-to-r from-pink-300 via-rose-300 to-purple-300 text-slate-950 font-bold text-base shadow-xl hover:scale-105 active:scale-95 transition"
        >
          <RotateCcw className="w-5 h-5 group-hover:-rotate-90 transition-transform duration-500" />
          <span>Replay This Memory</span>
        </button>

        {/* Minimal Footer */}
        <footer className="mt-20 pt-8 border-t border-pink-200/10 text-xs text-pink-300/60 font-mono space-y-1">
          <p className="flex items-center justify-center space-x-1">
            <span>Made With</span>
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-current inline" />
            <span>Especially For Azalia Fitriani (Lily 🌸)</span>
          </p>
          <p>10 October 2026</p>
        </footer>
      </div>
    </section>
  );
}
