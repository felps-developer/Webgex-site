import type { MetadataRoute } from "next"
import { posts } from "@/lib/blog-data"
import { campaigns } from "@/lib/campaigns"

const SITE_URL = "https://www.webgex.com.br"

const staticRoutes = [
  "/",
  "/produto",
  "/planos",
  "/blog",
  "/sobre",
  "/contato",
  "/escopo",
  "/maturidade",
  ...campaigns.map((c) => `/campanha/${c.slug}`),
]

export const dynamic = "force-static"

export default function sitemap(): MetadataRoute.Sitemap {
  const blogEntries = posts.map((p) => ({
    url: `${SITE_URL}/blog/${p.slug}`,
    lastModified: new Date(p.date),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }))

  return [
    ...staticRoutes.map((route) => ({
      url: `${SITE_URL}${route}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: route === "/" ? 1.0 : 0.8,
    })),
    ...blogEntries,
  ]
}
