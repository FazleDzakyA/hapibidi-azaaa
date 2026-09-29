"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Heart, ArrowDown, Sparkles } from "lucide-react";
import { PhotoItem } from "@/data/photos";

interface HeroSectionProps {
  heroPhoto?: PhotoItem;
}

export default function HeroSection({ heroPhoto }: HeroSectionProps) {
  const [imgError, setImgError] = useState(false);

  const photoSrc = imgError || !heroPhoto?.image ? "/images/photo1.jpg" : heroPhoto.image;

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-24 pb-16 px-6 overflow-hidden select-none">
      {/* Soft Glow Background Elements */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-pink-500/20 via-purple-500/15 to-rose-400/20 blur-[140px] pointer-events-none animate-pulse-glow" />

      <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center">
        {/* Floating Circle Frame for Hero Photo */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="relative mb-8 group"
        >
          {/* Glowing Aura Ring */}
          <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-pink-300 via-purple-300 to-rose-300 blur-lg opacity-75 group-hover:opacity-100 transition duration-500 animate-pulse-glow" />

          {/* Main Photo Container */}
          <div className="relative w-44 h-44 md:w-56 md:h-56 rounded-full p-1.5 glass-card-pink overflow-hidden shadow-2xl animate-float">
            <div className="relative w-full h-full rounded-full overflow-hidden bg-slate-900 flex items-center justify-center">
              <Image
                src={photoSrc}
                alt="Azalia Fitriani (Lily)"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                onError={() => setImgError(true)}
                priority
              />
              {/* Fallback overlay text if photo not found */}
              {imgError && (
                <div className="absolute inset-0 bg-slate-900/90 flex flex-col items-center justify-center p-3 text-center">
                  <Sparkles className="w-8 h-8 text-pink-300 mb-2 animate-bounce" />
                  <p className="text-xs text-pink-200 font-medium">Memory will be added soon 🌸</p>
                </div>
              )}
            </div>
          </div>

          {/* Floating Badge */}
          <div className="absolute -bottom-2 right-2 bg-gradient-to-r from-pink-400 to-purple-400 text-slate-950 font-bold text-xs px-3.5 py-1.5 rounded-full shadow-lg flex items-center space-x-1">
            <Heart className="w-3.5 h-3.5 fill-current text-rose-700" />
            <span>Tuan Putriku</span>
          </div>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-4xl md:text-6xl font-bold font-heading text-transparent bg-clip-text bg-gradient-to-r from-pink-200 via-rose-200 to-purple-200 mb-4 text-glow-pink tracking-tight"
        >
          Happy Birthday Lily 🌸
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-base md:text-xl text-pink-100/90 max-w-2xl font-light leading-relaxed mb-10"
        >
          &quot;May your days always be filled with happiness, love, and beautiful moments.&quot;
        </motion.p>

        {/* Magnetic Button to Next Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
        >
          <a
            href="#countdown"
            className="group relative inline-flex items-center space-x-3 px-8 py-4 text-base font-semibold text-slate-950 bg-gradient-to-r from-pink-300 via-rose-300 to-purple-300 rounded-full shadow-lg shadow-pink-500/25 hover:shadow-pink-500/50 hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer overflow-hidden"
          >
            <span className="relative z-10 flex items-center space-x-2">
              <span>Continue Our Story</span>
              <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-white/40 group-hover:translate-x-full transition-transform duration-700 ease-out" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
