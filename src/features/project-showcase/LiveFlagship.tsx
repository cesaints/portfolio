"use client";
import { useState } from "react";
import Image from "next/image";
import { ArrowUpRight, Github, Lock } from "lucide-react";
import type { Project } from "@/entities/project/types";
import { cn } from "@shared/lib/cn";
import { buttonClasses } from "@shared/ui/button/styles";
import { useI18n } from "@/shared/i18n/I18nProvider";
import { localizeProject } from "@/shared/i18n/content";

type Tab = "site" | "crm";

export default function LiveFlagship({ project }: { project: Project }) {
    const { t, lang } = useI18n();
    const f = t.flagship;
    const p = localizeProject(project, lang);
    const [tab, setTab] = useState<Tab>("site");

    const url = tab === "site" ? "55hubcorp.com" : "app.55hubcorp.com/console";

    return (
        <div className="grid gap-10 lg:grid-cols-[1.6fr_1fr] lg:items-center">
            {/* Browser mock */}
            <div className="group">
                <div className="overflow-hidden rounded-xl border border-line bg-surface-1 shadow-[var(--shadow-lg)] transition-transform duration-500 group-hover:-translate-y-1">
                    {/* chrome */}
                    <div className="flex items-center gap-3 border-b border-line bg-surface-2 px-3 py-2.5 sm:px-4">
                        <div className="flex gap-1.5">
                            <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
                            <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
                            <span className="h-3 w-3 rounded-full bg-[#28c840]" />
                        </div>
                        <div className="hidden flex-1 truncate rounded-md border border-line bg-bg px-3 py-1 font-mono text-xs text-muted sm:block">
                            https://{url}
                        </div>
                        <div className="ml-auto flex rounded-md border border-line bg-bg p-0.5 text-xs font-medium">
                            <button
                                onClick={() => setTab("site")}
                                className={cn(
                                    "rounded px-2.5 py-1 transition-colors",
                                    tab === "site" ? "bg-surface-3 text-ink" : "text-muted hover:text-ink"
                                )}
                            >
                                {f.tabSite}
                            </button>
                            <button
                                onClick={() => setTab("crm")}
                                className={cn(
                                    "inline-flex items-center gap-1 rounded px-2.5 py-1 transition-colors",
                                    tab === "crm" ? "bg-surface-3 text-ink" : "text-muted hover:text-ink"
                                )}
                            >
                                <Lock className="h-3 w-3" aria-hidden />
                                {f.tabCrm}
                            </button>
                        </div>
                    </div>

                    {/* viewport with crossfade */}
                    <div className="relative aspect-[16/10] bg-bg">
                        <Image
                            src="/projects/55hubcorp/site.png"
                            alt="55hubcorp.com public site"
                            fill
                            sizes="(min-width:1024px) 60vw, 100vw"
                            className={cn(
                                "object-cover object-top transition-opacity duration-500",
                                tab === "site" ? "opacity-100" : "opacity-0"
                            )}
                        />
                        <Image
                            src="/projects/55hubcorp/crm.png"
                            alt="+55 HUB internal CRM login"
                            fill
                            sizes="(min-width:1024px) 60vw, 100vw"
                            className={cn(
                                "object-cover object-top transition-opacity duration-500",
                                tab === "crm" ? "opacity-100" : "opacity-0"
                            )}
                        />
                    </div>
                </div>
                <p className="mt-3 flex items-center gap-1.5 text-xs text-muted">
                    <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--success)]" />
                    {tab === "crm" ? f.crmNote : f.liveNote}
                </p>
            </div>

            {/* Info */}
            <div>
                <div className="flex items-center gap-3">
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-[color:var(--line-glow)] bg-surface-2 px-3 py-1 text-xs text-violet-300">
                        {f.badge}
                    </span>
                    {p.year && <span className="font-mono text-xs text-muted">{p.year}</span>}
                </div>
                <h3 className="mt-4 font-display text-2xl font-bold tracking-tight text-ink md:text-3xl">
                    {p.title}
                </h3>
                <p className="mt-3 text-ink-2">{p.summary}</p>

                {p.metrics && (
                    <div className="mt-6 grid grid-cols-2 gap-x-6 gap-y-4">
                        {p.metrics.map((m) => (
                            <div key={m.label}>
                                <div className="font-mono text-lg font-medium text-ink">{m.value}</div>
                                <div className="mt-0.5 text-xs text-muted">{m.label}</div>
                            </div>
                        ))}
                    </div>
                )}

                <div className="mt-8 flex flex-wrap gap-3">
                    {p.demo && (
                        <a
                            href={p.demo}
                            target="_blank"
                            rel="noreferrer"
                            className={buttonClasses({ variant: "primary-grad" })}
                        >
                            {f.visit}
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
                            <Github className="h-4 w-4" aria-hidden /> {f.source}
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
}
