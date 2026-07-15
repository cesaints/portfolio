import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/shared/config/seo";

export default function sitemap(): MetadataRoute.Sitemap {
    const now = new Date();
    const routes: Array<{
        path: string;
        priority: number;
        changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
    }> = [
        { path: "/", priority: 1.0, changeFrequency: "monthly" },
        { path: "/projects", priority: 0.9, changeFrequency: "monthly" },
        { path: "/timeline", priority: 0.7, changeFrequency: "yearly" },
        { path: "/contact", priority: 0.6, changeFrequency: "yearly" },
    ];

    return routes.map((r) => ({
        url: absoluteUrl(r.path),
        lastModified: now,
        changeFrequency: r.changeFrequency,
        priority: r.priority,
    }));
}
