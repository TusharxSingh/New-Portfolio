"use client";

import { motion } from "framer-motion";

interface SkillBadgeProps {
  skill: string;
  index: number;
}

export function SkillBadge({ skill, index }: SkillBadgeProps) {
  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.4,
        delay: index * 0.05,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      whileHover={{ scale: 1.08, y: -2 }}
      className="inline-flex items-center rounded-full px-4 py-2
                 text-sm font-medium
                 bg-white/60 backdrop-blur-md border border-black/[0.06]
                 dark:bg-white/[0.06] dark:border-white/[0.08]
                 text-slate-700 dark:text-slate-300
                 hover:border-violet-500/30 hover:bg-violet-500/10
                 transition-colors duration-300 cursor-default"
    >
      {skill}
    </motion.span>
  );
}
