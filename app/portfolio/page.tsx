import type { Metadata } from "next";
import { Suspense } from "react";

import { Container } from "@/components/shared/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { PortfolioGrid } from "@/features/portfolio";

export const metadata: Metadata = {
  title: "Our Casting Footprint",
  description:
    "Explore the massive lineup of projects casted by Actors Carved Studio & Films — TVCs, movies, serials, music videos, web series, short films, and vertical series.",
  alternates: { canonical: "/portfolio" },
  openGraph: { url: "/portfolio" },
};

export default function PortfolioPage() {
  return (
    <div className="py-20 md:py-28">
      <Container>
        <SectionHeading
          eyebrow="Our Casting Footprint"
          title="Our Casting Footprint: Talent on Screen"
          description="Explore the massive lineup of projects casted by ActorsCarved Studio & Films."
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
