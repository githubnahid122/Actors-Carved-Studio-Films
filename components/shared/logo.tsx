import Link from "next/link";

import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      className={cn("group flex flex-col leading-none", className)}
      aria-label="Actors Carved Studio & Films — home"
    >
      <span className="font-display text-lg tracking-wide text-foreground">
        Actors <span className="gold-gradient-text">Carved</span>
      </span>
      <span className="text-[0.6rem] uppercase tracking-[0.3em] text-muted-foreground">
        Studio &amp; Films
      </span>
    </Link>
  );
}
