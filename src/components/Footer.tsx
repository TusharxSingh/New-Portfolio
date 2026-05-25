"use client";

import { Github, Linkedin, Code2, Mail } from "lucide-react";
import { siteConfig, socialLinks } from "@/data/portfolio";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  github: Github,
  linkedin: Linkedin,
  "code-2": Code2,
  mail: Mail,
};

export function Footer() {
  return (
    <footer className="relative border-t border-black/[0.06] dark:border-white/[0.06] mt-20">
      <div className="mx-auto max-w-6xl px-6 py-8">
        <div className="flex flex-col items-center gap-6 sm:flex-row sm:justify-between">
          {/* Name */}
          <p className="text-sm font-medium text-slate-600 dark:text-slate-400">
            © {new Date().getFullYear()}{" "}
            <span className="bg-gradient-to-r from-violet-500 to-indigo-500 bg-clip-text text-transparent font-semibold">
              {siteConfig.name}
            </span>
          </p>

          {/* Social links */}
          <div className="flex items-center gap-2">
            {socialLinks.map((link) => {
              const IconComponent = iconMap[link.icon];
              return (
                <a
                  key={link.label}
                  href={link.url}
                  target={link.url.startsWith("mailto:") ? undefined : "_blank"}
                  rel={link.url.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                  className="flex h-9 w-9 items-center justify-center rounded-lg text-slate-500 dark:text-slate-500 hover:text-violet-600 dark:hover:text-violet-400 hover:bg-white/[0.08] transition-all duration-300"
                  aria-label={link.label}
                >
                  {IconComponent && <IconComponent className="h-4 w-4" />}
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}
