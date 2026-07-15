"use client";
import Link from "next/link";
import Badge from "@shared/ui/Badge";
import { Section, SectionHeader } from "@/shared/ui/Section";
import { useI18n } from "@/shared/i18n/I18nProvider";

export default function About() {
    const { t } = useI18n();
    const a = t.about;

    return (
        <Section id="about">
            <SectionHeader title={a.heading} subtitle={a.sub} />
            <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
                <div className="max-w-prose space-y-5 text-lg leading-relaxed text-ink-2">
                    {a.paragraphs.map((p, i) => (
                        <p key={i}>{p}</p>
                    ))}
                    <p className="text-base">
                        <Link
                            href="/timeline"
                            className="font-medium text-ink underline decoration-accent decoration-2 underline-offset-4 hover:text-accent"
                        >
                            {a.timelineLink} →
                        </Link>
                    </p>
                </div>

                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
                    {a.clusters.map((c) => (
                        <div key={c.label} className="card p-5">
                            <p className="eyebrow">{c.label}</p>
                            <div className="mt-3 flex flex-wrap gap-2">
                                {c.skills.map((s) => (
                                    <Badge key={s}>{s}</Badge>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    );
}
