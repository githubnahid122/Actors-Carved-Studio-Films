import Image from "next/image";
import Link from "next/link";

import { Container } from "@/components/shared/container";
import { FadeIn } from "@/components/shared/fade-in";
import { Button } from "@/components/ui/button";

export function AcademyHero() {
  return (
    <section className="relative flex min-h-[70vh] items-center overflow-hidden bg-black">
      <Image
        src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=2400&q=80"
        alt="Acting students rehearsing a scene in studio"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center opacity-50"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/40" />
      <Container className="relative z-10">
        <FadeIn>
          <span className="mb-6 inline-block text-xs font-semibold uppercase tracking-[0.3em] text-gold">
            Acting Academy
          </span>
          <h1 className="max-w-3xl text-balance font-display text-4xl leading-tight text-foreground md:text-6xl">
            Conservatory training that ends in real auditions.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-muted">
            Three programs. One casting desk waiting on the other side of graduation.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Button asChild size="lg">
              <Link href="/academy/programs">View Programs &amp; Fees</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="#enquiry">Enquire Now</Link>
            </Button>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
