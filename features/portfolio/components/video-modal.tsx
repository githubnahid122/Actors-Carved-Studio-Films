"use client";

import type { PortfolioItem } from "@/types/portfolio";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { VideoEmbed } from "@/components/shared/video-embed";

interface VideoModalProps {
  item: PortfolioItem | null;
  onClose: () => void;
}

export function VideoModal({ item, onClose }: VideoModalProps) {
  return (
    <Dialog open={!!item} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-3xl">
        {item && (
          <>
            <DialogHeader>
              <DialogTitle>{item.title}</DialogTitle>
              <DialogDescription>
                {item.client} &middot; {item.category} &middot; {item.year}
              </DialogDescription>
            </DialogHeader>
            <VideoEmbed
              provider={item.videoProvider}
              videoId={item.videoId}
              title={item.title}
              thumbnailUrl={item.thumbnailUrl}
              aspectVideo={!item.vertical}
            />
            <p className="mt-4 text-sm text-muted">{item.description}</p>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
