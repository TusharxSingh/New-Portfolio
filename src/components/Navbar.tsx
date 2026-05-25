"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { navLinks, siteConfig } from "@/data/portfolio";
import { cn } from "@/lib/utils";
import { useRouter, usePathname } from "next/navigation";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const { scrollY } = useScroll();
  const router = useRouter();
  const pathname = usePathname();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  // Scroll spy — only runs on the home page for hash links
  useEffect(() => {
    if (pathname !== "/") return;

    const handleScroll = () => {
      const hashLinks = navLinks.filter((l) => l.href.startsWith("#"));
      const sections = hashLinks.map((l) => l.href.replace("#", ""));
      for (const sectionId of [...sections].reverse()) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 150) {
            setActiveSection(sectionId);
            return;
          }
        }
      }
      setActiveSection("");
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  // Determine whether a nav link is active
  const isLinkActive = (href: string) => {
    if (href.startsWith("#")) {
      return pathname === "/" && activeSection === href.replace("#", "");
    }
    return pathname === href;
  };

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);

    if (href.startsWith("#")) {
      // If not on the home page, navigate home first then the browser will handle the hash
      if (pathname !== "/") {
        router.push(`/${href}`);
        return;
      }
      const el = document.querySelector(href);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      router.push(href);
    }
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          isScrolled
            ? "py-2"
            : "py-4"
        )}
      >
        <nav
          className={cn(
            "mx-auto flex max-w-5xl items-center justify-between px-6 transition-all duration-500 rounded-2xl",
            isScrolled
              ? "bg-white/60 dark:bg-white/[0.04] backdrop-blur-2xl border border-black/[0.08] dark:border-white/[0.08] shadow-lg shadow-black/[0.03] dark:shadow-black/20 py-2 mt-2 mx-4 md:mx-auto"
              : "bg-white/30 dark:bg-white/[0.02] backdrop-blur-xl border border-transparent py-2 mt-2 mx-4 md:mx-auto"
          )}
        >
          {/* Logo */}
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              if (pathname === "/") {
                window.scrollTo({ top: 0, behavior: "smooth" });
              } else {
                router.push("/");
              }
            }}
            className="text-xl font-bold bg-gradient-to-r from-violet-500 to-indigo-500 bg-clip-text text-transparent hover:from-violet-400 hover:to-indigo-400 transition-all duration-300"
          >
            {siteConfig.initials}
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className={cn(
                  "relative px-4 py-1.5 text-sm font-medium rounded-full transition-all duration-300",
                  isLinkActive(link.href)
                    ? "text-white dark:text-white"
                    : "text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                )}
              >
                {isLinkActive(link.href) && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute inset-0 rounded-full bg-violet-600/90 dark:bg-violet-500/20 border border-violet-500/30"
                    transition={{ type: "spring" as const, stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{link.label}</span>
              </button>
            ))}
          </div>

          {/* Desktop Right */}
          <div className="hidden md:flex items-center gap-3">
            <ThemeToggle />
          </div>

          {/* Mobile Right */}
          <div className="flex md:hidden items-center gap-2">
            <ThemeToggle />
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="flex h-10 w-10 items-center justify-center rounded-xl bg-black/5 backdrop-blur-md border border-black/10 dark:bg-white/10 dark:border-white/15 hover:bg-black/10 dark:hover:bg-white/20 transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500"
              aria-label="Toggle navigation menu"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? (
                <X className="h-5 w-5 text-slate-900 dark:text-white" />
              ) : (
                <Menu className="h-5 w-5 text-slate-900 dark:text-white" />
              )}
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-white/80 dark:bg-slate-950/90 backdrop-blur-2xl md:hidden"
          >
            <nav className="flex h-full flex-col items-center justify-center gap-8">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ delay: i * 0.1, duration: 0.3 }}
                  onClick={() => handleNavClick(link.href)}
                  className="text-2xl font-semibold text-slate-900 dark:text-white hover:text-violet-600 dark:hover:text-violet-400 transition-colors"
                >
                  {link.label}
                </motion.button>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
