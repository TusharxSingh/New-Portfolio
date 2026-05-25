"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { type ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary";
  className?: string;
  external?: boolean;
  ariaLabel?: string;
}

export function Button({
  children,
  href,
  onClick,
  variant = "primary",
  className,
  external,
  ariaLabel,
}: ButtonProps) {
  const baseStyles = cn(
    "inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3",
    "text-sm font-semibold tracking-wide",
    "transition-all duration-300 ease-out",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent",
    variant === "primary" && [
      "bg-gradient-to-r from-violet-600 to-indigo-600",
      "text-white shadow-lg shadow-violet-500/25",
      "hover:shadow-xl hover:shadow-violet-500/30 hover:brightness-110",
    ],
    variant === "secondary" && [
      "bg-black/5 backdrop-blur-md border border-black/10",
      "dark:bg-white/10 dark:border-white/15",
      "text-slate-900 dark:text-white",
      "hover:bg-black/10 hover:border-black/15 dark:hover:bg-white/20 dark:hover:border-white/25",
    ],
    className
  );

  const motionProps = {
    whileHover: { scale: 1.03 },
    whileTap: { scale: 0.97 },
    transition: { type: "spring" as const, stiffness: 400, damping: 17 },
  };

  if (href) {
    return (
      <motion.a
        href={href}
        className={baseStyles}
        {...motionProps}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        aria-label={ariaLabel}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      onClick={onClick}
      className={baseStyles}
      {...motionProps}
      aria-label={ariaLabel}
    >
      {children}
    </motion.button>
  );
}
