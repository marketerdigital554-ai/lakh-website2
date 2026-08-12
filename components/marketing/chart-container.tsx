import { Card, CardTitle } from "@/components/ui/card";
import { DemoDataBadge } from "@/components/ui/badge";
import { ChartSkeleton } from "@/components/marketing/loading-states";

interface ChartContainerProps {
  title: string;
  isDemo?: boolean;
  loading?: boolean;
  height?: number;
  children: React.ReactNode;
}

/**
 * Every energy/financial chart on the site should render inside this
 * wrapper so the "Demo data" badge and loading state stay consistent —
 * see the energy-monitoring architecture rule that live-looking data must
 * always be labeled until backed by a verified provider.
 */
export function ChartContainer({
  title,
  isDemo = true,
  loading = false,
  height = 260,
  children,
}: ChartContainerProps) {
  return (
    <Card surface="light" padding="default">
      <div className="mb-4 flex items-center justify-between">
        <CardTitle>{title}</CardTitle>
        {isDemo && <DemoDataBadge />}
      </div>
      <div style={{ height }}>{loading ? <ChartSkeleton height={height} /> : children}</div>
    </Card>
  );
}
