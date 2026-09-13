---
name: web-development
description: Comprehensive guidelines for modern web development, Vite, React, architecture, styling, performance, and SEO best practices.
---

# Web Development Standards & Architecture

## Core Technology Stack
- **Framework & Runtime**: Vite + React / JavaScript
- **Styling**: Vanilla CSS with CSS Variables / Design Tokens (or TailwindCSS when requested)
- **Icons**: Lucide Icons (`lucide-react`)
- **Deployment Target**: Cloudflare Pages / Static Edge Hosting

## Development Guidelines
1. **Component Modularity**: Keep components clean, single-responsibility, and reusable.
2. **State Management**: Prefer local React state (`useState`, `useReducer`) or React Context for clear data flow. Avoid over-complicating with global state libraries unless necessary.
3. **SEO Best Practices**:
   - Unique, descriptive `<title>` tag for the page.
   - Meta description summarizing page purpose.
   - Single `<h1>` per page with clean heading hierarchy (`<h2>`, `<h3>`).
   - Semantic HTML5 tags (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`, `<article>`).
   - Unique `id` attributes on interactive elements for browser accessibility and testing.
4. **Performance & Rendering**:
   - Zero layout shifts (CLS < 0.1).
   - Fast initial paint with optimized Google Fonts loading (`font-display: swap`).
   - Clean dynamic calculations with smooth 60fps CSS transitions and GPU-accelerated transforms (`transform`, `opacity`).
