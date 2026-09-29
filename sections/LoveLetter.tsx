"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { getLetterData, LetterConfig } from "@/data/letter";
import { Mail, Heart, Sparkles } from "lucide-react";

export default function LoveLetter() {
  const [isOpen, setIsOpen] = useState(false);
  const [letter, setLetter] = useState<LetterConfig>(getLetterData());

  useEffect(() => {
    setLetter(getLetterData());
  }, []);

  return (
    <section id="letter" className="py-24 px-6 relative z-10 select-none">
      <div className="max-w-3xl mx-auto">
        {/* Title */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full glass-card-pink text-pink-300 text-xs font-semibold uppercase tracking-wider mb-4"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>Special Message</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-3xl md:text-5xl font-bold font-heading text-transparent bg-clip-text bg-gradient-to-r from-pink-200 via-rose-200 to-purple-200 text-glow-pink"
          >
            {letter.title || "A Letter For Lily 💌"}
          </motion.h2>
        </div>

        {/* Envelope Interaction Container */}
        <div className="relative flex flex-col items-center">
          {!isOpen ? (
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              onClick={() => setIsOpen(true)}
              className="w-full max-w-lg cursor-pointer group"
            >
              {/* Envelope Card */}
              <div className="glass-card-pink p-10 md:p-14 rounded-3xl border border-pink-300/40 text-center shadow-2xl group-hover:scale-105 group-hover:border-pink-300 transition-all duration-500 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-tr from-pink-500/10 via-purple-500/10 to-transparent pointer-events-none" />

                {/* Animated Heart Icon */}
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-tr from-pink-300 via-rose-300 to-purple-300 p-0.5 shadow-xl shadow-pink-500/30 flex items-center justify-center animate-float">
                  <div className="w-full h-full bg-slate-950 rounded-full flex items-center justify-center text-pink-300">
                    <Heart className="w-9 h-9 fill-current text-rose-400 group-hover:scale-125 transition-transform duration-300" />
                  </div>
                </div>

                <h3 className="text-2xl font-bold font-heading text-white mb-2">
                  Click to Open Letter 💌
                </h3>
                <p className="text-xs text-pink-200/70 font-mono">
                  Written especially for Azalia Fitriani
                </p>
              </div>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="w-full glass-card p-8 md:p-12 rounded-3xl border border-pink-200/30 shadow-2xl bg-slate-900/90 relative overflow-hidden"
            >
              {/* Paper Background Texture Overlay */}
              <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#ffd6e7_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

              {/* Letter Header */}
              <div className="flex items-center justify-between border-b border-pink-200/20 pb-4 mb-8">
                <span className="font-letter text-2xl md:text-3xl text-pink-300">
                  {letter.salutation}
                </span>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-xs text-pink-300/70 hover:text-pink-200 font-mono underline"
                >
                  Close Letter
                </button>
              </div>

              {/* Letter Body */}
              <div className="space-y-6 font-letter text-xl md:text-2xl text-pink-100/90 leading-relaxed">
                {letter.paragraphs.map((p, idx) => (
                  <motion.p
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: idx * 0.15 }}
                  >
                    {p}
                  </motion.p>
                ))}
              </div>

              {/* Letter Footer */}
              <div className="mt-10 pt-6 border-t border-pink-200/20 text-right">
                <p className="font-letter text-2xl text-rose-300 font-semibold mb-1">
                  {letter.closing}
                </p>
                <p className="text-xs text-pink-300/70 font-mono">
                  {letter.signature}
                </p>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
