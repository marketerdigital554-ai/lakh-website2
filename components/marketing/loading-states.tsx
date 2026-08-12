import { cn } from "@/lib/utils";

function Shimmer({
  className,
  style,
}: {
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <div
      className={cn("animate-pulse rounded-md bg-warm-surface", className)}
      style={style}
    />
  );
}

export function CardSkeleton() {
  return (
    <div className="rounded-lg border border-border p-6">
      <Shimmer className="h-5 w-24" />
      <Shimmer className="mt-4 h-4 w-full" />
      <Shimmer className="mt-2 h-4 w-2/3" />
    </div>
  );
}

export function ChartSkeleton({ height = 260 }: { height?: number }) {
  return <Shimmer className="w-full" style={{ height }} />;
}

export function TableRowSkeleton({ columns = 4 }: { columns?: number }) {
  return (
    <div className="flex items-center gap-4 border-b border-border py-3">
      {Array.from({ length: columns }).map((_, i) => (
        <Shimmer key={i} className="h-4 flex-1" />
      ))}
    </div>
  );
}
