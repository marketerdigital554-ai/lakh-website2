import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const cardVariants = cva(
  "rounded-lg border transition-shadow duration-200 group",
  {
    variants: {
      surface: {
        light:
          "bg-warm-white border-border shadow-card hover:shadow-card-hover",
        surface:
          "bg-warm-surface border-border shadow-card hover:shadow-card-hover",
        dark: "bg-navy-800 border-navy-700 text-ink-onDark",
      },
      padding: {
        default: "p-6",
        sm: "p-4",
        lg: "p-8",
      },
    },
    defaultVariants: {
      surface: "light",
      padding: "default",
    },
  }
);

export interface CardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {
  /** Which gradient accent chip sits behind the card's icon, if any. */
  accent?: "solar" | "growth" | "tech" | "none";
}

const accentMap: Record<NonNullable<CardProps["accent"]>, string> = {
  solar: "bg-gradient-solar",
  growth: "bg-gradient-growth",
  tech: "bg-gradient-tech",
  none: "",
};

function Card({
  className,
  surface,
  padding,
  accent = "none",
  children,
  ...props
}: CardProps) {
  return (
    <div className={cn(cardVariants({ surface, padding }), className)} {...props}>
      {accent !== "none" && (
        <div
          aria-hidden
          className={cn(
            "mb-4 -mt-2 -ml-2 h-1 w-10 rounded-pill",
            accentMap[accent]
          )}
        />
      )}
      {children}
    </div>
  );
}

function CardIcon({
  accent = "solar",
  children,
}: {
  accent?: "solar" | "growth" | "tech";
  children: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "mb-4 inline-flex h-11 w-11 items-center justify-center rounded-md text-navy",
        accentMap[accent]
      )}
    >
      {children}
    </div>
  );
}

function CardTitle({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
  return <h3 className={cn("text-lg font-bold", className)} {...props} />;
}

function CardDescription({
  className,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      className={cn("mt-1.5 text-sm leading-relaxed text-ink-secondary", className)}
      {...props}
    />
  );
}

export { Card, CardIcon, CardTitle, CardDescription };
