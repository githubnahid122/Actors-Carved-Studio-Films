import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";

import { Container } from "@/components/shared/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { FadeIn } from "@/components/shared/fade-in";
import { Card, CardContent } from "@/components/ui/card";

const SERVICES = [
  {
    icon: "🎯",
    title: "Elite Casting Desk",
    punchline: "Connecting visionary directors with the precise faces they need.",
    points: [
      "Comprehensive casting solutions for TVCs, OTT, and Feature Movies.",
      "Access to an elite, verified internal roster of disciplined actors.",
      "Deep script understanding backed by a strong foundation in theatre art.",
    ],
    href: "/casting-desk",
    cta: "Visit Casting Desk",
  },
  {
    icon: "🏫",
    title: "The Training Academy",
    punchline: "Transforming raw potential into camera-ready professionals.",
    points: [
      "Specialized on-camera acting workshops and method training.",
      "Intense character development, diction, and script analysis sessions.",
      "Direct launchpad feeding into mainstream casting networks.",
    ],
    href: "/academy",
    cta: "Explore the Academy",
  },
];

export function ServicesSplit() {
  return (
    <section className="border-t border-border bg-surface py-24 md:py-32">
      <Container>
        <SectionHeading
          eyebrow="What We Do"
          title="Two disciplines, carved from the same block"
          align="center"
          className="mx-auto mb-16 max-w-2xl"
        />
        <div className="grid gap-6 md:grid-cols-2">
          {SERVICES.map((service, index) => (
            <FadeIn key={service.title} delay={index * 0.1}>
              <Link href={service.href} className="group block h-full">
                <Card className="h-full transition-colors group-hover:border-gold/60">
                  <CardContent className="flex h-full flex-col gap-5 p-8">
                    <span className="text-3xl">{service.icon}</span>
                    <h3 className="font-display text-2xl text-foreground">{service.title}</h3>
                    <p className="text-base italic text-gold">{service.punchline}</p>
                    <ul className="flex-1 space-y-3">
                      {service.points.map((point) => (
                        <li key={point} className="flex items-start gap-2 text-sm text-muted">
                          <Check className="mt-0.5 size-4 shrink-0 text-gold" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                    <span className="inline-flex items-center gap-1 text-sm font-medium text-gold">
                      {service.cta}
                      <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </span>
                  </CardContent>
                </Card>
              </Link>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
