"use client";

import Image from "next/image";
import { Play } from "lucide-react";

import type { PortfolioItem } from "@/types/portfolio";
import { Badge } from "@/components/ui/badge";

interface PortfolioCardProps {
  item: PortfolioItem;
  onOpen: (item: PortfolioItem) => void;
}

export function PortfolioCard({ item, onOpen }: PortfolioCardProps) {
  return (
    <button
      type="button"
      onClick={() => onOpen(item)}
      className="group relative block w-full overflow-hidden rounded-md text-left"
      aria-label={`Play ${item.title}`}
    >
      <div className={item.vertical ? "relative aspect-9/16" : "relative aspect-video"}>
        <Image
          src={item.thumbnailUrl}
          alt={item.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <span className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />
        <span className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity group-hover:opacity-100">
          <span className="flex size-14 items-center justify-center rounded-full border border-gold/60 bg-black/50">
            <Play className="size-5 fill-gold text-gold" />
          </span>
        </span>
        <div className="absolute inset-x-0 bottom-0 flex flex-col gap-1.5 p-4">
          <Badge>{item.category}</Badge>
          <h3 className="font-display text-lg text-foreground">{item.title}</h3>
          <p className="text-xs text-muted-foreground">
            {item.client} &middot; {item.year}
          </p>
        </div>
      </div>
    </button>
  );
}
