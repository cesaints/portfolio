"use client";
import { useRef } from "react";
import { cn } from "@shared/lib/cn";

/**
 * Wraps content and paints a soft radial glow that follows the cursor.
 * Purely decorative; disabled implicitly on touch (no pointer move).
 */
export default function Spotlight({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) {
    const ref = useRef<HTMLDivElement>(null);

    const onMove = (e: React.PointerEvent<HTMLDivElement>) => {
        const el = ref.current;
        if (!el) return;
        const r = el.getBoundingClientRect();
        el.style.setProperty("--mx", `${e.clientX - r.left}px`);
        el.style.setProperty("--my", `${e.clientY - r.top}px`);
    };

    return (
        <div
            ref={ref}
            onPointerMove={onMove}
            className={cn("group/spot relative h-full", className)}
        >
            <span
                aria-hidden
                className="pointer-events-none absolute inset-0 z-10 rounded-2xl opacity-0 transition-opacity duration-300 group-hover/spot:opacity-100"
                style={{
                    background:
                        "radial-gradient(240px circle at var(--mx) var(--my), rgba(124,58,237,0.15), transparent 60%)",
                }}
            />
            {children}
        </div>
    );
}
