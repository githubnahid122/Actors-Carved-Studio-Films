"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

import { NAV_LINKS } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { Logo } from "@/components/shared/logo";
import { Button } from "@/components/ui/button";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = React.useState(false);

  // Close the mobile menu on navigation. Derived during render (not in an effect) so the
  // menu never flashes open on the destination page before closing.
  const [lastPathname, setLastPathname] = React.useState(pathname);
  if (pathname !== lastPathname) {
    setLastPathname(pathname);
    setOpen(false);
  }

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/85 backdrop-blur-md">
      <div className="container-cinematic flex h-18 items-center justify-between py-4">
        <Logo />

        <nav aria-label="Primary" className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "text-sm font-medium tracking-wide text-muted transition-colors hover:text-gold",
                  active && "text-gold",
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:block">
          <Button asChild size="sm">
            <Link href="/casting-desk">Submit a Brief</Link>
          </Button>
        </div>

        <button
          type="button"
          className="text-foreground md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {open && (
        <nav aria-label="Mobile" className="border-t border-border bg-background md:hidden">
          <div className="container-cinematic flex flex-col gap-1 py-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "rounded-sm px-2 py-3 text-sm font-medium text-muted transition-colors hover:bg-white/5 hover:text-gold",
                  pathname === link.href && "text-gold",
                )}
              >
                {link.label}
              </Link>
            ))}
            <Button asChild size="sm" className="mt-2">
              <Link href="/casting-desk">Submit a Brief</Link>
            </Button>
          </div>
        </nav>
      )}
    </header>
  );
}
