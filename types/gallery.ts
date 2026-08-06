export type GalleryMediaType = "photo" | "video";

export interface GalleryItem {
  id: string;
  type: GalleryMediaType;
  title: string;
  src: string;
  thumbnailUrl: string;
  width: number;
  height: number;
}
