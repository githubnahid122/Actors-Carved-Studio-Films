import Link from "next/link";

import { Container } from "@/components/shared/container";
import { FadeIn } from "@/components/shared/fade-in";
import { Button } from "@/components/ui/button";

export function CtaSection() {
  return (
    <section className="border-t border-border bg-background py-24 md:py-32">
      <Container>
        <FadeIn>
          <div className="flex flex-col items-center gap-8 rounded-md border border-gold/20 bg-gradient-to-br from-surface to-surface-elevated px-6 py-16 text-center md:px-16">
            <h2 className="max-w-2xl text-balance font-display text-3xl text-foreground md:text-4xl">
              Ready to cast your next project, or step in front of the camera?
            </h2>
            <p className="max-w-xl text-muted">
              Whether you&apos;re briefing a role or enrolling in the academy, our desk responds within
              48 hours.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg">
                <Link href="/casting-desk">Submit a Casting Brief</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/academy">Join the Academy</Link>
              </Button>
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
