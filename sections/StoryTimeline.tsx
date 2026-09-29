"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { getTimelineData, TimelineItem } from "@/data/timeline";
import { Sparkles, BookOpen } from "lucide-react";

export default function StoryTimeline() {
  const [timeline, setTimeline] = useState<TimelineItem[]>([]);

  useEffect(() => {
    setTimeline(getTimelineData());
  }, []);

  return (
    <section id="story" className="py-24 px-6 relative z-10 select-none">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full glass-card-pink text-pink-300 text-xs font-semibold uppercase tracking-wider mb-4"
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>Behind The Scenes</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-3xl md:text-5xl font-bold font-heading text-transparent bg-clip-text bg-gradient-to-r from-pink-200 via-rose-200 to-purple-200 text-glow-pink"
          >
            A Little Story Behind This
          </motion.h2>
        </div>

        {/* Timeline List */}
        <div className="relative border-l-2 border-pink-300/30 ml-4 md:ml-32 space-y-12 pl-6 md:pl-10">
          {timeline.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
              className="relative group"
            >
              {/* Timeline Dot */}
              <div className="absolute -left-[31px] md:-left-[47px] top-1.5 w-6 h-6 rounded-full bg-slate-950 border-2 border-pink-300 flex items-center justify-center group-hover:scale-125 group-hover:border-pink-200 group-hover:shadow-[0_0_15px_rgba(251,207,232,0.8)] transition-all duration-300">
                <div className="w-2 h-2 rounded-full bg-pink-300" />
              </div>

              {/* Glass Card */}
              <div className="glass-card-pink p-6 md:p-8 rounded-2xl border border-pink-200/20 shadow-xl hover:border-pink-300/40 transition-all duration-300">
                <div className="flex items-center space-x-2 text-xs font-mono font-semibold text-pink-300 uppercase tracking-widest mb-2">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>{item.chapter}</span>
                </div>
                <h3 className="text-xl md:text-2xl font-bold font-heading text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-sm md:text-base text-pink-100/80 leading-relaxed font-light">
                  {item.content}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
