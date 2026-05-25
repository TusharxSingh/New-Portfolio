"use client";

import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { LightRays } from "@/components/LightRays";
import { ScrollReveal } from "@/components/ScrollReveal";
import { TransitionLink } from "@/components/ui/TransitionLink";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#09090b] text-white">

      {/* ── Hero: LightRays + headline (always dark for cinematic effect) */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-[#09090b]">
        {/* LightRays Background */}
        <div className="absolute inset-0 z-0">
          <LightRays
            raysOrigin="top-center"
            raysColor="#7c3aed"
            raysSpeed={1.2}
            lightSpread={0.9}
            rayLength={1.5}
            followMouse={true}
            mouseInfluence={0.1}
            noiseAmount={0.05}
            distortion={0.04}
          />
        </div>

        {/* Subtle vignette */}
        <div className="absolute inset-0 z-[1] bg-gradient-to-b from-transparent via-transparent to-[#09090b]" />

        {/* Back home link */}
        <div className="absolute top-6 left-6 md:left-12 z-20">
          <TransitionLink
            href="/"
            className="inline-flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors duration-200 group"
          >
            <ArrowLeft className="h-4 w-4 transition-transform duration-200 group-hover:-translate-x-1" />
            Back home
          </TransitionLink>
        </div>

        {/* Hero headline — animated immediately, no scroll needed */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] as const }}
          className="relative z-10 px-6 md:px-12 text-center max-w-5xl mx-auto"
        >
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold leading-tight tracking-tight text-white drop-shadow-[0_4px_24px_rgba(124,58,237,0.3)]">
            Shaping Ideas into{" "}
            <span className="bg-gradient-to-r from-violet-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Intelligent Digital Solutions
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-6 text-lg text-white/50 max-w-2xl mx-auto"
          >
            Scroll to learn more about me
          </motion.p>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="mt-10"
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              className="w-6 h-10 rounded-full border-2 border-white/30 mx-auto flex items-start justify-center pt-2"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-white/60" />
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* ── ScrollReveal about text ────────────────────────── */}
      <section className="relative z-20 px-6 md:px-12 py-32 max-w-4xl mx-auto space-y-24">
        <ScrollReveal
          enableBlur={true}
          baseOpacity={0.1}
          baseRotation={3}
          blurStrength={6}
          textClassName="text-slate-200"
        >
          {"I'm Tushar, a developer who believes technology should solve real problems, simplify complex processes, and create meaningful impact."}
        </ScrollReveal>

        <ScrollReveal
          enableBlur={true}
          baseOpacity={0.1}
          baseRotation={2}
          blurStrength={5}
          textClassName="text-slate-200"
        >
          {"I enjoy building intelligent digital experiences that combine creativity, logic, and innovation. My focus is not just writing code, but creating systems that improve efficiency, automate workflows, and deliver real value to people."}
        </ScrollReveal>

        <ScrollReveal
          enableBlur={true}
          baseOpacity={0.1}
          baseRotation={2}
          blurStrength={5}
          textClassName="text-slate-200"
        >
          {"I'm passionate about developing modern applications powered by AI, automation, and scalable technologies. Whether it's building seamless web platforms, designing smart workflows, or creating data-driven systems, I love turning ideas into practical solutions."}
        </ScrollReveal>

        <ScrollReveal
          enableBlur={true}
          baseOpacity={0.1}
          baseRotation={2}
          blurStrength={5}
          textClassName="text-slate-200"
        >
          {"I believe great software is built with a balance of performance, usability, and simplicity. Clean architecture, intuitive user experiences, and impactful functionality are at the center of everything I create."}
        </ScrollReveal>

        <ScrollReveal
          enableBlur={true}
          baseOpacity={0.1}
          baseRotation={2}
          blurStrength={5}
          textClassName="text-slate-200"
        >
          {"I thrive in environments where learning never stops, challenges push innovation, and ideas can quickly evolve into real products. For me, development is more than a skill — it's a way to continuously build, improve, and innovate."}
        </ScrollReveal>
      </section>

      {/* ── Values / Details ──────────────────────────────── */}
      <section className="relative z-20 px-6 md:px-12 pb-32 max-w-5xl mx-auto">
        <div className="grid gap-8 md:grid-cols-3">
          {[
            {
              title: "Full-Stack",
              desc: "React, Next.js, Django, Python — I build end-to-end, from pixel-perfect front-ends to robust back-end APIs.",
            },
            {
              title: "AI-Powered",
              desc: "I integrate AI into real products — smart automation, intelligent search, and machine-learning pipelines.",
            },
            {
              title: "User-Centered Experiences",
              desc: "I believe technology should feel intuitive and engaging. I focus on creating digital products that are not only functional but also visually clean and easy to use.",
            },
          ].map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.6,
                delay: i * 0.15,
                ease: [0.25, 0.46, 0.45, 0.94] as const,
              }}
              className="rounded-2xl border border-white/[0.08]
                bg-white/[0.03] backdrop-blur-xl p-8
                hover:border-violet-500/30 transition-colors duration-300"
            >
              <h3 className="text-lg font-bold text-white mb-3">
                {card.title}
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                {card.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <TransitionLink href="/#contact">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-semibold hover:shadow-lg hover:shadow-violet-500/25 transition-shadow duration-300"
            >
              Let&apos;s Work Together
            </motion.button>
          </TransitionLink>
        </motion.div>
      </section>
    </div>
  );
}
