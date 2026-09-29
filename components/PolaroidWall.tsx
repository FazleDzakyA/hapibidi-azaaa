"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { PhotoItem } from "@/data/photos";
import { Sparkles } from "lucide-react";

interface PolaroidWallProps {
  photos: PhotoItem[];
  onSelectPhoto: (index: number) => void;
}

export default function PolaroidWall({ photos, onSelectPhoto }: PolaroidWallProps) {
  const [imageErrors, setImageErrors] = useState<{ [key: number]: boolean }>({});

  const handleImgError = (id: number) => {
    setImageErrors((prev) => ({ ...prev, [id]: true }));
  };

  const rotations = [-3, 2, -4, 4, -2, 3, -4, 2, -3, 3];

  return (
    <div className="mt-16 pt-12 border-t border-pink-200/10">
      <div className="text-center mb-10">
        <h3 className="text-2xl md:text-3xl font-bold font-heading text-pink-200 mb-2">
          Polaroid Memory Wall 📸
        </h3>
        <p className="text-xs md:text-sm text-pink-300/70 font-light">
          Hover over polaroids to view details ✨
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 md:gap-6 px-2">
        {photos.map((photo, index) => {
          const rotation = rotations[index % rotations.length];
          const hasError = !!imageErrors[photo.id];

          return (
            <motion.div
              key={photo.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              onClick={() => onSelectPhoto(index)}
              className="cursor-pointer group"
              style={{ transform: `rotate(${rotation}deg)` }}
              whileHover={{ rotate: 0, scale: 1.08, zIndex: 30 }}
            >
              <div className="bg-slate-100 p-3 pb-5 rounded-md shadow-2xl transition-all duration-300 group-hover:shadow-[0_15px_30px_rgba(251,207,232,0.4)]">
                {/* Photo frame */}
                <div className="relative w-full aspect-square bg-slate-900 overflow-hidden rounded-sm mb-3">
                  <Image
                    src={photo.image}
                    alt={photo.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    onError={() => handleImgError(photo.id)}
                  />
                  {hasError && (
                    <div className="absolute inset-0 bg-slate-950 flex flex-col items-center justify-center p-2 text-center text-pink-300">
                      <Sparkles className="w-5 h-5 mb-1 animate-bounce" />
                      <span className="text-[10px] leading-tight">Memory will be added soon 🌸</span>
                    </div>
                  )}
                </div>

                {/* Hand-written text label */}
                <p className="text-slate-800 text-center font-letter text-sm font-semibold truncate px-1">
                  {photo.title}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
