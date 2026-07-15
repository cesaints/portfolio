"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { cn } from "@shared/lib/cn";
import { navLinks } from "@/shared/config/nav";

export default function Header() {
    const pathname = usePathname();
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
                "sticky top-0 z-40 border-b backdrop-blur-xl transition-colors duration-300",
                scrolled
                    ? "border-line-strong bg-bg/85"
                    : "border-line bg-bg/60"
            )}
        >
            <div className="h-[env(safe-area-inset-top)]" aria-hidden />
            <nav
                aria-label="Primary"
                className="container-std flex h-16 items-center justify-between"
            >
                <Link
                    href="/"
                    className="group inline-flex items-center gap-2.5"
                    aria-label="Cadu — home"
                >
                    <span
                        aria-hidden
                        className="h-6 w-6 rotate-45 rounded-[6px] [background:var(--grad-brand)] shadow-glow"
                    />
                    <span className="font-display text-lg font-bold tracking-tight text-ink">
                        Cadu
                        <span className="hidden font-sans text-sm font-normal text-muted sm:inline">
                            {" "}
                            · CPO/CTO
                        </span>
                    </span>
                </Link>

                {/* Desktop */}
                <div className="hidden items-center gap-7 text-sm md:flex">
                    {navLinks.map((l) => {
                        const active = pathname === l.href;
                        return (
                            <Link
                                key={l.href}
                                href={l.href}
                                className={cn(
                                    "relative py-1 transition-colors",
                                    active ? "text-ink" : "text-muted hover:text-ink"
                                )}
                            >
                                {l.label}
                                {active && (
                                    <span className="absolute -bottom-0.5 left-0 h-0.5 w-full rounded-full [background:var(--grad-brand)]" />
                                )}
                            </Link>
                        );
                    })}
                </div>

                {/* Mobile toggle */}
                <button
                    type="button"
                    aria-label={open ? "Close menu" : "Open menu"}
                    aria-expanded={open}
                    onClick={() => setOpen((v) => !v)}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-line hover:bg-surface-1 md:hidden"
                >
                    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                        {open ? (
                            <path d="M18.3 5.7L12 12l6.3 6.3-1.4 1.4L10.6 13.4 4.3 19.7 2.9 18.3 9.2 12 2.9 5.7 4.3 4.3 10.6 10.6 16.9 4.3z" />
                        ) : (
                            <path d="M3 6h18v2H3V6zm0 5h18v2H3v-2zm0 5h18v2H3v-2z" />
                        )}
                    </svg>
                </button>
            </nav>

            {/* Mobile panel */}
            <div
                className={cn(
                    "absolute inset-x-0 top-16 border-b border-line bg-surface-1/95 backdrop-blur-xl md:hidden",
                    open ? "block" : "hidden"
                )}
            >
                <div className="container-std grid gap-1 py-3 text-sm">
                    {navLinks.map((l) => (
                        <Link
                            key={l.href}
                            href={l.href}
                            className={cn(
                                "block rounded-lg px-3 py-2.5 transition-colors",
                                pathname === l.href
                                    ? "bg-surface-2 text-ink"
                                    : "text-muted hover:bg-surface-2 hover:text-ink"
                            )}
                        >
                            {l.label}
                        </Link>
                    ))}
                </div>
            </div>
        </header>
    );
}
