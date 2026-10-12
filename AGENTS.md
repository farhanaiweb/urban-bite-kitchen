# Urban Bite Kitchen — AGENTS.md

## Project Overview
Next.js 16 (App Router) + React 19 + Tailwind CSS v4 (CSS-first config). Static export build. No tests, no CI.

## Commands
| Command | Purpose |
|---------|---------|
| `npm run dev` | Dev server (webpack, not turbopack) — runs on :3000 or :3001 |
| `npm run build` | Production build (webpack) — runs `tsc --noEmit` + static generation |
| `npm run lint` | ESLint (Next.js core-web-vitals + TS configs) |
| `npx tsc --noEmit` | Type-check only |

**Order**: `lint` → `tsc` → `build` (build runs typecheck internally)

## Architecture
- **Entry**: `src/app/page.tsx` → composes sections in order: Hero, About, FeaturedMenu, PopularDishes, Offers, Reviews
- **Layout**: `src/app/layout.tsx` renders `<TopBar />` then `<Navbar />` before `<main>` — do not reorder
- **Sections**: `src/components/sections/{Hero,About,FeaturedMenu,PopularDishes,Offers,Reviews,TopBar,Navbar}/`
- **Shared UI**: `src/components/ui/{Button,Container,Section,DemoImage}.tsx`
- **Data**: `src/data/{menu,offers,reviews}.ts` — prices are **numbers** (GBP), never strings
- **Config**: `src/config/site.ts` — site metadata, phone, hours, social links
- **Tokens**: All colors/spacing in `src/app/globals.css` `@theme inline` — use Tailwind classes (`text-deep-red`, `bg-cream-surface`, etc.)

## Critical Conventions
1. **Color tokens only** — never use arbitrary `text-#...`, `bg-#...`, `border-#...`. Use `--color-*` tokens via Tailwind classes.
2. **Price formatting** — single helper: `src/lib/format.ts` → `formatPrice(n: number)` using `Intl.NumberFormat("en-GB", {style:"currency", currency:"GBP"})`. Used in Offers, PopularDishes.
3. **Images** — `DemoImage` (shared, server component) at `src/components/ui/DemoImage.tsx`:
   - Props: `filename`, `alt`, `sizes`, `variant?: "light"|"dark"`
   - Placeholder renders `absolute inset-0` — **parent MUST have `relative` + defined aspect ratio/height**
   - Hero uses its own `HeroImage.tsx` (different placeholder, priority load)
4. **Demo images missing** — `public/images/demo/` contains only `CREDITS.md`. All `<DemoImage />` slots show placeholders.
5. **Server components by default** — only `"use client"` files: `Navbar/NavLinks.tsx`, `Navbar/MobileMenu.tsx`
6. **Heading order** — single `<h1>` in Hero; sections use `<h2>`; cards use `<h3>`
7. **Focus rings** — `.dark-surface :focus-visible` gets cream outline; `.dark-surface-red` for deep-red band cards

## Known Quirks
- **Port 3000 often busy** — dev server auto-increments to 3001
- **SWC binary broken on Windows** — `--webpack` flag forced in all scripts; builds take ~75s
- **Next.js dev overlay shows "2 Issues"** — #1 is browser extension (`bis_skin_checked`), #2 is usually extension-related; ignore unless `build` fails
- **No test suite** — visual verification only via browser

## File Paths to Remember
- `src/app/globals.css` — all design tokens, utility classes (`.container`, `.section`, animations)
- `src/components/ui/DemoImage.tsx` — shared placeholder logic (fix parent `relative` if placeholder escapes)
- `src/lib/format.ts` — single price formatter
- `src/config/site.ts` — all site-wide copy (phone, hours, social)
- `src/components/sections/Hero/HeroImage.tsx` — hero-specific image with priority + gradient overlay

## Do Not Touch
- `Navbar`, `TopBar`, `Hero` (unless explicitly asked) — these were stabilized in Phase 3
- `site.ts` token values — design system source of truth
- `src/app/globals.css` token definitions — only add utilities, don't change values