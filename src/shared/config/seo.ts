// Central, typed SEO configuration — single source of truth for metadata,
// JSON-LD, sitemap, robots and the web manifest.
import type { Metadata } from "next";

export type SiteConfig = {
    siteName: string;
    author: string;
    nickname: string;
    jobTitle: string;
    organization: string;
    defaultTitle: string;
    titleTemplate: string;
    description: string;
    url: string;
    locale: string;
    ogLocale: string;
    themeColor: string;
    keywords: string[];
    socials: {
        linkedin: string;
        github: string;
        company: string;
        email: string;
    };
};

/** Canonical origin. Derives from Vercel at build time; override with NEXT_PUBLIC_SITE_URL. */
function resolveUrl(): string {
    const explicit = process.env.NEXT_PUBLIC_SITE_URL;
    if (explicit) return explicit.replace(/\/$/, "");
    const vercel = process.env.VERCEL_PROJECT_PRODUCTION_URL;
    if (vercel) return `https://${vercel.replace(/\/$/, "")}`;
    return "http://localhost:3000";
}

export const siteConfig: SiteConfig = {
    siteName: "Carlos Eduardo · Cadu",
    author: "Carlos Eduardo Gonçalves dos Santos",
    nickname: "Cadu",
    jobTitle: "Diretor de Produto e Tecnologia (CPO/CTO)",
    organization: "+55 HUB & Corporate Group",
    defaultTitle:
        "Carlos Eduardo · Diretor de Produto e Tecnologia (CPO/CTO)",
    titleTemplate: "%s · Carlos Eduardo (Cadu)",
    description:
        "Product and Technology Director (CPO/CTO) at +55 HUB & Corporate Group. " +
        "A product leader with engineering roots. I own product strategy, architecture, " +
        "scalability and RevOps, and I still ship the code.",
    url: resolveUrl(),
    locale: "en",
    ogLocale: "en_US",
    themeColor: "#f3f1ea",
    keywords: [
        "Carlos Eduardo Gonçalves dos Santos",
        "Cadu",
        "CPO",
        "CTO",
        "Diretor de Produto e Tecnologia",
        "Product Director",
        "Product Strategy",
        "Product-Market Fit",
        "RevOps",
        "Software Architecture",
        "Scalability",
        "Agile",
        "Scrum",
        ".NET",
        "TypeScript",
        "Next.js",
        "Vue.js",
        "Angular",
        "Cloudflare Workers",
        "Power BI",
        "Bitrix",
        "Brasília",
        "Brazil",
    ],
    socials: {
        linkedin: "https://www.linkedin.com/in/carlossaints",
        github: "https://github.com/cesaints",
        company: "https://55hubcorp.com",
        email: "cesaints.engineer@gmail.com",
    },
};

/** Build an absolute URL from a site-relative path. */
export function absoluteUrl(path = ""): string {
    return `${siteConfig.url}${path.startsWith("/") ? path : `/${path}`}`;
}

/** Per-route metadata helper — keeps every page DRY and consistent. */
export function buildMetadata(opts: {
    title?: string;
    description?: string;
    path?: string;
    absoluteTitle?: boolean;
}): Metadata {
    const { title, description, path = "/", absoluteTitle = false } = opts;
    const desc = description ?? siteConfig.description;
    return {
        title: title
            ? absoluteTitle
                ? { absolute: title }
                : title
            : undefined,
        description: desc,
        alternates: { canonical: path },
        openGraph: {
            url: path,
            title: title
                ? absoluteTitle
                    ? title
                    : `${title} · Carlos Eduardo (Cadu)`
                : siteConfig.defaultTitle,
            description: desc,
        },
    };
}
