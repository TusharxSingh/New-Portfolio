"use client";

import { Section } from "@/components/ui/Section";
import { GlassCard } from "@/components/ui/GlassCard";
import { SkillBadge } from "@/components/ui/SkillBadge";
import { siteConfig, skills } from "@/data/portfolio";
import { motion } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import Image from "next/image";

export function About() {
  const reducedMotion = useReducedMotion();

  return (
    <Section id="about" title="About Me" subtitle="Get to know me a little better">
      <div className="grid gap-8 md:grid-cols-2 items-start">
        {/* Bio + Photo */}
        <motion.div
          initial={reducedMotion ? {} : { opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="h-full"
        >
          <GlassCard className="p-8 h-full">
            <div className="mb-6 flex justify-center">
              <div className="relative w-full aspect-square overflow-hidden rounded-2xl border-2 border-white/[0.1] shadow-xl">
                <Image
                  src="/profile.jpeg"
                  alt={siteConfig.name}
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 100vw, 400px"
                  priority
                />
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-violet-600/20 to-transparent pointer-events-none" />
              </div>
            </div>
            <p className="text-base leading-relaxed text-slate-600 dark:text-slate-400">
              {siteConfig.bio}
            </p>
          </GlassCard>
        </motion.div>

        {/* Skills */}
        <motion.div
          initial={reducedMotion ? {} : { opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="h-full"
        >
          <GlassCard className="p-8 h-full">
            <h3 className="mb-6 text-lg font-semibold text-slate-900 dark:text-white">
              Tech Stack & Skills
            </h3>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill, index) => (
                <SkillBadge key={skill} skill={skill} index={index} />
              ))}
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </Section>
  );
}
