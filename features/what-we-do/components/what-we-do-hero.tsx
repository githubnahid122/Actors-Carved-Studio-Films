import Image from "next/image";

import { Container } from "@/components/shared/container";
import { FadeIn } from "@/components/shared/fade-in";

export function WhatWeDoHero() {
  return (
    <section className="relative flex min-h-[60vh] items-center overflow-hidden bg-black">
      <Image
        src="https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=2400&q=80"
        alt="Casting director reviewing audition tapes on set"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center opacity-50"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/40" />
      <Container className="relative z-10">
        <FadeIn>
          <span className="mb-6 inline-block text-xs font-semibold uppercase tracking-[0.3em] text-gold">
            What We Do
          </span>
          <h1 className="max-w-3xl text-balance font-display text-4xl leading-tight text-foreground md:text-6xl">
            Comprehensive Casting & Talent Solutions by ActorsCarved Studio & Films.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-muted">
            We streamline character curation for production houses, brands, and directors across
            every media format.
          </p>
        </FadeIn>
      </Container>
    </section>
  );
}
