"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Calendar, Sparkles } from "lucide-react";
import { PhotoItem } from "@/data/photos";

interface LightboxModalProps {
  photos: PhotoItem[];
  selectedIndex: number | null;
  onClose: () => void;
  onSelectIndex: (index: number) => void;
}

export default function LightboxModal({
  photos,
  selectedIndex,
  onClose,
  onSelectIndex,
}: LightboxModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onSelectIndex((selectedIndex - 1 + photos.length) % photos.length);
      if (e.key === "ArrowRight") onSelectIndex((selectedIndex + 1) % photos.length);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex, photos, onClose, onSelectIndex]);

  if (selectedIndex === null) return null;
  const currentPhoto = photos[selectedIndex];

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/90 backdrop-blur-2xl p-4 md:p-8 select-none"
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 z-50 p-3 rounded-full glass-card-pink hover:bg-pink-500/30 text-white transition hover:scale-110 active:scale-95"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Previous Button */}
        <button
          onClick={() => onSelectIndex((selectedIndex - 1 + photos.length) % photos.length)}
          className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full glass-card-pink hover:bg-pink-500/30 text-white transition hover:scale-110 active:scale-95"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        {/* Next Button */}
        <button
          onClick={() => onSelectIndex((selectedIndex + 1) % photos.length)}
          className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full glass-card-pink hover:bg-pink-500/30 text-white transition hover:scale-110 active:scale-95"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Central Card */}
        <motion.div
          key={currentPhoto.id}
          initial={{ scale: 0.85, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.85, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 28 }}
          className="relative max-w-4xl w-full max-h-[85vh] flex flex-col md:flex-row glass-card-pink rounded-3xl overflow-hidden shadow-2xl border border-pink-300/30"
        >
          {/* Image Side */}
          <div className="relative flex-1 min-h-[300px] md:min-h-[480px] bg-slate-900 flex items-center justify-center overflow-hidden">
            <Image
              src={currentPhoto.image}
              alt={currentPhoto.title}
              fill
              className="object-contain"
            />
          </div>

          {/* Caption Side */}
          <div className="w-full md:w-80 p-6 md:p-8 flex flex-col justify-between bg-slate-950/80 backdrop-blur-md">
            <div>
              <div className="flex items-center space-x-2 text-xs font-mono text-pink-300 uppercase tracking-wider mb-3">
                <Calendar className="w-3.5 h-3.5" />
                <span>{currentPhoto.date || `Memory #${currentPhoto.id}`}</span>
              </div>
              <h3 className="text-2xl font-bold font-heading text-white mb-3">
                {currentPhoto.title}
              </h3>
              <p className="text-sm text-pink-100/80 leading-relaxed font-light">
                {currentPhoto.caption}
              </p>
            </div>

            <div className="pt-6 border-t border-pink-200/10 flex items-center justify-between text-xs text-pink-300/60 font-mono">
              <span>{selectedIndex + 1} / {photos.length}</span>
              <span className="flex items-center space-x-1">
                <Sparkles className="w-3.5 h-3.5 text-pink-300" />
                <span>Lily&apos;s Memory</span>
              </span>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
