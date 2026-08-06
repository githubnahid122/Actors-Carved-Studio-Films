import Image from "next/image";
import { Quote } from "lucide-react";

import { TESTIMONIALS } from "@/content/testimonials";
import { Container } from "@/components/shared/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { Carousel } from "@/components/shared/carousel";
import { Card, CardContent } from "@/components/ui/card";

export function TestimonialsSection() {
  return (
    <section className="border-t border-border bg-surface py-24 md:py-32">
      <Container>
        <SectionHeading
          eyebrow="Word on the Street"
          title="Trusted by brands, directors, and actors alike"
          align="center"
          className="mx-auto mb-16 max-w-2xl"
        />
        <Carousel ariaLabel="Client and student testimonials">
          {TESTIMONIALS.map((testimonial) => (
            <Card key={testimonial.id} className="h-full">
              <CardContent className="flex h-full flex-col gap-6 p-8">
                <Quote className="size-6 text-gold" />
                <p className="flex-1 text-base text-muted">&ldquo;{testimonial.quote}&rdquo;</p>
                <div className="flex items-center gap-3">
                  <div className="relative size-11 shrink-0 overflow-hidden rounded-full">
                    <Image
                      src={testimonial.avatarUrl}
                      alt={testimonial.name}
                      fill
                      sizes="44px"
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">{testimonial.name}</p>
                    <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </Carousel>
      </Container>
    </section>
  );
}
