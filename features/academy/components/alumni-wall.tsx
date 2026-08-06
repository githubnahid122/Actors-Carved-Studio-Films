import Image from "next/image";

import { ALUMNI } from "@/content/alumni";
import { Container } from "@/components/shared/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { FadeIn } from "@/components/shared/fade-in";

export function AlumniWall() {
  return (
    <section id="alumni" className="border-t border-border bg-background py-24 md:py-32">
      <Container>
        <SectionHeading
          eyebrow="Alumni Wall"
          title="Where our graduates landed"
          align="center"
          className="mx-auto mb-16 max-w-2xl"
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {ALUMNI.map((alum, index) => (
            <FadeIn key={alum.id} delay={Math.min(index, 5) * 0.06}>
              <div className="group relative overflow-hidden rounded-md">
                <div className="relative aspect-4/5">
                  <Image
                    src={alum.photoUrl}
                    alt={alum.name}
                    fill
                    sizes="(max-width: 768px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                </div>
                <div className="absolute inset-x-0 bottom-0 flex flex-col gap-1 p-5">
                  <h3 className="font-display text-lg text-foreground">{alum.name}</h3>
                  <p className="text-xs text-gold">{alum.program}</p>
                  <p className="text-xs text-muted-foreground">
                    {alum.outcome} &middot; {alum.year}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
