// src/app/layout.tsx
import "@/app/globals.css";
import type { Metadata } from "next";
import Header from "@shared/ui/Header";
import Galaxy from "@shared/ui/fx/Galaxy";

export const metadata: Metadata = {
    title: "Portfólio — Carlos Eduardo",
    icons: { icon: [{ url: "/icon.svg?v=2", type: "image/svg+xml" }] },
    description: "Full-Stack Developer • Data Engineer • AI Automation",
    themeColor: "#0b0f1a",
    manifest: "/site.webmanifest",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="pt-BR">
            <body className="min-h-dvh bg-[var(--bg)] text-[var(--ink)] antialiased">
                <Galaxy />
                <div className="relative z-10 flex min-h-dvh flex-col">
                    <Header />
                    <main className="flex-1">{children}</main>
                    <footer className="border-t border-neutral-900 py-10 text-center text-neutral-500">
                        © {new Date().getFullYear()} Carlos Eduardo
                    </footer>
                </div>
            </body>
        </html>
    );
}
