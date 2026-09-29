"use client";

import React, { useState, useRef, useEffect } from "react";
import { Play, Pause, Volume2, VolumeX, Music, Repeat } from "lucide-react";

interface MusicPlayerProps {
  isPlaying: boolean;
  onTogglePlay: () => void;
  audioRef: React.RefObject<HTMLAudioElement>;
}

export default function MusicPlayer({ isPlaying, onTogglePlay, audioRef }: MusicPlayerProps) {
  const [volume, setVolume] = useState(0.8);
  const [isMuted, setIsMuted] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isLoop, setIsLoop] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handleTimeUpdate = () => setCurrentTime(audio.currentTime);
    const handleLoadedData = () => {
      setDuration(audio.duration);
      setHasError(false);
    };
    const handleError = () => setHasError(true);

    audio.addEventListener("timeupdate", handleTimeUpdate);
    audio.addEventListener("loadedmetadata", handleLoadedData);
    audio.addEventListener("error", handleError);

    return () => {
      audio.removeEventListener("timeupdate", handleTimeUpdate);
      audio.removeEventListener("loadedmetadata", handleLoadedData);
      audio.removeEventListener("error", handleError);
    };
  }, [audioRef]);

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseFloat(e.target.value);
    setVolume(val);
    if (audioRef.current) {
      audioRef.current.volume = val;
      setIsMuted(val === 0);
    }
  };

  const toggleMute = () => {
    if (audioRef.current) {
      if (isMuted) {
        audioRef.current.volume = volume || 0.8;
        setIsMuted(false);
      } else {
        audioRef.current.volume = 0;
        setIsMuted(true);
      }
    }
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const seekTime = parseFloat(e.target.value);
    setCurrentTime(seekTime);
    if (audioRef.current) {
      audioRef.current.currentTime = seekTime;
    }
  };

  const toggleLoop = () => {
    if (audioRef.current) {
      audioRef.current.loop = !isLoop;
      setIsLoop(!isLoop);
    }
  };

  const formatTime = (secs: number) => {
    if (isNaN(secs)) return "0:00";
    const m = Math.floor(secs / 60);
    const s = Math.floor(secs % 60);
    return `${m}:${s < 10 ? "0" : ""}${s}`;
  };

  return (
    <div className="fixed bottom-5 right-5 z-40 select-none">
      <div className="relative">
        {/* Expanded Glass Panel */}
        {isExpanded && (
          <div className="absolute bottom-16 right-0 w-72 p-4 rounded-2xl glass-card-pink border border-pink-200/30 text-white shadow-2xl backdrop-blur-xl animate-in fade-in slide-in-from-bottom-3 duration-300">
            <div className="flex items-center space-x-3 mb-3">
              <div className="w-10 h-10 rounded-full bg-pink-400/20 flex items-center justify-center animate-pulse-glow">
                <Music className="w-5 h-5 text-pink-300 animate-spin" style={{ animationDuration: '6s' }} />
              </div>
              <div className="overflow-hidden">
                <p className="text-xs font-semibold text-pink-200 uppercase tracking-wider">Now Playing 🎵</p>
                <p className="text-sm font-bold text-white truncate">Until I Found You</p>
                <p className="text-xs text-pink-200/80 truncate">Stephen Sanchez</p>
              </div>
            </div>

            {hasError ? (
              <div className="text-xs text-rose-300 bg-rose-950/40 p-2 rounded border border-rose-500/30 text-center">
                Music unavailable 🌸 (Add until-i-found-you.mp3 to /public/music/)
              </div>
            ) : (
              <>
                {/* Progress Bar */}
                <div className="space-y-1 mb-3">
                  <input
                    type="range"
                    min="0"
                    max={duration || 100}
                    value={currentTime}
                    onChange={handleSeek}
                    className="w-full h-1.5 bg-pink-950/50 rounded-lg appearance-none cursor-pointer accent-pink-300"
                  />
                  <div className="flex justify-between text-[10px] text-pink-200/70 font-mono">
                    <span>{formatTime(currentTime)}</span>
                    <span>{formatTime(duration)}</span>
                  </div>
                </div>

                {/* Controls */}
                <div className="flex items-center justify-between">
                  <button
                    onClick={toggleLoop}
                    className={`p-1.5 rounded-full transition ${isLoop ? "text-pink-300 bg-pink-500/20" : "text-gray-400 hover:text-white"}`}
                    title="Toggle Loop"
                  >
                    <Repeat className="w-4 h-4" />
                  </button>

                  <button
                    onClick={onTogglePlay}
                    className="w-10 h-10 rounded-full bg-gradient-to-r from-pink-400 to-purple-400 text-slate-900 flex items-center justify-center hover:scale-105 active:scale-95 transition shadow-lg shadow-pink-500/30"
                  >
                    {isPlaying ? <Pause className="w-5 h-5 fill-current" /> : <Play className="w-5 h-5 fill-current ml-0.5" />}
                  </button>

                  <div className="flex items-center space-x-1">
                    <button onClick={toggleMute} className="text-pink-200 hover:text-white transition">
                      {isMuted || volume === 0 ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                    </button>
                    <input
                      type="range"
                      min="0"
                      max="1"
                      step="0.05"
                      value={isMuted ? 0 : volume}
                      onChange={handleVolumeChange}
                      className="w-16 h-1 bg-pink-950/50 rounded-lg appearance-none cursor-pointer accent-pink-300"
                    />
                  </div>
                </div>
              </>
            )}
          </div>
        )}

        {/* Floating Toggle Floating Button */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex items-center space-x-2 px-4 py-3 rounded-full glass-card-pink hover:border-pink-300/50 text-white shadow-lg backdrop-blur-md hover:scale-105 transition active:scale-95"
        >
          <div className={`w-3 h-3 rounded-full ${isPlaying ? "bg-emerald-400 animate-ping" : "bg-pink-400"}`} />
          <Music className={`w-4 h-4 text-pink-300 ${isPlaying ? "animate-spin" : ""}`} style={{ animationDuration: '4s' }} />
          <span className="text-xs font-medium tracking-wide">Until I Found You</span>
        </button>
      </div>
    </div>
  );
}
