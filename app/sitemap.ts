import type { MetadataRoute } from "next";

import { SITE } from "@/lib/constants";

const ROUTES = [
  { path: "/", priority: 1, changeFrequency: "weekly" as const },
  { path: "/portfolio", priority: 0.9, changeFrequency: "weekly" as const },
  { path: "/casting-desk", priority: 0.9, changeFrequency: "monthly" as const },
  { path: "/academy", priority: 0.9, changeFrequency: "monthly" as const },
  { path: "/academy/programs", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/gallery", priority: 0.7, changeFrequency: "weekly" as const },
  { path: "/contact", priority: 0.6, changeFrequency: "yearly" as const },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return ROUTES.map((route) => ({
    url: `${SITE.url}${route.path}`,
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
