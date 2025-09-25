import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://moderato.dev";
  const routes = [
    "",
    "#how-it-works",
    "#use-cases",
    "#pricing",
    "#faq",
  ];
  const now = new Date();
  return routes.map((path) => ({
    url: `${baseUrl}/${path}`.replace(/\/#/, "/"),
    lastModified: now,
    changeFrequency: "weekly",
    priority: path === "" ? 1 : 0.6,
  }));
}
