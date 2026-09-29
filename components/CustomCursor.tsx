"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
}

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [clickParticles, setClickParticles] = useState<Particle[]>([]);

  useEffect(() => {
    // Mobile check
    if (window.innerWidth <= 768 || "ontouchstart" in window) {
      setIsMobile(true);
      return;
    }

    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });

      // Interactive hover check
      const target = e.target as HTMLElement | null;
      if (
        target &&
        (target.tagName === "BUTTON" ||
          target.tagName === "A" ||
          target.closest("button") ||
          target.closest("a") ||
          target.classList.contains("clickable"))
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    const onClick = (e: MouseEvent) => {
      const newParticle: Particle = {
        id: Date.now() + Math.random(),
        x: e.clientX,
        y: e.clientY,
        size: Math.random() * 16 + 14,
      };
      setClickParticles((prev) => [...prev.slice(-10), newParticle]);
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("click", onClick);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("click", onClick);
    };
  }, []);

  if (isMobile) return null;

  return (
    <>
      {/* Outer Cursor Glow */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none z-50 mix-blend-screen bg-pink-300/30 blur-[2px] border border-pink-200/50 shadow-[0_0_15px_rgba(251,207,232,0.8)]"
        animate={{
          x: position.x - 16,
          y: position.y - 16,
          scale: isHovered ? 1.8 : 1,
        }}
        transition={{ type: "spring", stiffness: 500, damping: 28, mass: 0.2 }}
      />

      {/* Inner Dot Cursor */}
      <motion.div
        className="fixed top-0 left-0 w-2.5 h-2.5 rounded-full bg-white pointer-events-none z-50 shadow-[0_0_10px_#ffffff]"
        animate={{
          x: position.x - 5,
          y: position.y - 5,
        }}
        transition={{ type: "spring", stiffness: 1000, damping: 40 }}
      />

      {/* Click Heart Burst Particles */}
      {clickParticles.map((p) => (
        <motion.div
          key={p.id}
          initial={{ opacity: 1, scale: 0.5, x: p.x - p.size / 2, y: p.y - p.size / 2 }}
          animate={{ opacity: 0, scale: 2, y: p.y - p.size / 2 - 40 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          onAnimationComplete={() => {
            setClickParticles((prev) => prev.filter((item) => item.id !== p.id));
          }}
          className="fixed pointer-events-none z-50 text-pink-300 text-lg"
        >
          💖
        </motion.div>
      ))}
    </>
  );
}
