import type { Metadata } from "next";
import { Suspense } from "react";

import { Container } from "@/components/shared/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { PortfolioGrid } from "@/features/portfolio";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Browse Actors Carved Studio & Films' work across TVCs, feature films, web series, music videos, serials, short films, vertical series, corporate films, ecommerce, and UGC.",
  alternates: { canonical: "/portfolio" },
  openGraph: { url: "/portfolio" },
};

export default function PortfolioPage() {
  return (
    <div className="py-20 md:py-28">
      <Container>
        <SectionHeading
          eyebrow="Our Work"
          title="A portfolio carved across formats"
          description="Filter by category or search by title and client — every link is shareable."
          className="mb-12"
        />
        <Suspense fallback={<PortfolioSkeleton />}>
          <PortfolioGrid />
        </Suspense>
      </Container>
    </div>
  );
}

function PortfolioSkeleton() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3" aria-hidden="true">
      {Array.from({ length: 6 }).map((_, index) => (
        <div key={index} className="aspect-video animate-pulse rounded-md bg-surface" />
      ))}
    </div>
  );
}
