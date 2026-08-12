import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center gap-1.5 rounded-pill px-3 py-1 text-xs font-bold",
  {
    variants: {
      variant: {
        solar: "bg-solar-yellow/15 text-solar-orange",
        growth: "bg-energy-green/15 text-energy-green",
        tech: "bg-sky-blue/15 text-sky-blue",
        // Required whenever a number/chart is not from a verified live source.
        demo: "bg-status-warning/15 text-status-warning",
        neutral: "bg-warm-surface text-ink-secondary border border-border",
      },
    },
    defaultVariants: {
      variant: "neutral",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <span className={cn(badgeVariants({ variant }), className)} {...props} />;
}

/** Convenience wrapper — use anywhere a number/chart is seeded rather than live. */
function DemoDataBadge(props: React.HTMLAttributes<HTMLSpanElement>) {
  return (
    <Badge variant="demo" {...props}>
      Demo data
    </Badge>
  );
}

export { Badge, badgeVariants, DemoDataBadge };
