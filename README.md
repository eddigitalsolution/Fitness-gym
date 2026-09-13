# KINETIC ATHLETICS | Sports Editorial Performance Lab ⚡

![Build Status](https://img.shields.io/badge/Build-Passing-brightgreen?style=for-the-badge&logo=vite)
![React](https://img.shields.io/badge/React-18.x-61DAFB?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=for-the-badge&logo=typescript)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.x-38B2AC?style=for-the-badge&logo=tailwind-css)
![Deployment](https://img.shields.io/badge/Cloudflare_Pages-Ready-F38020?style=for-the-badge&logo=cloudflare)

> High-contrast sports editorial performance training web application engineered for apex human conditioning, real-time kinetic telemetry, and biomechanical sports science.

---

## ⚡ Core Features

- **Kinetic Scroll Telemetry HUD**: Interactive real-time metric gauges for Strength, Endurance, and Speed that recalculate dynamically as the user scrolls through 4 training phases.
- **Sports Editorial Aesthetics**: Dark mode high-contrast editorial typography, dynamic monochrome imagery, neon orange (`#ff3b00`) & neon green (`#ccff00`) accents, and Framer Motion micro-animations.
- **Evaluation Application Modal**: Integrated multi-step booking modal for claiming 1-on-1 biomechanical evaluations and selecting tailored training programs.
- **Interactive Legal Compliance Suite**: Modal interface featuring 3 full legal documents:
  - **Privacy Protocol**: Biometric telemetry collection, AES-256 encryption, wearable sensor integrations, and data deletion rights.
  - **Terms of Service**: 24-hour cancellation rules, facility discipline, billing terms, and proprietary methodology IP protection.
  - **Security Waiver**: Physical risk assumption, medical clearance representation, emergency medical authorization, and liability release.
- **Mobile & Touch Optimized**: Minimum 44px touch targets, mobile navigation drawer, fluid typography, and zero layout overflow.
- **SEO & Performance Hardened**: OpenGraph cards, Twitter metadata, Google Fonts preconnect, and Lighthouse 90+ score optimization.

---

## 📁 Project Architecture

```
personal trainer/
├── public/
│   ├── _headers            # Cloudflare Pages CSP & Security Headers
│   ├── _redirects          # Cloudflare SPA routing rewrite rule
│   └── favicon.svg         # High-contrast brand favicon
├── src/
│   ├── components/
│   │   ├── Navbar.tsx      # Fixed glassmorphism header & navigation
│   │   ├── Hero.tsx        # Sticky full-bleed editorial hero section
│   │   ├── HeroMetricsHUD.tsx # Real-time kinetic telemetry box
│   │   ├── Philosophy.tsx  # Core biomechanical philosophy
│   │   ├── Programs.tsx    # Training programs carousel & detail modal
│   │   ├── Coach.tsx       # Head coach credentials & track record
│   │   ├── Method.tsx      # 4-Stage kinetic training framework
│   │   ├── Transformation.tsx # Empirical case studies & metric proof
│   │   ├── Gym.tsx         # Facility hardware & tech equipment
│   │   ├── CTA.tsx         # Final evaluation CTA section
│   │   ├── Footer.tsx      # Footer with brand links & legal openers
│   │   ├── BookingModal.tsx# Program application & evaluation modal
│   │   └── LegalModal.tsx  # Privacy, Terms, and Waiver document modal
│   ├── data/
│   │   └── mockData.ts     # Program & case study datasets
│   ├── types/
│   │   └── index.ts        # TypeScript interfaces & types
│   ├── App.tsx             # Main application orchestrator
│   ├── main.tsx            # Application entry point
│   └── index.css           # Design tokens, typography & Tailwind imports
├── wrangler.jsonc          # Cloudflare Pages deployment configuration
├── tailwind.config.js      # Custom sports font families & color palette
├── tsconfig.json           # TypeScript configuration
└── vite.config.ts          # Vite build setup
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js `v18.x` or higher
- npm `v9.x` or higher

### Local Development

1. **Clone the repository**:
   ```bash
   git clone git@github.com:eddigitalsolution/Fitness-gym.git
   cd Fitness-gym
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start local development server**:
   ```bash
   npm run dev
   ```
   Open your browser at `http://localhost:5173`.

4. **Build production bundle**:
   ```bash
   npm run build
   ```

---

## 🌐 Cloudflare Pages Deployment

This repository is pre-configured for instant deployment on **Cloudflare Pages**:

```bash
# Direct CLI deployment to Cloudflare Pages
npx wrangler pages deploy dist
```

Or connect the repository on Cloudflare Dashboard:
- **Build Command**: `npm run build`
- **Build Output Directory**: `dist`
- **Framework Preset**: `Vite`

---

## 📄 License & Intellectual Property

© 2026 KINETIC ATHLETICS PERFORMANCE LAB. All Rights Reserved. Proprietary training methodology & telemetry protocols.
