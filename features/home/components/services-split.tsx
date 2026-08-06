import Link from "next/link";
import { Clapperboard, Users2, GraduationCap, ArrowUpRight } from "lucide-react";

import { Container } from "@/components/shared/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { FadeIn } from "@/components/shared/fade-in";
import { Card, CardContent } from "@/components/ui/card";

const SERVICES = [
  {
    icon: Clapperboard,
    title: "Production House",
    description:
      "TVCs, feature films, web series, and branded content — produced end-to-end with a director-first crew.",
    href: "/portfolio",
    cta: "See the Portfolio",
  },
  {
    icon: Users2,
    title: "Casting Desk",
    description:
      "Submit a role brief or register as talent. Our desk matches agencies and actors with real precision, fast.",
    href: "/casting-desk",
    cta: "Visit Casting Desk",
  },
  {
    icon: GraduationCap,
    title: "Acting Academy",
    description:
      "Conservatory-style training across three programs, ending in real auditions — not just a certificate.",
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
          title="Three disciplines, carved from the same block"
          align="center"
          className="mx-auto mb-16 max-w-2xl"
        />
        <div className="grid gap-6 md:grid-cols-3">
          {SERVICES.map((service, index) => (
            <FadeIn key={service.title} delay={index * 0.1}>
              <Link href={service.href} className="group block h-full">
                <Card className="h-full transition-colors group-hover:border-gold/60">
                  <CardContent className="flex h-full flex-col gap-5 p-8">
                    <service.icon className="size-8 text-gold" />
                    <h3 className="font-display text-2xl text-foreground">{service.title}</h3>
                    <p className="flex-1 text-sm text-muted">{service.description}</p>
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
