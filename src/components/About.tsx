"use client";

import { Section } from "@/components/ui/Section";
import { GlassCard } from "@/components/ui/GlassCard";
import { siteConfig } from "@/data/portfolio";
import { motion } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import Image from "next/image";
import { TransitionLink } from "@/components/ui/TransitionLink";

export function About() {
  const reducedMotion = useReducedMotion();

  return (
    <Section id="about" title="About Me" subtitle="Get to know me a little better">
      {/* Two-column: photo | inspiring text */}
      <div className="grid gap-8 md:grid-cols-2 items-stretch">

        {/* Left — Profile photo */}
        <motion.div
          initial={reducedMotion ? {} : { opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const }}
        >
          <GlassCard className="p-6 h-full">
            <div className="relative w-full aspect-square overflow-hidden rounded-2xl border-2 border-white/[0.1] shadow-xl">
              <Image
                src="/profile.jpeg"
                alt={siteConfig.name}
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 100vw, 420px"
                priority
              />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-violet-600/20 to-transparent pointer-events-none" />
            </div>
          </GlassCard>
        </motion.div>

        {/* Right — Inspiring text */}
        <motion.div
          initial={reducedMotion ? {} : { opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] as const }}
        >
          <GlassCard className="p-8 h-full flex flex-col justify-center gap-6">
            {/* Quote mark */}
            <span className="text-6xl font-serif leading-none text-violet-500/30 dark:text-violet-400/20 select-none">
              "
            </span>

            <div className="space-y-5 -mt-4">
              <p className="text-2xl md:text-3xl font-bold leading-snug text-slate-900 dark:text-white">
                Code is not just syntax —<br />
                <span className="bg-gradient-to-r from-violet-500 to-indigo-500 bg-clip-text text-transparent">
                  it's the language of change.
                </span>
              </p>

              <p className="text-base text-slate-600 dark:text-slate-400 leading-relaxed">
                Every line I write is a step toward building something that
                matters. I believe great software doesn't just solve problems —
                it creates possibilities people haven't imagined yet.
              </p>

              <p className="text-base text-slate-600 dark:text-slate-400 leading-relaxed">
                Whether it's an AI-powered app, a seamless user experience, or
                a system that automates the boring so humans can focus on the
                extraordinary — that's what drives me every day.
              </p>

              <p className="text-sm font-semibold text-violet-600 dark:text-violet-400 tracking-wide uppercase">
                — Tushar Singh Chauhan
              </p>
            </div>
          </GlassCard>
        </motion.div>
      </div>

      {/* About Me button — full width centered below grid */}
      <motion.div
        initial={reducedMotion ? {} : { opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] as const }}
        className="mt-10 flex justify-center"
      >
        <TransitionLink href="/about" aria-label="Learn more about me">
          <button
            style={{
              WebkitBoxReflect:
                "below 0px linear-gradient(to bottom, rgba(0,0,0,0.0), rgba(0,0,0,0.4))",
            }}
            className="
              px-10 py-3
              bg-gradient-to-r from-violet-600 to-indigo-600
              rounded-full shadow-xl
              group-hover:shadow-2xl group-hover:shadow-violet-600
              shadow-violet-600
              uppercase font-serif tracking-widest
              relative overflow-hidden group text-transparent cursor-pointer z-10
              after:absolute after:rounded-full after:bg-violet-200
              after:h-[85%] after:w-[95%]
              after:left-1/2 after:top-1/2
              after:-translate-x-1/2 after:-translate-y-1/2
              hover:saturate-[1.15] active:saturate-[1.4]
            "
          >
            {/* Static spacer text (invisible — keeps button width) */}
            About Me

            {/* Slide-up label — visible by default, slides away on hover */}
            <p className="absolute z-50 font-semibold bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent top-0 left-1/2 -translate-x-1/2 group-hover:-translate-y-full h-full w-full transition-all duration-300 tracking-widest flex items-center justify-center">
              ABOUT
            </p>

            {/* Slide-in label — hidden below, slides up on hover */}
            <p className="absolute z-50 top-0 left-1/2 bg-gradient-to-r from-violet-700 to-indigo-700 bg-clip-text text-transparent -translate-x-1/2 translate-y-full h-full w-full transition-all duration-300 group-hover:translate-y-0 tracking-widest font-extrabold flex items-center justify-center">
              ME
            </p>

            {/* Wave SVG — background layers */}
            <svg
              className="absolute w-full h-full scale-x-125 rotate-180 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 group-hover:animate-none animate-pulse group-hover:-translate-y-[45%] transition-all duration-300"
              viewBox="0 0 2400 800"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient id="about-grad" y2="100%" x2="50%" y1="0%" x1="50%">
                  <stop offset="0%" stopOpacity="1" stopColor="hsl(239, 84%, 67%)" />
                  <stop offset="100%" stopOpacity="1" stopColor="hsl(263, 70%, 50%)" />
                </linearGradient>
              </defs>
              <g transform="matrix(1,0,0,1,0,-91.0877685546875)" fill="url(#about-grad)">
                {[35, 70, 105, 140, 175, 210, 245].map((offset, i) => (
                  <path
                    key={i}
                    opacity={0.05 + i * 0.16}
                    transform={`matrix(1,0,0,1,0,${offset})`}
                    d="M 0 305.9828838196134 Q 227.6031525693441 450 600 302.17553022897005 Q 1010.7738828515054 450 1200 343.3024459932802 Q 1379.4406250195766 450 1800 320.38902780838214 Q 2153.573162029817 450 2400 314.38564046970816 L 2400 800 L 0 800 L 0 340.3112176762882 Z"
                  />
                ))}
              </g>
            </svg>

            {/* Wave SVG — foreground */}
            <svg
              className="absolute w-full h-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-[30%] group-hover:-translate-y-[33%] group-hover:scale-95 transition-all duration-500 z-30 fill-violet-600"
              viewBox="0 0 1440 320"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0,288L9.2,250.7C18.5,213,37,139,55,133.3C73.8,128,92,192,111,224C129.2,256,148,256,166,256C184.6,256,203,256,222,250.7C240,245,258,235,277,213.3C295.4,192,314,160,332,170.7C350.8,181,369,235,388,229.3C406.2,224,425,160,443,122.7C461.5,85,480,75,498,74.7C516.9,75,535,85,554,101.3C572.3,117,591,139,609,170.7C627.7,203,646,245,665,256C683.1,267,702,245,720,245.3C738.5,245,757,267,775,266.7C793.8,267,812,245,831,234.7C849.2,224,868,224,886,218.7C904.6,213,923,203,942,170.7C960,139,978,85,997,53.3C1015.4,21,1034,11,1052,48C1070.8,85,1089,171,1108,197.3C1126.2,224,1145,192,1163,197.3C1181.5,203,1200,245,1218,224C1236.9,203,1255,117,1274,106.7C1292.3,96,1311,160,1329,170.7C1347.7,181,1366,139,1385,128C1403.1,117,1422,139,1431,149.3L1440,160L1440,320L1430.8,320C1421.5,320,1403,320,1385,320C1366.2,320,1348,320,1329,320C1310.8,320,1292,320,1274,320C1255.4,320,1237,320,1218,320C1200,320,1182,320,1163,320C1144.6,320,1126,320,1108,320C1089.2,320,1071,320,1052,320C1033.8,320,1015,320,997,320C978.5,320,960,320,942,320C923.1,320,905,320,886,320C867.7,320,849,320,831,320C812.3,320,794,320,775,320C756.9,320,738,320,720,320C701.5,320,683,320,665,320C646.2,320,628,320,609,320C590.8,320,572,320,554,320C535.4,320,517,320,498,320C480,320,462,320,443,320C424.6,320,406,320,388,320C369.2,320,351,320,332,320C313.8,320,295,320,277,320C258.5,320,240,320,222,320C203.1,320,185,320,166,320C147.7,320,129,320,111,320C92.3,320,74,320,55,320C36.9,320,18,320,9,320L0,320Z"
                fillOpacity="1"
              />
            </svg>
          </button>
        </TransitionLink>
      </motion.div>
    </Section>
  );
}
