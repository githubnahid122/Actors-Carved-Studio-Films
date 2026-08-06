import * as React from "react";

import { cn } from "@/lib/utils";

function Progress({
  value,
  className,
}: {
  value: number;
  className?: string;
}) {
  return (
    <div
      role="progressbar"
      aria-valuenow={value}
      aria-valuemin={0}
      aria-valuemax={100}
      className={cn("h-1.5 w-full overflow-hidden rounded-full bg-surface-border", className)}
    >
      <div
        className="h-full rounded-full bg-gold transition-all duration-300"
        style={{ width: `${Math.min(100, Math.max(0, value))}%` }}
      />
    </div>
  );
}

export { Progress };
