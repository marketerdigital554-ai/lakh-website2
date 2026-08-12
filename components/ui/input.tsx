import * as React from "react";
import { cn } from "@/lib/utils";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, error, ...props }, ref) => {
    return (
      <input
        type={type}
        ref={ref}
        aria-invalid={error || undefined}
        className={cn(
          "h-11 w-full rounded-md border bg-warm-white px-4 text-sm text-ink-primary placeholder:text-ink-secondary/60",
          "border-border transition-colors focus-visible:outline-none",
          error ? "border-status-error" : "focus:border-sky-blue",
          className
        )}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export { Input };
