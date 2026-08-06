import type { Metadata } from "next";

import { SITE } from "@/lib/constants";
import { Container } from "@/components/shared/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { ContactForm, ContactInfo } from "@/features/contact";

export const metadata: Metadata = {
  title: "Contact",
  description: `Get in touch with ${SITE.name} — general enquiries, location, and WhatsApp.`,
  alternates: { canonical: "/contact" },
  openGraph: { url: "/contact" },
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: SITE.name,
  email: SITE.email,
  telephone: SITE.phone,
  address: {
    "@type": "PostalAddress",
    streetAddress: SITE.address.line1,
    addressLocality: "Hyderabad",
    addressRegion: "Telangana",
    addressCountry: "IN",
  },
};

export default function ContactPage() {
  return (
    <div className="py-20 md:py-28">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
      />
      <Container>
        <SectionHeading
          eyebrow="Contact"
          title="Let's talk about your next project"
          description="General enquiries, partnership requests, or just a hello — we read everything."
          className="mb-12 max-w-2xl"
        />
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
          <ContactForm />
          <ContactInfo />
        </div>
      </Container>
    </div>
  );
}
