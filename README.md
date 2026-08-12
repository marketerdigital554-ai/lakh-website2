# LAKH — Phase 1: Design system & frontend foundation

This is the design-system foundation for LAKH. It does **not** yet contain
the full homepage or any authenticated dashboard — those are later phases.
`app/page.tsx` is a verification page showing the hero, stat cards, and
core UI components together.

## Install

```bash
npm install
```

## Run locally

```bash
npm run dev
```

Then open http://localhost:3000.

## Verify the design system

- `/` renders the hero (with the animated particle drift and dusk gradient
  overlay), the stat strip (each stat carries a "Demo data" badge — this
  is required for any number not backed by a verified live source), and a
  three-card preview of the solar / growth / tech gradient accents.
- Resize the browser through 320, 375, 390, 414, 768, 1024, 1280, 1440,
  and 1920px — nothing should overflow horizontally, the nav should
  collapse into the full-screen mobile menu below 768px, and the stat
  strip should reflow from 4 columns to 2.
- Tab through the page with keyboard only — every interactive element
  (nav links, buttons, mobile menu trigger) should show a visible focus
  ring.
- In your OS accessibility settings, enable "reduce motion" and reload —
  the hero particles and scroll-reveal animations should stop animating.

```bash
npm run build   # production build — should complete with no errors
npm run lint    # should report no errors (warnings only if any)
```

## Folder structure

```
/app                    App Router pages, layout, global styles
/components/ui          Design-system primitives (Button, Card, Badge, Input)
/components/marketing   Composed marketing components (Navbar, Hero, Section, ...)
/lib                     utils.ts, motion-variants.ts, image-config.ts
/public/images           Static assets (empty — see image architecture below)
```

## Image architecture — replacing placeholders with real photos

Every photo on the site is referenced by key (e.g. `"hero-primary"`),
not by URL, from `lib/image-config.ts`. To swap in real LAKH project
photography once it's ready:

1. Open `lib/image-config.ts`.
2. Replace the `src` for each key with your real asset URL (or a path
   under `/public/images` if hosting locally).
3. Add your image host to `next.config.mjs` → `images.remotePatterns` if
   it's a remote URL.

No component or layout code needs to change.

## What's next — Phase 2

Phase 2 builds the full public homepage using these components: the
12-section visual journey (hero → how it works → infrastructure showcase
→ project cards → technology/monitoring → customer benefits → energy
data → pricing → trust/transparency → FAQ → CTA → footer), with real
(placeholder) content written for each section.
