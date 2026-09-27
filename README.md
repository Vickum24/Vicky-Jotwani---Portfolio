# Vicky Jotwani — AML/KYC Risk & Compliance Leader Portfolio

> An executive, high-performance portfolio showcasing **Vicky Jotwani**'s 9+ years of leadership in **AML/KYC Client Risk Framework, People Leadership, and Operational Risk & Controls** across global Tier-1 banking, asset management, and investor services institutions.

![Portfolio Preview Banner](https://img.shields.io/badge/Status-Live-emerald?style=for-the-badge)
![React 19](https://img.shields.io/badge/React-19-blue?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38bdf8?style=for-the-badge&logo=tailwindcss)
![Motion](https://img.shields.io/badge/Framer_Motion-12-ff0055?style=for-the-badge)
![Vite](https://img.shields.io/badge/Vite-8.x-646CFF?style=for-the-badge&logo=vite)

---

## 🌟 Overview

This web portfolio translates a verified, executive AML/KYC compliance resume into a futuristic, interactive digital experience. Every role, responsibility bullet, institutional metric, and academic credential is documented directly from career records across **SG Analytics, IndusInd Bank, State Street Syntel, Northern Trust, and Standard Chartered Bank**.

---

## ✨ Key Features

- **Executive Aesthetic & Dual Theme Support**: High-contrast, dark cyber-executive mode paired with a clean, daytime enterprise mode (with persistent theme toggling).
- **Interactive Story Cards & Timeline**: Accordion-based chronological timeline covering 6 tier-1 institutions with expandable verbatim deliverables and source-verified metrics.
- **Measurable Outcomes & Milestones**: Quantified impact dashboard featuring team leadership metrics (12+ analysts coached), SLA benchmarks, and spotlight cards categorized by operational risk, FATF/EU directives, and regulatory remediation.
- **Core Competencies & Toolchain**: Cluster breakdown of Anti-Money Laundering, Know Your Customer, CDD/EDD, Sanctions screening, and tools (*LexisNexis, World-Check, Bloomberg, Jira, Advanced Excel*).
- **Fluid Micro-Interactions & Motion Design**:
  - **Scroll Progress Indicator**: Slim, glowing fixed gradient progress bar at the top of the viewport.
  - **Spring-Physics Custom Cursor**: Reactive dual-element cursor (precision dot + follower halo) that expands and shifts hue over interactive elements.
  - **Staggered Viewport Reveals**: `whileInView` animations powered by Framer Motion for smooth, progressive disclosure as the user scrolls.
  - **Futuristic Section Dividers**: Scroll-triggered horizontal glowing beam separators between major sections.
  - **Cybernetic Background**: Real-time interactive constellation & node canvas.
- **Direct Resume Extraction**:
  - Downloadable executive resume format.
  - Interactive **JSON Modal** enabling instant preview and copy/download of structured resume data for recruitment parsing.

---

## 🛠️ Tech Stack

- **Framework**: [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Build Tool**: [Vite 8](https://vitejs.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations**: [Motion (Framer Motion v12)](https://motion.dev/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Typography**: Syne (Headings & Display), Plus Jakarta Sans (Body), JetBrains Mono (Technical Metrics)

---

## 📁 Project Structure

```text
├── index.html                   # HTML entry point with metadata & web fonts
├── package.json                 # Dependencies and build scripts
├── tsconfig.json                # TypeScript compiler configuration
├── vite.config.ts               # Vite configuration with Tailwind CSS plugin
├── src/
│   ├── main.tsx                 # React application mounting
│   ├── App.tsx                  # Root page layout & section composition
│   ├── index.css                # Global typography, glassmorphism, and styling
│   ├── data/
│   │   └── resumeData.ts        # Source data for experience, impact, skills, & education
│   └── components/
│       ├── Navbar.tsx           # Navigation bar with 3-zone contract & theme toggle
│       ├── HeroSection.tsx      # Executive hero banner, quick stats, & contact CTAs
│       ├── ExperienceSection.tsx# Chronological story cards with accordion reveals
│       ├── AchievementsSection.tsx # Trophy cards & quantitative metric counters
│       ├── SkillsSection.tsx    # Technical skills clusters & compliance toolchain
│       ├── EducationAndExtraSection.tsx # Academic degrees, languages, & projects
│       ├── ScrollProgressBar.tsx# Slim fixed top scroll progress bar
│       ├── CustomCursor.tsx     # Framer Motion spring cursor follower
│       ├── SectionDivider.tsx   # Animated glowing horizontal line separators
│       ├── AnimatedBackground.tsx # Interactive background particle canvas
│       ├── JsonModal.tsx        # Structured JSON resume viewer & copier
│       └── SplashScreen.tsx     # Smooth initial loading sequence
└── metadata.json                # AI Studio application metadata
```

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (version 18+ recommended)
- `npm`, `yarn`, or `bun`

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/vicky-jotwani-portfolio.git
   cd vicky-jotwani-portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   # or
   bun install
   ```

3. **Start the local development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) (or the port specified in terminal) in your browser.

---

## 📦 Build & Production

To compile and produce a static production bundle:

```bash
npm run build
```

The optimized static assets will be output to the `dist/` directory, ready to deploy to any modern hosting platform (Vercel, Netlify, GitHub Pages, Cloudflare Pages, Firebase Hosting, etc.).

To test the production build locally:
```bash
npm run preview
```

To run lint checks:
```bash
npm run lint
```

---

## 📄 License

This portfolio and its design are published under the [MIT License](LICENSE). Resume content and professional credentials belong to **Vicky Jotwani**.
