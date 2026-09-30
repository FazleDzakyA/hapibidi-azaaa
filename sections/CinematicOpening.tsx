"use client";

import React, { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Lock, Clock, X, Eye, KeyRound } from "lucide-react";

interface CinematicOpeningProps {
  onComplete: () => void;
  targetDateStr?: string;
}

interface Particle {
  id: number;
  top: number;
  left: number;
  size: number;
  delay: number;
  duration: number;
}

export default function CinematicOpening({
  onComplete,
  targetDateStr = "2026-10-10T00:00:00+07:00",
}: CinematicOpeningProps) {
  const [step, setStep] = useState(0);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isUnlocked: false,
  });
  const [showLockedModal, setShowLockedModal] = useState(false);

  // Dev Override Password State
  const [showDevPassModal, setShowDevPassModal] = useState(false);
  const [devPassword, setDevPassword] = useState("");
  const [devError, setDevError] = useState("");

  // Memoize background glowing star lights across 2% - 98% bounds with soft glowing aura
  const particles: Particle[] = useMemo(() => {
    return Array.from({ length: 60 }).map((_, i) => ({
      id: i,
      left: ((i * 37 + 13) % 96) + 2,
      top: ((i * 53 + 7) % 96) + 2,
      size: i % 3 === 0 ? 4.5 : i % 2 === 0 ? 3 : 2,
      delay: (i % 7) * 0.5,
      duration: (i % 4) * 0.8 + 2,
    }));
  }, []);

  useEffect(() => {
    const timers = [
      setTimeout(() => setStep(1), 1200), // "Aku membuat tempat kecil..."
      setTimeout(() => setStep(2), 3400), // "...untuk seseorang yang sangat spesial."
      setTimeout(() => setStep(3), 5600), // "Dan seseorang itu adalah..."
      setTimeout(() => setStep(4), 7800), // "AZALIA FITRIANI", "Lily 🌸", "Tuan Putriku"
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  useEffect(() => {
    const targetDate = new Date(targetDateStr).getTime();

    const calculateTime = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0, isUnlocked: true });
      } else {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds, isUnlocked: false });
      }
    };

    calculateTime();
    const interval = setInterval(calculateTime, 1000);
    return () => clearInterval(interval);
  }, [targetDateStr]);

  const handleButtonClick = () => {
    if (timeLeft.isUnlocked) {
      onComplete();
    } else {
      setShowLockedModal(true);
    }
  };

  const handleOpenDevModal = () => {
    setShowLockedModal(false);
    setDevPassword("");
    setDevError("");
    setShowDevPassModal(true);
  };

  const handleDevSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (devPassword.trim() === "LilyDev-9481-Special#2026a9ab9676-05bf-4f9c-84c5") {
      setShowDevPassModal(false);
      onComplete();
    } else {
      setDevError("Password Dev Mode salah! Coba lagi.");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 1.2, ease: "easeInOut" }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-slate-950 text-white select-none overflow-y-auto px-6 py-10 transform-gpu"
    >
      {/* Night sky background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-slate-950 to-black pointer-events-none" />

      {/* Glowing Moon */}
      <div className="absolute top-8 right-8 md:top-16 md:right-28 w-28 h-28 md:w-44 md:h-44 rounded-full bg-gradient-to-tr from-pink-200/40 via-purple-100/30 to-white/80 blur-md shadow-[0_0_80px_rgba(251,207,232,0.6)] pointer-events-none animate-pulse-glow" />

      {/* Fixed Shining Glowing Star Lights */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {particles.map((p) => (
          <div
            key={p.id}
            className="absolute rounded-full bg-white animate-twinkle transform-gpu shadow-[0_0_8px_rgba(255,214,231,0.9),0_0_16px_rgba(251,207,232,0.7)]"
            style={{
              top: `${p.top}%`,
              left: `${p.left}%`,
              width: `${p.size}px`,
              height: `${p.size}px`,
              animationDelay: `${p.delay}s`,
              animationDuration: `${p.duration}s`,
            }}
          />
        ))}
      </div>

      {/* Text Sequences */}
      <div className="relative z-10 max-w-3xl text-center space-y-6 my-auto min-h-[420px] flex flex-col items-center justify-center">
        <AnimatePresence mode="wait">
          {step === 1 && (
            <motion.p
              key="step1"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 1 }}
              className="text-2xl md:text-4xl font-heading font-light text-pink-100 tracking-wide leading-relaxed"
            >
              Aku membuat tempat kecil...
            </motion.p>
          )}

          {step === 2 && (
            <motion.p
              key="step2"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 1 }}
              className="text-2xl md:text-4xl font-heading font-light text-pink-200 tracking-wide leading-relaxed"
            >
              ...untuk seseorang yang sangat spesial.
            </motion.p>
          )}

          {step === 3 && (
            <motion.p
              key="step3"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 1 }}
              className="text-2xl md:text-4xl font-heading font-light text-purple-200 tracking-wide leading-relaxed"
            >
              Dan seseorang itu adalah...
            </motion.p>
          )}

          {step >= 4 && (
            <motion.div
              key="step4"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="space-y-6 w-full"
            >
              {/* Full Name */}
              <motion.h1
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.1 }}
                className="text-4xl md:text-7xl font-bold font-heading text-transparent bg-clip-text bg-gradient-to-r from-pink-200 via-rose-300 to-purple-200 text-glow-pink tracking-wider"
              >
                AZALIA FITRIANI
              </motion.h1>

              {/* Nickname & Special Call */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.9, delay: 0.4 }}
                className="flex items-center justify-center space-x-4 text-xl md:text-3xl font-heading font-medium text-pink-200"
              >
                <span>Lily 🌸</span>
                <span className="text-pink-400">•</span>
                <span className="text-purple-300 italic">Tuan Putriku</span>
              </motion.div>

              {/* Birthday Tagline */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.7 }}
                className="pt-1 text-xs md:text-sm font-mono text-pink-300/80 uppercase tracking-widest"
              >
                Happy Birthday • 10 October 2026
              </motion.div>

              {/* COUNTDOWN TO SPECIAL DAY CARD */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 1 }}
                className="py-4"
              >
                <div className="glass-card-pink p-6 md:p-8 rounded-3xl border border-pink-300/30 max-w-xl mx-auto shadow-2xl space-y-4 transform-gpu">
                  <div className="flex items-center justify-center space-x-2 text-xs font-mono text-pink-300 uppercase tracking-wider">
                    <Clock className="w-4 h-4 text-pink-300 animate-pulse" />
                    <span>Countdown To Special Day 🌸</span>
                  </div>

                  <div className="grid grid-cols-4 gap-2 md:gap-4">
                    {[
                      { label: "Days", val: timeLeft.days },
                      { label: "Hours", val: timeLeft.hours },
                      { label: "Mins", val: timeLeft.minutes },
                      { label: "Secs", val: timeLeft.seconds },
                    ].map((item) => (
                      <div
                        key={item.label}
                        className="glass-pill p-3 md:p-4 rounded-2xl text-center border border-pink-200/20"
                      >
                        <div className="text-xl md:text-3xl font-bold font-mono text-transparent bg-clip-text bg-gradient-to-b from-white via-pink-200 to-rose-300">
                          {String(item.val).padStart(2, "0")}
                        </div>
                        <div className="text-[10px] md:text-xs text-pink-300/80 uppercase font-mono mt-0.5">
                          {item.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  {!timeLeft.isUnlocked && (
                    <p className="text-xs text-pink-200/70 font-mono italic pt-1">
                      🔒 Hadiah akan terbuka secara otomatis ketika hitungan mundur selesai.
                    </p>
                  )}
                </div>
              </motion.div>

              {/* Action Button */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.9, delay: 1.3 }}
                className="pt-2 flex flex-col items-center space-y-4"
              >
                <button
                  onClick={handleButtonClick}
                  className={`group relative inline-flex items-center space-x-3 px-10 py-5 text-lg font-bold text-slate-900 rounded-full shadow-lg transition-all duration-300 cursor-pointer overflow-hidden transform-gpu ${
                    timeLeft.isUnlocked
                      ? "bg-gradient-to-r from-pink-300 via-rose-300 to-purple-300 hover:scale-105 shadow-pink-500/40"
                      : "bg-gradient-to-r from-pink-300/90 via-rose-300/90 to-purple-300/90 hover:scale-105 shadow-pink-500/30"
                  }`}
                >
                  <span className="relative z-10 flex items-center space-x-3">
                    {timeLeft.isUnlocked ? (
                      <>
                        <span>Open My Gift 🌸</span>
                        <Sparkles className="w-5 h-5 text-purple-700 animate-spin" style={{ animationDuration: "4s" }} />
                      </>
                    ) : (
                      <>
                        <span>Locked Until 10 October 2026 🔒</span>
                        <Lock className="w-5 h-5 text-purple-900" />
                      </>
                    )}
                  </span>
                  <div className="absolute inset-0 bg-white/40 group-hover:translate-x-full transition-transform duration-700 ease-out" />
                </button>

                {/* Developer Preview Override Button */}
                <button
                  onClick={handleOpenDevModal}
                  className="flex items-center space-x-1.5 text-[11px] font-mono text-pink-300/50 hover:text-pink-200 transition underline pt-2"
                  title="Developer Preview Mode"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>Preview Full Website Mode (Dev Override)</span>
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* LOCKED MODAL POPUP */}
      <AnimatePresence>
        {showLockedModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowLockedModal(false)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/85 backdrop-blur-xl p-4 text-center transform-gpu"
          >
            <motion.div
              initial={{ scale: 0.9, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 15 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-md w-full glass-card-pink border border-pink-300/40 p-8 rounded-3xl shadow-2xl"
            >
              <button
                onClick={() => setShowLockedModal(false)}
                className="absolute top-4 right-4 p-2 rounded-full glass-pill text-pink-200 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-pink-400/20 flex items-center justify-center text-pink-300 animate-bounce">
                <Lock className="w-8 h-8" />
              </div>

              <h3 className="text-2xl font-bold font-heading text-white mb-2">
                Sabar ya Lily 🌸
              </h3>

              <p className="text-sm text-pink-100/90 leading-relaxed font-light mb-6">
                Hadiah digital ini dirancang khusus untuk terbuka secara otomatis saat hitungan mundur selesai pada hari ulang tahunmu, tanggal **10 Oktober 2026** ✨
              </p>

              <div className="space-y-3">
                <button
                  onClick={() => setShowLockedModal(false)}
                  className="w-full py-3 rounded-full bg-gradient-to-r from-pink-300 to-purple-300 text-slate-950 font-bold text-sm shadow-md hover:scale-105 transition"
                >
                  Tunggu Hitungan Mundur ⏳
                </button>

                <button
                  onClick={handleOpenDevModal}
                  className="w-full py-2.5 rounded-full glass-pill text-pink-300 hover:text-white font-mono text-xs transition"
                >
                  Pratinjau Sekarang (Dev Mode) 🔑
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* DEV OVERRIDE PASSWORD MODAL */}
      <AnimatePresence>
        {showDevPassModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowDevPassModal(false)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/85 backdrop-blur-xl p-4 text-center transform-gpu"
          >
            <motion.div
              initial={{ scale: 0.9, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 15 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-md w-full glass-card-pink border border-purple-300/40 p-8 rounded-3xl shadow-2xl"
            >
              <button
                onClick={() => setShowDevPassModal(false)}
                className="absolute top-4 right-4 p-2 rounded-full glass-pill text-pink-200 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-purple-400/20 flex items-center justify-center text-purple-300 animate-pulse">
                <KeyRound className="w-8 h-8" />
              </div>

              <h3 className="text-2xl font-bold font-heading text-white mb-2">
                Dev Mode Override 🔑
              </h3>

              <p className="text-xs text-pink-200/80 mb-6 font-mono">
                Masukkan sandi khusus untuk membuka pratinjau website:
              </p>

              <form onSubmit={handleDevSubmit} className="space-y-4">
                <input
                  type="password"
                  value={devPassword}
                  onChange={(e) => setDevPassword(e.target.value)}
                  placeholder="Masukkan sandi dev..."
                  className="w-full px-5 py-3.5 rounded-full bg-slate-900 border border-purple-300/40 text-pink-100 placeholder-pink-300/40 font-mono text-sm text-center focus:outline-none focus:border-pink-300"
                />

                {devError && (
                  <p className="text-xs text-rose-300 bg-rose-950/60 p-2.5 rounded-xl border border-rose-500/30 font-mono">
                    {devError}
                  </p>
                )}

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-full bg-gradient-to-r from-pink-300 via-rose-300 to-purple-300 text-slate-950 font-bold text-sm shadow-lg hover:scale-105 transition"
                >
                  Buka Pratinjau Website ✨
                </button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
