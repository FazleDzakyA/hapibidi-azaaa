"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { getPhotosData, PhotoItem } from "@/data/photos";
import LightboxModal from "@/components/LightboxModal";
import PolaroidWall from "@/components/PolaroidWall";
import { Camera, Sparkles, Eye } from "lucide-react";

export default function PhotoGallery() {
  const [photos, setPhotos] = useState<PhotoItem[]>([]);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [imgErrors, setImgErrors] = useState<{ [key: number]: boolean }>({});

  useEffect(() => {
    setPhotos(getPhotosData());
  }, []);

  const handleImgError = (id: number) => {
    setImgErrors((prev) => ({ ...prev, [id]: true }));
  };

  return (
    <section id="gallery" className="py-24 px-6 relative z-10 select-none">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full glass-card-pink text-pink-300 text-xs font-semibold uppercase tracking-wider mb-4"
          >
            <Camera className="w-3.5 h-3.5" />
            <span>Memories Collection</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-3xl md:text-5xl font-bold font-heading text-transparent bg-clip-text bg-gradient-to-r from-pink-200 via-rose-200 to-purple-200 text-glow-pink mb-4"
          >
            Our Little Memories 🌸
          </motion.h2>
          <p className="text-sm md:text-base text-pink-200/70 font-light">
            Each photo holds a precious story. Click to expand ✨
          </p>
        </div>

        {/* Pinterest / Apple Photos Masonry Layout */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {photos.map((photo, index) => {
            const hasError = !!imgErrors[photo.id];
            return (
              <motion.div
                key={photo.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                onClick={() => setSelectedIndex(index)}
                className="break-inside-avoid relative rounded-2xl overflow-hidden glass-card-pink border border-pink-200/20 group cursor-pointer shadow-xl hover:shadow-[0_15px_40px_rgba(251,207,232,0.3)] transition-all duration-500"
              >
                <div className="relative w-full aspect-[4/3] bg-slate-900 overflow-hidden">
                  <Image
                    src={photo.image}
                    alt={photo.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    onError={() => handleImgError(photo.id)}
                  />

                  {/* Fallback container if missing */}
                  {hasError && (
                    <div className="absolute inset-0 bg-slate-950/95 flex flex-col items-center justify-center p-4 text-center">
                      <Sparkles className="w-8 h-8 text-pink-300 mb-2 animate-bounce" />
                      <p className="text-sm text-pink-200 font-medium">
                        Memory will be added soon 🌸
                      </p>
                    </div>
                  )}

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <div className="flex items-center space-x-2 text-xs font-mono text-pink-300 uppercase mb-1">
                      <Eye className="w-3.5 h-3.5" />
                      <span>Click to view</span>
                    </div>
                    <h4 className="text-lg font-bold font-heading text-white mb-1">
                      {photo.title}
                    </h4>
                    <p className="text-xs text-pink-200/80 line-clamp-2">
                      {photo.caption}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Polaroid Memory Wall */}
        <PolaroidWall photos={photos} onSelectPhoto={(idx) => setSelectedIndex(idx)} />

        {/* Fullscreen Lightbox Modal */}
        <LightboxModal
          photos={photos}
          selectedIndex={selectedIndex}
          onClose={() => setSelectedIndex(null)}
          onSelectIndex={(idx) => setSelectedIndex(idx)}
        />
      </div>
    </section>
  );
}
