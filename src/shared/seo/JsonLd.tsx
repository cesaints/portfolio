import { siteConfig, absoluteUrl } from "@/shared/config/seo";

/** Person structured data — surfaces the CPO/CTO role in rich results. */
export function PersonJsonLd() {
    const data = {
        "@context": "https://schema.org",
        "@type": "Person",
        name: siteConfig.author,
        alternateName: "Cadu",
        url: siteConfig.url,
        image: absoluteUrl("/avatar.jpg"),
        jobTitle: siteConfig.jobTitle,
        description: siteConfig.description,
        worksFor: {
            "@type": "Organization",
            name: siteConfig.organization,
            url: siteConfig.socials.company,
        },
        address: {
            "@type": "PostalAddress",
            addressLocality: "Brasília",
            addressRegion: "DF",
            addressCountry: "BR",
        },
        sameAs: [siteConfig.socials.linkedin, siteConfig.socials.github],
        knowsAbout: [
            "Product Strategy",
            "Product Discovery",
            "Product Roadmap",
            "Product-Market Fit",
            "RevOps",
            "Software Architecture",
            "Scalability",
            "Security & Compliance (LGPD)",
            "Agile Delivery (Scrum, Kanban)",
            "Systems Integration",
            ".NET / C#",
            "TypeScript",
            "Vue.js",
            "Angular",
            "React / Next.js",
            "Cloudflare Workers",
            "SQL",
            "Power BI",
            "Bitrix",
        ],
        knowsLanguage: ["pt-BR", "en"],
        alumniOf: [
            { "@type": "CollegeOrUniversity", name: "UDF Centro Universitário" },
            { "@type": "EducationalOrganization", name: "GRAN" },
        ],
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
        />
    );
}

/** WebSite structured data. */
export function WebSiteJsonLd() {
    const data = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: siteConfig.siteName,
        url: siteConfig.url,
        inLanguage: "en",
        author: { "@type": "Person", name: siteConfig.author },
    };
    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
        />
    );
}
