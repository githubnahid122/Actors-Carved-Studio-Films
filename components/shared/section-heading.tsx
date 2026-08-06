import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn("flex flex-col gap-4", align === "center" && "items-center text-center", className)}>
      {eyebrow && (
        <span className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">{eyebrow}</span>
      )}
      <h2 className="text-balance font-display text-3xl leading-tight text-foreground md:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description && (
        <p className={cn("max-w-2xl text-base text-muted md:text-lg", align === "center" && "mx-auto")}>
          {description}
        </p>
      )}
    </div>
  );
}
