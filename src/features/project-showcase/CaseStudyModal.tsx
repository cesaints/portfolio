"use client";
import { useEffect } from "react";
import { ArrowUpRight, Lock, X } from "lucide-react";
import type { Project } from "@/entities/project/types";
import Badge from "@shared/ui/Badge";
import { useI18n } from "@/shared/i18n/I18nProvider";

export default function CaseStudyModal({
    p,
    onClose,
}: {
    p: Project;
    onClose: () => void;
}) {
    const { t } = useI18n();
    const ui = t.caseStudyUi;

    useEffect(() => {
        const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
        document.addEventListener("keydown", onKey);
        const prev = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        return () => {
            document.removeEventListener("keydown", onKey);
            document.body.style.overflow = prev;
        };
    }, [onClose]);

    return (
        // Outer element is the scroll container, so any content height scrolls.
        <div
            className="fixed inset-0 z-[60] overflow-y-auto overscroll-contain bg-bg/92 backdrop-blur-md"
            role="dialog"
            aria-modal="true"
            aria-label={p.title}
            onClick={onClose}
        >
            <div className="flex min-h-full items-start justify-center p-4 sm:p-6">
                <div
                    className="card relative my-4 w-full max-w-3xl sm:my-8"
                    onClick={(e) => e.stopPropagation()}
                >
                    <div className="flex items-start justify-between gap-4 border-b border-line p-6">
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
                            className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-line text-muted hover:bg-surface-2 hover:text-ink"
                        >
                            <X className="h-4 w-4" aria-hidden />
                        </button>
                    </div>

                    <div className="space-y-7 p-6">
                        {p.metrics && (
                            <div className="grid grid-cols-2 gap-x-6 gap-y-4 border-b border-line pb-6 sm:grid-cols-4">
                                {p.metrics.map((m) => (
                                    <div key={m.label}>
                                        <div className="text-gradient font-mono text-lg font-medium">
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
                                <h5 className="mb-3 text-sm font-semibold text-ink">{ui.stack}</h5>
                                <div className="flex flex-wrap gap-2">
                                    {p.stack.map((s) => (
                                        <Badge key={s}>{s}</Badge>
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
                                            className="inline-flex items-center gap-1.5 text-sm font-medium text-ink hover:text-violet-300"
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
        </div>
    );
}

function Block({ title, body }: { title: string; body: string }) {
    return (
        <div>
            <h5 className="mb-1.5 text-sm font-semibold text-ink">{title}</h5>
            <p className="leading-relaxed text-ink-2">{body}</p>
        </div>
    );
}

function BulletBlock({ title, items }: { title: string; items: string[] }) {
    return (
        <div>
            <h5 className="mb-3 text-sm font-semibold text-ink">{title}</h5>
            <ul className="space-y-2.5">
                {items.map((it) => (
                    <li key={it} className="flex gap-2.5 text-ink-2">
                        <span
                            aria-hidden
                            className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full [background:var(--grad-brand)]"
                        />
                        <span>{it}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}
