"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Sparkles, Lock } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        scrolled ? "py-3 bg-slate-950/70 backdrop-blur-xl border-b border-pink-200/10 shadow-lg" : "py-6 bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Brand */}
        <Link href="/" className="flex items-center space-x-2 group">
          <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-pink-300 to-purple-400 p-0.5 shadow-md shadow-pink-500/20 group-hover:scale-110 transition-transform">
            <div className="w-full h-full bg-slate-950 rounded-full flex items-center justify-center text-pink-300">
              <Sparkles className="w-4 h-4" />
            </div>
          </div>
          <span className="font-heading font-bold text-lg md:text-xl text-transparent bg-clip-text bg-gradient-to-r from-pink-200 via-rose-200 to-purple-200 tracking-wide">
            Lily 🌸
          </span>
        </Link>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center space-x-8 text-sm text-pink-100/80 font-medium">
          <a href="#hero" className="hover:text-pink-300 transition-colors">Home</a>
          <a href="#story" className="hover:text-pink-300 transition-colors">Story</a>
          <a href="#things-i-love" className="hover:text-pink-300 transition-colors">Things I Love</a>
          <a href="#gallery" className="hover:text-pink-300 transition-colors">Memories</a>
          <a href="#letter" className="hover:text-pink-300 transition-colors">Love Letter</a>
          <a href="#gift" className="hover:text-pink-300 transition-colors">Surprise</a>
        </nav>

        {/* Action icons */}
        <div className="flex items-center space-x-3">
          <Link
            href="/secret"
            className="p-2.5 px-4 rounded-full glass-card-pink hover:bg-pink-500/30 text-pink-200 hover:text-white transition flex items-center space-x-2 text-xs font-mono border border-pink-300/30 shadow-md"
            title="Secret Room"
          >
            <Lock className="w-3.5 h-3.5 text-pink-300" />
            <span>Secret Room</span>
          </Link>
        </div>
      </div>
    </header>
  );
}
