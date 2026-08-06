"use client";

import * as React from "react";
import { useRouter, useSearchParams, usePathname } from "next/navigation";

import { PORTFOLIO_ITEMS } from "@/content/portfolio";
import type { PortfolioCategory } from "@/lib/constants";

export const ALL_CATEGORY = "All" as const;

/**
 * Drives the portfolio grid's category filter + search query, keeping both in sync with
 * the URL (`?category=...&q=...`) so filtered views are shareable and back/forward-safe.
 */
export function usePortfolioFilters() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const category = (searchParams.get("category") as PortfolioCategory | null) ?? ALL_CATEGORY;
  const query = searchParams.get("q") ?? "";

  const setParams = React.useCallback(
    (next: { category?: string; q?: string }) => {
      const params = new URLSearchParams(searchParams.toString());
      if (next.category !== undefined) {
        if (next.category === ALL_CATEGORY) params.delete("category");
        else params.set("category", next.category);
      }
      if (next.q !== undefined) {
        if (next.q === "") params.delete("q");
        else params.set("q", next.q);
      }
      const search = params.toString();
      router.push(`${pathname}${search ? `?${search}` : ""}`, { scroll: false });
    },
    [pathname, router, searchParams],
  );

  const filteredItems = React.useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    return PORTFOLIO_ITEMS.filter((item) => {
      const matchesCategory = category === ALL_CATEGORY || item.category === category;
      const matchesQuery =
        normalizedQuery === "" ||
        item.title.toLowerCase().includes(normalizedQuery) ||
        item.category.toLowerCase().includes(normalizedQuery) ||
        item.client.toLowerCase().includes(normalizedQuery);
      return matchesCategory && matchesQuery;
    });
  }, [category, query]);

  return {
    category,
    query,
    filteredItems,
    setCategory: (value: string) => setParams({ category: value }),
    setQuery: (value: string) => setParams({ q: value }),
  };
}
