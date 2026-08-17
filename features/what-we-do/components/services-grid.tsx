import { CASTING_SERVICES } from "@/content/what-we-do";
import { Container } from "@/components/shared/container";
import { FadeIn } from "@/components/shared/fade-in";

export function ServicesGrid() {
  return (
    <section className="border-t border-border bg-surface py-24 md:py-32">
      <Container>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {CASTING_SERVICES.map((service, index) => (
            <FadeIn key={service.id} delay={index * 0.05}>
              <div className="flex h-full flex-col gap-4 rounded-md border border-border bg-card p-6">
                <span className="text-3xl">{service.icon}</span>
                <h3 className="font-display text-lg text-foreground">{service.title}</h3>
                <p className="text-sm text-muted">{service.description}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
