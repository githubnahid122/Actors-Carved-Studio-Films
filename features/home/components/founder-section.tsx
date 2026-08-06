import Image from "next/image";

import { FOUNDER } from "@/content/founder";
import { Container } from "@/components/shared/container";
import { FadeIn } from "@/components/shared/fade-in";

export function FounderSection() {
  return (
    <section className="border-t border-border bg-background py-24 md:py-32">
      <Container className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <FadeIn>
          <div className="relative aspect-4/5 overflow-hidden rounded-md">
            <Image
              src={FOUNDER.photoUrl}
              alt={`${FOUNDER.name}, ${FOUNDER.title}`}
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover"
            />
          </div>
        </FadeIn>
        <FadeIn delay={0.15}>
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">
            From the Founder
          </span>
          <h2 className="mt-4 font-display text-3xl text-foreground md:text-4xl">{FOUNDER.name}</h2>
          <p className="mt-1 text-sm text-muted-foreground">{FOUNDER.title}</p>
          <blockquote className="mt-6 border-l-2 border-gold pl-6 font-display text-xl italic text-gold-soft md:text-2xl">
            &ldquo;{FOUNDER.signatureQuote}&rdquo;
          </blockquote>
          <div className="mt-6 flex flex-col gap-4 text-base text-muted">
            {FOUNDER.bio.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
