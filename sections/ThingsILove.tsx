"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Smile,
  Laugh,
  HeartHandshake,
  Heart,
  Volume2,
  UserCheck,
  Star,
  Shield,
  Sparkles,
  Flower2,
  Camera,
  InfinityIcon,
} from "lucide-react";

interface LoveCard {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const loveCardsData: LoveCard[] = [
  { id: 1, title: "Your Smile", description: "Senyummu selalu punya cara membuat hari terasa lebih baik.", icon: <Smile className="w-8 h-8 text-pink-300" /> },
  { id: 2, title: "Your Laugh", description: "Tawamu adalah salah satu suara favoritku.", icon: <Laugh className="w-8 h-8 text-pink-300" /> },
  { id: 3, title: "Your Kindness", description: "Kebaikan kecilmu selalu membuatku kagum.", icon: <HeartHandshake className="w-8 h-8 text-pink-300" /> },
  { id: 4, title: "Your Heart", description: "Hati baikmu adalah sesuatu yang sangat berharga.", icon: <Heart className="w-8 h-8 text-pink-300" /> },
  { id: 5, title: "Your Voice", description: "Ada rasa nyaman ketika mendengar ceritamu.", icon: <Volume2 className="w-8 h-8 text-pink-300" /> },
  { id: 6, title: "Your Personality", description: "Kamu punya cara sendiri yang membuatmu berbeda.", icon: <UserCheck className="w-8 h-8 text-pink-300" /> },
  { id: 7, title: "Your Dreams", description: "Aku ingin melihatmu mencapai semua impianmu.", icon: <Star className="w-8 h-8 text-pink-300" /> },
  { id: 8, title: "Your Strength", description: "Aku bangga dengan cara kamu menghadapi semuanya.", icon: <Shield className="w-8 h-8 text-pink-300" /> },
  { id: 9, title: "Your Cuteness", description: "Ada sisi kecilmu yang selalu membuatku tersenyum.", icon: <Sparkles className="w-8 h-8 text-pink-300" /> },
  { id: 10, title: "Your Beauty", description: "Keindahanmu bukan hanya tentang penampilan.", icon: <Flower2 className="w-8 h-8 text-pink-300" /> },
  { id: 11, title: "Your Memories", description: "Setiap momen bersamamu menjadi sesuatu yang berarti.", icon: <Camera className="w-8 h-8 text-pink-300" /> },
  { id: 12, title: "Everything About You", description: "Karena alasan menyayangimu tidak hanya satu.", icon: <InfinityIcon className="w-8 h-8 text-pink-300" /> },
];

export default function ThingsILove() {
  const [flipped, setFlipped] = useState<{ [key: number]: boolean }>({});

  const toggleFlip = (id: number) => {
    setFlipped((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section id="things-i-love" className="py-24 px-6 relative z-10 select-none">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full glass-card-pink text-pink-300 text-xs font-semibold uppercase tracking-wider mb-4"
          >
            <Heart className="w-3.5 h-3.5 fill-current" />
            <span>Special Qualities</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-3xl md:text-5xl font-bold font-heading text-transparent bg-clip-text bg-gradient-to-r from-pink-200 via-rose-200 to-purple-200 text-glow-pink mb-4"
          >
            Things I Love About You 🌸
          </motion.h2>
          <p className="text-sm md:text-base text-pink-200/70 font-light">
            Tap cards to flip and discover special reasons ✨
          </p>
        </div>

        {/* 12 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {loveCardsData.map((card, index) => {
            const isFlipped = !!flipped[card.id];
            return (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                onClick={() => toggleFlip(card.id)}
                className="h-52 perspective-1000 cursor-pointer group"
              >
                <motion.div
                  animate={{ rotateY: isFlipped ? 180 : 0 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                  className="w-full h-full transform-style-3d relative"
                >
                  {/* Front Side */}
                  <div className="absolute inset-0 backface-hidden glass-card-pink rounded-2xl p-6 flex flex-col items-center justify-center text-center border border-pink-200/20 group-hover:border-pink-300/60 shadow-xl transition-all">
                    <div className="p-4 rounded-full bg-pink-400/10 mb-4 group-hover:scale-110 transition-transform">
                      {card.icon}
                    </div>
                    <h3 className="text-lg font-bold font-heading text-white">
                      {card.title}
                    </h3>
                    <span className="text-[10px] text-pink-300/60 mt-2 font-mono uppercase tracking-widest">
                      Tap to reveal 🌸
                    </span>
                  </div>

                  {/* Back Side */}
                  <div className="absolute inset-0 backface-hidden rotate-y-180 glass-card rounded-2xl p-6 flex flex-col items-center justify-center text-center border border-purple-300/40 shadow-2xl bg-slate-900/95">
                    <Heart className="w-6 h-6 text-rose-400 mb-2 fill-current animate-pulse" />
                    <p className="text-sm text-pink-100 leading-relaxed font-light">
                      &quot;{card.description}&quot;
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
