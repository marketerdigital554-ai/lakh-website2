"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { fadeUp, scrollRevealViewport } from "@/lib/motion-variants";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  tone?: "light" | "dark";
  className?: string;
}

/**
 * Eyebrow label should name something true about the section (e.g. "How it
 * works", "Our projects") — not a decorative number unless the content is a
 * genuine sequence.
 */
export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "light",
  className,
}: SectionHeadingProps) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={scrollRevealViewport}
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow && (
        <span
          className={cn(
            "mb-3 inline-block text-xs font-bold uppercase tracking-wider",
            tone === "dark" ? "text-sky-cyan" : "text-sky-blue"
          )}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={cn(
          "text-h2-mobile md:text-h2-desktop",
          tone === "dark" ? "text-ink-onDark" : "text-ink-primary"
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-4 text-base leading-relaxed",
            tone === "dark" ? "text-ink-onDark/75" : "text-ink-secondary"
          )}
        >
          {description}
        </p>
      )}
    </motion.div>
  );
}
