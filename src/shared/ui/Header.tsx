"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { cn } from "@shared/lib/cn";

const links = [
    { href: "/", label: "Home" },
    { href: "/projects", label: "Projects" },
    { href: "/timeline", label: "Timeline" },
    { href: "/contact", label: "Contact" },
    // { href: "/shop", label: "Shop" },
];

export default function Header() {
    const pathname = usePathname();
    const [open, setOpen] = useState(false);

    // Fecha o menu ao trocar de rota
    useEffect(() => setOpen(false), [pathname]);

    return (
        <header className="sticky top-0 z-40 border-b border-neutral-900 bg-neutral-950/70 backdrop-blur">
            {/* área segura em iOS */}
            <div className="h-[env(safe-area-inset-top)]" aria-hidden />

            <nav className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
                <Link
                    href="/"
                    className="font-bold tracking-tight truncate"
                    aria-label="carlos.engineer home"
                >
                    carlos.engineer
                </Link>

                {/* Desktop */}
                <div className="hidden md:flex items-center gap-6 text-sm">
                    {links.map((l) => (
                        <Link
                            key={l.href}
                            href={l.href}
                            className={cn(
                                "hover:text-violet-400",
                                pathname === l.href && "text-violet-400 font-medium"
                            )}
                        >
                            {l.label}
                        </Link>
                    ))}
                </div>

                {/* Mobile: botão */}
                <button
                    type="button"
                    aria-label="Abrir menu"
                    aria-expanded={open}
                    onClick={() => setOpen((v) => !v)}
                    className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-lg border border-neutral-800 hover:bg-neutral-900"
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

            {/* Mobile: painel colapsável */}
            <div
                className={cn(
                    "md:hidden absolute inset-x-0 top-14 border-b border-neutral-900 bg-neutral-950/95 backdrop-blur",
                    open ? "block" : "hidden"
                )}
            >
                <div className="max-w-6xl mx-auto px-6 py-3 grid gap-2 text-sm">
                    {links.map((l) => (
                        <Link
                            key={l.href}
                            href={l.href}
                            className={cn(
                                "block rounded-lg px-2 py-2 hover:bg-neutral-900",
                                pathname === l.href && "text-violet-400 font-medium"
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
