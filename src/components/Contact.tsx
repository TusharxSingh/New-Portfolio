"use client";

import { useState, type FormEvent } from "react";
import { Section } from "@/components/ui/Section";
import { GlassCard } from "@/components/ui/GlassCard";
import { Button } from "@/components/ui/Button";
import { siteConfig, socialLinks } from "@/data/portfolio";
import { motion } from "framer-motion";
import { Send, Github, Linkedin, Code2, Mail } from "lucide-react";
import { useReducedMotion } from "@/hooks/useReducedMotion";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  github: Github,
  linkedin: Linkedin,
  "code-2": Code2,
  mail: Mail,
};

export function Contact() {
  const reducedMotion = useReducedMotion();
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const res = await fetch("https://formspree.io/f/mvzybjbj", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(formState),
      });

      if (res.ok) {
        setIsSubmitted(true);
        setFormState({ name: "", email: "", message: "" });
        setTimeout(() => setIsSubmitted(false), 5000);
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch {
      alert("Network error. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputStyles = `w-full rounded-xl px-4 py-3 text-sm
    bg-white/60 backdrop-blur-md border border-black/[0.08]
    dark:bg-white/[0.05] dark:border-white/[0.08]
    text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500
    focus:outline-none focus:ring-2 focus:ring-violet-500/50 focus:border-violet-500/50
    transition-all duration-300`;

  return (
    <Section id="contact" title="Get in Touch" subtitle="I'd love to hear from you">
      <div className="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
        {/* Contact Form */}
        <motion.div
          initial={reducedMotion ? {} : { opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <GlassCard className="p-8">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formState.name}
                  onChange={(e) => setFormState((s) => ({ ...s, name: e.target.value }))}
                  placeholder="Your name"
                  className={inputStyles}
                />
              </div>
              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formState.email}
                  onChange={(e) => setFormState((s) => ({ ...s, email: e.target.value }))}
                  placeholder="you@example.com"
                  className={inputStyles}
                />
              </div>
              <div>
                <label htmlFor="message" className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300">
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={formState.message}
                  onChange={(e) => setFormState((s) => ({ ...s, message: e.target.value }))}
                  placeholder="Tell me about your project or just say hi!"
                  className={`${inputStyles} resize-none`}
                />
              </div>
              <Button
                variant="primary"
                className="w-full"
                ariaLabel="Send message"
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" opacity="0.25" />
                      <path fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" opacity="0.75" />
                    </svg>
                    Sending...
                  </span>
                ) : isSubmitted ? (
                  "✓ Message sent!"
                ) : (
                  <span className="flex items-center gap-2">
                    <Send className="h-4 w-4" />
                    Send Message
                  </span>
                )}
              </Button>
            </form>
          </GlassCard>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial={reducedMotion ? {} : { opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="flex flex-col gap-6"
        >
          <GlassCard className="p-8">
            <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
              Let's connect
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 mb-6">
              Feel free to reach out through any of these channels.
              I'm always open to discussing new projects and opportunities.
            </p>

            <div className="space-y-4">
              {socialLinks.map((link) => {
                const IconComponent = iconMap[link.icon];
                return (
                  <a
                    key={link.label}
                    href={link.url}
                    target={link.url.startsWith("mailto:") ? undefined : "_blank"}
                    rel={link.url.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                    className="flex items-center gap-4 rounded-xl p-3 bg-white/50 border border-black/[0.06] dark:bg-white/[0.03] dark:border-white/[0.06] hover:bg-white/70 dark:hover:bg-white/[0.08] hover:border-violet-500/20 transition-all duration-300 group"
                    aria-label={`Contact via ${link.label}`}
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-violet-500/10 group-hover:bg-violet-500/20 transition-colors duration-300">
                      {IconComponent && (
                        <IconComponent className="h-5 w-5 text-violet-500 dark:text-violet-400" />
                      )}
                    </div>
                    <div>
                      <p className="text-sm font-medium text-slate-900 dark:text-white">
                        {link.label}
                      </p>
                      <p className="text-xs text-slate-500 dark:text-slate-500 truncate max-w-[200px]">
                        {link.url.replace("mailto:", "").replace("https://", "")}
                      </p>
                    </div>
                  </a>
                );
              })}
            </div>
          </GlassCard>

          {/* Email CTA */}
          <GlassCard className="p-6 text-center">
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Prefer email? Reach me directly at
            </p>
            <a
              href={`mailto:${siteConfig.email}`}
              className="mt-1 inline-block text-sm font-semibold text-violet-600 dark:text-violet-400 hover:text-violet-500 transition-colors"
            >
              {siteConfig.email}
            </a>
          </GlassCard>
        </motion.div>
      </div>
    </Section>
  );
}
