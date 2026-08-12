import type { Variants } from "framer-motion";

/**
 * Shared animation variants for the LAKH frontend.
 * Every component should import from here rather than defining ad-hoc
 * variants, so motion stays consistent across the site.
 *
 * All durations/eases are deliberately restrained — see frontend design
 * principles: one orchestrated moment beats scattered effects.
 */

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5, ease: "easeOut" } },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] },
  },
};

/** Wrap a group of children in this to stagger their entrance. */
export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05,
    },
  },
};

export const hoverLift = {
  rest: { y: 0, boxShadow: "0 4px 16px rgba(11,23,48,0.06)" },
  hover: {
    y: -4,
    boxShadow: "0 12px 28px rgba(11,23,48,0.12)",
    transition: { duration: 0.2, ease: "easeOut" },
  },
};

export const pageTransition: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.35, ease: "easeOut" } },
  exit: { opacity: 0, transition: { duration: 0.2, ease: "easeIn" } },
};

/** Viewport settings used with whileInView across the site for scroll reveals. */
export const scrollRevealViewport = { once: true, margin: "-80px" };
