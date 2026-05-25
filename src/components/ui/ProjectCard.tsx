"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import { useCallback, useState } from "react";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { type Project } from "@/data/portfolio";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const reducedMotion = useReducedMotion();
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const [isHovered, setIsHovered] = useState(false);
  const [imgError, setImgError] = useState(false);

  const springRotateX = useSpring(rotateX, { stiffness: 150, damping: 20, mass: 0.1 });
  const springRotateY = useSpring(rotateY, { stiffness: 150, damping: 20, mass: 0.1 });

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (reducedMotion) return;
      const rect = e.currentTarget.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      rotateX.set(-((e.clientY - centerY) / (rect.height / 2)) * 8);
      rotateY.set(((e.clientX - centerX) / (rect.width / 2)) * 8);
    },
    [reducedMotion, rotateX, rotateY]
  );

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
    rotateX.set(0);
    rotateY.set(0);
  }, [rotateX, rotateY]);

  return (
    <motion.div
      initial={reducedMotion ? {} : { opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      className="h-full"
      style={{
        perspective: 1000,
      }}
    >
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX: springRotateX,
          rotateY: springRotateY,
          transformStyle: "preserve-3d",
        }}
        whileHover={reducedMotion ? {} : { scale: 1.02 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="group relative h-full flex flex-col rounded-2xl border border-black/[0.06] bg-white/70 backdrop-blur-xl overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.06)] dark:border-white/[0.08] dark:bg-white/[0.03] dark:shadow-[0_8px_32px_rgba(0,0,0,0.12)] hover:border-violet-500/20 hover:shadow-[0_8px_40px_rgba(124,58,237,0.15)] transition-colors duration-300"
      >
        {/* Glow effect */}
        {isHovered && !reducedMotion && (
            <div className="pointer-events-none absolute -inset-px rounded-2xl opacity-100 transition-opacity duration-500 bg-gradient-to-br from-violet-500/10 to-transparent" />
        )}

        {/* Project image */}
        <div className="relative aspect-video overflow-hidden bg-slate-100 dark:bg-slate-900/50">
          {imgError ? (
            <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-violet-500/20 to-indigo-500/20">
              <span className="text-lg font-bold text-violet-600 dark:text-violet-400">{project.title}</span>
            </div>
          ) : (
            <Image
              src={project.image}
              alt={`${project.title} screenshot`}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              onError={() => setImgError(true)}
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        </div>

        {/* Content */}
        <div className="p-6 relative z-10">
          <h3 className="text-lg font-bold text-slate-900 dark:text-white">
            {project.title}
          </h3>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
            {project.description}
          </p>

          {/* Tech tags */}
          <div className="mt-4 flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span
                key={t}
                className="rounded-md bg-violet-500/10 px-2.5 py-1 text-xs font-medium text-violet-600 dark:text-violet-400 border border-violet-500/20"
              >
                {t}
              </span>
            ))}
          </div>

          {/* Links */}
          <div className="mt-5 flex items-center gap-3">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-violet-600 dark:hover:text-violet-400 transition-colors duration-200"
                aria-label={`View live demo of ${project.title}`}
              >
                <ExternalLink className="h-4 w-4" />
                Live Demo
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-violet-600 dark:hover:text-violet-400 transition-colors duration-200"
                aria-label={`View source code of ${project.title}`}
              >
                <Github className="h-4 w-4" />
                Source
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
