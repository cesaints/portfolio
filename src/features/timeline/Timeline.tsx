"use client";
import { useMemo } from "react";
import { motion } from "framer-motion";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import data, { TimelineItem } from "./data";
import { useI18n } from "@/shared/i18n/I18nProvider";
import { localizeTimelineItem } from "@/shared/i18n/content";

const palette = {
    violet: { bg: "#d93a15", fg: "#ffffff" }, // current / milestone -> accent
    cyan: { bg: "#17160f", fg: "#f3f1ea" }, // work -> ink
    green: { bg: "#8a8578", fg: "#ffffff" }, // study -> muted
} as const;

function Icon({ kind }: { kind?: TimelineItem["icon"] }) {
    return (
        <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
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
    const { lang } = useI18n();
    const items = useMemo(() => data.map((it) => localizeTimelineItem(it, lang)), [lang]);

    return (
        <section className="section pt-0">
            <div className="container-std">
                <VerticalTimeline lineColor="#dcd7cb" animate={false}>
                    {items.map((it) => {
                        const c = palette[it.color ?? "cyan"];
                        return (
                            <VerticalTimelineElement
                                key={it.id}
                                date={it.date}
                                icon={<Icon kind={it.icon} />}
                                iconStyle={{ background: c.bg, color: c.fg, boxShadow: "0 0 0 4px #f3f1ea" }}
                                contentStyle={{
                                    background: "#ffffff",
                                    color: "#17160f",
                                    border: "1px solid #dcd7cb",
                                    boxShadow: "0 1px 2px rgba(23,22,15,.05)",
                                    borderRadius: "8px",
                                }}
                                contentArrowStyle={{ borderRight: "7px solid #dcd7cb" }}
                            >
                                <motion.div
                                    initial={{ opacity: 0, y: 14 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, amount: 0.3 }}
                                    transition={{ duration: 0.45, ease: "easeOut" }}
                                >
                                    <h3 className="font-display text-lg font-bold leading-tight tracking-[-0.01em] text-ink">
                                        {it.title}
                                        {it.org ? <span className="font-sans font-normal text-muted"> · {it.org}</span> : null}
                                    </h3>
                                    <p className="mt-2 text-ink-2">{it.summary}</p>

                                    {it.tags?.length ? (
                                        <div className="mt-3 flex flex-wrap gap-x-3 gap-y-1.5">
                                            {it.tags.map((tag) => (
                                                <span key={tag} className="font-mono text-xs text-muted">
                                                    {tag}
                                                </span>
                                            ))}
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
