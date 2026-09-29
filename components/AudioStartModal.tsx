"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Heart } from "lucide-react";

interface AudioStartModalProps {
  isOpen: boolean;
  onStart: () => void;
}

export default function AudioStartModal({ isOpen, onStart }: AudioStartModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/85 backdrop-blur-xl p-4 select-none"
        >
          {/* Ambient Glows */}
          <div className="absolute w-96 h-96 rounded-full bg-pink-500/20 blur-[120px] pointer-events-none" />
          <div className="absolute w-96 h-96 rounded-full bg-purple-500/20 blur-[120px] pointer-events-none" />

          <motion.div
            initial={{ scale: 0.85, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="relative max-w-md w-full glass-card-pink border border-pink-300/30 p-8 rounded-3xl text-center shadow-2xl overflow-hidden"
          >
            {/* Top Lily Icon */}
            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-tr from-pink-400 to-purple-400 p-0.5 shadow-lg shadow-pink-500/30 flex items-center justify-center animate-float">
              <div className="w-full h-full bg-slate-900 rounded-full flex items-center justify-center text-pink-300">
                <Sparkles className="w-8 h-8 animate-pulse" />
              </div>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold font-heading text-transparent bg-clip-text bg-gradient-to-r from-pink-200 via-purple-200 to-white mb-3 drop-shadow">
              Are You Ready For A Little Surprise? 🌸
            </h2>

            <p className="text-sm text-pink-200/80 mb-8 leading-relaxed">
              Sebuah dunia kecil dengan melodi romantis, kenangan manis, dan kejutan spesial telah disiapkan khusus untuk Azalia Fitriani (Lily).
            </p>

            <button
              onClick={onStart}
              className="w-full group relative inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-slate-900 bg-gradient-to-r from-pink-300 via-rose-300 to-purple-300 rounded-full shadow-lg shadow-pink-500/30 hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer overflow-hidden"
            >
              <span className="relative z-10 flex items-center space-x-2">
                <span>Start Experience</span>
                <Heart className="w-5 h-5 fill-current text-rose-600 group-hover:scale-125 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-white/30 group-hover:translate-x-full transition-transform duration-700 ease-out" />
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
