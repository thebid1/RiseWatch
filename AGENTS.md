<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# R!SEWATCH Landing Page

## Project Overview
A modern, responsive, production-ready landing page for the R!SEWATCH offline flood early warning system. Design inspired by [Adaptive Insurance](https://www.adaptiveinsurance.com/).

## Tech Stack
- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Animation:** Framer Motion
- **Icons:** Lucide React
- **Fonts:** Inter (body) + Playfair Display (headings)

## Design System
- **Style:** Plain, editorial, water-themed — inspired by floema.com. Alternating light sections and deep-navy bands; the dark band between sections has scalloped wave edges ("the river").
- **Palette:** Sampled from the logo — deep navy (`#001a45`), royal blue (`#0046a5`), bright royal for dark backgrounds (`#4d8ef0`), paper off-white (`#f6f8fb`).
- **Typography:** Playfair Display for large serif headlines; Inter for body and UI.
- **Motifs:** Staff-gauge ruler ticks (`.gauge-ticks`), numbered section kickers (`01 — Label`), hairline dividers instead of heavy cards, wave SVG transitions, animated water fill in the hero gauge.
- **Logo:** Transparent PNGs in `public/` (`logo-icon`, `logo-name`, `logo-wordmark`, `logo-full`, each with a `-white` variant for dark backgrounds). Regenerate from the source JPEG with `python3 scripts/process_logo.py`.

## File Structure
```
app/
├── components/
│   ├── FadeIn.tsx              # Scroll-triggered animation wrapper
│   ├── Navbar.tsx              # Sticky responsive navigation (white logo on hero, navy when scrolled)
│   ├── ui/
│   │   ├── Button.tsx          # CTA button variants (pill shaped)
│   │   └── Section.tsx         # Section + Container layout helpers
│   └── sections/
│       ├── Hero.tsx            # Dark navy band + animated staff-gauge visual
│       ├── Crisis.tsx
│       ├── Solution.tsx
│       ├── HowItWorks.tsx      # Dark navy band with wave edges
│       ├── Technology.tsx
│       ├── Team.tsx            # Team grid (placeholder data — swap for real members)
│       └── FooterCTA.tsx       # Dark navy CTA + footer
├── globals.css                 # Tailwind v4 theme + custom utilities
├── layout.tsx                  # Root layout with fonts + metadata
└── page.tsx                    # Page composition
```

## Build & Deploy
- Static export is configured: `output: "export"`, `distDir: "dist"`.
- Run `npm run build` to generate the static site in `/dist`.
- Run `npm run dev` for local development.

## Conventions
- Use `font-serif` for all major headlines.
- Use `surface-card` (light) / `dark-card` (navy sections) utility classes for card backgrounds.
- Dark navy sections carry the `on-dark` class (scopes gauge-tick colors); use `text-royal-bright` / `text-muted-light` for accents and secondary text there.
- Every section header uses a numbered kicker: `<div className="section-label text-royal">01 — Label</div>` pattern.
- Wrap section content with `<FadeIn>` for consistent scroll animations.
- Primary CTAs use the royal variant (pill shaped); on dark sections use white pill buttons with navy text.
