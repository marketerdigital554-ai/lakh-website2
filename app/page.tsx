import { Navbar } from "@/components/marketing/navbar";
import { Footer } from "@/components/marketing/footer";
import { Hero } from "@/components/marketing/hero";
import { Section } from "@/components/marketing/section";
import { SectionHeading } from "@/components/marketing/section-heading";
import { StatCard } from "@/components/marketing/stat-card";
import { Card, CardIcon, CardTitle, CardDescription } from "@/components/ui/card";
import { Sun } from "lucide-react";

/**
 * Design-system verification page for Phase 1.
 * This is NOT the final homepage — Phase 2 builds the full 12-section
 * homepage described in the visual hierarchy. This page exists so the
 * design system can be reviewed and approved in isolation.
 */
export default function Home() {
  return (
    <>
      <Navbar />

      <Hero
        eyebrow="Clean energy, delivered"
        title="Powering a brighter future."
        description="LAKH designs, builds, and monitors solar projects — with a customer dashboard that shows exactly what your project is doing."
        primaryCta={{ label: "Explore LAKH", href: "/about" }}
        secondaryCta={{ label: "See our projects", href: "/projects" }}
        imageKey="hero-primary"
      />

      <Section tone="light">
        <div className="grid grid-cols-2 divide-x divide-border rounded-lg border border-border md:grid-cols-4 md:divide-x">
          <StatCard label="Capacity" value={42.5} suffix=" MW" decimals={1} />
          <StatCard label="Generated" value={128000} suffix=" kWh" />
          <StatCard label="Active projects" value={12} />
          <StatCard label="Customers" value={340} suffix="+" />
        </div>
      </Section>

      <Section tone="surface">
        <SectionHeading
          eyebrow="Design system check"
          title="Component preview"
          description="Cards, gradients, and icon chips as defined in the LAKH design system."
        />
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          <Card accent="solar">
            <CardIcon accent="solar">
              <Sun className="h-5 w-5" aria-hidden />
            </CardIcon>
            <CardTitle>Solar gradient</CardTitle>
            <CardDescription>Primary CTA and highlight accent.</CardDescription>
          </Card>
          <Card accent="growth">
            <CardIcon accent="growth">
              <Sun className="h-5 w-5" aria-hidden />
            </CardIcon>
            <CardTitle>Growth gradient</CardTitle>
            <CardDescription>Energy generation and success states.</CardDescription>
          </Card>
          <Card accent="tech">
            <CardIcon accent="tech">
              <Sun className="h-5 w-5" aria-hidden />
            </CardIcon>
            <CardTitle>Tech gradient</CardTitle>
            <CardDescription>Monitoring and data-forward sections.</CardDescription>
          </Card>
        </div>
      </Section>

      <Footer />
    </>
  );
}
