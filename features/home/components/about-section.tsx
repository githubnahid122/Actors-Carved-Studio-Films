import { Container } from "@/components/shared/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { FadeIn } from "@/components/shared/fade-in";

const STATS = [
  { value: "180+", label: "Productions Delivered" },
  { value: "2,400+", label: "Actors on the Casting Desk" },
  { value: "3", label: "Flagship Academy Programs" },
  { value: "7", label: "Years Carving Craft" },
];

const PILLARS = [
  {
    icon: "🎯",
    title: "Elite Casting & Talent Curation",
    description:
      "We function as a heavy-weight casting companion for external filmmakers and brands. Our team breaks down scripts thoroughly to deliver highly accurate talent options, reducing audition times and ensuring a seamless, world-class casting experience.",
  },
  {
    icon: "🏫",
    title: "The Acting Academy",
    description:
      "To fuel the industry with disciplined talent, we run a specialized acting school. We transform raw potential into camera-ready professionals, ensuring a steady stream of highly skilled actors who understand the technicalities of modern commercial, TV, and film sets.",
  },
];

export function AboutSection() {
  return (
    <section className="border-t border-border bg-background py-24 md:py-32">
      <Container>
        <FadeIn>
          <SectionHeading
            eyebrow="About Us"
            title="Crafting Characters. Transforming Casting Legacies."
          />
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="mt-8 flex max-w-3xl flex-col gap-6 text-base text-muted md:text-lg">
            <p>
              Founded with a deep-rooted understanding of character design and performance art,
              Actors Carved Studio is a premier elite casting agency and talent ecosystem. We
              specialize in sourcing, auditioning, and curating the precise faces that bring
              powerful narratives to life on screen&mdash;serving the mainstream entertainment and
              advertising industries with absolute precision.
            </p>
            <p>
              Our journey began in 2015 with a strong foundation in creative character building
              and narrative design. In 2018, we expanded into full-scale professional casting
              curation and advanced screen training. Today, we operate as a trusted partner for
              leading directors, production houses, and national advertising agencies through two
              core pillars:
            </p>
          </div>
        </FadeIn>

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {PILLARS.map((pillar, index) => (
            <FadeIn key={pillar.title} delay={0.15 + index * 0.1}>
              <div className="h-full rounded-lg border border-gold/30 p-8">
                <span className="text-3xl">{pillar.icon}</span>
                <h3 className="mt-4 font-display text-2xl text-foreground">{pillar.title}</h3>
                <p className="mt-4 text-base text-muted">{pillar.description}</p>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.35}>
          <dl className="mt-16 grid grid-cols-2 gap-8 border-t border-border pt-16 md:grid-cols-4">
            {STATS.map((stat) => (
              <div key={stat.label} className="border-l border-gold/30 pl-4">
                <dt className="sr-only">{stat.label}</dt>
                <dd className="font-display text-4xl text-gold md:text-5xl">{stat.value}</dd>
                <p className="mt-2 text-sm text-muted">{stat.label}</p>
              </div>
            ))}
          </dl>
        </FadeIn>
      </Container>
    </section>
  );
}
