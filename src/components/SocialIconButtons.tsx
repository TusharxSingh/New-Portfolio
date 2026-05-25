"use client";

import { Mail, Linkedin, Github, Code2 } from "lucide-react";
import { siteConfig, socialLinks } from "@/data/portfolio";

const socials = [
  {
    label: "Email",
    href: `mailto:${siteConfig.email}`,
    icon: Mail,
    external: false,
  },
  {
    label: "LinkedIn",
    href: socialLinks.find((l) => l.label === "LinkedIn")?.url || "#",
    icon: Linkedin,
    external: true,
  },
  {
    label: "GitHub",
    href: socialLinks.find((l) => l.label === "GitHub")?.url || "#",
    icon: Github,
    external: true,
  },
  {
    label: "LeetCode",
    href: socialLinks.find((l) => l.label === "LeetCode")?.url || "#",
    icon: Code2,
    external: true,
  },
];

export function SocialIconButtons() {
  return (
    <div className="flex items-center gap-3">
      {socials.map(({ label, href, icon: Icon, external }) => (
        <a
          key={label}
          href={href}
          {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
          title={label}
          aria-label={label}
          className="group flex h-11 w-11 items-center justify-center rounded-xl
            border border-white/[0.08] bg-white/[0.05] backdrop-blur-md
            text-slate-400 transition-all duration-300
            hover:border-violet-500/40 hover:bg-violet-500/10 hover:text-white
            hover:scale-110 hover:shadow-lg hover:shadow-violet-500/10
            dark:border-white/[0.08] dark:bg-white/[0.05]
            dark:hover:border-violet-500/40 dark:hover:bg-violet-500/10 dark:hover:text-white"
        >
          <Icon className="h-5 w-5 transition-colors duration-300" />
        </a>
      ))}
    </div>
  );
}
