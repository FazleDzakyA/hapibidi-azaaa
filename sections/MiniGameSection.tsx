"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";
import { Sparkles, Flower2, Trophy, RotateCcw } from "lucide-react";

interface GamePetal {
  id: number;
  x: number;
  speed: number;
}

export default function MiniGameSection() {
  const [score, setScore] = useState(0);
  const [gameActive, setGameActive] = useState(false);
  const [petals, setPetals] = useState<GamePetal[]>([]);
  const [hasWon, setHasWon] = useState(false);

  const startGame = () => {
    setScore(0);
    setHasWon(false);
    setGameActive(true);
  };

  useEffect(() => {
    if (!gameActive || hasWon) return;

    const interval = setInterval(() => {
      if (petals.length < 8) {
        const newPetal: GamePetal = {
          id: Date.now() + Math.random(),
          x: Math.random() * 85 + 5,
          speed: Math.random() * 3 + 3,
        };
        setPetals((prev) => [...prev, newPetal]);
      }
    }, 800);

    return () => clearInterval(interval);
  }, [gameActive, petals, hasWon]);

  const catchPetal = (id: number) => {
    setPetals((prev) => prev.filter((p) => p.id !== id));
    const newScore = score + 1;
    setScore(newScore);

    if (newScore >= 30) {
      setHasWon(true);
      setGameActive(false);
      confetti({
        particleCount: 150,
        spread: 90,
        origin: { y: 0.6 },
      });
    }
  };

  return (
    <section className="py-24 px-6 relative z-10 select-none">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full glass-card-pink text-pink-300 text-xs font-semibold uppercase tracking-wider mb-4"
        >
          <Flower2 className="w-3.5 h-3.5" />
          <span>Mini Game</span>
        </motion.div>

        <h3 className="text-3xl md:text-5xl font-bold font-heading text-transparent bg-clip-text bg-gradient-to-r from-pink-200 via-rose-200 to-purple-200 text-glow-pink mb-4">
          Catch The Lily 🌸
        </h3>
        <p className="text-sm md:text-base text-pink-200/70 font-light mb-8">
          Catch 30 falling lily petals to reveal secret wishes ✨
        </p>

        {/* Game Box */}
        <div className="relative w-full h-[400px] md:h-[480px] rounded-3xl glass-card-pink border border-pink-200/30 overflow-hidden shadow-2xl flex flex-col items-center justify-between p-6">
          {/* Header Score bar */}
          <div className="w-full flex items-center justify-between px-4 py-2 rounded-2xl glass-pill">
            <span className="text-xs font-mono text-pink-200 uppercase">Target: 30 Petals</span>
            <span className="font-mono font-bold text-lg text-pink-300">Score: {score} / 30</span>
          </div>

          {!gameActive && !hasWon && (
            <div className="my-auto flex flex-col items-center space-y-4">
              <Flower2 className="w-16 h-16 text-pink-300 animate-spin" style={{ animationDuration: '10s' }} />
              <button
                onClick={startGame}
                className="px-8 py-3.5 rounded-full bg-gradient-to-r from-pink-300 to-purple-300 text-slate-950 font-bold text-base shadow-lg hover:scale-105 transition"
              >
                Start Game 🌸
              </button>
            </div>
          )}

          {hasWon && (
            <div className="my-auto flex flex-col items-center space-y-4 p-6 glass-card rounded-2xl">
              <Trophy className="w-16 h-16 text-yellow-300 animate-bounce" />
              <h4 className="text-2xl font-bold font-heading text-white">
                You collected all my wishes for you 🌸
              </h4>
              <p className="text-sm text-pink-200/80">Semoga semua harapan indahmu terwujud!</p>
              <button
                onClick={startGame}
                className="flex items-center space-x-2 px-6 py-2.5 rounded-full bg-pink-400/20 hover:bg-pink-400/30 text-pink-200 border border-pink-300/40 text-sm font-semibold transition"
              >
                <RotateCcw className="w-4 h-4" />
                <span>Play Again</span>
              </button>
            </div>
          )}

          {/* Falling Petals Canvas area */}
          {gameActive && (
            <div className="absolute inset-0 top-16 overflow-hidden pointer-events-auto">
              <AnimatePresence>
                {petals.map((petal) => (
                  <motion.button
                    key={petal.id}
                    onClick={() => catchPetal(petal.id)}
                    initial={{ y: -40, opacity: 0 }}
                    animate={{ y: 420, opacity: 1 }}
                    exit={{ scale: 0, opacity: 0 }}
                    transition={{ duration: petal.speed, ease: "linear" }}
                    onAnimationComplete={() => {
                      setPetals((prev) => prev.filter((p) => p.id !== petal.id));
                    }}
                    className="absolute p-2 text-pink-300 hover:text-white cursor-pointer group"
                    style={{ left: `${petal.x}%` }}
                  >
                    <Flower2 className="w-9 h-9 fill-pink-300/40 group-hover:scale-125 transition-transform drop-shadow-[0_0_10px_rgba(251,207,232,0.9)]" />
                  </motion.button>
                ))}
              </AnimatePresence>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
