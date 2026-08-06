import Link from "next/link";
import { Check } from "lucide-react";

import { COURSES } from "@/content/courses";
import { Container } from "@/components/shared/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { FadeIn } from "@/components/shared/fade-in";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function CoursesSection() {
  return (
    <section className="border-t border-border bg-surface py-24 md:py-32">
      <Container>
        <SectionHeading
          eyebrow="Programs"
          title="Three programs, one outcome: real screen work"
          align="center"
          className="mx-auto mb-16 max-w-2xl"
        />
        <div className="grid gap-6 lg:grid-cols-3">
          {COURSES.map((course, index) => (
            <FadeIn key={course.id} delay={index * 0.1}>
              <Card
                className={cn(
                  "h-full",
                  course.featured && "border-gold/70 shadow-[0_0_0_1px_rgba(201,162,75,0.25)]",
                )}
              >
                <CardContent className="flex h-full flex-col gap-5 p-8">
                  {course.featured && <Badge variant="solid">Flagship &middot; Recommended</Badge>}
                  <h3 className="font-display text-2xl text-foreground">{course.name}</h3>
                  <dl className="flex flex-col gap-1 text-sm text-muted">
                    <div className="flex justify-between gap-4">
                      <dt>Duration</dt>
                      <dd className="text-foreground">{course.duration}</dd>
                    </div>
                    <div className="flex justify-between gap-4">
                      <dt>Schedule</dt>
                      <dd className="text-right text-foreground">{course.schedule}</dd>
                    </div>
                    <div className="flex justify-between gap-4">
                      <dt>Format</dt>
                      <dd className="text-right text-foreground">{course.format}</dd>
                    </div>
                  </dl>
                  <ul className="flex flex-col gap-2">
                    {course.outcomes.map((outcome) => (
                      <li key={outcome} className="flex gap-2 text-sm text-muted">
                        <Check className="mt-0.5 size-4 shrink-0 text-gold" />
                        {outcome}
                      </li>
                    ))}
                  </ul>
                  <Button asChild variant={course.featured ? "default" : "outline"} className="mt-auto">
                    <Link href="#enquiry">Enquire — Fee on Request</Link>
                  </Button>
                </CardContent>
              </Card>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
