# CLAUDE.md — ByteThreads Official Website

## Project Overview

ByteThreads LLC company website. Showcases the company and its flagship product, **Smart Property Check** (an iOS app). Built with Next.js App Router and deployed on Vercel.

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
│   │   ├── page.tsx          # Home — hero video, product showcase
│   │   ├── layout.tsx        # Root layout (Header + children)
│   │   ├── globals.css       # Tailwind imports, CSS vars, custom animations
│   │   ├── contact/page.tsx  # Contact form with animated background
│   │   └── api/contact/route.ts  # POST endpoint — sends email via Resend
│   ├── components/
│   │   ├── layout/           # Header.tsx, Footer.tsx
│   │   └── ui/               # ProductShowcase, TypingEffect, AnimatedNodesBackground, FAQ, etc.
│   ├── content/strings.ts    # Centralized copy/content strings
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
- **Styling:** Tailwind utility classes. Brand colors defined as CSS custom properties (`--accent-blue-*`) in `globals.css`. Dark mode via `prefers-color-scheme`.
- **Animation:** Framer Motion for scroll-triggered and interactive animations. Canvas API for the animated nodes background on the contact page.
- **Content:** Centralized in `src/content/strings.ts` — update copy there, not in component files.
- **Email:** Contact form POSTs to `/api/contact`, which sends via Resend from `noreply@bytethreadsllc.com` to `contact@bytethreadsllc.com`.

## Current State

- **Live pages:** Home (`/`), Contact (`/contact`)
- **Placeholder routes:** `/about`, `/blog`, `/portfolio`, `/services` (directories exist, no content yet)
- **Unused components:** FAQ, FeaturesSection, ImageGallery, AnimatedThreads — built but not integrated into any page

## Deployment

Deployed to **Vercel**. Push to `main` triggers deployment. Use `next/link` for internal navigation (not `<a>` tags) to avoid build errors.
