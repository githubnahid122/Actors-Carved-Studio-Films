import { BookOpenText, Aperture, Mic2, Users, type LucideIcon } from "lucide-react";

import { TRAINING_PILLARS } from "@/content/training-pillars";
import { Container } from "@/components/shared/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { FadeIn } from "@/components/shared/fade-in";

const ICONS: Record<string, LucideIcon> = {
  BookOpenText,
  Aperture,
  Mic2,
  Users,
};

export function TrainingPillars() {
  return (
    <section className="border-t border-border bg-surface py-24 md:py-32">
      <Container>
        <SectionHeading
          eyebrow="How We Train"
          title="Four pillars, one conservatory standard"
          align="center"
          className="mx-auto mb-16 max-w-2xl"
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {TRAINING_PILLARS.map((pillar, index) => {
            const Icon = ICONS[pillar.icon] ?? Users;
            return (
              <FadeIn key={pillar.id} delay={index * 0.08}>
                <div className="flex h-full flex-col gap-4 rounded-md border border-border bg-card p-6">
                  <Icon className="size-7 text-gold" />
                  <h3 className="font-display text-lg text-foreground">{pillar.title}</h3>
                  <p className="text-sm text-muted">{pillar.description}</p>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
