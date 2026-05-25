"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { projects } from "@/data/portfolio";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export function ProjectsTeaser() {
  return (
    <Section id="projects" title="Projects" subtitle="Things I've built">
      <div className="grid gap-6 sm:grid-cols-2 max-w-4xl mx-auto">
        {projects.filter((p) => p.featured).map((project, i) => (
          <TeaserCard key={project.title} project={project} index={i} />
        ))}
      </div>

      {/* CTA to full projects page */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="mt-10 flex justify-center"
      >
        <Link
          href="/projects"
          className="group inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold
            bg-violet-500/10 border border-violet-500/20 text-violet-600 dark:text-violet-400
            hover:bg-violet-500/20 hover:border-violet-500/40 transition-all duration-300"
        >
          View all projects
          <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
        </Link>
      </motion.div>
    </Section>
  );
}

interface Project {
  title: string;
  description: string;
  tech: string[];
  liveUrl: string;
  githubUrl: string;
  image: string;
  featured: boolean;
}

function TeaserCard({ project, index }: { project: Project; index: number }) {
  const [imgError, setImgError] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] as const }}
      className="group rounded-2xl overflow-hidden border border-black/[0.06] dark:border-white/[0.08]
        bg-white/70 dark:bg-white/[0.03] shadow-[0_4px_24px_rgba(0,0,0,0.06)] dark:shadow-none
        hover:border-violet-500/30 hover:shadow-[0_8px_32px_rgba(124,58,237,0.12)] transition-all duration-300"
    >
      {/* Image thumbnail */}
      <div className="relative h-44 w-full overflow-hidden bg-gradient-to-br from-violet-500/10 to-indigo-500/10">
        {imgError ? (
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-base font-bold text-violet-600 dark:text-violet-400">
              {project.title}
            </span>
          </div>
        ) : (
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, 50vw"
            onError={() => setImgError(true)}
          />
        )}
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col gap-3">
        <h3 className="text-base font-semibold text-slate-900 dark:text-white">
          {project.title}
        </h3>
        <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed line-clamp-2">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-1.5">
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
    </motion.div>
  );
}
