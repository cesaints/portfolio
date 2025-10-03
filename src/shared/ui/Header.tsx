"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
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
    return (
        <header className="sticky top-0 z-40 backdrop-blur bg-neutral-950/70 border-b border-neutral-900">
            <nav className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
                <Link href="/" className="font-bold tracking-tight">carlos.engineer</Link>
                <div className="flex items-center gap-6 text-sm">
                    {links.map(l => (
                        <Link key={l.href} href={l.href}
                            className={cn("hover:text-violet-400",
                                pathname === l.href && "text-violet-400 font-medium")}>
                            {l.label}
                        </Link>
                    ))}
                </div>
            </nav>
        </header>
    );
}
