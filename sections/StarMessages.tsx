"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { getMessagesData, StarMessage } from "@/data/messages";
import { Star, X, Sparkles } from "lucide-react";

export default function StarMessages() {
  const [messages, setMessages] = useState<StarMessage[]>([]);
  const [selectedMsg, setSelectedMsg] = useState<StarMessage | null>(null);

  useEffect(() => {
    setMessages(getMessagesData());
  }, []);

  return (
    <section className="py-24 px-6 relative z-10 select-none bg-slate-950/80 backdrop-blur-md overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full glass-card-pink text-pink-300 text-xs font-semibold uppercase tracking-wider mb-4"
          >
            <Star className="w-3.5 h-3.5 fill-current" />
            <span>Interactive Wishes</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-3xl md:text-5xl font-bold font-heading text-transparent bg-clip-text bg-gradient-to-r from-pink-200 via-rose-200 to-purple-200 text-glow-pink mb-4"
          >
            A Sky Full Of Wishes ⭐
          </motion.h2>
          <p className="text-sm md:text-base text-pink-200/70 font-light">
            Click any star to discover a secret birthday wish ✨
          </p>
        </div>

        {/* Interactive Sky with 100 Stars */}
        <div className="relative w-full h-[450px] md:h-[550px] rounded-3xl glass-card-pink border border-pink-200/20 overflow-hidden shadow-2xl p-4">
          {/* Moon inside sky */}
          <div className="absolute top-6 right-8 w-24 h-24 rounded-full bg-gradient-to-tr from-pink-200/40 via-purple-100/30 to-white/90 blur-sm shadow-[0_0_50px_rgba(251,207,232,0.8)] pointer-events-none" />

          {/* 100 Interactive Stars */}
          <div className="absolute inset-0">
            {messages.slice(0, 100).map((msg, i) => {
              const top = (Math.sin(i * 12.3) * 0.45 + 0.5) * 88 + 4;
              const left = (Math.cos(i * 7.7) * 0.45 + 0.5) * 92 + 3;
              const size = (i % 3 === 0 ? 20 : i % 2 === 0 ? 16 : 12);

              return (
                <motion.button
                  key={msg.id}
                  onClick={() => setSelectedMsg(msg)}
                  initial={{ opacity: 0.3, scale: 0.8 }}
                  animate={{
                    opacity: [0.3, 1, 0.3],
                    scale: [0.8, 1.2, 0.8],
                  }}
                  transition={{
                    duration: (i % 5) + 2.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: (i % 7) * 0.4,
                  }}
                  whileHover={{ scale: 1.8, opacity: 1, zIndex: 30 }}
                  className="absolute p-1 rounded-full text-pink-200 hover:text-white transition-colors"
                  style={{ top: `${top}%`, left: `${left}%` }}
                  title={`Star Wish #${msg.id}`}
                >
                  <Star className="w-full h-full fill-current drop-shadow-[0_0_8px_rgba(251,207,232,0.9)]" style={{ width: `${size}px`, height: `${size}px` }} />
                </motion.button>
              );
            })}
          </div>
        </div>

        {/* Wish Popup Modal */}
        <AnimatePresence>
          {selectedMsg && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedMsg(null)}
              className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 backdrop-blur-md p-4"
            >
              <motion.div
                initial={{ scale: 0.8, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.8, y: 20 }}
                onClick={(e) => e.stopPropagation()}
                className="relative max-w-md w-full glass-card-pink border border-pink-300/40 p-8 rounded-3xl text-center shadow-2xl"
              >
                <button
                  onClick={() => setSelectedMsg(null)}
                  className="absolute top-4 right-4 p-2 rounded-full glass-pill text-pink-200 hover:text-white"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-pink-400/20 flex items-center justify-center text-pink-300 animate-bounce">
                  <Sparkles className="w-7 h-7" />
                </div>

                <div className="text-xs font-mono text-pink-300 uppercase tracking-widest mb-2">
                  Star Wish #{selectedMsg.id} ⭐
                </div>

                <p className="text-xl font-heading font-medium text-white leading-relaxed mb-6">
                  &quot;{selectedMsg.text}&quot;
                </p>

                <button
                  onClick={() => setSelectedMsg(null)}
                  className="px-6 py-2.5 rounded-full bg-gradient-to-r from-pink-300 to-purple-300 text-slate-950 font-bold text-sm shadow-md hover:scale-105 transition"
                >
                  Close Wish 🌸
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
