"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ImageBlock } from "@/components/marketing/image-block";
import { fadeUp, staggerContainer } from "@/lib/motion-variants";
import type { ImageKey } from "@/lib/image-config";

interface HeroProps {
  eyebrow?: string;
  title: string;
  description: string;
  primaryCta: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  imageKey: ImageKey;
}

export function Hero({
  eyebrow,
  title,
  description,
  primaryCta,
  secondaryCta,
  imageKey,
}: HeroProps) {
  const reduceMotion = useReducedMotion();

  return (
    <div className="relative flex min-h-[70vh] items-end overflow-hidden md:min-h-[80vh]">
      <div className="absolute inset-0">
        <ImageBlock imageKey={imageKey} aspect="wide" rounded="none" overlay="dusk" priority />
      </div>

      {!reduceMotion && (
        <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
          {[...Array(6)].map((_, i) => (
            <span
              key={i}
              className="absolute bottom-0 h-1.5 w-1.5 animate-particle-drift rounded-full bg-solar-yellow"
              style={{
                left: `${12 + i * 15}%`,
                animationDelay: `${i * 0.9}s`,
              }}
            />
          ))}
        </div>
      )}

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="container relative z-10 pb-16 pt-32 md:pb-24"
      >
        {eyebrow && (
          <motion.span
            variants={fadeUp}
            className="mb-4 inline-block text-xs font-bold uppercase tracking-wider text-solar-yellow"
          >
            {eyebrow}
          </motion.span>
        )}
        <motion.h1
          variants={fadeUp}
          className="max-w-3xl text-hero-mobile text-warm-white md:text-hero-desktop"
        >
          {title}
        </motion.h1>
        <motion.p
          variants={fadeUp}
          className="mt-5 max-w-xl text-base leading-relaxed text-warm-white/85 md:text-lg"
        >
          {description}
        </motion.p>
        <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-4">
          <Button variant="solar" size="lg" asChild>
            <a href={primaryCta.href}>{primaryCta.label}</a>
          </Button>
          {secondaryCta && (
            <Button variant="outline-light" size="lg" asChild>
              <a href={secondaryCta.href}>{secondaryCta.label}</a>
            </Button>
          )}
        </motion.div>
      </motion.div>
    </div>
  );
}
