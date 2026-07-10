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
- **Style:** Dark, premium, editorial — inspired by Adaptive Insurance.
- **Palette:** Near-black background (`#0a0a0a`), electric blue accent (`#2563eb`), white text, zinc grays.
- **Typography:** Playfair Display for large serif headlines; Inter for body and UI.
- **Components:** Surface cards with subtle borders, email capture forms, large stat displays.

## File Structure
```
app/
├── components/
│   ├── FadeIn.tsx              # Scroll-triggered animation wrapper
│   ├── Navbar.tsx              # Sticky responsive navigation
│   ├── ui/
│   │   ├── Button.tsx          # CTA button variants
│   │   └── Section.tsx         # Section + Container layout helpers
│   └── sections/
│       ├── Hero.tsx
│       ├── Crisis.tsx
│       ├── Solution.tsx
│       ├── HowItWorks.tsx
│       ├── Technology.tsx
│       └── FooterCTA.tsx
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
- Use `surface-card` / `elevated-card` utility classes for card backgrounds.
- Wrap section content with `<FadeIn>` for consistent scroll animations.
- Primary CTAs use the blue accent variant.
