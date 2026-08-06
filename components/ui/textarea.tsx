import * as React from "react";

import { cn } from "@/lib/utils";

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "flex min-h-24 w-full rounded-sm border border-input bg-surface px-3.5 py-2.5 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50",
        "focus-visible:border-gold focus-visible:ring-1 focus-visible:ring-gold/40",
        "aria-invalid:border-destructive aria-invalid:ring-1 aria-invalid:ring-destructive/40",
        className,
      )}
      {...props}
    />
  );
}

export { Textarea };
