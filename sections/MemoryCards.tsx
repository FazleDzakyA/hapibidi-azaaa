"use client";

import React from "react";
import { motion } from "framer-motion";
import { Heart, Sparkles, Star } from "lucide-react";

interface MomentCard {
  id: number;
  title: string;
  story: string;
  date: string;
}

const preciousMoments: MomentCard[] = [
  {
    id: 1,
    title: "Little Happiness",
    story: "Hal-hal kecil yang mungkin terlihat sederhana, tapi selalu berhasil membawa kehangatan dan rasa syukur luar biasa.",
    date: "Special Moment"
  },
  {
    id: 2,
    title: "Sweet Conversations",
    story: "Setiap obrolan malam, tawa lepas, dan cerita acak yang membuat waktu berlalu begitu cepat tanpa terasa.",
    date: "Midnight Stories"
  },
  {
    id: 3,
    title: "Endless Support",
    story: "Dukungan dan kehadiranmu yang selalu menjadi alasan untuk terus semangat melangkah ke depan.",
    date: "Precious Bond"
  },
  {
    id: 4,
    title: "Unspoken Warmth",
    story: "Rasa nyaman berharga yang hadir tanpa perlu banyak kata-kata, cukup hanya dengan kehadiranmu.",
    date: "Pure Harmony"
  }
];

export default function MemoryCards() {
  return (
    <section className="py-20 px-6 relative z-10 select-none">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full glass-card-pink text-pink-300 text-xs font-semibold uppercase tracking-wider mb-4"
          >
            <Star className="w-3.5 h-3.5" />
            <span>Highlights</span>
          </motion.div>
          <h3 className="text-3xl md:text-4xl font-bold font-heading text-transparent bg-clip-text bg-gradient-to-r from-pink-200 to-purple-200 text-glow-pink">
            Precious Moments ✨
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {preciousMoments.map((moment, index) => (
            <motion.div
              key={moment.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass-card-pink p-8 rounded-3xl border border-pink-200/20 shadow-xl hover:border-pink-300/50 hover:scale-[1.02] transition-all duration-300"
            >
              <div className="flex items-center justify-between text-xs font-mono text-pink-300 uppercase tracking-widest mb-3">
                <span className="flex items-center space-x-1">
                  <Sparkles className="w-3.5 h-3.5 text-pink-300" />
                  <span>{moment.date}</span>
                </span>
                <Heart className="w-4 h-4 text-rose-400 fill-current" />
              </div>
              <h4 className="text-xl font-bold font-heading text-white mb-2">
                {moment.title}
              </h4>
              <p className="text-sm text-pink-100/80 leading-relaxed font-light">
                {moment.story}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
