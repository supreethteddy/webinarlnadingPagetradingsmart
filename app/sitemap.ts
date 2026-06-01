import type { MetadataRoute } from "next";
import { SITE_URL, ROUTES } from "@/lib/site-config";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: SITE_URL,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${SITE_URL}${ROUTES.partnership}`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
  ];
}
