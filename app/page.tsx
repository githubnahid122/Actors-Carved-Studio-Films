import type { Metadata } from "next";

import { SITE } from "@/lib/constants";
import {
  Hero,
  AboutSection,
  ServicesSplit,
  FounderSection,
  TestimonialsSection,
  CtaSection,
} from "@/features/home";

export const metadata: Metadata = {
  title: "Home",
  description: SITE.description,
  alternates: { canonical: "/" },
  openGraph: { url: "/" },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutSection />
      <ServicesSplit />
      <FounderSection />
      <TestimonialsSection />
      <CtaSection />
    </>
  );
}
