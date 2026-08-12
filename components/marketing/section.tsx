import { cn } from "@/lib/utils";

type SectionTone = "light" | "surface" | "dark";

const toneClass: Record<SectionTone, string> = {
  light: "section-light",
  surface: "section-surface",
  dark: "section-dark",
};

export function Section({
  tone = "light",
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLElement> & { tone?: SectionTone }) {
  return (
    <section
      className={cn(
        toneClass[tone],
        "py-section-mobile md:py-section",
        className
      )}
      {...props}
    >
      <div className="container">{children}</div>
    </section>
  );
}
