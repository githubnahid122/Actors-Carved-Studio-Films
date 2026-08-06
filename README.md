# Actors Carved Studio & Films

A cinematic, production-ready website for **Actors Carved Studio & Films** — a Production House,
Casting Desk, and Acting Academy — built with Next.js 16 (App Router), React 19, TypeScript,
Tailwind CSS v4, shadcn/ui, Framer Motion, React Hook Form + Zod, Embla Carousel, Cloudinary, and
Resend.

## Tech Stack

| Concern       | Choice                              |
| ------------- | ------------------------------------ |
| Framework     | Next.js 16 (App Router)              |
| UI Library    | React 19                             |
| Language      | TypeScript (strict)                  |
| Styling       | Tailwind CSS v4                      |
| Components    | shadcn/ui (hand-rolled, no CLI dep)  |
| Animation     | Framer Motion                        |
| Forms         | React Hook Form + Zod                |
| Carousel      | Embla Carousel                       |
| Images        | next/image + Cloudinary              |
| Email         | Resend                               |
| Deployment    | Vercel                               |

## Folder Structure

```
app/            → routes, layouts, metadata (App Router) + API routes under app/api
components/     → shared/reusable UI (components/ui = shadcn primitives, components/shared = app-level shared pieces)
features/       → feature-based modules (home, portfolio, casting-desk, academy, gallery, contact)
lib/            → utilities, Cloudinary/Resend clients, Zod schemas, constants, rate limiting
hooks/          → custom React hooks (upload progress, form submission)
content/        → static content (courses, portfolio, testimonials, alumni, gallery)
public/         → static assets
types/          → shared TypeScript types/interfaces
```

Each `features/*` module is self-contained and exposes only what's needed via `index.ts`.

## Getting Started

```bash
npm install
cp .env.example .env.local   # then fill in real values
npm run dev
```

Visit http://localhost:3000.

## Environment Variables

Set these in `.env.local` (development) and in your Vercel project settings (production):

| Variable | Required | Purpose |
| --- | --- | --- |
| `CLOUDINARY_CLOUD_NAME` | For server-side reads | Cloudinary account identifier |
| `CLOUDINARY_API_KEY` | Optional (admin tooling) | Cloudinary signed API access |
| `CLOUDINARY_API_SECRET` | Optional (admin tooling) | Cloudinary signed API access |
| `NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME` | **Yes** | Powers client-side unsigned uploads (headshots/reels) |
| `NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET` | **Yes** | An **unsigned** upload preset created in your Cloudinary dashboard (Settings → Upload → Upload presets) |
| `RESEND_API_KEY` | **Yes** | Enables admin email notifications on form submission |
| `RESEND_FROM_EMAIL` | **Yes** | Verified sender identity in Resend |
| `ADMIN_NOTIFICATION_EMAIL` | **Yes** | Inbox that receives casting briefs / registrations / enquiries |
| `NEXT_PUBLIC_SITE_URL` | **Yes** | Canonical site URL used in metadata, sitemap, JSON-LD |
| `NEXT_PUBLIC_WHATSAPP_NUMBER` | **Yes** | Digits-only, country-code-prefixed number for click-to-chat CTAs |
| `UPSTASH_REDIS_REST_URL` / `UPSTASH_REDIS_REST_TOKEN` | Optional | Swap the in-memory rate limiter (`lib/rate-limit.ts`) for a distributed one across serverless instances |

Without Cloudinary/Resend configured, the site still runs: uploads show a friendly "not configured"
message directing users to WhatsApp, and form submissions log to the server console instead of
emailing, so local development never hard-fails.

## Scripts

```bash
npm run dev        # start dev server
npm run build      # production build
npm run start       # run the production build
npm run lint        # ESLint
npx tsc --noEmit     # strict type-check
```

## Deployment (Vercel)

1. Push this repository to GitHub/GitLab/Bitbucket.
2. Import the project in [Vercel](https://vercel.com/new).
3. Add all environment variables listed above under **Project Settings → Environment Variables**.
4. In Cloudinary, create an **unsigned upload preset** scoped to the `actors-carved/` folder prefix
   used in `components/shared/upload-input.tsx` call sites, and set its name as
   `NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET`.
5. In Resend, verify a sending domain and set `RESEND_FROM_EMAIL` to an address on that domain.
6. Deploy. `sitemap.xml` and `robots.txt` are generated automatically from `app/sitemap.ts` and
   `app/robots.ts` using `NEXT_PUBLIC_SITE_URL`.

## Content Updates

All demo copy lives in `content/*.ts` (portfolio items, courses, alumni, testimonials, training
pillars, gallery, founder bio) and `lib/constants.ts` (site info, nav, address, socials). Update
these files directly, or wire a headless CMS by having these modules fetch remote data instead of
exporting static arrays — the rest of the app only depends on the exported types in `types/`.

## Forms & Validation

Every form (Casting Brief, Actor Registration, Academy Enquiry, Contact) shares a single Zod
schema between the client (`react-hook-form` + `@hookform/resolvers/zod`) and its API route under
`app/api/*`, so validation never drifts between client and server. API routes additionally
sanitize free-text input and apply a per-IP rate limit before sending via Resend.
