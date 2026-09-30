"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";
import {
  Lock,
  Sparkles,
  ArrowLeft,
  Heart,
  Moon,
  Star,
  Flame,
  Wind,
  CheckCircle,
  X,
  Volume2,
  VolumeX,
} from "lucide-react";

interface ConstellationNote {
  id: number;
  title: string;
  subtitle: string;
  content: string;
  icon: string;
}

const secretConstellations: ConstellationNote[] = [
  {
    id: 1,
    title: "First Impression",
    subtitle: "Awal Dari Segala Cerita Indah",
    content:
      "Azalia, saat pertama kali aku mengenalmu, ada sesuatu yang berbeda yang tak bisa dijelaskan dengan kata-kata. Caramu berbicara, tersenyum, dan membawa diri membuat tempat di sekitarmu mendadak terasa jauh lebih hangat dan tenang. Sejak hari itu, namamu sudah terukir manis di tempat paling istimewa dalam hatiku.",
    icon: "✨",
  },
  {
    id: 2,
    title: "Favorite Memory",
    subtitle: "Kenangan Sederhana yang Abadi",
    content:
      "Tahu tidak? Dari sekian banyak momen yang pernah kita lalui, momen-momen paling sederhana—seperti mendengarkan ceritamu tentang hal-hal acak, tawamu yang lepas, atau saat kamu menceritakan mimpimu—adalah memori favoritku. Tidak perlu sesuatu yang megah, bersamamu selalu terasa lebih dari cukup.",
    icon: "🌸",
  },
  {
    id: 3,
    title: "How You Light My World",
    subtitle: "Cahaya Di Setiap Langkah",
    content:
      "Kehadiranmu seperti sinar matahari lembut di pagi hari yang mengusir dinginnya malam. Setiap kali aku merasa lelah atau ragu, mengingat senyuman dan kebaikan hatimu selalu berhasil mengembalikan energi dan kedamaian dalam jiwaku. Terima kasih sudah menjadi Azalia yang begitu indah.",
    icon: "💖",
  },
  {
    id: 4,
    title: "Unconditional Promise",
    subtitle: "Janji Yang Tak Akan Pudar",
    content:
      "Apapun yang akan terjadi di masa depan, berapa pun usiamu nanti, aku berjanji akan selalu ada di sisimu. Aku akan selalu menjadi pendengar setiamu, pendukung nomor satumu, dan seseorang yang selalu merayakan setiap kebahagiaan serta menggenggam tanganmu saat hari-hari terasa berat.",
    icon: "🔒",
  },
  {
    id: 5,
    title: "Hidden Gratitude",
    subtitle: "Rasa Syukur Yang Mendalam",
    content:
      "Aku sangat bersyukur kepada Tuhan karena telah mempertemukan kita dan membiarkan aku menjadi bagian dari perjalanan hidupmu. Kamu bukan hanya seseorang yang spesial, Lily—kamu adalah karunia indah yang membuat hidup ini terasa jauh lebih bermakna dan penuh rasa syukur.",
    icon: "🌺",
  },
  {
    id: 6,
    title: "Forever Wish",
    subtitle: "Harapan Abadi Untuk Lily",
    content:
      "Semoga di setiap tahun yang berganti, kamu selalu diberikan kesehatan, ketenangan pikiran, kelancaran di segala urusan, dan senyuman yang tidak pernah pudar. Jangan pernah ragu pada kemampuan dirimu sendiri, karena kamu jauh lebih kuat, cerdas, dan berharga dari yang kamu bayangkan.",
    icon: "⭐",
  },
];

export default function SecretPage() {
  const [pin, setPin] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [shake, setShake] = useState(false);
  const CORRECT_PIN = "02072026";
  const PIN_LENGTH = 8;

  // Cake Birthday Candle Blow State
  const [candlesLit, setCandlesLit] = useState(false);
  const [candlesBlown, setCandlesBlown] = useState(false);
  const [showWishModal, setShowWishModal] = useState(false);

  // Constellation Modal State
  const [selectedConstellation, setSelectedConstellation] = useState<ConstellationNote | null>(null);

  const handlePinPress = (digit: string) => {
    if (pin.length >= PIN_LENGTH) return;
    const newPin = pin + digit;
    setPin(newPin);

    if (newPin.length === PIN_LENGTH) {
      setTimeout(() => {
        if (newPin === CORRECT_PIN) {
          setIsAuthenticated(true);
          confetti({
            particleCount: 120,
            spread: 80,
            origin: { y: 0.6 },
            colors: ["#ffd6e7", "#fbcfe8", "#e9d5ff", "#c4b5fd", "#ffffff"],
          });
        } else {
          setShake(true);
          setTimeout(() => {
            setPin("");
            setShake(false);
          }, 700);
        }
      }, 150);
    }
  };

  const handleDelete = () => {
    setPin((p) => p.slice(0, -1));
  };

  const handleLightCandles = () => {
    setCandlesLit(true);
    setCandlesBlown(false);
  };

  const handleBlowCandles = () => {
    setCandlesBlown(true);
    setCandlesLit(false);
    setShowWishModal(true);
    confetti({
      particleCount: 150,
      spread: 90,
      origin: { y: 0.5 },
      colors: ["#ffd6e7", "#fbcfe8", "#e9d5ff", "#c4b5fd", "#ffffff"],
    });
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white flex flex-col justify-between p-4 md:p-8 select-none relative overflow-x-hidden font-body">
      {/* Romantic Night Sky Ambient Glows */}
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-slate-950 to-black pointer-events-none" />
      <div className="fixed top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-pink-500/15 blur-[150px] pointer-events-none animate-pulse-glow" />

      {/* Header Navigation */}
      <header className="relative z-20 flex items-center justify-between max-w-5xl mx-auto w-full pt-2">
        <Link
          href="/"
          className="inline-flex items-center space-x-2 text-xs md:text-sm font-mono text-pink-300 hover:text-white transition group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span>Kembali ke Halaman Utama</span>
        </Link>
        <div className="flex items-center space-x-2 px-3 py-1 rounded-full glass-card-pink border border-pink-300/30 text-xs font-mono text-pink-200">
          <Sparkles className="w-3.5 h-3.5 text-pink-300 animate-spin" style={{ animationDuration: '6s' }} />
          <span>Lily&apos;s Secret Sanctuary</span>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-20 max-w-4xl mx-auto w-full my-auto py-8">
        {!isAuthenticated ? (
          /* PIN LOCK SCREEN */
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center justify-center max-w-xs mx-auto w-full"
          >
            {/* Lock Icon */}
            <div className="w-20 h-20 mx-auto mb-5 rounded-full bg-gradient-to-tr from-pink-300 via-rose-300 to-purple-300 p-0.5 shadow-xl shadow-pink-500/30 flex items-center justify-center animate-float">
              <div className="w-full h-full bg-slate-950 rounded-full flex items-center justify-center">
                <Lock className="w-9 h-9 text-pink-300" />
              </div>
            </div>

            <h1 className="text-2xl font-bold font-heading text-transparent bg-clip-text bg-gradient-to-r from-pink-200 via-rose-200 to-purple-200 text-glow-pink mb-1">
              Secret Sanctuary 🔒
            </h1>
            <p className="text-xs text-pink-300/70 font-mono mb-8">Masukkan 8 angka PIN rahasia</p>

            {/* 8 PIN Dot Indicators */}
            <motion.div
              animate={shake ? { x: [-10, 10, -8, 8, -4, 4, 0] } : { x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center justify-center space-x-3 mb-10"
            >
              {Array.from({ length: PIN_LENGTH }).map((_, i) => (
                <div
                  key={i}
                  className={`rounded-full transition-all duration-200 ${
                    i < pin.length
                      ? "w-4 h-4 bg-gradient-to-b from-pink-300 to-purple-400 shadow-[0_0_10px_rgba(251,207,232,0.8)]"
                      : "w-3.5 h-3.5 border-2 border-pink-300/50 bg-transparent"
                  }`}
                />
              ))}
            </motion.div>

            {/* Numpad Grid */}
            <div className="grid grid-cols-3 gap-4 w-full max-w-[260px]">
              {["1","2","3","4","5","6","7","8","9"].map((digit) => (
                <button
                  key={digit}
                  onClick={() => handlePinPress(digit)}
                  className="w-full aspect-square rounded-full glass-card-pink border border-pink-300/25 text-white font-bold text-2xl active:scale-90 hover:border-pink-300/60 hover:bg-pink-400/10 transition-all duration-150 shadow-lg"
                >
                  {digit}
                </button>
              ))}

              {/* Bottom row: empty, 0, delete */}
              <div />
              <button
                onClick={() => handlePinPress("0")}
                className="w-full aspect-square rounded-full glass-card-pink border border-pink-300/25 text-white font-bold text-2xl active:scale-90 hover:border-pink-300/60 hover:bg-pink-400/10 transition-all duration-150 shadow-lg"
              >
                0
              </button>
              <button
                onClick={handleDelete}
                className="w-full aspect-square rounded-full glass-pill border border-pink-300/20 text-pink-300 flex items-center justify-center active:scale-90 hover:bg-pink-400/10 transition-all duration-150"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2M3 12l6.414 6.414a2 2 0 001.414.586H19a2 2 0 002-2V7a2 2 0 00-2-2h-8.172a2 2 0 00-1.414.586L3 12z" />
                </svg>
              </button>
            </div>

            {shake && (
              <p className="mt-6 text-xs text-rose-300 font-mono animate-pulse">
                PIN salah, coba lagi 🌸
              </p>
            )}
          </motion.div>
        ) : (
          /* UNLOCKED CREATIVE SECRET ROOM */
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="space-y-16"
          >
            {/* Secret Room Banner */}
            <div className="text-center space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center space-x-2 px-5 py-2 rounded-full glass-card-pink text-pink-300 text-xs font-semibold uppercase tracking-wider shadow-lg"
              >
                <Moon className="w-4 h-4" />
                <span>Azalia&apos;s Private Room</span>
              </motion.div>

              <h1 className="text-4xl md:text-6xl font-bold font-heading text-transparent bg-clip-text bg-gradient-to-r from-pink-200 via-rose-200 to-purple-200 text-glow-pink">
                Selamat Datang, Tuan Putriku 🌸
              </h1>

              <p className="text-base md:text-lg text-pink-100/90 max-w-xl mx-auto font-light leading-relaxed">
                Di sini terdapat rahasia kecil, pesan-pesan tersembunyi, serta keajaiban yang dibuat khusus hanya untuk Azalia Fitriani.
              </p>
            </div>

            {/* FEATURE 1: INTERACTIVE BIRTHDAY CAKE & CANDLE BLOW */}
            <div className="glass-card-pink p-8 md:p-12 rounded-3xl border border-pink-300/40 text-center shadow-2xl relative overflow-hidden">
              <div className="text-xs font-mono text-pink-300 uppercase tracking-widest mb-2">
                Interactive Moment 🎂
              </div>
              <h2 className="text-2xl md:text-4xl font-bold font-heading text-white mb-6">
                Make A Birthday Wish 🕯️
              </h2>

              {/* 3D Candle & Cake Graphic */}
              <div className="relative w-48 h-48 mx-auto mb-8 flex flex-col items-center justify-end">
                {/* Candle Flames */}
                <div className="flex space-x-6 mb-2">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="relative flex flex-col items-center">
                      {candlesLit && !candlesBlown && (
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: [1, 1.2, 1], opacity: [0.8, 1, 0.8] }}
                          transition={{ repeat: Infinity, duration: 0.6, delay: i * 0.15 }}
                          className="w-4 h-6 rounded-full bg-gradient-to-t from-amber-500 via-orange-400 to-yellow-200 blur-[1px] shadow-[0_0_15px_rgba(251,191,36,0.9)]"
                        >
                          <Flame className="w-4 h-6 text-yellow-300" />
                        </motion.div>
                      )}
                      {candlesBlown && (
                        <motion.div
                          initial={{ opacity: 1, y: 0 }}
                          animate={{ opacity: 0, y: -20 }}
                          transition={{ duration: 1 }}
                          className="text-xs font-mono text-gray-400"
                        >
                          ☁️
                        </motion.div>
                      )}
                      {/* Candle Stick */}
                      <div className="w-2.5 h-10 bg-gradient-to-b from-pink-200 to-purple-300 rounded-t-sm shadow-md" />
                    </div>
                  ))}
                </div>

                {/* Cake Layers */}
                <div className="w-44 h-16 bg-gradient-to-r from-pink-300 via-rose-300 to-purple-300 rounded-t-2xl shadow-xl border-t-2 border-white/50 flex items-center justify-center">
                  <span className="font-heading font-bold text-slate-900 text-sm tracking-widest uppercase">
                    Lily 🌸
                  </span>
                </div>
                <div className="w-52 h-14 bg-gradient-to-r from-purple-400 via-pink-400 to-rose-400 rounded-b-2xl shadow-2xl border-t border-pink-200/40" />
              </div>

              {/* Cake Actions */}
              <div className="flex flex-wrap items-center justify-center gap-4">
                {!candlesLit && !candlesBlown && (
                  <button
                    onClick={handleLightCandles}
                    className="flex items-center space-x-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-pink-300 to-rose-300 text-slate-950 font-bold text-sm shadow-lg hover:scale-105 transition"
                  >
                    <Flame className="w-4 h-4 text-amber-600" />
                    <span>Nyalakan Lilin & Make a Wish 🕯️</span>
                  </button>
                )}

                {candlesLit && !candlesBlown && (
                  <button
                    onClick={handleBlowCandles}
                    className="flex items-center space-x-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-purple-300 via-pink-300 to-rose-300 text-slate-950 font-bold text-sm shadow-lg shadow-pink-500/30 hover:scale-105 transition animate-bounce"
                  >
                    <Wind className="w-4 h-4 text-slate-900" />
                    <span>Tiup Lilin 💨</span>
                  </button>
                )}

                {candlesBlown && (
                  <button
                    onClick={handleLightCandles}
                    className="flex items-center space-x-2 px-6 py-2.5 rounded-full glass-pill text-pink-200 text-xs font-semibold hover:bg-pink-500/20 transition"
                  >
                    <span>Nyalakan Lilin Lagi 🌸</span>
                  </button>
                )}
              </div>
            </div>

            {/* FEATURE 2: CONSTELLATION OF SECRET LOVE NOTES */}
            <div>
              <div className="text-center mb-10">
                <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full glass-card-pink text-pink-300 text-xs font-semibold uppercase tracking-wider mb-2">
                  <Star className="w-3.5 h-3.5 fill-current" />
                  <span>Constellation of Memories</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold font-heading text-transparent bg-clip-text bg-gradient-to-r from-pink-200 via-rose-200 to-purple-200 text-glow-pink">
                  Rasi Bintang Surat Rahasia ⭐
                </h2>
                <p className="text-xs md:text-sm text-pink-200/70 font-light mt-1">
                  Klik setiap bola bintang untuk membuka surat tersembunyi ✨
                </p>
              </div>

              {/* 6 Constellation Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {secretConstellations.map((note) => (
                  <motion.div
                    key={note.id}
                    whileHover={{ scale: 1.04, y: -5 }}
                    onClick={() => setSelectedConstellation(note)}
                    className="glass-card-pink p-6 rounded-3xl border border-pink-200/20 cursor-pointer shadow-xl hover:border-pink-300/60 transition-all duration-300 group flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between text-xs font-mono text-pink-300 mb-3">
                        <span className="text-2xl">{note.icon}</span>
                        <span className="uppercase tracking-widest font-semibold">Note #{note.id}</span>
                      </div>
                      <h3 className="text-xl font-bold font-heading text-white mb-1 group-hover:text-pink-300 transition-colors">
                        {note.title}
                      </h3>
                      <p className="text-xs text-pink-200/70 font-mono mb-4">
                        {note.subtitle}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-pink-200/10 flex items-center justify-between text-xs text-pink-300 group-hover:translate-x-1 transition-transform">
                      <span>Buka Surat Rahasia</span>
                      <span>→</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* FEATURE 3: DIGITAL TIME CAPSULE */}
            <div className="glass-card-pink p-8 md:p-12 rounded-3xl border border-purple-300/30 text-center shadow-2xl relative overflow-hidden">
              <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-purple-400/20 flex items-center justify-center text-purple-300">
                <Sparkles className="w-7 h-7 animate-pulse" />
              </div>

              <h3 className="text-2xl md:text-3xl font-bold font-heading text-white mb-3">
                Kapsul Waktu Azalia Fitriani ⏳
              </h3>

              <p className="text-sm md:text-base text-pink-100/90 leading-relaxed font-light max-w-2xl mx-auto mb-6">
                &quot;Halaman rahasia ini diciptakan agar menjadi saksi bisu keindahan harimu. Kapan pun kamu merasa butuh tempat untuk pulang dan mengingat betapa spesialnya dirimu, pintu kamar rahasia ini akan selalu terbuka hangat untuk Lily.&quot;
              </p>

              <div className="inline-flex items-center space-x-2 text-xs font-mono text-pink-300/70 bg-slate-900/60 px-4 py-2 rounded-full border border-pink-200/20">
                <Heart className="w-3.5 h-3.5 text-rose-400 fill-current" />
                <span>Terukir untuk selamanya • 10 Oktober 2026</span>
              </div>
            </div>
          </motion.div>
        )}
      </main>

      {/* FOOTER */}
      <footer className="relative z-20 text-center text-xs font-mono text-pink-300/50 py-4">
        Azalia Fitriani Secret Sanctuary 🌸
      </footer>

      {/* POPUP MODAL 1: BIRTHDAY WISH BLOWN */}
      <AnimatePresence>
        {showWishModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowWishModal(false)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/85 backdrop-blur-xl p-4"
          >
            <motion.div
              initial={{ scale: 0.8, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.8, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-md w-full glass-card-pink border border-pink-300/40 p-8 rounded-3xl text-center shadow-2xl"
            >
              <button
                onClick={() => setShowWishModal(false)}
                className="absolute top-4 right-4 p-2 rounded-full glass-pill text-pink-200 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-pink-400/20 flex items-center justify-center text-pink-300 animate-bounce">
                <Sparkles className="w-8 h-8 text-pink-300" />
              </div>

              <h3 className="text-2xl font-bold font-heading text-white mb-2">
                Your Wish Has Been Sent ✨
              </h3>

              <p className="text-sm text-pink-100/90 leading-relaxed font-light mb-6">
                &quot;Semoga semua harapan indah yang kamu bisikkan saat meniup lilin tadi dikabulkan oleh Semesta. Selamat ulang tahun, Lily 🌸&quot;
              </p>

              <button
                onClick={() => setShowWishModal(false)}
                className="px-8 py-3 rounded-full bg-gradient-to-r from-pink-300 to-purple-300 text-slate-950 font-bold text-sm shadow-md hover:scale-105 transition"
              >
                Terima Kasih 💖
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* POPUP MODAL 2: CONSTELLATION SECRET NOTE DETAILS */}
      <AnimatePresence>
        {selectedConstellation && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedConstellation(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/85 backdrop-blur-xl p-4"
          >
            <motion.div
              initial={{ scale: 0.85, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.85, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-xl w-full glass-card-pink border border-pink-300/40 p-8 md:p-10 rounded-3xl shadow-2xl bg-slate-900/90"
            >
              <button
                onClick={() => setSelectedConstellation(null)}
                className="absolute top-4 right-4 p-2 rounded-full glass-pill text-pink-200 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center space-x-3 mb-4">
                <span className="text-3xl">{selectedConstellation.icon}</span>
                <div>
                  <h3 className="text-2xl font-bold font-heading text-white">
                    {selectedConstellation.title}
                  </h3>
                  <p className="text-xs text-pink-300 font-mono">
                    {selectedConstellation.subtitle}
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-pink-200/20 font-letter text-xl md:text-2xl text-pink-100/95 leading-relaxed mb-6">
                &quot;{selectedConstellation.content}&quot;
              </div>

              <div className="text-right">
                <button
                  onClick={() => setSelectedConstellation(null)}
                  className="px-6 py-2 rounded-full bg-gradient-to-r from-pink-300 to-rose-300 text-slate-950 font-bold text-xs shadow-md hover:scale-105 transition"
                >
                  Tutup Surat 🌸
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
