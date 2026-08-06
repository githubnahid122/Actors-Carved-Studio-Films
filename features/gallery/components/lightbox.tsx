"use client";

import * as React from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

import type { GalleryItem } from "@/types/gallery";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { VisuallyHidden } from "@/components/shared/visually-hidden";

interface LightboxProps {
  items: GalleryItem[];
  activeIndex: number | null;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export function Lightbox({ items, activeIndex, onClose, onNavigate }: LightboxProps) {
  const item = activeIndex !== null ? items[activeIndex] : null;

  const goPrev = React.useCallback(() => {
    if (activeIndex === null) return;
    onNavigate((activeIndex - 1 + items.length) % items.length);
  }, [activeIndex, items.length, onNavigate]);

  const goNext = React.useCallback(() => {
    if (activeIndex === null) return;
    onNavigate((activeIndex + 1) % items.length);
  }, [activeIndex, items.length, onNavigate]);

  React.useEffect(() => {
    if (activeIndex === null) return;
    function handleKey(event: KeyboardEvent) {
      if (event.key === "ArrowLeft") goPrev();
      if (event.key === "ArrowRight") goNext();
    }
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [activeIndex, goPrev, goNext]);

  return (
    <Dialog open={item !== null} onOpenChange={(open) => !open && onClose()}>
      <DialogContent
        showCloseButton={false}
        className="max-w-5xl border-none bg-transparent p-0 shadow-none"
      >
        <VisuallyHidden>
          <DialogTitle>{item?.title ?? "Gallery image"}</DialogTitle>
        </VisuallyHidden>
        {item && (
          <div className="relative flex flex-col gap-4">
            <div className="relative aspect-video w-full overflow-hidden rounded-md bg-black">
              <Image
                src={item.src}
                alt={item.title}
                fill
                sizes="(max-width: 1024px) 100vw, 1024px"
                className="object-contain"
                priority
              />
            </div>
            <p className="text-center text-sm text-muted">{item.title}</p>

            <button
              type="button"
              onClick={onClose}
              aria-label="Close gallery"
              className="absolute -top-4 right-0 flex size-10 items-center justify-center rounded-full border border-gold/40 bg-black/70 text-foreground transition-colors hover:text-gold"
            >
              <X className="size-5" />
            </button>
            <button
              type="button"
              onClick={goPrev}
              aria-label="Previous image"
              className="absolute left-2 top-1/2 flex size-11 -translate-y-1/2 items-center justify-center rounded-full border border-gold/40 bg-black/70 text-foreground transition-colors hover:text-gold"
            >
              <ChevronLeft className="size-5" />
            </button>
            <button
              type="button"
              onClick={goNext}
              aria-label="Next image"
              className="absolute right-2 top-1/2 flex size-11 -translate-y-1/2 items-center justify-center rounded-full border border-gold/40 bg-black/70 text-foreground transition-colors hover:text-gold"
            >
              <ChevronRight className="size-5" />
            </button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
