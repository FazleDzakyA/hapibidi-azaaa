"use client";

import React, { useState, useRef, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import PetalParticle from "@/components/PetalParticle";
import CustomCursor from "@/components/CustomCursor";
import Navbar from "@/components/Navbar";
import MusicPlayer from "@/components/MusicPlayer";
import AudioStartModal from "@/components/AudioStartModal";
import LoadingScreen from "@/components/LoadingScreen";
import PwaInstallPrompt from "@/components/PwaInstallPrompt";

import CinematicOpening from "@/sections/CinematicOpening";
import HeroSection from "@/sections/HeroSection";
import BirthdayCountdown from "@/sections/BirthdayCountdown";
import StoryTimeline from "@/sections/StoryTimeline";
import ThingsILove from "@/sections/ThingsILove";
import PhotoGallery from "@/sections/PhotoGallery";
import MemoryCards from "@/sections/MemoryCards";
import LoveLetter from "@/sections/LoveLetter";
import VirtualGiftBox from "@/sections/VirtualGiftBox";
import StarMessages from "@/sections/StarMessages";
import HeartInteractionSection from "@/sections/HeartInteractionSection";
import MiniGameSection from "@/sections/MiniGameSection";
import SecretRoomButton from "@/components/SecretRoomButton";
import FinalCinematicEnding from "@/sections/FinalCinematicEnding";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [showAudioModal, setShowAudioModal] = useState(true);
  const [showOpening, setShowOpening] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Initial loading timer
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2400);
    return () => clearTimeout(timer);
  }, []);

  const handleStartExperience = () => {
    setShowAudioModal(false);
    setShowOpening(true);

    // Try playing audio
    if (audioRef.current) {
      audioRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch((err) => {
        console.warn("Audio play prevented or file unreadable:", err);
      });
    }
  };

  const handleFinishOpening = () => {
    setShowOpening(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleTogglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch(console.warn);
    }
  };

  const handleReplay = () => {
    setShowOpening(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="relative min-h-screen bg-slate-950 text-white font-body overflow-x-hidden selection:bg-pink-300 selection:text-slate-950">
      {/* Background Audio element */}
      <audio
        ref={audioRef}
        src="/music/until-i-found-you.mp3"
        loop
        preload="auto"
      />

      {/* Floating Petals Background */}
      <PetalParticle />

      {/* Custom Trailing Cursor */}
      <CustomCursor />

      {/* PWA App Install Banner */}
      <PwaInstallPrompt />

      {/* Initial Loading Screen */}
      <LoadingScreen isLoading={isLoading} />

      {/* Audio Start Modal */}
      {!isLoading && (
        <AudioStartModal
          isOpen={showAudioModal}
          onStart={handleStartExperience}
        />
      )}

      {/* Cinematic Opening Sequence */}
      <AnimatePresence>
        {showOpening && (
          <CinematicOpening onComplete={handleFinishOpening} />
        )}
      </AnimatePresence>

      {/* Main Website View */}
      {!isLoading && !showAudioModal && (
        <>
          <Navbar />
          <MusicPlayer
            isPlaying={isPlaying}
            onTogglePlay={handleTogglePlay}
            audioRef={audioRef}
          />

          <main className="relative z-10">
            <HeroSection />
            <BirthdayCountdown />
            <StoryTimeline />
            <ThingsILove />
            <PhotoGallery />
            <MemoryCards />
            <LoveLetter />
            <VirtualGiftBox />
            <StarMessages />
            <HeartInteractionSection />
            <MiniGameSection />
            <SecretRoomButton />
            <FinalCinematicEnding onReplay={handleReplay} />
          </main>
        </>
      )}
    </div>
  );
}
