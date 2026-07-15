"use client";
import { ExternalLink, Github } from "lucide-react";
import type { Project } from "@/entities/project/types";
import Badge from "@shared/ui/Badge";
import { buttonClasses } from "@shared/ui/button/styles";
import { useI18n } from "@/shared/i18n/I18nProvider";
import { localizeProject } from "@/shared/i18n/content";

export default function FeaturedCaseStudy({ project }: { project: Project }) {
    const { t, lang } = useI18n();
    const p = localizeProject(project, lang);
    return (
        <div className="flagship-ring rounded-3xl shadow-lg">
            <div className="grid gap-8 rounded-3xl bg-surface-1 p-6 md:grid-cols-2 md:p-10">
                <div>
                    <div className="flex items-center gap-3">
                        <Badge tone="accent">{t.flagship.badge}</Badge>
                        {p.year && <span className="text-sm text-muted">{p.year}</span>}
                    </div>
                    <h3 className="mt-4 font-display text-2xl font-bold tracking-tight text-ink md:text-3xl">
                        {p.title}
                    </h3>
                    <p className="mt-1 text-sm text-muted">{p.role}</p>
                    <p className="mt-4 text-ink-2">{p.summary}</p>

                    <div className="mt-6 flex flex-wrap gap-3">
                        {p.demo && (
                            <a
                                href={p.demo}
                                target="_blank"
                                rel="noreferrer"
                                className={buttonClasses({ variant: "primary-grad" })}
                            >
                                <ExternalLink className="h-4 w-4" aria-hidden /> {t.flagship.visit}
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

                <div className="space-y-6">
                    {p.metrics && (
                        <div className="grid grid-cols-2 gap-3">
                            {p.metrics.map((m) => (
                                <div
                                    key={m.label}
                                    className="rounded-xl border border-line bg-bg-2 p-4"
                                >
                                    <div className="text-gradient font-mono text-lg font-medium">
                                        {m.value}
                                    </div>
                                    <div className="mt-1 text-xs uppercase tracking-wide text-muted">
                                        {m.label}
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                    {p.highlights && (
                        <ul className="space-y-2.5">
                            {p.highlights.slice(0, 5).map((h) => (
                                <li key={h} className="flex gap-2.5 text-sm text-ink-2">
                                    <span
                                        aria-hidden
                                        className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full [background:var(--grad-brand)]"
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
