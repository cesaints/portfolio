"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { cn } from "@shared/lib/cn";
import { navLinks } from "@/shared/config/nav";
import { useI18n } from "@/shared/i18n/I18nProvider";
import LanguageToggle from "@shared/ui/LanguageToggle";

export default function Header() {
    const pathname = usePathname();
    const { t } = useI18n();
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => setOpen(false), [pathname]);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 8);
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <header
            className={cn(
                "sticky top-0 z-40 border-b bg-bg/85 backdrop-blur-md transition-colors duration-200",
                scrolled ? "border-line-strong" : "border-line"
            )}
        >
            <nav
                aria-label="Primary"
                className="container-std flex h-16 items-center justify-between"
            >
                <Link href="/" className="inline-flex items-center gap-2.5" aria-label="Cadu, home">
                    <span aria-hidden className="h-3.5 w-3.5 bg-accent" />
                    <span className="font-display text-lg font-extrabold tracking-tight text-ink">
                        Cadu
                    </span>
                    <span className="hidden font-mono text-xs text-muted sm:inline">
                        CPO/CTO
                    </span>
                </Link>

                {/* Desktop */}
                <div className="hidden items-center gap-8 md:flex">
                    {navLinks.map((l) => {
                        const active = pathname === l.href;
                        return (
                            <Link
                                key={l.href}
                                href={l.href}
                                className={cn(
                                    "relative py-1 text-sm transition-colors",
                                    active ? "text-ink" : "text-muted hover:text-ink"
                                )}
                            >
                                {t.nav[l.key]}
                                {active && (
                                    <span className="absolute -bottom-0.5 left-0 h-0.5 w-full bg-accent" />
                                )}
                            </Link>
                        );
                    })}
                    <LanguageToggle />
                </div>

                {/* Mobile controls */}
                <div className="flex items-center gap-2 md:hidden">
                    <LanguageToggle />
                    <button
                        type="button"
                        aria-label={open ? "Close menu" : "Open menu"}
                        aria-expanded={open}
                        onClick={() => setOpen((v) => !v)}
                        className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-line text-ink hover:bg-surface-2"
                    >
                        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                            {open ? (
                                <path d="M18.3 5.7L12 12l6.3 6.3-1.4 1.4L10.6 13.4 4.3 19.7 2.9 18.3 9.2 12 2.9 5.7 4.3 4.3 10.6 10.6 16.9 4.3z" />
                            ) : (
                                <path d="M3 6h18v2H3V6zm0 5h18v2H3v-2zm0 5h18v2H3v-2z" />
                            )}
                        </svg>
                    </button>
                </div>
            </nav>

            {/* Mobile panel */}
            <div
                className={cn(
                    "absolute inset-x-0 top-16 border-b border-line bg-bg md:hidden",
                    open ? "block" : "hidden"
                )}
            >
                <div className="container-std grid gap-1 py-3">
                    {navLinks.map((l) => (
                        <Link
                            key={l.href}
                            href={l.href}
                            className={cn(
                                "block rounded-md px-3 py-2.5 text-sm transition-colors",
                                pathname === l.href
                                    ? "bg-surface-2 text-ink"
                                    : "text-muted hover:bg-surface-2 hover:text-ink"
                            )}
                        >
                            {t.nav[l.key]}
                        </Link>
                    ))}
                </div>
            </div>
        </header>
    );
}
