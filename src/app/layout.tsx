import "@/app/globals.css";
import type { Metadata, Viewport } from "next";
import Header from "@shared/ui/Header";
import Galaxy from "@shared/ui/fx/Galaxy";
import { siteConfig } from "@/shared/config/seo";
import { PersonJsonLd, WebSiteJsonLd } from "@/shared/seo/JsonLd";
import { fontVariables } from "./fonts";

export const metadata: Metadata = {
    metadataBase: new URL(siteConfig.url),
    title: {
        default: siteConfig.defaultTitle,
        template: siteConfig.titleTemplate,
    },
    description: siteConfig.description,
    applicationName: siteConfig.siteName,
    authors: [{ name: siteConfig.author, url: siteConfig.url }],
    creator: siteConfig.author,
    keywords: siteConfig.keywords,
    alternates: { canonical: "/" },
    icons: {
        icon: [{ url: "/icon.svg?v=3", type: "image/svg+xml" }],
    },
    manifest: "/manifest.webmanifest",
    openGraph: {
        type: "website",
        locale: siteConfig.ogLocale,
        url: siteConfig.url,
        siteName: siteConfig.siteName,
        title: siteConfig.defaultTitle,
        description: siteConfig.description,
    },
    twitter: {
        card: "summary_large_image",
        title: siteConfig.defaultTitle,
        description: siteConfig.description,
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1,
            "max-video-preview": -1,
        },
    },
};

export const viewport: Viewport = {
    themeColor: siteConfig.themeColor,
    colorScheme: "dark",
    width: "device-width",
    initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" className={fontVariables}>
            <body className="min-h-dvh bg-bg text-ink antialiased">
                <PersonJsonLd />
                <WebSiteJsonLd />
                <Galaxy />
                <div className="relative z-10 flex min-h-dvh flex-col">
                    <Header />
                    <main className="flex-1">{children}</main>
                    <footer className="border-t border-line bg-bg-2">
                        <div className="container-std flex flex-col items-center justify-between gap-4 py-8 text-sm text-muted sm:flex-row">
                            <p>
                                © {new Date().getFullYear()} {siteConfig.author}
                            </p>
                            <div className="flex items-center gap-4">
                                <a
                                    href={siteConfig.socials.linkedin}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="hover:text-ink"
                                >
                                    LinkedIn
                                </a>
                                <a
                                    href={siteConfig.socials.github}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="hover:text-ink"
                                >
                                    GitHub
                                </a>
                                <a
                                    href={`mailto:${siteConfig.socials.email}`}
                                    className="hover:text-ink"
                                >
                                    Email
                                </a>
                            </div>
                        </div>
                    </footer>
                </div>
            </body>
        </html>
    );
}
