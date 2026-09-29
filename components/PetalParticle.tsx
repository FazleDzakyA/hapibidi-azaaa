"use client";

import React, { useEffect, useState } from "react";

interface Petal {
  id: number;
  left: number;
  size: number;
  duration: number;
  delay: number;
  opacity: number;
  rotate: number;
}

export default function PetalParticle() {
  const [petals, setPetals] = useState<Petal[]>([]);

  useEffect(() => {
    const generated: Petal[] = Array.from({ length: 25 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      size: Math.random() * 16 + 12,
      duration: Math.random() * 10 + 10,
      delay: Math.random() * 8,
      opacity: Math.random() * 0.6 + 0.3,
      rotate: Math.random() * 360,
    }));
    setPetals(generated);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
      {petals.map((petal) => (
        <div
          key={petal.id}
          className="absolute animate-petal select-none"
          style={{
            left: `${petal.left}%`,
            width: `${petal.size}px`,
            height: `${petal.size}px`,
            animationDuration: `${petal.duration}s`,
            animationDelay: `${petal.delay}s`,
            opacity: petal.opacity,
          }}
        >
          {/* Soft Lily Petal SVG */}
          <svg
            viewBox="0 0 30 30"
            fill="none"
            className="w-full h-full text-pink-300 drop-shadow-[0_0_8px_rgba(255,214,231,0.8)]"
            style={{ transform: `rotate(${petal.rotate}deg)` }}
          >
            <path
              d="M15 2 C22 8, 28 15, 25 24 C20 28, 10 28, 5 24 C2 15, 8 8, 15 2 Z"
              fill="currentColor"
              fillOpacity="0.75"
            />
          </svg>
        </div>
      ))}
    </div>
  );
}
