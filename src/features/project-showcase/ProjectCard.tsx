"use client";
import { useEffect, useState } from "react";
import { ArrowUpRight, Github, Lock } from "lucide-react";
import type { Project } from "@/entities/project/types";
import { cn } from "@shared/lib/cn";
import { useI18n } from "@/shared/i18n/I18nProvider";
import { localizeProject } from "@/shared/i18n/content";

export default function ProjectCard({
    p: pInput,
    className,
}: {
    p: Project;
    className?: string;
}) {
    const { t, lang } = useI18n();
    const p = localizeProject(pInput, lang);
    const [open, setOpen] = useState(false);

    return (
        <>
            <article
                className={cn(
                    "card group flex h-full flex-col p-6 transition-shadow duration-200 hover:shadow-lift md:p-8",
                    p.featured && "border-l-2 border-l-accent",
                    className
                )}
            >
                <div className="flex items-baseline justify-between gap-4">
                    <span className="eyebrow">
                        {p.featured ? t.flagship.badge : p.category}
                    </span>
                    {p.year && (
                        <span className="font-mono text-xs text-muted">{p.year}</span>
                    )}
                </div>

                <h3 className="mt-4 font-display text-2xl font-bold tracking-[-0.01em] text-ink">
                    {p.title}
                </h3>
                <p className="mt-2 text-ink-2">{p.oneLiner ?? p.summary}</p>

                <div className="mt-5 flex flex-wrap gap-x-3 gap-y-1.5">
                    {p.tags.slice(0, 5).map((tag) => (
                        <span key={tag} className="font-mono text-xs text-muted">
                            {tag}
                        </span>
                    ))}
                </div>

                <div className="mt-auto flex flex-wrap items-center gap-4 border-t border-line pt-5">
                    {p.confidential ? (
                        <span className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-wide text-muted">
                            <Lock className="h-3.5 w-3.5" aria-hidden />
                            {p.category === "Enterprise / Government"
                                ? t.work.confidentialGov
                                : t.work.confidentialEnterprise}
                        </span>
                    ) : (
                        <>
                            {p.repo && (
                                <a
                                    href={p.repo}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="inline-flex items-center gap-1.5 text-sm text-ink-2 transition-colors hover:text-accent"
                                >
                                    <Github className="h-4 w-4" aria-hidden /> {t.work.code}
                                </a>
                            )}
                            {p.demo && (
                                <a
                                    href={p.demo}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="inline-flex items-center gap-1.5 text-sm text-ink-2 transition-colors hover:text-accent"
                                >
                                    {t.work.live}
                                    <ArrowUpRight className="h-4 w-4" aria-hidden />
                                </a>
                            )}
                        </>
                    )}
                    <button
                        onClick={() => setOpen(true)}
                        className="ml-auto inline-flex items-center gap-1 text-sm font-medium text-ink transition-colors hover:text-accent"
                    >
                        {t.work.readCase}
                        <ArrowUpRight className="h-4 w-4" aria-hidden />
                    </button>
                </div>
            </article>

            {open && <CaseStudyModal p={p} onClose={() => setOpen(false)} />}
        </>
    );
}

function CaseStudyModal({ p, onClose }: { p: Project; onClose: () => void }) {
    const { t } = useI18n();
    const ui = t.caseStudyUi;
    useEffect(() => {
        const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
        document.addEventListener("keydown", onKey);
        document.body.style.overflow = "hidden";
        return () => {
            document.removeEventListener("keydown", onKey);
            document.body.style.overflow = "";
        };
    }, [onClose]);

    return (
        <div
            className="fixed inset-0 z-50 grid place-items-center p-4 sm:p-6"
            role="dialog"
            aria-modal="true"
            aria-label={p.title}
            onClick={onClose}
        >
            <div className="absolute inset-0 bg-ink/40 backdrop-blur-sm" />
            <div
                className="card relative max-h-[86vh] w-full max-w-2xl overflow-y-auto p-0"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="sticky top-0 z-10 flex items-start justify-between gap-4 border-b border-line bg-surface-1/95 p-6 backdrop-blur">
                    <div>
                        <p className="eyebrow">{p.category}</p>
                        <h4 className="mt-2 font-display text-2xl font-bold text-ink">
                            {p.title}
                        </h4>
                        {p.role && <p className="mt-1 text-sm text-muted">{p.role}</p>}
                    </div>
                    <button
                        onClick={onClose}
                        aria-label="Close"
                        className="shrink-0 font-mono text-sm text-muted hover:text-accent"
                    >
                        [ ESC ]
                    </button>
                </div>

                <div className="space-y-7 p-6">
                    {p.metrics && (
                        <div className="grid grid-cols-2 gap-x-6 gap-y-4 border-b border-line pb-6 sm:grid-cols-4">
                            {p.metrics.map((m) => (
                                <div key={m.label}>
                                    <div className="font-mono text-lg font-medium text-ink">
                                        {m.value}
                                    </div>
                                    <div className="mt-1 text-xs text-muted">{m.label}</div>
                                </div>
                            ))}
                        </div>
                    )}

                    {p.context && <Block title={ui.context} body={p.context} />}
                    {p.problem && <Block title={ui.problem} body={p.problem} />}
                    {p.solution && <BulletBlock title={ui.built} items={p.solution} />}
                    {p.highlights && (
                        <BulletBlock title={ui.highlights} items={p.highlights} />
                    )}

                    {p.stack && (
                        <div>
                            <h5 className="eyebrow mb-3">{ui.stack}</h5>
                            <div className="flex flex-wrap gap-x-3 gap-y-1.5">
                                {p.stack.map((s) => (
                                    <span key={s} className="font-mono text-xs text-muted">
                                        {s}
                                    </span>
                                ))}
                            </div>
                        </div>
                    )}

                    {p.confidential ? (
                        <p className="inline-flex items-center gap-1.5 font-mono text-xs text-muted">
                            <Lock className="h-3.5 w-3.5" aria-hidden /> {ui.confidentialNote}
                        </p>
                    ) : (
                        p.links && (
                            <div className="flex flex-wrap gap-4">
                                {p.links.map((l) => (
                                    <a
                                        key={l.href}
                                        href={l.href}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="inline-flex items-center gap-1.5 text-sm font-medium text-ink hover:text-accent"
                                    >
                                        {l.label}
                                        <ArrowUpRight className="h-4 w-4" aria-hidden />
                                    </a>
                                ))}
                            </div>
                        )
                    )}
                </div>
            </div>
        </div>
    );
}

function Block({ title, body }: { title: string; body: string }) {
    return (
        <div>
            <h5 className="eyebrow mb-2">{title}</h5>
            <p className="text-ink-2">{body}</p>
        </div>
    );
}

function BulletBlock({ title, items }: { title: string; items: string[] }) {
    return (
        <div>
            <h5 className="eyebrow mb-3">{title}</h5>
            <ul className="space-y-2.5">
                {items.map((it) => (
                    <li key={it} className="flex gap-3 text-ink-2">
                        <span aria-hidden className="mt-2 h-1 w-4 shrink-0 bg-accent" />
                        <span>{it}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}
