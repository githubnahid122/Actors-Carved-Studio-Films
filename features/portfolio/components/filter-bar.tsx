"use client";

import { Search } from "lucide-react";

import { PORTFOLIO_CATEGORIES } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { ALL_CATEGORY } from "@/features/portfolio/hooks/use-portfolio-filters";

interface FilterBarProps {
  category: string;
  query: string;
  onCategoryChange: (category: string) => void;
  onQueryChange: (query: string) => void;
  resultCount: number;
}

export function FilterBar({
  category,
  query,
  onCategoryChange,
  onQueryChange,
  resultCount,
}: FilterBarProps) {
  const categories = [ALL_CATEGORY, ...PORTFOLIO_CATEGORIES];

  return (
    <div className="flex flex-col gap-6">
      <div className="relative max-w-md">
        <Search className="pointer-events-none absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          type="search"
          value={query}
          onChange={(event) => onQueryChange(event.target.value)}
          placeholder="Search by title or client…"
          aria-label="Search portfolio"
          className="pl-10"
        />
      </div>

      <div role="group" aria-label="Filter by category" className="flex flex-wrap gap-2">
        {categories.map((cat) => {
          const active = cat === category;
          return (
            <button
              key={cat}
              type="button"
              onClick={() => onCategoryChange(cat)}
              aria-pressed={active}
              className={cn(
                "rounded-full border px-4 py-2 text-xs font-medium tracking-wide transition-colors",
                active
                  ? "border-gold bg-gold text-primary-foreground"
                  : "border-border text-muted hover:border-gold/60 hover:text-gold",
              )}
            >
              {cat}
            </button>
          );
        })}
      </div>

      <p className="text-xs text-muted-foreground" role="status">
        {resultCount} {resultCount === 1 ? "result" : "results"}
      </p>
    </div>
  );
}
