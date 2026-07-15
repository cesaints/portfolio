"use client";
import { useEffect, useState } from "react";
import { Github, ExternalLink, Lock, Star, X } from "lucide-react";
import type { Project } from "@/entities/project/types";
import { cn } from "@shared/lib/cn";
import Badge from "@shared/ui/Badge";

export default function ProjectCard({
    p,
    className,
}: {
    p: Project;
    className?: string;
}) {
    const [open, setOpen] = useState(false);

    return (
        <>
            <article
                className={cn(
                    "card group flex flex-col p-0 transition-all duration-300 hover:-translate-y-1 hover:border-line-strong hover:shadow-lg",
                    p.featured && "[background:var(--grad-brand)] p-px",
                    className
                )}
            >
                <div className={cn("flex h-full flex-col", p.featured && "rounded-2xl bg-surface-1")}>
                    <Cover p={p} />

                    <div className="flex flex-1 flex-col p-6">
                        <div className="mb-2 flex items-center gap-2 text-xs">
                            {p.featured ? (
                                <span className="inline-flex items-center gap-1.5 text-violet-400">
                                    <Star className="h-3.5 w-3.5" aria-hidden /> Flagship
                                </span>
                            ) : (
                                <span className="uppercase tracking-[0.1em] text-muted">
                                    {p.category}
                                </span>
                            )}
                            {p.year && <span className="ml-auto text-muted">{p.year}</span>}
                        </div>

                        <h3 className="font-display text-xl font-semibold tracking-tight text-ink">
                            {p.title}
                        </h3>
                        <p className="mt-2 line-clamp-3 text-ink-2">{p.oneLiner ?? p.summary}</p>

                        <div className="mt-4 flex flex-wrap gap-2">
                            {p.tags.slice(0, 4).map((t) => (
                                <Badge key={t}>{t}</Badge>
                            ))}
                        </div>

                        <div className="mt-5 flex items-center gap-2 pt-1">
                            {p.confidential ? (
                                <Badge tone="muted">
                                    <Lock className="h-3.5 w-3.5" aria-hidden /> Confidential ·{" "}
                                    {p.category === "Enterprise / Government"
                                        ? "Government"
                                        : "Enterprise"}
                                </Badge>
                            ) : (
                                <>
                                    {p.repo && (
                                        <a
                                            href={p.repo}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="inline-flex items-center gap-2 rounded-xl border border-line px-3 py-2 text-sm text-ink-2 transition-colors hover:bg-surface-2"
                                        >
                                            <Github className="h-4 w-4" aria-hidden /> Code
                                        </a>
                                    )}
                                    {p.demo && (
                                        <a
                                            href={p.demo}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="inline-flex items-center gap-2 rounded-xl border border-line px-3 py-2 text-sm text-ink-2 transition-colors hover:bg-surface-2"
                                        >
                                            <ExternalLink className="h-4 w-4" aria-hidden /> Live
                                        </a>
                                    )}
                                </>
                            )}
                            <button
                                onClick={() => setOpen(true)}
                                className="ml-auto text-sm text-muted underline decoration-dotted underline-offset-4 transition-colors hover:text-ink"
                            >
                                Read case study
                            </button>
                        </div>
                    </div>
                </div>
            </article>

            {open && <CaseStudyModal p={p} onClose={() => setOpen(false)} />}
        </>
    );
}

/** On-brand gradient cover (no binary asset needed). */
function Cover({ p }: { p: Project }) {
    return (
        <div className="relative m-4 mb-0 overflow-hidden rounded-xl border border-line">
            <div
                className="relative flex h-44 items-end p-4 sm:h-48"
                style={{
                    background:
                        "radial-gradient(120% 120% at 80% -20%, rgba(124,58,237,.35), transparent 55%)," +
                        "radial-gradient(120% 120% at 0% 120%, rgba(34,211,238,.22), transparent 55%)," +
                        "var(--surface-1)",
                }}
            >
                <span
                    aria-hidden
                    className="pointer-events-none absolute inset-0 opacity-[0.15]"
                    style={{
                        backgroundImage:
                            "radial-gradient(rgba(255,255,255,.6) 1px, transparent 1.2px)",
                        backgroundSize: "22px 22px",
                    }}
                />
                <span className="relative font-display text-sm font-semibold uppercase tracking-[0.16em] text-ink/90">
                    {p.category}
                </span>
            </div>
        </div>
    );
}

function CaseStudyModal({ p, onClose }: { p: Project; onClose: () => void }) {
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
            aria-label={`${p.title} case study`}
            onClick={onClose}
        >
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
            <div
                className="card relative max-h-[85vh] w-full max-w-3xl overflow-y-auto p-0"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="sticky top-0 z-10 flex items-start justify-between gap-4 border-b border-line bg-surface-1/95 p-6 backdrop-blur">
                    <div>
                        <p className="eyebrow">{p.category}</p>
                        <h4 className="mt-1 font-display text-2xl font-bold text-ink">
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

                <div className="space-y-6 p-6">
                    {p.metrics && (
                        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                            {p.metrics.map((m) => (
                                <div
                                    key={m.label}
                                    className="rounded-xl border border-line bg-surface-1 p-3 text-center"
                                >
                                    <div className="text-gradient font-mono text-lg font-medium">
                                        {m.value}
                                    </div>
                                    <div className="mt-1 text-[11px] uppercase tracking-wide text-muted">
                                        {m.label}
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}

                    {p.context && <Block title="Context" body={p.context} />}
                    {p.problem && <Block title="Problem" body={p.problem} />}
                    {p.solution && <BulletBlock title="What I built" items={p.solution} />}
                    {p.highlights && (
                        <BulletBlock title="Engineering highlights" items={p.highlights} />
                    )}

                    {p.stack && (
                        <div>
                            <h5 className="mb-2 text-sm font-semibold text-ink">Stack</h5>
                            <div className="flex flex-wrap gap-2">
                                {p.stack.map((s) => (
                                    <Badge key={s}>{s}</Badge>
                                ))}
                            </div>
                        </div>
                    )}

                    {p.confidential ? (
                        <Badge tone="muted">
                            <Lock className="h-3.5 w-3.5" aria-hidden /> Confidential work — no
                            public links
                        </Badge>
                    ) : (
                        p.links && (
                            <div className="flex flex-wrap gap-2">
                                {p.links.map((l) => (
                                    <a
                                        key={l.href}
                                        href={l.href}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="inline-flex items-center gap-2 rounded-xl border border-line px-3 py-2 text-sm text-ink-2 hover:bg-surface-2"
                                    >
                                        <ExternalLink className="h-4 w-4" aria-hidden /> {l.label}
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
            <h5 className="mb-1.5 text-sm font-semibold text-ink">{title}</h5>
            <p className="text-ink-2">{body}</p>
        </div>
    );
}

function BulletBlock({ title, items }: { title: string; items: string[] }) {
    return (
        <div>
            <h5 className="mb-2 text-sm font-semibold text-ink">{title}</h5>
            <ul className="space-y-2">
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
