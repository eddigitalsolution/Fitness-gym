---
name: navbar-adjustment
description: Guidelines for header navigation layout, sticky glassmorphism navbars, responsive drawer transitions, brand logo alignment, and mobile navigation safety.
---

# Navbar Adjustment & Header Architecture

## Navbar Design Guidelines
1. **Sticky & Glassmorphic**:
   - Header must be `position: sticky; top: 0; z-index: 1000;`
   - Use dynamic scroll state or subtle translucent background (`backdrop-filter: blur(16px); background: rgba(10, 12, 16, 0.85);`) with bottom border gradient.
2. **Alignment & Spacing**:
   - Navigation container max-width: `1280px` centered with margin `0 auto`.
   - Vertical padding: `1rem` on desktop, `0.85rem` on mobile.
   - Prevent text wrapping or awkward stacking of nav items.
3. **Mobile Responsive Drawer**:
   - On screens `< 768px`, collapse desktop links into a sleek hamburger button with animated icon swap (Menu / X).
   - Mobile menu overlay with dark backdrop, smooth sliding or fade-in transition.
   - Tap targets must be at least `44px x 44px`.
   - Auto-close mobile menu when clicking any nav link.
4. **Action Hierarchy**:
   - Left: Brand Logo + Icon mark.
   - Center: Nav link pills with subtle hover underglow.
   - Right: Primary CTA button ("Book Consultation" or "Client Login") + Mobile menu trigger.
