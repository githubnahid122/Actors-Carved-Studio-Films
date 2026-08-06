import Link from "next/link";
import { Check, Star } from "lucide-react";

import { COURSES } from "@/content/courses";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/shared/fade-in";

/** Side-by-side program comparison used on the Programs page; flagship gets featured styling. */
export function ProgramsComparison() {
  return (
    <div className="grid gap-8 lg:grid-cols-3 lg:items-start">
      {COURSES.map((course, index) => (
        <FadeIn key={course.id} delay={index * 0.1}>
          <div
            className={cn(
              "relative flex h-full flex-col gap-6 rounded-md border p-8",
              course.featured
                ? "border-gold bg-gradient-to-b from-surface-elevated to-surface shadow-[0_0_40px_-12px_rgba(201,162,75,0.5)] lg:-translate-y-4"
                : "border-border bg-card",
            )}
          >
            {course.featured && (
              <span className="absolute -top-3 left-8 flex items-center gap-1 rounded-full bg-gold px-3 py-1 text-xs font-semibold text-primary-foreground">
                <Star className="size-3 fill-current" /> Most Recommended
              </span>
            )}

            <div>
              <h3 className="font-display text-2xl text-foreground">{course.name}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{course.duration}</p>
            </div>

            <dl className="flex flex-col gap-3 border-t border-border pt-6 text-sm">
              <div className="flex justify-between gap-4">
                <dt className="text-muted">Schedule</dt>
                <dd className="text-right text-foreground">{course.schedule}</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-muted">Format</dt>
                <dd className="text-right text-foreground">{course.format}</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-muted">Fee</dt>
                <dd className="text-right text-gold">On enquiry</dd>
              </div>
            </dl>

            <div className="flex flex-col gap-3 border-t border-border pt-6">
              <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                Outcomes
              </p>
              <ul className="flex flex-col gap-2">
                {course.outcomes.map((outcome) => (
                  <li key={outcome} className="flex gap-2 text-sm text-muted">
                    <Check className="mt-0.5 size-4 shrink-0 text-gold" />
                    {outcome}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col gap-3 border-t border-border pt-6">
              <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                Curriculum Highlights
              </p>
              <ul className="flex flex-col gap-2">
                {course.curriculumHighlights.map((item) => (
                  <li key={item} className="text-sm text-muted">
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {course.featured && <Badge className="w-fit">Flagship Diploma</Badge>}

            <Button asChild variant={course.featured ? "default" : "outline"} className="mt-auto">
              <Link href="/academy#enquiry">Enquire — Fee on Request</Link>
            </Button>
          </div>
        </FadeIn>
      ))}
    </div>
  );
}
