import { cn } from "@/lib/utils";
import { type ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export function GlassCard({ children, className, hover = false }: GlassCardProps) {
  return (
    <div
      className={cn(
        "relative rounded-2xl backdrop-blur-xl overflow-hidden",
        "bg-white/70 border border-black/[0.06] shadow-[0_8px_32px_rgba(0,0,0,0.06)]",
        "dark:bg-white/[0.03] dark:border-white/[0.08] dark:shadow-[0_8px_32px_rgba(0,0,0,0.12)]",
        "before:pointer-events-none before:absolute before:inset-0 before:rounded-2xl",
        "before:bg-gradient-to-b before:from-white/[0.06] before:to-transparent",
        hover &&
          "transition-all duration-300 hover:border-black/[0.1] hover:bg-white/80 hover:shadow-[0_8px_40px_rgba(124,58,237,0.08)] dark:hover:border-white/[0.15] dark:hover:bg-white/[0.06] dark:hover:shadow-[0_8px_40px_rgba(124,58,237,0.1)]",
        className
      )}
    >
      <div className="relative z-10">{children}</div>
    </div>
  );
}
