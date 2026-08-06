import type { Metadata } from "next";

import { SITE } from "@/lib/constants";
import { AcademyHero } from "@/features/academy/components/academy-hero";
import { TrainingPillars, CoursesSection, AlumniWall, EnquiryForm } from "@/features/academy";
import { TestimonialsSection } from "@/features/home/components/testimonials-section";

export const metadata: Metadata = {
  title: "Acting Academy",
  description:
    "A conservatory-style acting academy from Actors Carved Studio & Films — training pillars, alumni outcomes, and three flagship programs.",
  alternates: { canonical: "/academy" },
  openGraph: { url: "/academy" },
};

const courseJsonLd = {
  "@context": "https://schema.org",
  "@type": "Course",
  name: "Actors Carved Acting Academy",
  description: metadata.description,
  provider: {
    "@type": "Organization",
    name: SITE.name,
    sameAs: SITE.url,
  },
};

export default function AcademyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(courseJsonLd) }}
      />
      <AcademyHero />
      <TrainingPillars />
      <CoursesSection />
      <AlumniWall />
      <TestimonialsSection />
      <EnquiryForm />
    </>
  );
}
