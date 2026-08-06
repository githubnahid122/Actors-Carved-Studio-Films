"use client";

import * as React from "react";

import type { PortfolioItem } from "@/types/portfolio";
import { usePortfolioFilters } from "@/features/portfolio/hooks/use-portfolio-filters";
import { FilterBar } from "@/features/portfolio/components/filter-bar";
import { PortfolioCard } from "@/features/portfolio/components/portfolio-card";
import { VideoModal } from "@/features/portfolio/components/video-modal";
import { FadeIn } from "@/components/shared/fade-in";

export function PortfolioGrid() {
  const { category, query, filteredItems, setCategory, setQuery } = usePortfolioFilters();
  const [activeItem, setActiveItem] = React.useState<PortfolioItem | null>(null);

  return (
    <div className="flex flex-col gap-10">
      <FilterBar
        category={category}
        query={query}
        onCategoryChange={setCategory}
        onQueryChange={setQuery}
        resultCount={filteredItems.length}
      />

      {filteredItems.length === 0 ? (
        <p className="py-16 text-center text-muted">
          No work matches that search yet. Try another category or keyword.
        </p>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredItems.map((item, index) => (
            <FadeIn key={item.id} delay={Math.min(index, 6) * 0.05}>
              <PortfolioCard item={item} onOpen={setActiveItem} />
            </FadeIn>
          ))}
        </div>
      )}

      <VideoModal item={activeItem} onClose={() => setActiveItem(null)} />
    </div>
  );
}
