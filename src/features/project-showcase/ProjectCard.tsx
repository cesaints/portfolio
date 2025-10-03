"use client";
import Image from "next/image";
import { useState } from "react";
import type { Project } from "@/entities/project/projects";

export default function ProjectCard({ p }: { p: Project }) {
    const [open, setOpen] = useState(false);

    return (
        <>
            <article
                className="group relative overflow-hidden rounded-3xl border border-neutral-800/70
                   bg-neutral-950/60 shadow-[0_0_0_1px_rgba(124,58,237,.06)]
                   transition-all hover:-translate-y-0.5 hover:border-violet-600/50"
            >
                {/* brilho suave no hover */}
                <span className="pointer-events-none absolute inset-0 -z-10 rounded-3xl
                         opacity-0 blur-2xl transition-opacity duration-500
                         group-hover:opacity-40
                         bg-[conic-gradient(from_220deg,#7c3aed_0%,#22d3ee_50%,#7c3aed_100%)]" />

                {/* cover */}
                <div className="relative m-4 overflow-hidden rounded-2xl">
                    <div className="relative h-48 sm:h-56 w-full rounded-2xl ring-1 ring-white/5 bg-neutral-900">
                        <Image
                            src={p.cover}
                            alt={`${p.title} — cover`}
                            fill
                            sizes="(min-width:1024px) 520px, 100vw"
                            className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                            priority
                        />
                        {/* tags sobre a imagem */}
                        <div className="absolute left-3 top-3 flex gap-2">
                            {p.tags.slice(0, 3).map((t) => (
                                <span
                                    key={t}
                                    className="rounded-full border border-white/10 bg-black/45 px-2.5 py-1 text-xs text-neutral-200 backdrop-blur"
                                >
                                    {t}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                {/* conteúdo */}
                <div className="px-6 pb-6">
                    <div className="mb-2 flex items-center gap-2 text-xs text-violet-300/80">
                        <SparklesIcon className="h-4 w-4" />
                        <span className="tracking-wide">DESTAQUE</span>
                    </div>

                    <h3 className="text-xl font-semibold tracking-tight">{p.title}</h3>
                    <p className="mt-2 line-clamp-2 text-neutral-400">{p.summary}</p>

                    <div className="mt-5 flex items-center gap-2">
                        {p.repo && (
                            <a
                                href={p.repo}
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center gap-2 rounded-xl border border-neutral-700
                           px-3 py-2 text-sm text-neutral-200 transition-colors hover:bg-neutral-800"
                            >
                                <GitHubIcon className="h-4 w-4" /> GitHub
                            </a>
                        )}
                        {p.demo && (
                            <a
                                href={p.demo}
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center gap-2 rounded-xl bg-violet-600 px-3 py-2
                           text-sm font-medium text-white transition-colors hover:bg-violet-500"
                            >
                                <ExternalIcon className="h-4 w-4" /> Demo
                            </a>
                        )}
                        <button
                            onClick={() => setOpen(true)}
                            className="ml-auto text-sm text-neutral-300 underline decoration-dotted
                         underline-offset-4 hover:text-white"
                        >
                            About
                        </button>
                    </div>
                </div>
            </article>

            {/* MODAL */}
            {open && (
                <div
                    className="fixed inset-0 z-50 grid place-items-center p-6"
                    onClick={() => setOpen(false)}
                >
                    {/* backdrop */}
                    <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

                    {/* conteúdo */}
                    <div
                        className="relative w-full max-w-3xl overflow-hidden rounded-3xl border border-white/10
                       bg-neutral-950 text-neutral-200 shadow-2xl"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* hero do modal */}
                        <div className="relative h-56 w-full">
                            <Image
                                src={p.cover}
                                alt={`${p.title} cover`}
                                fill
                                className="object-cover"
                                sizes="(min-width:1024px) 768px, 100vw"
                            />
                            <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-neutral-950" />
                            <h4 className="absolute bottom-4 left-5 text-2xl font-semibold drop-shadow">
                                {p.title}
                            </h4>
                        </div>

                        <div className="space-y-5 p-5">
                            <p className="text-neutral-300">{p.summary}</p>

                            {/* chips */}
                            <div className="flex flex-wrap gap-2">
                                {p.tags.map((t) => (
                                    <span
                                        key={t}
                                        className="rounded-full border border-white/10 bg-black/40 px-3 py-1 text-xs backdrop-blur"
                                    >
                                        {t}
                                    </span>
                                ))}
                            </div>

                            <div className="flex gap-2">
                                {p.repo && (
                                    <a
                                        href={p.repo}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="inline-flex items-center gap-2 rounded-xl border border-neutral-700
                               px-3 py-2 text-sm hover:bg-neutral-800"
                                    >
                                        <GitHubIcon className="h-4 w-4" />
                                        Repo
                                    </a>
                                )}
                                {p.demo && (
                                    <a
                                        href={p.demo}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="inline-flex items-center gap-2 rounded-xl bg-violet-600 px-3 py-2
                               text-sm font-medium text-white hover:bg-violet-500"
                                    >
                                        <ExternalIcon className="h-4 w-4" />
                                        Open demo
                                    </a>
                                )}
                            </div>

                            <div className="pt-2 text-right">
                                <button
                                    onClick={() => setOpen(false)}
                                    className="rounded-xl border border-neutral-700 px-4 py-2 text-sm hover:bg-neutral-800"
                                >
                                    Close
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

/* === Ícones inline para não depender de libs === */
function SparklesIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
            <path d="M9.3 2.7c.3-.9 1.6-.9 1.9 0l.8 2.6c.2.7.7 1.2 1.4 1.4l2.6.8c.9.3.9 1.6 0 1.9l-2.6.8c-.7.2-1.2.7-1.4 1.4l-.8 2.6c-.3.9-1.6.9-1.9 0l-.8-2.6c-.2-.7-.7-1.2-1.4-1.4l-2.6-.8c-.9-.3-.9-1.6 0-1.9l2.6-.8c.7-.2 1.2-.7 1.4-1.4l.8-2.6z" />
            <path d="M18 14.5l.5-1.5.5 1.5 1.5.5-1.5.5-.5 1.5-.5-1.5-1.5-.5 1.5-.5z" />
        </svg>
    );
}
function GitHubIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
            <path d="M12 .5a12 12 0 00-3.8 23.4c.6.1.8-.3.8-.6v-2.1c-3.3.7-4-1.6-4-1.6-.6-1.4-1.3-1.8-1.3-1.8-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1.1 1.8 2.9 1.3 3.6 1 .1-.8.4-1.3.7-1.6-2.6-.3-5.3-1.3-5.3-5.9 0-1.3.5-2.4 1.2-3.3-.1-.3-.5-1.6.1-3.2 0 0 1-.3 3.4 1.2a11.7 11.7 0 016.2 0C16.1 6.6 17 7 17 7c.6 1.6.2 2.9.1 3.2.8.9 1.2 2 1.2 3.3 0 4.6-2.7 5.6-5.3 5.9.4.3.8 1 .8 2.1v3.1c0 .3.2.7.8.6A12 12 0 0012 .5z" />
        </svg>
    );
}
function ExternalIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
            <path d="M14 3h7v7h-2V7.4l-8.3 8.3-1.4-1.4L17.6 6H14V3z" />
            <path d="M5 5h6v2H7v10h10v-4h2v6H5V5z" />
        </svg>
    );
}
