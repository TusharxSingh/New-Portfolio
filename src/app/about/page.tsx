"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)] flex flex-col items-center justify-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const }}
        className="text-center max-w-xl"
      >
        <p className="text-6xl mb-6">🚧</p>
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-3">
          About page coming soon
        </h1>
        <p className="text-slate-600 dark:text-slate-400 mb-8">
          This page is under construction. Check back soon for the full story.
        </p>
        <Link
          href="/#about"
          className="inline-flex items-center gap-2 text-sm font-medium text-violet-600 dark:text-violet-400 hover:text-violet-500 transition-colors group"
        >
          <ArrowLeft className="h-4 w-4 transition-transform duration-200 group-hover:-translate-x-1" />
          Back home
        </Link>
      </motion.div>
    </div>
  );
}
