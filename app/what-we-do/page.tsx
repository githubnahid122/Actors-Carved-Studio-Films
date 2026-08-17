import type { Metadata } from "next";

import { WhatWeDoHero, ServicesGrid } from "@/features/what-we-do";
import { CtaSection } from "@/features/home/components/cta-section";

export const metadata: Metadata = {
  title: "What We Do",
  description:
    "Comprehensive casting and talent solutions by Actors Carved Studio & Films — TVCs, digital ads, ecommerce, corporate films, print, UGC, movies, web series, TV serials, music videos, and vertical series.",
  alternates: { canonical: "/what-we-do" },
  openGraph: { url: "/what-we-do" },
};

export default function WhatWeDoPage() {
  return (
    <>
      <WhatWeDoHero />
      <ServicesGrid />
      <CtaSection />
    </>
  );
}
