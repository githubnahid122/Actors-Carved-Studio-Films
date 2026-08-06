"use client";

import * as React from "react";
import Image from "next/image";
import { Play } from "lucide-react";

import { cn } from "@/lib/utils";
import type { VideoProvider } from "@/types/portfolio";

interface VideoEmbedProps {
  provider: VideoProvider;
  videoId: string;
  title: string;
  thumbnailUrl?: string;
  className?: string;
  /** 16:9 by default; set false for 9:16 vertical placements. */
  aspectVideo?: boolean;
}

function embedSrc(provider: VideoProvider, videoId: string): string {
  if (provider === "vimeo") {
    return `https://player.vimeo.com/video/${videoId}?autoplay=1`;
  }
  return `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`;
}

/**
 * Facade-pattern video embed: renders a static thumbnail + play button until clicked,
 * so no third-party iframe/script loads (and no layout shift occurs) on initial paint.
 */
export function VideoEmbed({
  provider,
  videoId,
  title,
  thumbnailUrl,
  className,
  aspectVideo = true,
}: VideoEmbedProps) {
  const [activated, setActivated] = React.useState(false);
  const fallbackThumb =
    provider === "youtube" ? `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg` : undefined;
  const poster = thumbnailUrl ?? fallbackThumb;

  return (
    <div
      className={cn(
        "relative w-full overflow-hidden rounded-md bg-surface",
        aspectVideo ? "aspect-video" : "aspect-9/16",
        className,
      )}
    >
      {activated ? (
        <iframe
          src={embedSrc(provider, videoId)}
          title={title}
          className="absolute inset-0 size-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          loading="lazy"
        />
      ) : (
        <button
          type="button"
          onClick={() => setActivated(true)}
          aria-label={`Play video: ${title}`}
          className="group absolute inset-0 size-full cursor-pointer"
        >
          {poster && (
            <Image
              src={poster}
              alt={title}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          )}
          <span className="absolute inset-0 bg-black/35 transition-colors group-hover:bg-black/20" />
          <span className="absolute inset-0 flex items-center justify-center">
            <span className="flex size-16 items-center justify-center rounded-full border border-gold/60 bg-black/50 backdrop-blur-sm transition-transform group-hover:scale-110">
              <Play className="size-6 fill-gold text-gold" />
            </span>
          </span>
        </button>
      )}
    </div>
  );
}
