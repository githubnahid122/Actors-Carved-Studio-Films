import { Container } from "@/components/shared/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { FadeIn } from "@/components/shared/fade-in";

const STATS = [
  { value: "180+", label: "Productions Delivered" },
  { value: "2,400+", label: "Actors on the Casting Desk" },
  { value: "3", label: "Flagship Academy Programs" },
  { value: "7", label: "Years Carving Craft" },
];

export function AboutSection() {
  return (
    <section className="border-t border-border bg-background py-24 md:py-32">
      <Container>
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
          <FadeIn>
            <SectionHeading
              eyebrow="About the Studio"
              title="One studio. Three disciplines. A single craft standard."
              description="Actors Carved Studio & Films began as a production house and grew into a full ecosystem — a casting desk trusted by agencies and OTT platforms, and a conservatory-style academy that feeds our own sets. We don't outsource the craft; we carve it in-house, at every stage."
            />
          </FadeIn>
          <FadeIn delay={0.15}>
            <dl className="grid grid-cols-2 gap-8">
              {STATS.map((stat) => (
                <div key={stat.label} className="border-l border-gold/30 pl-4">
                  <dt className="sr-only">{stat.label}</dt>
                  <dd className="font-display text-4xl text-gold md:text-5xl">{stat.value}</dd>
                  <p className="mt-2 text-sm text-muted">{stat.label}</p>
                </div>
              ))}
            </dl>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
