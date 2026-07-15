"use client";
import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import type { Project } from "@/entities/project/types";
import { cn } from "@shared/lib/cn";
import { buttonClasses } from "@shared/ui/button/styles";
import ProjectPreview from "./ProjectPreview";
import CaseStudyModal from "./CaseStudyModal";
import { useI18n } from "@/shared/i18n/I18nProvider";
import { localizeProject } from "@/shared/i18n/content";

function orderProjects(projects: Project[]) {
    return [...projects].sort((a, b) => {
        const fa = a.featured ? 0 : 1;
        const fb = b.featured ? 0 : 1;
        if (fa !== fb) return fa - fb;
        const ca = a.confidential ? 1 : 0;
        const cb = b.confidential ? 1 : 0;
        return ca - cb;
    });
}

export default function ProjectShowcase({ projects }: { projects: Project[] }) {
    const { t, lang } = useI18n();
    const reduced = useReducedMotion();
    const ordered = orderProjects(projects);
    const [i, setI] = useState(0);
    const [dir, setDir] = useState(1);
    const [modal, setModal] = useState<Project | null>(null);

    const raw = ordered[i];
    const p = localizeProject(raw, lang);
    const total = ordered.length;

    const go = (d: number) => {
        setDir(d);
        setI((v) => (v + d + total) % total);
    };

    const tabLabels =
        raw.screenshots?.length === 2 ? [t.flagship.tabSite, t.flagship.tabCrm] : undefined;

    return (
        <div>
            <AnimatePresence mode="wait" custom={dir}>
                <motion.div
                    key={raw.slug}
                    custom={dir}
                    initial={reduced ? false : { opacity: 0, x: dir * 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={reduced ? undefined : { opacity: 0, x: dir * -40 }}
                    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    className="grid gap-8 lg:grid-cols-[1.55fr_1fr] lg:items-center"
                >
                    <ProjectPreview project={raw} tabLabels={tabLabels} />

                    <div>
                        <div className="flex items-center gap-3">
                            {raw.featured ? (
                                <span className="inline-flex items-center rounded-full border border-[color:var(--line-glow)] bg-surface-2 px-3 py-1 text-xs text-violet-300">
                                    {t.flagship.badge}
                                </span>
                            ) : (
                                <span className="font-mono text-xs uppercase tracking-[0.1em] text-muted">
                                    {p.category}
                                </span>
                            )}
                            {p.year && <span className="font-mono text-xs text-muted">{p.year}</span>}
                        </div>

                        <h3 className="mt-4 font-display text-2xl font-bold tracking-tight text-ink md:text-3xl">
                            {p.title}
                        </h3>
                        <p className="mt-3 text-ink-2">{p.oneLiner ?? p.summary}</p>

                        {p.metrics && (
                            <div className="mt-6 grid grid-cols-2 gap-x-6 gap-y-4">
                                {p.metrics.slice(0, 4).map((m) => (
                                    <div key={m.label}>
                                        <div className="font-mono text-lg font-medium text-ink">
                                            {m.value}
                                        </div>
                                        <div className="mt-0.5 text-xs text-muted">{m.label}</div>
                                    </div>
                                ))}
                            </div>
                        )}

                        <div className="mt-8 flex flex-wrap gap-3">
                            {p.demo && !p.confidential && (
                                <a
                                    href={p.demo}
                                    target="_blank"
                                    rel="noreferrer"
                                    className={buttonClasses({ variant: "primary-grad" })}
                                >
                                    {t.work.viewSite}
                                    <ArrowUpRight className="h-4 w-4" aria-hidden />
                                </a>
                            )}
                            <button
                                onClick={() => setModal(raw)}
                                className={buttonClasses({ variant: "outline" })}
                            >
                                {t.work.readCase}
                            </button>
                        </div>
                    </div>
                </motion.div>
            </AnimatePresence>

            {/* controls */}
            <div className="mt-10 flex items-center justify-between border-t border-line pt-6">
                <button
                    onClick={() => go(-1)}
                    aria-label={t.work.prev}
                    className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-line text-ink-2 transition-colors hover:border-line-strong hover:bg-surface-1 hover:text-ink"
                >
                    <ArrowLeft className="h-5 w-5" aria-hidden />
                </button>

                <div className="flex items-center gap-4">
                    <span className="font-mono text-sm text-muted">
                        {String(i + 1).padStart(2, "0")}{" "}
                        <span className="text-muted-2">/ {String(total).padStart(2, "0")}</span>
                    </span>
                    <div className="flex items-center gap-2">
                        {ordered.map((pr, idx) => (
                            <button
                                key={pr.slug}
                                onClick={() => {
                                    setDir(idx > i ? 1 : -1);
                                    setI(idx);
                                }}
                                aria-label={pr.slug}
                                className={cn(
                                    "h-1.5 rounded-full transition-all",
                                    idx === i ? "w-6 bg-violet-400" : "w-1.5 bg-line-strong hover:bg-muted"
                                )}
                            />
                        ))}
                    </div>
                </div>

                <button
                    onClick={() => go(1)}
                    aria-label={t.work.next}
                    className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-line text-ink-2 transition-colors hover:border-line-strong hover:bg-surface-1 hover:text-ink"
                >
                    <ArrowRight className="h-5 w-5" aria-hidden />
                </button>
            </div>

            {modal && (
                <CaseStudyModal p={localizeProject(modal, lang)} onClose={() => setModal(null)} />
            )}
        </div>
    );
}
