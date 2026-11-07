import type { MetadataRoute } from "next";
import { publishedEpisodes } from "@/lib/content/episodes";
import { SITE } from "@/lib/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/transmission",
    "/about",
    "/contact",
  ].map((p) => ({ url: `${SITE.url}${p}`, changeFrequency: "weekly" as const }));

  const episodeRoutes = publishedEpisodes.map((e) => ({
    url: `${SITE.url}/transmission/${e.slug}`,
    changeFrequency: "monthly" as const,
  }));

  return [...staticRoutes, ...episodeRoutes];
}
