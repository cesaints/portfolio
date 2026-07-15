"use client";
import { useState } from "react";
import Image from "next/image";
import { Lock } from "lucide-react";
import type { Project } from "@/entities/project/types";
import { cn } from "@shared/lib/cn";
import { useI18n } from "@/shared/i18n/I18nProvider";

/** Browser-chrome mock. Shows production screenshots (with tabs) or a
 *  confidential placeholder when the work has no public preview. */
export default function ProjectPreview({
    project,
    tabLabels,
}: {
    project: Project;
    tabLabels?: string[];
}) {
    const { t } = useI18n();
    const shots = project.screenshots ?? [];
    const [idx, setIdx] = useState(0);
    const hasTabs = shots.length > 1 && tabLabels && tabLabels.length === shots.length;
    const url = shots[idx]?.url ?? "internal";

    return (
        <div className="overflow-hidden rounded-xl border border-line bg-surface-1 shadow-[var(--shadow-lg)]">
            {/* chrome */}
            <div className="flex items-center gap-3 border-b border-line bg-surface-2 px-3 py-2.5 sm:px-4">
                <div className="flex gap-1.5">
                    <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
                    <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
                    <span className="h-3 w-3 rounded-full bg-[#28c840]" />
                </div>
                <div className="hidden flex-1 truncate rounded-md border border-line bg-bg px-3 py-1 font-mono text-xs text-muted sm:block">
                    {shots.length ? `https://${url}` : "internal · confidential"}
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

            {/* viewport */}
            <div className="relative aspect-[16/10] bg-bg">
                {shots.length ? (
                    shots.map((s, i) => (
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
                    ))
                ) : (
                    <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 p-8 text-center">
                        <span className="inline-flex h-14 w-14 items-center justify-center rounded-full border border-line bg-surface-2 text-muted">
                            <Lock className="h-6 w-6" aria-hidden />
                        </span>
                        <div>
                            <p className="font-display text-lg font-semibold text-ink">
                                {t.work.confidentialPreview}
                            </p>
                            <p className="mt-1 text-sm text-muted">
                                {t.work.confidentialPreviewSub}
                            </p>
                        </div>
                        <div className="flex flex-wrap justify-center gap-x-3 gap-y-1">
                            {project.tags.slice(0, 5).map((tag) => (
                                <span key={tag} className="font-mono text-xs text-muted">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
