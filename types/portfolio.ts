import type { PortfolioCategory } from "@/lib/constants";

export type VideoProvider = "youtube" | "vimeo";

export interface PortfolioItem {
  id: string;
  title: string;
  client: string;
  category: PortfolioCategory;
  year: number;
  description: string;
  thumbnailUrl: string;
  videoProvider: VideoProvider;
  videoId: string;
  vertical?: boolean;
}
