export interface CastingService {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export const CASTING_SERVICES: CastingService[] = [
  {
    id: "tvc",
    icon: "🎯",
    title: "TVCs (Commercials) Casting",
    description:
      "Sourcing premium talent for national television commercials, matching the exact brand identity and visual aesthetic required.",
  },
  {
    id: "digital-ad-films",
    icon: "📱",
    title: "Digital Ad Films Casting",
    description:
      "Sourcing actors for fast-paced digital and social media ads, focusing on expressive faces that hook scrolling audiences instantly.",
  },
  {
    id: "ecommerce",
    icon: "🛒",
    title: "Ecommerce Videos Talent",
    description:
      "Providing models and actors specialized in lookbooks, product explainers, and marketplace visual content.",
  },
  {
    id: "corporate",
    icon: "🏢",
    title: "Corporate Videos Casting",
    description:
      "Supplying sophisticated, corporate-looking talent and narrators for brand documentaries, internal films, and milestone videos.",
  },
  {
    id: "print",
    icon: "📸",
    title: "Print Ad Campaigns",
    description:
      "Executing elite casting for high-resolution fashion shoots, billboards, editorial magazines, and digital visual assets.",
  },
  {
    id: "ugc",
    icon: "🤳",
    title: "UGC Content Creators",
    description:
      "Connecting modern digital brands with authentic everyday actors to produce highly believable user-generated video reviews and reels.",
  },
  {
    id: "movies-web-series",
    icon: "🎥",
    title: "Movies & Web Series Casting",
    description:
      "Managing full-scale casting pipelines, ensemble curation, and primary characters for feature films and OTT platforms.",
  },
  {
    id: "tv-serials",
    icon: "📺",
    title: "TV Serials Casting",
    description:
      "Delivering rapid, highly disciplined casting support for daily soaps and prime-time television network dramas.",
  },
  {
    id: "music-videos",
    icon: "🎵",
    title: "Music Videos Talent",
    description:
      "Sourcing narrative-driven, expressive lead faces and dancers to match the rhythm and theme of music directors.",
  },
  {
    id: "short-films-vertical",
    icon: "👑",
    title: "Short Films & Vertical Series Casting",
    description:
      "Pioneering specialized casting for short films and modern 9:16 vertical smartphone mini-series formats.",
  },
];
