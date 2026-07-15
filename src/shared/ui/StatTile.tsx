"use client";
import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";

/** A single instrumented metric: mono gradient value + muted label. */
export default function StatTile({
    value,
    label,
}: {
    value: string;
    label: string;
}) {
    return (
        <div className="flex flex-col items-center gap-2 px-6 py-8 text-center md:items-start md:text-left">
            <AnimatedValue value={value} />
            <span className="text-sm uppercase tracking-[0.08em] text-muted">
                {label}
            </span>
        </div>
    );
}

/** Counts up when the value is a plain number; otherwise renders as-is. */
function AnimatedValue({ value }: { value: string }) {
    const ref = useRef<HTMLSpanElement>(null);
    const inView = useInView(ref, { once: true, margin: "-60px" });
    const reduced = useReducedMotion();
    const numeric = value.match(/^(\d+(?:\.\d+)?)(.*)$/);
    const [display, setDisplay] = useState(
        numeric && !reduced ? `0${numeric[2]}` : value
    );

    useEffect(() => {
        if (!numeric || reduced || !inView) {
            setDisplay(value);
            return;
        }
        const target = parseFloat(numeric[1]);
        const suffix = numeric[2];
        const decimals = (numeric[1].split(".")[1] || "").length;
        const start = performance.now();
        const dur = 1100;
        let raf = 0;
        const tick = (now: number) => {
            const t = Math.min(1, (now - start) / dur);
            const eased = 1 - Math.pow(1 - t, 3);
            const current = (target * eased).toFixed(decimals);
            setDisplay(`${current}${suffix}`);
            if (t < 1) raf = requestAnimationFrame(tick);
        };
        raf = requestAnimationFrame(tick);
        return () => cancelAnimationFrame(raf);
    }, [inView, numeric, reduced, value]);

    return (
        <span
            ref={ref}
            className="text-gradient font-mono text-4xl font-medium tracking-tight tabular-nums md:text-[2.75rem]"
        >
            {display}
        </span>
    );
}
