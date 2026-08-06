import type { Metadata } from "next";

import { Container } from "@/components/shared/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { GalleryGrid } from "@/features/gallery";

export const metadata: Metadata = {
  title: "Behind the Scenes",
  description:
    "Photos and behind-the-scenes moments from Actors Carved Studio & Films' sets, casting desk, and academy sessions.",
  alternates: { canonical: "/gallery" },
  openGraph: { url: "/gallery" },
};

export default function GalleryPage() {
  return (
    <div className="py-20 md:py-28">
      <Container>
        <SectionHeading
          eyebrow="Behind the Scenes"
          title="On set, in class, and everywhere between"
          description="A running gallery from our productions, casting sessions, and academy floor."
          className="mb-12"
        />
        <GalleryGrid />
      </Container>
    </div>
  );
}
