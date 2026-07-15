"use client";
import { useState } from "react";
import Image from "next/image";
import { ShieldCheck } from "lucide-react";
import type { Project } from "@/entities/project/types";
import { cn } from "@shared/lib/cn";
import { useI18n } from "@/shared/i18n/I18nProvider";

/** Browser-chrome mock for projects with production screenshots; a designed
 *  confidential panel (no fake browser) for work without a public preview. */
export default function ProjectPreview({
    project,
    tabLabels,
}: {
    project: Project;
    tabLabels?: string[];
}) {
    const shots = project.screenshots ?? [];

    if (shots.length === 0) return <ConfidentialPanel project={project} />;

    return <BrowserMock project={project} shots={shots} tabLabels={tabLabels} />;
}

function BrowserMock({
    project,
    shots,
    tabLabels,
}: {
    project: Project;
    shots: NonNullable<Project["screenshots"]>;
    tabLabels?: string[];
}) {
    const [idx, setIdx] = useState(0);
    const hasTabs = shots.length > 1 && tabLabels && tabLabels.length === shots.length;
    const url = shots[idx]?.url ?? "";

    return (
        <div className="overflow-hidden rounded-xl border border-line bg-surface-1 shadow-[var(--shadow-lg)]">
            <div className="flex items-center gap-3 border-b border-line bg-surface-2 px-3 py-2.5 sm:px-4">
                <div className="flex gap-1.5">
                    <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
                    <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
                    <span className="h-3 w-3 rounded-full bg-[#28c840]" />
                </div>
                <div className="hidden flex-1 truncate rounded-md border border-line bg-bg px-3 py-1 font-mono text-xs text-muted sm:block">
                    https://{url}
                </div>
                {hasTabs && (
                    <div className="ml-auto flex rounded-md border border-line bg-bg p-0.5 text-xs font-medium">
                        {shots.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => setIdx(i)}
                                className={cn(
                                    "rounded px-2.5 py-1 transition-colors",
                                    idx === i ? "bg-surface-3 text-ink" : "text-muted hover:text-ink"
                                )}
                            >
                                {tabLabels![i]}
                            </button>
                        ))}
                    </div>
                )}
            </div>

            <div className="relative aspect-[16/10] bg-bg">
                {shots.map((s, i) => (
                    <Image
                        key={s.src}
                        src={s.src}
                        alt={`${project.title} preview`}
                        fill
                        sizes="(min-width:1024px) 55vw, 100vw"
                        className={cn(
                            "object-cover object-top transition-opacity duration-500",
                            idx === i ? "opacity-100" : "opacity-0"
                        )}
                    />
                ))}
            </div>
        </div>
    );
}

function ConfidentialPanel({ project }: { project: Project }) {
    const { t } = useI18n();
    return (
        <div className="relative flex aspect-[16/10] flex-col items-center justify-center gap-5 overflow-hidden rounded-xl border border-line bg-surface-1 p-8 text-center shadow-[var(--shadow-lg)]">
            {/* soft brand glow + grid motif */}
            <div
                aria-hidden
                className="pointer-events-none absolute inset-0"
                style={{
                    background:
                        "radial-gradient(600px 300px at 50% 0%, rgba(124,58,237,.16), transparent 60%)",
                }}
            />
            <div
                aria-hidden
                className="pointer-events-none absolute inset-0 opacity-[0.14]"
                style={{
                    backgroundImage:
                        "linear-gradient(var(--line) 1px, transparent 1px), linear-gradient(90deg, var(--line) 1px, transparent 1px)",
                    backgroundSize: "40px 40px",
                }}
            />
            <span className="relative inline-flex h-16 w-16 items-center justify-center rounded-2xl border border-[color:var(--line-glow)] bg-surface-2 text-violet-300">
                <ShieldCheck className="h-7 w-7" aria-hidden />
            </span>
            <div className="relative">
                <p className="font-display text-xl font-semibold text-ink">
                    {t.work.confidentialPreview}
                </p>
                <p className="mt-1 text-sm text-muted">{t.work.confidentialPreviewSub}</p>
            </div>
            <div className="relative flex flex-wrap justify-center gap-x-3 gap-y-1.5">
                {project.tags.slice(0, 6).map((tag) => (
                    <span key={tag} className="font-mono text-xs text-muted">
                        {tag}
                    </span>
                ))}
            </div>
        </div>
    );
}
