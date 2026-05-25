"use client";

import { motion } from "framer-motion";
import { MapPin, Calendar, Briefcase } from "lucide-react";
import { GlassCard } from "./GlassCard";
import { type Experience } from "@/data/portfolio";
import { useReducedMotion } from "@/hooks/useReducedMotion";

interface TimelineItemProps {
  experience: Experience;
  index: number;
}

export function TimelineItem({ experience, index }: TimelineItemProps) {
  const reducedMotion = useReducedMotion();

  return (
    <motion.div
      initial={reducedMotion ? {} : { opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="relative pl-8 items-start"
    >
      {/* Timeline dot + line */}
      <div className="absolute left-0 top-0 bottom-0 flex flex-col items-center">
        <div
          className={`w-4 h-4 rounded-full border-2 mt-2 z-10 ${
            experience.isCurrent
              ? "border-violet-500 bg-violet-500 shadow-lg shadow-violet-500/50"
              : "border-slate-400 dark:border-slate-600 bg-slate-200 dark:bg-slate-800"
          }`}
        >
          {experience.isCurrent && (
            <div className="absolute inset-0 rounded-full bg-violet-500 animate-ping opacity-30" />
          )}
        </div>
        <div className="w-px h-full max-h-24 bg-gradient-to-b from-slate-300 dark:from-slate-700 to-transparent" />
      </div>

      {/* Content */}
      <div>
        <GlassCard className="p-6">
          {experience.isCurrent && (
            <span className="inline-flex items-center gap-1.5 rounded-full bg-violet-500/15 px-3 py-1 text-xs font-semibold text-violet-400 mb-3">
              <span className="h-1.5 w-1.5 rounded-full bg-violet-400 animate-pulse" />
              Currently @ {experience.company}
            </span>
          )}
          <h3 className="text-lg font-bold text-slate-900 dark:text-white">
            {experience.role}
          </h3>
          <div className="mt-2 flex flex-wrap gap-3 text-sm text-slate-600 dark:text-slate-400 md:justify-start">
            <span className="inline-flex items-center gap-1">
              <Briefcase className="h-3.5 w-3.5" />
              {experience.company}
            </span>
            <span className="inline-flex items-center gap-1">
              <Calendar className="h-3.5 w-3.5" />
              {experience.dates}
            </span>
            <span className="inline-flex items-center gap-1">
              <MapPin className="h-3.5 w-3.5" />
              {experience.location}
            </span>
          </div>
          <ul className="mt-4 space-y-2">
            {experience.bullets.map((bullet, i) => (
              <li
                key={i}
                className="text-sm text-slate-600 dark:text-slate-400 flex items-start gap-2"
              >
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-violet-500" />
                {bullet}
              </li>
            ))}
          </ul>
        </GlassCard>
      </div>
    </motion.div>
  );
}
