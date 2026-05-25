"use client";

import { Section } from "@/components/ui/Section";
import { GlassCard } from "@/components/ui/GlassCard";
import { Button } from "@/components/ui/Button";
import { leetcodeProfile } from "@/data/portfolio";
import { motion } from "framer-motion";
import { Code2, ExternalLink } from "lucide-react";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export function LeetCode() {
  const reducedMotion = useReducedMotion();

  return (
    <Section id="leetcode" title="Coding" subtitle="Problem solving & competitive programming">
      <div className="mx-auto max-w-2xl">
        <GlassCard className="p-8 text-center">
          <motion.div
            initial={reducedMotion ? {} : { scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-500/20 to-orange-500/20 border border-amber-500/20"
          >
            <Code2 className="h-8 w-8 text-amber-500" />
          </motion.div>

          <h3 className="text-xl font-bold text-slate-900 dark:text-white">
            LeetCode
          </h3>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
            Sharpening my problem-solving skills one challenge at a time
          </p>

          {/* Stats */}
          <div className="mt-8 grid grid-cols-3 gap-4">
            {leetcodeProfile.stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={reducedMotion ? {} : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                className="rounded-xl bg-white/50 border border-black/[0.06] dark:bg-white/[0.04] dark:border-white/[0.06] p-4"
              >
                <p className="text-2xl font-bold text-violet-500 dark:text-violet-400">
                  {stat.value}
                </p>
                <p className="mt-1 text-xs text-slate-500 dark:text-slate-500">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="mt-8">
            <Button
              href={leetcodeProfile.url}
              variant="secondary"
              external
              ariaLabel="View LeetCode profile"
            >
              <Code2 className="h-4 w-4" />
              View my LeetCode
              <ExternalLink className="h-3.5 w-3.5" />
            </Button>
          </div>
        </GlassCard>
      </div>
    </Section>
  );
}
