"use client";

import * as React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { cn } from "@/lib/utils";

interface CarouselProps {
  children: React.ReactNode[];
  className?: string;
  slideClassName?: string;
  autoplayDelayMs?: number;
  ariaLabel: string;
}

/** Thin Embla wrapper with keyboard-accessible prev/next controls and dot pagination. */
export function Carousel({
  children,
  className,
  slideClassName,
  autoplayDelayMs = 6000,
  ariaLabel,
}: CarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" }, [
    Autoplay({ delay: autoplayDelayMs, stopOnInteraction: true }),
  ]);
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const [scrollSnaps, setScrollSnaps] = React.useState<number[]>([]);

  React.useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    const onInit = () => {
      setScrollSnaps(emblaApi.scrollSnapList());
      onSelect();
    };
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onInit);
    onInit();
    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onInit);
    };
  }, [emblaApi]);

  return (
    <div className={cn("relative", className)} role="region" aria-label={ariaLabel}>
      <div ref={emblaRef} className="overflow-hidden">
        <div className="flex touch-pan-y">
          {children.map((child, index) => (
            <div
              key={index}
              className={cn("min-w-0 shrink-0 grow-0 basis-full pr-4 md:basis-1/2 lg:basis-1/3", slideClassName)}
              role="group"
              aria-roledescription="slide"
              aria-label={`Slide ${index + 1} of ${children.length}`}
            >
              {child}
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6 flex items-center justify-between">
        <div className="flex gap-2">
          {scrollSnaps.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => emblaApi?.scrollTo(index)}
              aria-label={`Go to slide ${index + 1}`}
              aria-current={index === selectedIndex}
              className={cn(
                "size-2 rounded-full bg-border transition-colors",
                index === selectedIndex && "bg-gold",
              )}
            />
          ))}
        </div>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => emblaApi?.scrollPrev()}
            aria-label="Previous slide"
            className="flex size-10 items-center justify-center rounded-full border border-border text-muted transition-colors hover:border-gold hover:text-gold"
          >
            <ChevronLeft className="size-4" />
          </button>
          <button
            type="button"
            onClick={() => emblaApi?.scrollNext()}
            aria-label="Next slide"
            className="flex size-10 items-center justify-center rounded-full border border-border text-muted transition-colors hover:border-gold hover:text-gold"
          >
            <ChevronRight className="size-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
