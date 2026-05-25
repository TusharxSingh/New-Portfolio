"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/data/portfolio";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { useRef } from "react";

export function Hero() {
  const reducedMotion = useReducedMotion();
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();

  // Parallax transforms for background blobs
  const blob1Y = useTransform(scrollY, [0, 800], [0, -150]);
  const blob2Y = useTransform(scrollY, [0, 800], [0, -100]);
  const blob3Y = useTransform(scrollY, [0, 800], [0, -200]);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: reducedMotion ? {} : { opacity: 0, y: 30, filter: "blur(10px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94] as const,
      },
    },
  };

  const handleScroll = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      ref={containerRef}
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      {/* Background gradient blobs */}
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          style={{ y: reducedMotion ? 0 : blob1Y }}
          className="absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-gradient-to-br from-violet-600/20 to-indigo-600/20 blur-[100px] dark:from-violet-600/30 dark:to-indigo-600/30"
        />
        <motion.div
          style={{ y: reducedMotion ? 0 : blob2Y }}
          className="absolute top-1/3 -right-32 h-[400px] w-[400px] rounded-full bg-gradient-to-br from-blue-500/15 to-cyan-500/15 blur-[100px] dark:from-blue-500/20 dark:to-cyan-500/20"
        />
        <motion.div
          style={{ y: reducedMotion ? 0 : blob3Y }}
          className="absolute -bottom-20 left-1/3 h-[350px] w-[350px] rounded-full bg-gradient-to-br from-fuchsia-500/15 to-pink-500/15 blur-[100px] dark:from-fuchsia-500/20 dark:to-pink-500/20"
        />
      </div>

      {/* Floating glass shapes */}
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          animate={
            reducedMotion
              ? {}
              : {
                  y: [0, -20, 0],
                  rotate: [0, 5, 0],
                }
          }
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[15%] left-[10%] h-24 w-24 rounded-2xl border border-black/[0.04] bg-black/[0.02] dark:border-white/[0.08] dark:bg-white/[0.03] backdrop-blur-sm rotate-12"
        />
        <motion.div
          animate={
            reducedMotion
              ? {}
              : {
                  y: [0, 25, 0],
                  rotate: [0, -8, 0],
                }
          }
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute top-[20%] right-[15%] h-32 w-32 rounded-2xl border border-black/[0.04] bg-black/[0.02] dark:border-white/[0.06] dark:bg-white/[0.02] backdrop-blur-sm -rotate-6"
        />
        <motion.div
          animate={
            reducedMotion
              ? {}
              : {
                  y: [0, -15, 0],
                  rotate: [0, 10, 0],
                }
          }
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-[25%] right-[8%] h-20 w-20 rounded-2xl border border-black/[0.04] bg-black/[0.02] dark:border-white/[0.08] dark:bg-white/[0.03] backdrop-blur-sm rotate-45"
        />
        <motion.div
          animate={
            reducedMotion
              ? {}
              : {
                  y: [0, 20, 0],
                  rotate: [0, -12, 0],
                }
          }
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 3 }}
          className="absolute bottom-[30%] left-[5%] h-16 w-16 rounded-full border border-black/[0.04] bg-black/[0.02] dark:border-white/[0.06] dark:bg-white/[0.02] backdrop-blur-sm"
        />
      </div>

      {/* Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 mx-auto max-w-4xl px-6 text-center"
      >
        <motion.p
          variants={itemVariants}
          className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-violet-600 dark:text-violet-400"
        >
          Welcome to my portfolio
        </motion.p>

        <motion.h1
          variants={itemVariants}
          className="text-4xl font-bold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl text-slate-900 dark:text-white"
        >
          Hi, I&apos;m{" "}
          <span className="bg-gradient-to-r from-violet-600 via-indigo-500 to-purple-600 bg-clip-text text-transparent">
            {siteConfig.name.split(" ")[0]}
          </span>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="mt-6 text-xl font-medium text-slate-700 dark:text-slate-300 sm:text-2xl"
        >
          {siteConfig.role}
        </motion.p>

        <motion.p
          variants={itemVariants}
          className="mt-4 text-base text-slate-500 dark:text-slate-400 sm:text-lg max-w-2xl mx-auto"
        >
          {siteConfig.tagline}
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
        >
          <Button
            variant="primary"
            onClick={() => handleScroll("#projects")}
            ariaLabel="View my projects"
          >
            View my work
          </Button>
          <Button
            variant="secondary"
            onClick={() => handleScroll("#contact")}
            ariaLabel="Get in touch with me"
          >
            Get in touch
          </Button>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.button
          animate={reducedMotion ? {} : { y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          onClick={() => handleScroll("#about")}
          className="flex flex-col items-center gap-2 text-slate-400 dark:text-slate-500 hover:text-violet-500 dark:hover:text-violet-400 transition-colors"
          aria-label="Scroll to about section"
        >
          <span className="text-xs font-medium tracking-wider uppercase">Scroll</span>
          <ArrowDown className="h-4 w-4" />
        </motion.button>
      </motion.div>
    </section>
  );
}
