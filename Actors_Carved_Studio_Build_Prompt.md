# Build Prompt: Actors Carved Studio & Films Website

## Role
You are a senior Next.js architect and frontend engineer. Build a **production-ready**, cinematic-themed website for **Actors Carved Studio & Films** — a Production House, Casting Desk, and Acting Academy — strictly from the specification below. Do not use Figma or any design tool; implement directly from this brief.

---

## 1. Project Summary
A premium cinematic website with three core pillars:
1. **Production House** — brand credibility, portfolio showcase
2. **Casting Desk** — B2B casting briefs + B2C actor registrations (lead generation)
3. **Acting Academy** — course enquiries and student onboarding

Primary goals: acquire production leads, receive casting briefs, onboard actors, and generate academy enquiries.

**Target audience:** Brands, Agencies, Directors, Production Houses, Actors, Students.

---

## 2. Tech Stack (strict — do not substitute)
- **Framework:** Next.js 16 (App Router)
- **UI Library:** React 19
- **Language:** TypeScript (strict mode, no `any`, no implicit types)
- **Styling:** Tailwind CSS v4
- **Components:** shadcn/ui
- **Animation:** Framer Motion
- **Forms:** React Hook Form + Zod (schema validation)
- **Carousel:** Embla Carousel
- **Images:** next/image + Cloudinary integration
- **Email/Notifications:** Resend
- **Deployment target:** Vercel

---

## 3. Folder Structure (enforce this exact modular structure)
```
app/            → routes, layouts, metadata (App Router)
components/     → shared/reusable UI components (buttons, cards, forms)
features/       → feature-based modules (portfolio, casting-desk, academy, contact)
lib/            → utilities, API clients, Cloudinary/Resend config, constants
hooks/          → custom React hooks
content/        → static content (course data, testimonials, portfolio metadata)
public/         → static assets
types/          → shared TypeScript types/interfaces
styles/         → global styles, Tailwind config extensions
```
Each `features/*` module should be self-contained (its own components, hooks, and types) and only expose what's needed via a clean index export.

---

## 4. Sitemap & Page Requirements

### 4.1 Home (`/`)
- Hero section (cinematic full-bleed visual, headline, primary CTA)
- About section
- Services overview (Production / Casting / Academy — 3-way split)
- Founder section
- Testimonials (carousel via Embla)
- Multiple contextual CTAs driving to Casting Desk and Academy

### 4.2 Portfolio (`/portfolio`)
- Filterable grid by category: **TVCs, Movies, Web Series, Music Videos, Serials, Short Films, Vertical Series, Corporate, Ecommerce, UGC**
- Client-side filter with URL query sync (shareable filtered links)
- Embedded YouTube/Vimeo players (lazy-loaded, no layout shift)
- Searchable portfolio (title/category search)

### 4.3 Casting Desk (`/casting-desk`)
- **B2B casting brief form** (project details, role requirements, timeline, budget range, contact info)
- **B2C actor registration form** (profile info, headshot/reel upload, experience, contact)
- File upload support (photos/reels) via Cloudinary
- WhatsApp integration (click-to-chat CTA with prefilled message)
- Admin email notifications on submission (via Resend)
- Full Zod validation + inline error states on both forms

### 4.4 Acting Academy (`/academy`)
- Training pillars section
- Alumni wall (grid/carousel of alumni with photos + outcomes)
- 3 courses displayed with detail
- Testimonials
- Enquiry form (name, course interest, contact, message) → Resend notification

### 4.5 Programs (`/academy/programs` or section within Academy)
- **3 Months Weekend**, **6 Months Advanced**, **1 Year Flagship Diploma**
- Flagship Diploma should be visually highlighted (featured/recommended styling)
- Comparison layout (duration, schedule, outcomes, fee-on-enquiry)

### 4.6 Behind The Scenes / Gallery (`/gallery`)
- Photo/video gallery
- Lazy loading (intersection observer or next/image native lazy load)
- Lightbox for full-size viewing

### 4.7 Contact (`/contact`)
- Location (map embed or address block)
- Social links
- General enquiry form
- WhatsApp CTA

---

## 5. Functional Requirements
- Fully responsive across mobile / tablet / desktop
- All forms: client + server-side validation (Zod schemas shared between client and API route)
- File uploads with progress indication and type/size validation
- Embedded video players optimized for performance (no blocking third-party scripts on initial load)
- Global search/filter for Portfolio
- Toast/notification feedback on all form submissions (success + error states)

---

## 6. Non-Functional Requirements
- **Performance:** Core Web Vitals in "Good" range (LCP < 2.5s, CLS < 0.1, INP < 200ms)
- **Accessibility:** WCAG 2.1 AA — semantic HTML, keyboard navigation, ARIA labels on forms/carousels, sufficient color contrast against dark theme
- **SEO:** see Section 8
- **Security:** input sanitization, rate-limiting on form API routes, environment variables for all secrets (Cloudinary, Resend keys) — never hardcoded
- **Scalability:** content-driven architecture (course/portfolio data structured in `content/` so non-devs can update via CMS later if needed)

---

## 7. UI Theme
- **Palette:** Pitch black / deep charcoal background, white typography, dull gold accents
- **Feel:** Cinematic, premium, editorial — generous whitespace, large hero typography, subtle Framer Motion transitions (fade/slide on scroll, no gimmicky effects)
- Design tokens (colors, spacing, typography scale) should be defined once in Tailwind config / CSS variables — no ad hoc hex codes scattered in components

---

## 8. SEO Requirements
- Next.js Metadata API for per-page title/description/OG tags
- Schema.org structured data (Organization, LocalBusiness, Course where applicable)
- `sitemap.xml` and `robots.txt` auto-generated
- OpenGraph + Twitter Card metadata on all key pages
- Canonical URLs on all routes

---

## 9. Deliverables Expected
1. Production-ready source code (strict TypeScript, no build/type errors)
2. Modular, reusable component library (documented props via TS interfaces)
3. README with setup, environment variables list, and deployment steps for Vercel
4. Clean, consistently formatted code (Prettier/ESLint configured)

---

## 10. Build Instructions for the Agent
- Scaffold the Next.js 16 App Router project first with the exact folder structure above.
- Set up Tailwind v4 + shadcn/ui + design tokens (theme) before building pages.
- Build shared components first (Button, Card, FormField, Carousel wrapper, VideoEmbed, UploadInput) inside `components/`.
- Build each route as a `features/` module, then compose it in `app/`.
- Implement forms with React Hook Form + Zod schemas placed in `lib/schemas/`.
- Wire up Cloudinary upload and Resend email as API routes under `app/api/`.
- Add metadata, sitemap, and robots.txt last, once routes are finalized.
- Do not use placeholder Lorem Ipsum in final pass — use realistic sample content matching the brand (cinematic tone) so the site is demo-ready.
- Confirm strict TypeScript compiles clean (`tsc --noEmit`) and lint passes before considering any milestone done.

Do not ask for a Figma file or design mockup — implement visual design directly from Section 7 (UI Theme) and standard premium-cinematic web design conventions.
