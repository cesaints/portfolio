import type { MetadataRoute } from "next";
import { siteConfig } from "@/shared/config/seo";

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: `${siteConfig.author} · Product and Technology Director`,
        short_name: siteConfig.nickname,
        description: siteConfig.description,
        start_url: "/",
        scope: "/",
        display: "standalone",
        theme_color: siteConfig.themeColor,
        background_color: siteConfig.themeColor,
        lang: siteConfig.locale,
        icons: [
            { src: "/icon.svg", type: "image/svg+xml", sizes: "any", purpose: "any" },
        ],
    };
}
