/**
 * Central registry of every image used across the marketing site.
 *
 * When real LAKH project photography is ready: replace the `src` values
 * here (or point them at your CDN/CMS), keep the same keys, and every
 * component that references these keys updates automatically — no layout
 * or component code needs to change.
 */

export type ImageKey =
  | "hero-primary"
  | "infrastructure-1"
  | "infrastructure-2"
  | "infrastructure-3"
  | "project-riverside"
  | "project-northfield"
  | "project-oakhaven"
  | "technology-monitoring"
  | "cta-banner";

interface ImageEntry {
  src: string;
  alt: string;
  /** width/height define the intrinsic aspect ratio the layout is built around. */
  width: number;
  height: number;
}

export const imageRegistry: Record<ImageKey, ImageEntry> = {
  "hero-primary": {
    src: "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=2400",
    alt: "Solar panel array at golden hour",
    width: 2400,
    height: 1500,
  },
  "infrastructure-1": {
    src: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=1200",
    alt: "Rooftop solar installation on a modern building",
    width: 1200,
    height: 900,
  },
  "infrastructure-2": {
    src: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=80&w=1200",
    alt: "Solar farm with rows of panels",
    width: 1200,
    height: 900,
  },
  "infrastructure-3": {
    src: "https://images.unsplash.com/photo-1497440001374-f26997328c1b?q=80&w=1200",
    alt: "Engineer inspecting solar equipment",
    width: 1200,
    height: 900,
  },
  "project-riverside": {
    src: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?q=80&w=1200",
    alt: "Riverside solar project site",
    width: 1200,
    height: 900,
  },
  "project-northfield": {
    src: "https://images.unsplash.com/photo-1548611716-3b6b0d9d5b9a?q=80&w=1200",
    alt: "Northfield solar project site",
    width: 1200,
    height: 900,
  },
  "project-oakhaven": {
    src: "https://images.unsplash.com/photo-1524397057410-1e775ed476f3?q=80&w=1200",
    alt: "Oakhaven solar project site",
    width: 1200,
    height: 900,
  },
  "technology-monitoring": {
    src: "https://images.unsplash.com/photo-1581091870621-1e9b3f6b3c8b?q=80&w=1600",
    alt: "Energy monitoring technology interface",
    width: 1600,
    height: 1000,
  },
  "cta-banner": {
    src: "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=2000",
    alt: "Solar panels against a bright sky",
    width: 2000,
    height: 900,
  },
};
