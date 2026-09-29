"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Lock, Sparkles, AlertCircle } from "lucide-react";

export default function SecretRoomButton() {
  const router = Router();
  const [clicked, setClicked] = useState(false);

  function Router() {
    return useRouter();
  }

  const handleClick = () => {
    setClicked(true);
    setTimeout(() => {
      router.push("/secret");
    }, 1500);
  };

  return (
    <div className="py-12 text-center select-none">
      <AnimatePresence>
        {clicked ? (
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="inline-flex items-center space-x-2 px-6 py-3 rounded-full glass-card-pink border border-pink-300/40 text-pink-200 text-sm font-semibold"
          >
            <Sparkles className="w-4 h-4 text-pink-300 animate-spin" />
            <span>Aku tahu kamu pasti klik 😄 Opening Secret Room...</span>
          </motion.div>
        ) : (
          <button
            onClick={handleClick}
            className="group inline-flex items-center space-x-2 px-4 py-2 rounded-full glass-pill hover:bg-pink-500/20 text-pink-300/70 hover:text-pink-200 text-xs font-mono transition"
          >
            <Lock className="w-3.5 h-3.5 group-hover:rotate-12 transition-transform" />
            <span>Don&apos;t Click Me 🤫</span>
          </button>
        )}
      </AnimatePresence>
    </div>
  );
}
