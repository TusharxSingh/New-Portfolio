// ─────────────────────────────────────────────────────────────
// portfolio.ts — Single source of truth for all site content.
// Edit YOUR info here. No need to touch any component files.
// ─────────────────────────────────────────────────────────────

export interface Project {
  title: string;
  description: string;
  tech: string[];
  liveUrl: string;
  githubUrl: string;
  image: string;
  featured: boolean;
}

export interface Experience {
  role: string;
  company: string;
  dates: string;
  location: string;
  bullets: string[];
  isCurrent: boolean;
}

export interface SocialLink {
  label: string;
  url: string;
  icon: string;
}

export interface LeetCodeStat {
  label: string;
  value: string;
}

// ── Site-wide configuration ──────────────────────────────────

export const siteConfig = {
  name: "Tushar Singh Chauhan",
  initials: "TSC",
  role: "Full-Stack Developer & AI Enthusiast",
  tagline: "Turning innovative ideas into intelligent software solutions",
  email: "tusharsinghchauhan1123@gmail.com",
  resumeUrl: "https://drive.google.com/file/d/YOUR_FILE_ID/preview", // Replace YOUR_FILE_ID
  bio: `I'm a Full-Stack Developer and AI enthusiast who builds AI-powered web applications and smart automation systems. I work across the stack — from React/Next.js front-ends to Django/Python back-ends — and love turning innovative ideas into intelligent software solutions. I also enjoy bridging software with hardware through projects involving ESP32-CAM and Arduino.`,
} as const;

// ── Navigation ───────────────────────────────────────────────

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "#contact" },
];

// ── Social links ─────────────────────────────────────────────

export const socialLinks: SocialLink[] = [
  { label: "GitHub", url: "https://github.com/TusharxSingh", icon: "github" },
  {
    label: "LinkedIn",
    url: "https://www.linkedin.com/in/tushar-singh-chauhan-93aa561b1/",
    icon: "linkedin",
  },
  {
    label: "LeetCode",
    url: "https://leetcode.com/u/tusharrr23/",
    icon: "code-2",
  },
  {
    label: "Email",
    url: "mailto:tusharsinghchauhan1123@gmail.com",
    icon: "mail",
  },
];

// ── Skills ───────────────────────────────────────────────────

export const skills: string[] = [
  "React.js",
  "Next.js",
  "Django",
  "Python",
  "JavaScript",
  "TypeScript",
  "MySQL",
  "PostgreSQL",
  "REST APIs",
  "JWT Authentication",
  "AI Integration",
  "GitHub API",
  "ESP32-CAM",
  "Arduino",
  "Machine Learning Basics",
  "Automation",
  "Docker (learning)",
];

// ── Work experience ──────────────────────────────────────────

export const experiences: Experience[] = [
  {
    role: "Web Developer Intern",
    company: "Concentics Pvt. Ltd.",
    dates: "Feb 2026 — Present",
    location: "Remote",
    bullets: [
      "Building and maintaining responsive web applications using modern frameworks",
      "Collaborating with the development team on feature implementation and code reviews",
      "Optimizing front-end performance and improving user experience across platforms",
    ],
    isCurrent: true,
  },
];

// ── Projects ─────────────────────────────────────────────────

export const projects: Project[] = [
  {
    title: "Event Booking System",
    description:
      "Discover, create, and RSVP to events with a seamless booking experience.",
    tech: ["Next.js 16"],
    liveUrl: "https://event-booking-byt.vercel.app/",
    githubUrl: "https://github.com/TusharxSingh/Event-Booking-",
    image: "/projects/event-booking.png",
    featured: true,
  },
  {
    title: "Old Portfolio",
    description:
      "A portfolio that's 99% code, 1% caffeine, and 100% me!",
    tech: ["React.js"],
    liveUrl: "https://tusharonweb.netlify.app/",
    githubUrl: "https://github.com/TusharxSingh/portfolio",
    image: "/projects/portfolio.png",
    featured: true,
  },
  {
    title: "TimexThapar",
    description:
      "Genetic algorithm-powered timetable generator for developing faculty schedules intelligently.",
    tech: ["Python", "Cython", "C", "JavaScript", "CSS", "HTML"],
    liveUrl: "https://github.com/TusharxSingh/TimexThapar",
    githubUrl: "https://github.com/TusharxSingh/TimexThapar",
    image: "/projects/timexthapar.png",
    featured: true,
  },
  {
    title: "AI Web Scraper",
    description:
      "Intelligent web scraping powered by AI for smart data extraction.",
    tech: ["Python"],
    liveUrl: "https://ai-scraper-five.vercel.app/",
    githubUrl: "https://github.com/TusharxSingh/Lyftr",
    image: "/projects/aiscraper.jpeg",
    featured: true,
  },
];

// ── LeetCode profile ─────────────────────────────────────────

export const leetcodeProfile = {
  url: "https://leetcode.com/u/tusharrr23/",
  stats: [
    { label: "Problems Solved", value: "—" },
    { label: "Ranking", value: "—" },
    { label: "Badges", value: "—" },
  ] as LeetCodeStat[],
};
