"use client";
import { ArrowUpRight, Github } from "lucide-react";
import type { Project } from "@/entities/project/types";
import { buttonClasses } from "@shared/ui/button/styles";
import { useI18n } from "@/shared/i18n/I18nProvider";
import { localizeProject } from "@/shared/i18n/content";

export default function FeaturedCaseStudy({ project }: { project: Project }) {
    const { t, lang } = useI18n();
    const p = localizeProject(project, lang);

    return (
        <div className="border border-line bg-surface-1 shadow-card">
            <div className="grid gap-10 p-6 md:grid-cols-[1.15fr_0.85fr] md:p-12">
                <div>
                    <div className="flex items-baseline gap-4">
                        <span className="eyebrow">{t.flagship.badge}</span>
                        {p.year && (
                            <span className="font-mono text-xs text-muted">{p.year}</span>
                        )}
                    </div>
                    <h3 className="mt-4 font-display text-3xl font-extrabold tracking-[-0.02em] text-ink md:text-4xl">
                        {p.title}
                    </h3>
                    <p className="mt-2 text-sm text-muted">{p.role}</p>
                    <p className="mt-5 max-w-prose text-lg leading-relaxed text-ink-2">
                        {p.summary}
                    </p>

                    <div className="mt-7 flex flex-wrap gap-3">
                        {p.demo && (
                            <a
                                href={p.demo}
                                target="_blank"
                                rel="noreferrer"
                                className={buttonClasses({ variant: "primary" })}
                            >
                                {t.flagship.visit}
                                <ArrowUpRight className="h-4 w-4" aria-hidden />
                            </a>
                        )}
                        {p.repo && (
                            <a
                                href={p.repo}
                                target="_blank"
                                rel="noreferrer"
                                className={buttonClasses({ variant: "outline" })}
                            >
                                <Github className="h-4 w-4" aria-hidden /> {t.flagship.source}
                            </a>
                        )}
                    </div>
                </div>

                <div className="space-y-7 md:border-l md:border-line md:pl-10">
                    {p.metrics && (
                        <div className="grid grid-cols-2 gap-x-6 gap-y-5">
                            {p.metrics.map((m) => (
                                <div key={m.label}>
                                    <div className="font-mono text-xl font-medium text-ink">
                                        {m.value}
                                    </div>
                                    <div className="mt-1 text-xs text-muted">{m.label}</div>
                                </div>
                            ))}
                        </div>
                    )}
                    {p.highlights && (
                        <ul className="space-y-2.5 border-t border-line pt-6">
                            {p.highlights.slice(0, 5).map((h) => (
                                <li key={h} className="flex gap-3 text-sm text-ink-2">
                                    <span
                                        aria-hidden
                                        className="mt-2 h-1 w-4 shrink-0 bg-accent"
                                    />
                                    <span>{h}</span>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
        </div>
    );
}
