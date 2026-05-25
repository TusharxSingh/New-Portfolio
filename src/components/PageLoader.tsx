"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function PageLoader() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // Hide after window fully loads (images, fonts, etc.)
    const hide = () => setTimeout(() => setVisible(false), 400);
    if (document.readyState === "complete") {
      hide();
    } else {
      window.addEventListener("load", hide, { once: true });
    }
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#09090b]"
        >
          {/* SVG Loader */}
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

          {/* Name beneath loader */}
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mt-6 text-sm font-semibold tracking-[0.25em] uppercase text-violet-400"
          >
            Tushar Singh Chauhan
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
