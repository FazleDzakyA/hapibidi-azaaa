"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import confetti from "canvas-confetti";
import { Calendar, PartyPopper } from "lucide-react";

export default function BirthdayCountdown() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isToday: false,
  });

  useEffect(() => {
    const targetDate = new Date("2026-10-10T00:00:00+07:00").getTime();

    const calculateTime = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0, isToday: true });
        // Confetti trigger
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
        });
      } else {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds, isToday: false });
      }
    };

    calculateTime();
    const timer = setInterval(calculateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="countdown" className="py-20 px-6 relative z-10 select-none">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full glass-card-pink text-pink-300 text-xs font-semibold uppercase tracking-wider mb-6"
        >
          <Calendar className="w-3.5 h-3.5" />
          <span>Countdown To Special Day</span>
        </motion.div>

        {timeLeft.isToday ? (
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="glass-card-pink p-8 md:p-12 rounded-3xl text-center shadow-2xl border border-pink-300/40"
          >
            <PartyPopper className="w-16 h-16 mx-auto text-pink-300 mb-4 animate-bounce" />
            <h2 className="text-2xl md:text-4xl font-bold font-heading text-transparent bg-clip-text bg-gradient-to-r from-pink-200 via-rose-300 to-white text-glow-pink">
              🎉 TODAY IS YOUR SPECIAL DAY 🎉
            </h2>
            <p className="text-pink-200/90 mt-3 text-base md:text-lg font-light leading-relaxed">
              Selamat ulang tahun Azalia Fitriani Tuan Putriku,<br/>
              cantik 💖 indah 🌸 manis 🍯 gelo 😍<br/>
              yang ke-<span className="font-bold text-pink-300 text-2xl">18</span>!!! 🎊✨🥳
            </p>
          </motion.div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {[
              { label: "Days", value: timeLeft.days },
              { label: "Hours", value: timeLeft.hours },
              { label: "Minutes", value: timeLeft.minutes },
              { label: "Seconds", value: timeLeft.seconds },
            ].map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass-card-pink p-6 md:p-8 rounded-2xl text-center border border-pink-200/20 shadow-xl hover:border-pink-300/50 transition-all duration-300"
              >
                <div className="text-3xl md:text-5xl font-bold font-mono text-transparent bg-clip-text bg-gradient-to-b from-white via-pink-200 to-rose-300 mb-1 text-glow-pink">
                  {String(item.value).padStart(2, "0")}
                </div>
                <div className="text-xs md:text-sm font-medium text-pink-300 uppercase tracking-widest">
                  {item.label}
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
