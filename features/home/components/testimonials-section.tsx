import { Quote, Star, BadgeCheck } from "lucide-react";

import { TESTIMONIALS } from "@/content/testimonials";
import { Container } from "@/components/shared/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { Carousel } from "@/components/shared/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

function getInitials(name: string) {
  return name
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase())
    .join("");
}

export function TestimonialsSection() {
  return (
    <section className="border-t border-border bg-surface py-24 md:py-32">
      <Container>
        <SectionHeading
          eyebrow="Voices From The Set"
          title="What industry talents say about our casting"
          align="center"
          className="mx-auto mb-16 max-w-2xl"
        />
        <Carousel ariaLabel="Actor testimonials">
          {TESTIMONIALS.map((testimonial) => (
            <Card key={testimonial.id} className="h-full">
              <CardContent className="flex h-full flex-col gap-6 p-8">
                <Quote className="size-6 text-gold" />
                <p className="flex-1 text-base text-muted">&ldquo;{testimonial.quote}&rdquo;</p>
                <div className="flex items-center gap-1" aria-label={`${testimonial.rating ?? 5} out of 5 stars`}>
                  {Array.from({ length: testimonial.rating ?? 5 }).map((_, index) => (
                    <Star key={index} className="size-4 fill-gold text-gold" />
                  ))}
                </div>
                <div className="flex items-center gap-3">
                  <Avatar className="size-11 border border-border">
                    {testimonial.avatarUrl ? (
                      <AvatarImage src={testimonial.avatarUrl} alt={testimonial.name} />
                    ) : null}
                    <AvatarFallback className="bg-gold/10 text-sm font-medium text-gold">
                      {getInitials(testimonial.name)}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-sm font-medium text-foreground">{testimonial.name}</p>
                    <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                    <p className="mt-1 flex items-center gap-1 text-xs text-muted-foreground">
                      <BadgeCheck className="size-3.5 text-gold" />
                      Verified Google Review
                    </p>
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
