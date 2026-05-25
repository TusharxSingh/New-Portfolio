"use client";

import { useEffect, useState, useRef, createContext, useContext, useCallback } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

// ── Context so Navbar (or any link) can trigger the loader before navigating ──
interface TransitionContextValue {
  startTransition: (navigateFn: () => void) => void;
}

const TransitionContext = createContext<TransitionContextValue>({
  startTransition: (fn) => fn(),
});

export function usePageTransition() {
  return useContext(TransitionContext);
}

// ── Main component ──────────────────────────────────────────────
export function PageLoader({ children }: { children: React.ReactNode }) {
  const [phase, setPhase] = useState<"loading" | "idle">("loading");
  const pathname = usePathname();
  const isFirstLoad = useRef(true);
  const pendingNav = useRef<(() => void) | null>(null);

  // Initial page load
  useEffect(() => {
    const hide = () => {
      setTimeout(() => {
        setPhase("idle");
        isFirstLoad.current = false;
      }, 1200);
    };
    if (document.readyState === "complete") {
      hide();
    } else {
      window.addEventListener("load", hide, { once: true });
    }
  }, []);

  // After pathname changes (navigation completed), keep loader for a moment then hide
  useEffect(() => {
    if (isFirstLoad.current) return; // handled by initial load above
    // Navigation has completed — show loader briefly then reveal
    setPhase("loading");
    const timer = setTimeout(() => setPhase("idle"), 800);
    return () => clearTimeout(timer);
  }, [pathname]);

  // Called by links/navbar BEFORE navigating
  const startTransition = useCallback((navigateFn: () => void) => {
    setPhase("loading");
    // Wait for curtain to cover screen, then navigate
    pendingNav.current = navigateFn;
    setTimeout(() => {
      if (pendingNav.current) {
        pendingNav.current();
        pendingNav.current = null;
      }
    }, 400);
  }, []);

  return (
    <TransitionContext.Provider value={{ startTransition }}>
      {children}
      <AnimatePresence mode="wait">
        {phase === "loading" && (
          <motion.div
            key="loader"
            initial={{ clipPath: "circle(0% at 50% 50%)" }}
            animate={{ clipPath: "circle(150% at 50% 50%)" }}
            exit={{ opacity: 0 }}
            transition={{
              clipPath: { duration: 0.6, ease: [0.76, 0, 0.24, 1] },
              opacity: { duration: 0.4, ease: "easeOut", delay: 0.1 },
            }}
            className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#09090b]"
          >
            {/* SVG Loader */}
            <motion.div
              initial={{ scale: 0.7, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.2, ease: "easeOut" }}
            >
              <svg className="loader" width="96" height="96" viewBox="0 0 240 240">
                <circle
                  className="loader-ring loader-ring-a"
                  cx="120" cy="120" r="105"
                  fill="none" stroke="#000"
                  strokeWidth="20"
                  strokeDasharray="0 660"
                  strokeDashoffset="-330"
                  strokeLinecap="round"
                />
                <circle
                  className="loader-ring loader-ring-b"
                  cx="120" cy="120" r="35"
                  fill="none" stroke="#000"
                  strokeWidth="20"
                  strokeDasharray="0 220"
                  strokeDashoffset="-110"
                  strokeLinecap="round"
                />
                <circle
                  className="loader-ring loader-ring-c"
                  cx="85" cy="120" r="70"
                  fill="none" stroke="#000"
                  strokeWidth="20"
                  strokeDasharray="0 440"
                  strokeLinecap="round"
                />
                <circle
                  className="loader-ring loader-ring-d"
                  cx="155" cy="120" r="70"
                  fill="none" stroke="#000"
                  strokeWidth="20"
                  strokeDasharray="0 440"
                  strokeLinecap="round"
                />
              </svg>
            </motion.div>

            {/* Name beneath loader */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.4 }}
              className="mt-6 text-sm font-semibold tracking-[0.25em] uppercase text-violet-400"
            >
              Tushar Singh Chauhan
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </TransitionContext.Provider>
  );
}
