"use client";

import * as React from "react";
import Image from "next/image";
import { Expand } from "lucide-react";

import { GALLERY_ITEMS } from "@/content/gallery";
import { FadeIn } from "@/components/shared/fade-in";
import { Lightbox } from "@/features/gallery/components/lightbox";

export function GalleryGrid() {
  const [activeIndex, setActiveIndex] = React.useState<number | null>(null);

  return (
    <>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
        {GALLERY_ITEMS.map((item, index) => (
          <FadeIn key={item.id} delay={Math.min(index, 8) * 0.04}>
            <button
              type="button"
              onClick={() => setActiveIndex(index)}
              aria-label={`Open image: ${item.title}`}
              className="group relative block aspect-square w-full overflow-hidden rounded-md"
            >
              <Image
                src={item.thumbnailUrl}
                alt={item.title}
                fill
                loading="lazy"
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <span className="absolute inset-0 flex items-center justify-center bg-black/0 opacity-0 transition-all group-hover:bg-black/40 group-hover:opacity-100">
                <Expand className="size-6 text-gold" />
              </span>
            </button>
          </FadeIn>
        ))}
      </div>

      <Lightbox
        items={GALLERY_ITEMS}
        activeIndex={activeIndex}
        onClose={() => setActiveIndex(null)}
        onNavigate={setActiveIndex}
      />
    </>
  );
}
