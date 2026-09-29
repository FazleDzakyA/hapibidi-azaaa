"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Download, X, Sparkles, Smartphone } from "lucide-react";

export default function PwaInstallPrompt() {
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [showPrompt, setShowPrompt] = useState(false);
  const [isInstalled, setIsInstalled] = useState(false);

  useEffect(() => {
    // Register Service Worker
    if ("serviceWorker" in navigator && typeof window !== "undefined") {
      navigator.serviceWorker
        .register("/sw.js")
        .then((reg) => {
          console.log("PWA Service Worker registered successfully:", reg.scope);
        })
        .catch((err) => {
          console.warn("PWA Service Worker registration failed:", err);
        });
    }

    // Check if already in standalone display mode
    if (
      window.matchMedia("(display-mode: standalone)").matches ||
      (window.navigator as any).standalone === true
    ) {
      setIsInstalled(true);
      return;
    }

    // Capture beforeinstallprompt event
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setShowPrompt(true);
    };

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
    };
  }, []);

  const handleInstallClick = async () => {
    if (!deferredPrompt) return;
    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    if (outcome === "accepted") {
      setIsInstalled(true);
    }
    setDeferredPrompt(null);
    setShowPrompt(false);
  };

  if (isInstalled || !showPrompt) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
        className="fixed bottom-20 left-4 right-4 md:left-auto md:right-6 md:bottom-6 z-50 max-w-sm select-none"
      >
        <div className="glass-card-pink border border-pink-300/40 p-4 rounded-2xl shadow-2xl backdrop-blur-xl relative flex items-center space-x-3 bg-slate-950/90">
          <button
            onClick={() => setShowPrompt(false)}
            className="absolute top-2 right-2 text-pink-300/60 hover:text-pink-100 p-1"
          >
            <X className="w-4 h-4" />
          </button>

          <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-pink-300 via-rose-300 to-purple-400 p-0.5 shadow-md flex-shrink-0">
            <div className="w-full h-full bg-slate-950 rounded-2xl flex items-center justify-center text-pink-300">
              <Smartphone className="w-6 h-6 animate-pulse" />
            </div>
          </div>

          <div className="flex-1 pr-4">
            <h4 className="text-sm font-bold font-heading text-white flex items-center space-x-1">
              <span>Install App Lily 🌸</span>
            </h4>
            <p className="text-[11px] text-pink-200/80 font-mono leading-tight mt-0.5">
              Pasang di HP Android/iPhone kamu untuk akses fullscreen!
            </p>
            <button
              onClick={handleInstallClick}
              className="mt-2.5 flex items-center space-x-1.5 px-4 py-1.5 rounded-full bg-gradient-to-r from-pink-300 via-rose-300 to-purple-300 text-slate-950 font-bold text-xs shadow-md hover:scale-105 transition"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Install App 📱</span>
            </button>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
