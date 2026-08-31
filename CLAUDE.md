# CLAUDE.md — ByteThreads Official Website

## Project Overview

ByteThreads LLC company website. Showcases the studio and its products: **Open Studio Flow** (design project management SaaS), **Smart Property Check** (AI-powered iOS inspection app), and **Showly** (real estate showing platform). Built with Next.js App Router and deployed on Vercel.

## Company Profile

ByteThreads LLC is a boutique software development studio specializing in **.NET**, **iOS**, and **full-stack web** development. Use this context when building out the About page, Services page, or any company-facing copy.

## Tech Stack

- **Framework:** Next.js 15.5.4 (App Router, Turbopack dev server)
- **Language:** TypeScript 5 (strict mode)
- **UI:** React 19, Tailwind CSS v4, Framer Motion
- **Email:** Resend (`RESEND_API_KEY` required in `.env.local`)
- **Font:** Inter via `next/font/google`

## Project Structure

All source code lives inside `byte-threads/`:

```
byte-threads/
├── src/
│   ├── app/                  # Pages & API routes (App Router)
│   │   ├── page.tsx          # Home — single-page composition of src/sections/
│   │   ├── layout.tsx        # Root layout (fonts, metadata, Header, JSON-LD)
│   │   ├── globals.css       # Tailwind imports, CSS vars (copper/sage/navy), animations
│   │   ├── contact/page.tsx  # Contact form
│   │   ├── work/                 # Product case-study pages (open-studio-flow, smart-property-check, showly)
│   │   ├── privacy/ terms/   # Legal pages
│   │   ├── sitemap.ts robots.ts opengraph-image.tsx  # SEO
│   │   └── api/contact/route.ts  # POST endpoint — sends email via Resend
│   ├── sections/             # Home page sections (Hero, Services, About, Work, Process, TechStack, CTA)
│   ├── components/
│   │   ├── layout/           # Header.tsx, Footer.tsx
│   │   └── ui/               # CaseStudyCard, ProductCaseStudy, Animated* mockups, etc.
│   ├── content/strings.ts    # Centralized copy/content strings
│   ├── content/products.ts   # Case-study content for /work/<slug> product pages
│   ├── hooks/                # useScrollAnimation (Framer Motion + IntersectionObserver)
│   └── utils/content.ts      # String utility helpers
├── public/                   # Static assets (logos/, videos/, images/, icons/)
├── package.json
├── tsconfig.json             # Path alias: @/* → ./src/*
├── next.config.ts            # Output tracing, Unsplash remote images
└── postcss.config.mjs        # @tailwindcss/postcss
```

## Commands

Run all commands from `byte-threads/`:

```sh
npm run dev      # Start dev server (Turbopack) — http://localhost:3000
npm run build    # Production build
npm run start    # Start production server
npm run lint     # ESLint with Next.js config
```

## Environment Variables

```
RESEND_API_KEY=<key>   # Required for contact form email delivery
```

## Key Conventions

- **Path alias:** Import with `@/` (maps to `src/`). Example: `import { Header } from '@/components/layout/Header'`
- **Styling:** Tailwind utility classes. Brand colors defined as CSS custom properties (`--copper-*`, `--sage-*`, `--navy-*`) in `globals.css`. Dark-only design. Fonts: DM Serif Display (headlines), DM Sans (body), JetBrains Mono (labels).
- **Animation:** Framer Motion for scroll-triggered and interactive animations.
- **Content:** Centralized in `src/content/strings.ts` (site-wide copy) and `src/content/products.ts` (product case-study pages) — update copy there, not in component files.
- **Email:** Contact form POSTs to `/api/contact`, which sends via Resend from `noreply@bytethreadsllc.com` to `contact@bytethreadsllc.com`.

## Current State

- **Live pages:** Home (`/`, single-page with anchor sections `#services #work #about #process`), Contact (`/contact`), product case studies (`/work/open-studio-flow`, `/work/smart-property-check`, `/work/showly`), legal (`/privacy`, `/terms`)
- Product facts in `src/content/products.ts` mirror each product's live marketing site (openstudioflow.com, smartpropertycheck.com, showly.io) — keep them in sync when those products reposition. Smart Property Check's Team plan is unreleased: never market team/multi-user features for it.

## Deployment

Deployed to **Vercel**. Push to `main` triggers deployment. Use `next/link` for internal navigation (not `<a>` tags) to avoid build errors.
