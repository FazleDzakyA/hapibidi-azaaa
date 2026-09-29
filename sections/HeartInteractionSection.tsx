"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, Sparkles } from "lucide-react";

interface FloatingHeart {
  id: number;
  x: number;
}

export default function HeartInteractionSection() {
  const [count, setCount] = useState(0);
  const [floatingHearts, setFloatingHearts] = useState<FloatingHeart[]>([]);

  const handleTap = () => {
    setCount((prev) => prev + 1);

    const newHeart: FloatingHeart = {
      id: Date.now() + Math.random(),
      x: (Math.random() - 0.5) * 160,
    };
    setFloatingHearts((prev) => [...prev.slice(-15), newHeart]);
  };

  const getDisplayCount = () => {
    if (count >= 100) return "∞";
    return count;
  };

  return (
    <section className="py-20 px-6 relative z-10 select-none text-center">
      <div className="max-w-md mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full glass-card-pink text-pink-300 text-xs font-semibold uppercase tracking-wider mb-4"
        >
          <Heart className="w-3.5 h-3.5 fill-current text-rose-400" />
          <span>Interactive Counter</span>
        </motion.div>

        <h3 className="text-3xl font-bold font-heading text-transparent bg-clip-text bg-gradient-to-r from-pink-200 via-rose-200 to-purple-200 text-glow-pink mb-8">
          Tap My Heart ❤️
        </h3>

        {/* Heart Tap Box */}
        <div className="relative flex flex-col items-center justify-center">
          <motion.div
            onClick={handleTap}
            whileTap={{ scale: 1.3 }}
            whileHover={{ scale: 1.1 }}
            className="w-36 h-36 md:w-44 md:h-44 rounded-full glass-card-pink border border-pink-300/40 p-4 flex flex-col items-center justify-center cursor-pointer shadow-2xl relative overflow-hidden"
          >
            <Heart className="w-20 h-20 text-rose-500 fill-current drop-shadow-[0_0_20px_rgba(244,63,94,0.8)] animate-pulse" />

            {/* Counter Badge */}
            <div className="absolute bottom-3 font-mono font-bold text-xl text-white drop-shadow">
              {getDisplayCount()}
            </div>
          </motion.div>

          {/* Floating heart particles */}
          <AnimatePresence>
            {floatingHearts.map((h) => (
              <motion.div
                key={h.id}
                initial={{ opacity: 1, y: 0, x: h.x, scale: 0.6 }}
                animate={{ opacity: 0, y: -120, scale: 1.5 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                onAnimationComplete={() => {
                  setFloatingHearts((prev) => prev.filter((item) => item.id !== h.id));
                }}
                className="absolute pointer-events-none text-rose-400 text-2xl"
              >
                💖
              </motion.div>
            ))}
          </AnimatePresence>

          {/* Special message when reaching infinity / 100 */}
          {count >= 100 && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="mt-6 p-4 rounded-2xl glass-card-pink border border-pink-300/40 text-pink-200 font-heading text-lg font-bold text-glow-pink"
            >
              &quot;My love for you cannot be counted.&quot; 💖
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
