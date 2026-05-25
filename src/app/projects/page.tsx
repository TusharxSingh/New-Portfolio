"use client";

import { FlowingMenu } from "@/components/FlowingMenu";
import { projects } from "@/data/portfolio";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Github, ExternalLink } from "lucide-react";
import { useTheme } from "@/components/providers/ThemeProvider";

const menuItems = projects.map((p) => ({
  link: p.liveUrl && p.liveUrl !== "#" ? p.liveUrl : p.githubUrl,
  text: p.title,
  image: p.image,
}));

export default function ProjectsPage() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  // Theme-aware FlowingMenu colors
  const fmColors = isDark
    ? {
        bgColor: "#09090b",
        textColor: "#f8fafc",
        borderColor: "rgba(255,255,255,0.07)",
      }
    : {
        bgColor: "#f5f5f7",
        textColor: "#1d1d1f",
        borderColor: "rgba(0,0,0,0.08)",
      };

  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)] flex flex-col">
      {/* Page Header */}
      <div className="pt-20 pb-6 px-6 md:px-12 flex items-end justify-between border-b border-black/[0.06] dark:border-white/[0.06]">
        <div>
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors duration-200 mb-4 group"
          >
            <ArrowLeft className="h-4 w-4 transition-transform duration-200 group-hover:-translate-x-1" />
            Back home
          </Link>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const }}
            className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white"
          >
            Projects
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] as const }}
            className="mt-2 text-slate-600 dark:text-slate-400 text-base"
          >
            Hover a row — click to open the live site or repo
          </motion.p>
        </div>

        {/* Legend */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="hidden md:flex items-center gap-6 text-xs text-slate-500 dark:text-slate-500"
        >
          <span className="flex items-center gap-1.5">
            <ExternalLink className="h-3.5 w-3.5" /> Live site
          </span>
          <span className="flex items-center gap-1.5">
            <Github className="h-3.5 w-3.5" /> GitHub
          </span>
        </motion.div>
      </div>

      {/* FlowingMenu — theme-aware colors */}
      <motion.div
        key={theme} /* re-mount when theme changes so colors refresh */
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="flex-1"
        style={{ minHeight: "60vh" }}
      >
        <FlowingMenu
          items={menuItems}
          speed={18}
          bgColor={fmColors.bgColor}
          textColor={fmColors.textColor}
          marqueeBgColor="#7c3aed"
          marqueeTextColor="#ffffff"
          borderColor={fmColors.borderColor}
        />
      </motion.div>

      {/* Project cards — quick-reference below the menu */}
      <div className="border-t border-black/[0.06] dark:border-white/[0.06] px-6 md:px-12 py-10">
        <p className="text-xs text-slate-500 dark:text-slate-500 uppercase tracking-widest mb-6">
          All projects
        </p>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.title}
              className="rounded-xl border border-black/[0.06] dark:border-white/[0.06]
                bg-white/70 dark:bg-white/[0.03] p-5 flex flex-col gap-3
                hover:border-violet-500/30 transition-colors duration-300"
            >
              <div className="flex items-start justify-between gap-2">
                <h3 className="text-sm font-semibold text-slate-900 dark:text-white leading-tight">
                  {project.title}
                </h3>
                <div className="flex items-center gap-2 shrink-0">
                  {project.githubUrl && project.githubUrl !== "#" && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors"
                      aria-label="GitHub repo"
                    >
                      <Github className="h-4 w-4" />
                    </a>
                  )}
                  {project.liveUrl && project.liveUrl !== "#" && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-500 hover:text-violet-600 dark:hover:text-violet-400 transition-colors"
                      aria-label="Live site"
                    >
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  )}
                </div>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-1.5 mt-auto pt-1">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-md px-2 py-0.5 text-[11px] font-medium
                      bg-violet-500/10 text-violet-600 dark:text-violet-400 border border-violet-500/20"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
