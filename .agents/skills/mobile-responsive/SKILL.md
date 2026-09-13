---
name: mobile-responsive
description: Standards for full mobile responsiveness, touch optimization, fluid grids, flexible typography, and multi-device breakpoint management.
---

# Mobile Responsive Design Guidelines

## Responsive Breakpoints
- **Mobile Extra Small**: `< 480px` (Single column layout, tight padding `1rem`, compact typography)
- **Mobile / Small Tablet**: `480px - 767px` (1 or 2 column flex/grid, full touch-friendly spacing)
- **Tablet / Laptop**: `768px - 1024px` (2 or 3 column layout, mobile drawer turns into horizontal header)
- **Desktop / Wide**: `> 1024px` (Full grid layouts, extended sidebars, enhanced interactive widgets)

## Mobile UX Best Practices
1. **Touch Targets**: All buttons, links, inputs, and tab triggers must have minimum target size of `44px` height and width.
2. **No Horizontal Scroll Overflow**: Set `overflow-x: hidden` on root containers and ensure images/grids use `max-width: 100%`.
3. **Fluid Typography**: Use `clamp()` for responsive fluid headings (e.g. `font-size: clamp(2rem, 5vw, 3.5rem);`).
4. **Adaptive Modals & Drawers**: Modals on mobile should convert to bottom sheets or full-screen scrollable views with easy dismiss actions.
5. **Fast Mobile Performance**: Avoid heavy, uncompressed background media. Use CSS gradients and lightweight SVG illustrations.
