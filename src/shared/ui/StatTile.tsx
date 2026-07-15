"use client";
import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";

/** Parse a stat value; only pure-numeric values (e.g. "99.9%", "3", "5+") animate. */
function parseStat(raw: string) {
    const m = /^(\d+(?:[.,]\d+)?)([%+x]?)$/.exec(raw.trim());
    if (!m) return { isNum: false as const };
    const normalized = m[1].replace(",", ".");
    return {
        isNum: true as const,
        target: parseFloat(normalized),
        suffix: m[2],
        decimals: (normalized.split(".")[1] || "").length,
        final: raw.trim(),
    };
}

/** A single instrumented metric: mono gradient value + muted label. */
export default function StatTile({ value, label }: { value: string; label: string }) {
    const ref = useRef<HTMLSpanElement>(null);
    const inView = useInView(ref, { once: true, margin: "-60px" });
    const reduced = useReducedMotion();
    const parsed = parseStat(value);
    const [display, setDisplay] = useState(
        parsed.isNum && !reduced ? `0${parsed.suffix}` : value
    );

    useEffect(() => {
        const p = parseStat(value);
        if (!p.isNum || reduced || !inView) {
            setDisplay(value);
            return;
        }
        let raf = 0;
        const startT = performance.now();
        const dur = 1200;
        const tick = (now: number) => {
            const t = Math.min(1, (now - startT) / dur);
            const eased = 1 - Math.pow(1 - t, 3);
            if (t < 1) {
                setDisplay(`${(p.target * eased).toFixed(p.decimals)}${p.suffix}`);
                raf = requestAnimationFrame(tick);
            } else {
                setDisplay(p.final); // land exactly on the real value
            }
        };
        raf = requestAnimationFrame(tick);
        return () => cancelAnimationFrame(raf);
    }, [inView, reduced, value]);

    return (
        <div className="flex flex-col items-center gap-2 px-6 py-8 text-center md:items-start md:text-left">
            <span
                ref={ref}
                className="text-gradient font-mono text-4xl font-medium tracking-tight tabular-nums md:text-[2.75rem]"
            >
                {display}
            </span>
            <span className="text-sm uppercase tracking-[0.08em] text-muted">{label}</span>
        </div>
    );
}
