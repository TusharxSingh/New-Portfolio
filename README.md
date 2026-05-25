# Tushar Singh Chauhan - Portfolio

A modern, fast, and visually stunning portfolio website built with **Next.js 16**, **React**, **TypeScript**, and **Tailwind CSS**. Features glassmorphic design, smooth animations, and WebGL effects.

## 🚀 Features

- **Modern Design**: Glassmorphic UI with backdrop blur effects
- **Dark & Light Mode**: Class-based theme switching with full support
- **Smooth Animations**: Framer Motion for component animations, GSAP for scroll effects
- **WebGL Effects**: OGL-powered light ray animations on the about page
- **Responsive**: Fully responsive across desktop, tablet, and mobile
- **Fast**: Next.js 16 with Turbopack for blazing-fast builds
- **Type Safe**: Full TypeScript support throughout
- **Performance**: Static site generation, optimized images, lazy loading

## 📋 Pages

### Home (`/`)
- **Hero Section**: Welcome message with CTA buttons
- **About Section**: Profile photo and inspiring quote with animated wave button
- **Experience Section**: Timeline of work experience
- **Projects Teaser**: Showcase of featured projects
- **Contact Section**: Contact form (Formspree) + social icon buttons

### About (`/about`)
- Full-screen hero with LightRays WebGL animation
- ScrollReveal text animations
- Developer statement paragraphs
- Value proposition cards
- CTA button to contact section

### Projects (`/projects`)
- **FlowingMenu**: GSAP-powered marquee animation showing project names and images on hover
- **Project Grid**: Quick reference cards with descriptions, tech badges, and links
- Filter by featured projects

## 🛠️ Tech Stack

- **Framework**: Next.js 16 with App Router & Turbopack
- **Styling**: Tailwind CSS v4 with `@custom-variant dark`
- **Animations**: Framer Motion, GSAP with ScrollTrigger
- **Graphics**: OGL (OpenGL in JavaScript) for WebGL rendering
- **Form**: Formspree integration
- **Icons**: Lucide React
- **Language**: TypeScript with strict mode

## 📂 Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with providers
│   ├── page.tsx            # Home page
│   ├── globals.css         # Global styles & animations
│   ├── about/
│   │   └── page.tsx        # About page with LightRays
│   └── projects/
│       └── page.tsx        # Projects page with FlowingMenu
├── components/
│   ├── Navbar.tsx          # Glass-effect navigation
│   ├── Hero.tsx            # Home hero section
│   ├── About.tsx           # Home about section
│   ├── Experience.tsx      # Timeline section
│   ├── Contact.tsx         # Centered contact form
│   ├── ProjectsTeaser.tsx  # Featured projects showcase
│   ├── SocialIconButtons.tsx # Minimal social icons
│   ├── LightRays.tsx       # WebGL light animation
│   ├── ScrollReveal.tsx    # GSAP scroll animations
│   ├── FlowingMenu.tsx     # Project marquee menu
│   ├── PageLoader.tsx      # Loading animation
│   ├── Footer.tsx          # Footer section
│   ├── providers/
│   │   └── ThemeProvider.tsx # Light/dark mode provider
│   └── ui/
│       ├── Button.tsx
│       ├── GlassCard.tsx
│       ├── Section.tsx
│       ├── ThemeToggle.tsx
│       ├── TimelineItem.tsx
│       └── ProjectCard.tsx
├── data/
│   └── portfolio.ts        # Centralized portfolio config
├── hooks/
│   └── useReducedMotion.ts # Accessibility hook
└── lib/
    └── utils.ts            # Utility functions
```

## ⚙️ Configuration

Edit `src/data/portfolio.ts` to customize:

```typescript
export const siteConfig = {
  name: "Your Name",
  initials: "YN",
  role: "Your Role",
  tagline: "Your tagline",
  email: "your@email.com",
  resumeUrl: "https://your-resume-link",
  bio: "Your bio",
};
```

### Add Projects

```typescript
export const projects: Project[] = [
  {
    title: "Project Name",
    description: "Short description",
    tech: ["React", "Node.js"],
    liveUrl: "https://deployed-link.com",
    githubUrl: "https://github.com/user/repo",
    image: "/projects/project-image.png",
    featured: true,
  },
  // ... more projects
];
```

### Add Experience

```typescript
export const experiences: Experience[] = [
  {
    role: "Job Title",
    company: "Company Name",
    dates: "Jan 2024 — Present",
    location: "Remote",
    bullets: ["Achievement 1", "Achievement 2"],
    isCurrent: true,
  },
  // ... more experiences
];
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone repository
git clone https://github.com/TusharxSingh/New-Portfolio.git
cd New-Portfolio

# Install dependencies
npm install

# Run development server
npm run dev

# Open http://localhost:3000
```

### Build & Deploy

```bash
# Production build
npm run build

# Start production server
npm start

# Deploy to Vercel (one-click from GitHub)
```

## 🎨 Customization

### Colors & Theme

Edit Tailwind color palette in `tailwind.config.js`:
- Primary: Violet/Indigo (`#7c3aed`)
- Accent: Light/Dark mode specific colors

### Animations

- **Page transitions**: Framer Motion in components
- **Scroll effects**: GSAP ScrollTrigger in ScrollReveal
- **Hero rays**: OGL WebGL in LightRays component

### Forms

Contact form uses **Formspree**. To set up:
1. Go to [formspree.io](https://formspree.io)
2. Create a new form
3. Update form ID in `src/components/Contact.tsx`

## 🌐 Deployment

### Vercel (Recommended)

```bash
npm install -g vercel
vercel
```

### Other Platforms

Works with any static hosting: Netlify, GitHub Pages, etc.

```bash
npm run build
# Deploy the `.next` folder
```

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## ♿ Accessibility

- Full keyboard navigation
- ARIA labels on interactive elements
- Respects `prefers-reduced-motion` setting
- Semantic HTML structure

## 📄 License

This project is open source and available under the MIT License.

## 👤 Author

**Tushar Singh Chauhan**
- 📧 Email: tusharsinghchauhan1123@gmail.com
- 💼 GitHub: [@TusharxSingh](https://github.com/TusharxSingh)
- 🔗 LinkedIn: [Tushar Singh Chauhan](https://www.linkedin.com/in/tushar-singh-chauhan-93aa561b1/)
- 💻 LeetCode: [tusharrr23](https://leetcode.com/u/tusharrr23/)

## 🙏 Acknowledgments

- [Uiverse.io](https://uiverse.io) - UI component inspiration
- [React Bits](https://react-bits.vercel.app/) - FlowingMenu animation concept
- [Framer Motion](https://www.framer.com/motion/) - Animation library
- [GSAP](https://gsap.com/) - Advanced animations
- [OGL](https://github.com/oframe/ogl) - WebGL rendering

---

Made with ❤️ by Tushar Singh Chauhan
