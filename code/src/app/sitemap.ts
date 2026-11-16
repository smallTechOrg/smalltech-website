import type { MetadataRoute } from "next";

export const dynamic = "force-static";

// smalltech.in is a single page: the legacy /domains, /offerings, /portfolio and /landing routes
// canonicalise to "/", so only the root is listed. lastmod is the build (= deploy) time.
// The products live on their own subdomains, each with its own sitemap.
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://smalltech.in/",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}
