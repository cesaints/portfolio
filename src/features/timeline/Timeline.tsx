// src/features/timeline/Timeline.tsx
"use client";
import { useMemo } from "react";
import { motion } from "framer-motion";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import data, { TimelineItem } from "./data";

const palette = {
    violet: { bg: "#7c3aed", fg: "#ffffff" },
    cyan: { bg: "#22d3ee", fg: "#0b1020" },
    green: { bg: "#22c55e", fg: "#0b1020" },
} as const;

function Icon({ kind }: { kind?: TimelineItem["icon"] }) {
    return (
        <svg viewBox="0 0 24 24" fill="currentColor" className="h-4.5 w-4.5">
            <path d={
                kind === "work" ? "M10 4h4a2 2 0 012 2v1h3a2 2 0 012 2v3h-9v-1H2V9a2 2 0 012-2h3V6a2 2 0 012-2zm2 2h2v1h-4V6h2zM2 14h9v1h9v3a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z"
                    : kind === "code" ? "M8.2 16.2L3.9 12l4.3-4.2 1.4 1.4L6.7 12l2.9 2.8-1.4 1.4zm7.6 0l-1.4-1.4 2.9-2.8-2.9-2.8 1.4-1.4 4.3 4.2-4.3 4.2zM9.7 19l4.6-14 1.9.6L11.6 19l-1.9-.6z"
                        : kind === "study" ? "M3 7l9-4 9 4-9 4-9-4zm2 5.2V17l7 3 7-3v-4.8l-7 3-7-3z"
                            : "M12 2l2.4 4.9L20 8l-4 3.9.9 5.6L12 15.8 7.1 17.5 8 11.9 4 8l5.6-1.1L12 2z"
            } />
        </svg>
    );
}

export default function Timeline() {
    const items = useMemo(() => data, []);

    return (
        <section className="section">
            <div className="container-std relative">
                <div
                    aria-hidden
                    className="pointer-events-none absolute -inset-x-10 -top-24 -bottom-6 -z-10 blur-3xl opacity-30
                     bg-[radial-gradient(600px_240px_at_10%_0%,rgba(124,58,237,.35),transparent_60%),radial-gradient(520px_220px_at_90%_10%,rgba(34,211,238,.25),transparent_60%)]"
                />
                <VerticalTimeline lineColor="#374151" animate={false}>
                    {items.map((it) => {
                        const c = palette[it.color ?? "violet"];
                        return (
                            <VerticalTimelineElement
                                key={it.id}
                                date={it.date}
                                icon={<Icon kind={it.icon} />}
                                iconStyle={{ background: c.bg, color: c.fg, boxShadow: "0 0 0 4px rgba(124,58,237,.25)" }}
                                contentStyle={{
                                    background: "rgba(16,24,39,.75)",
                                    color: "#E5E7EB",
                                    border: "1px solid #1f2937",
                                    backdropFilter: "blur(6px)",
                                    boxShadow: "0 0 0 1px rgba(124,58,237,.06)",
                                    borderRadius: "16px",
                                }}
                                contentArrowStyle={{ borderRight: "7px solid #1f2937" }}
                            >
                                <motion.div
                                    initial={{ opacity: 0, y: 16 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: false, amount: 0.3 }}
                                    transition={{ duration: 0.5, ease: "easeOut" }}
                                >
                                    <h3 className="text-lg font-semibold leading-tight text-neutral-100">
                                        {it.title}{it.org ? <span className="text-neutral-400"> · {it.org}</span> : null}
                                    </h3>
                                    <p className="mt-2 text-neutral-300">{it.summary}</p>

                                    {it.tags?.length ? (
                                        <div className="mt-3 flex flex-wrap gap-2">
                                            {it.tags.map((t) => (
                                                <span
                                                    key={t}
                                                    className="rounded-full border border-white/10 bg-black/40 px-3 py-1 text-xs text-neutral-200 backdrop-blur"
                                                >
                                                    {t}
                                                </span>
                                            ))}
                                        </div>
                                    ) : null}

                                    {it.link ? (
                                        <div className="mt-4">
                                            <a
                                                href={it.link.href}
                                                target={it.link.href.startsWith("http") ? "_blank" : undefined}
                                                rel={it.link.href.startsWith("http") ? "noreferrer" : undefined}
                                                className="inline-flex items-center gap-2 rounded-xl bg-violet-600 px-3 py-2 text-sm font-medium text-white hover:bg-violet-500"
                                            >
                                                {it.link.label}
                                            </a>
                                        </div>
                                    ) : null}
                                </motion.div>
                            </VerticalTimelineElement>
                        );
                    })}
                </VerticalTimeline>
            </div>
        </section>
    );
}
