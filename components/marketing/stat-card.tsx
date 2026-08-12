import { AnimatedCounter } from "@/components/marketing/animated-counter";
import { DemoDataBadge } from "@/components/ui/badge";

interface StatCardProps {
  label: string;
  value: number;
  suffix?: string;
  decimals?: number;
  /** Set true until this figure is backed by verified real data. */
  isDemo?: boolean;
}

export function StatCard({
  label,
  value,
  suffix = "",
  decimals = 0,
  isDemo = true,
}: StatCardProps) {
  return (
    <div className="flex flex-col items-center gap-1 border-r border-border px-4 py-6 text-center last:border-r-0 md:py-8">
      <div className="text-2xl font-extrabold text-navy md:text-3xl">
        <AnimatedCounter value={value} suffix={suffix} decimals={decimals} />
      </div>
      <span className="text-xs font-medium text-ink-secondary">{label}</span>
      {isDemo && <DemoDataBadge className="mt-1" />}
    </div>
  );
}
