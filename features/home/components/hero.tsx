import Link from "next/link";
import Image from "next/image";

import { SITE } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/shared/fade-in";
import { Container } from "@/components/shared/container";

export function Hero() {
  return (
    <section className="relative flex min-h-[92vh] items-center overflow-hidden bg-black">
      <Image
        src="https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=2400&q=80"
        alt="A cinematographer framing a shot on a darkened film set"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center opacity-60"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/30" />

      <Container className="relative z-10">
        <FadeIn>
          <span className="mb-6 inline-block text-xs font-semibold uppercase tracking-[0.3em] text-gold">
            Production House &middot; Casting Desk &middot; Acting Academy
          </span>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h1 className="max-w-4xl text-balance font-display text-5xl leading-[1.05] text-foreground md:text-6xl lg:text-7xl">
            {SITE.tagline}
          </h1>
        </FadeIn>
        <FadeIn delay={0.2}>
          <p className="mt-6 max-w-xl text-lg text-muted">
            We produce the work, cast the talent, and train the next generation — all under one
            cinematic roof.
          </p>
        </FadeIn>
        <FadeIn delay={0.3}>
          <div className="mt-10 flex flex-wrap gap-4">
            <Button asChild size="lg">
              <Link href="/casting-desk">Submit a Casting Brief</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/portfolio">View Our Work</Link>
            </Button>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
