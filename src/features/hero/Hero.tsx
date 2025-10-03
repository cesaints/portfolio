// src/features/hero/Hero.tsx
"use client";
import Link from "next/link";
import AvatarFrame from "@shared/ui/AvatarFrame";
import Typewriter from "./Typewriter";

export default function Hero() {
    return (
        <section className="relative min-h-[84vh] flex items-center">
            <div className="container-std grid items-center gap-12 md:grid-cols-[340px_minmax(0,1fr)]">
                {/* Avatar */}
                <div className="justify-self-center md:justify-self-start">
                    <AvatarFrame w={340} h={460} />
                </div>

                {/* Texto */}
                <div className="min-w-0">
                    <h1 className="inline-block text-4xl md:text-6xl font-extrabold leading-tight tracking-tight translate-x-[-3.5px]">
                        Carlos Eduardo
                    </h1>




                    {/* Subtítulo com typewriter sem shift de layout */}
                    <div className="relative mt-3 h-7 md:h-8">
                        <p className="invisible text-xl text-neutral-300">
                            Full-Stack Developer • Data Engineer • AI Automation Specialist
                        </p>
                        <p className="absolute inset-0 text-xl text-neutral-300">
                            <Typewriter
                                text="Full-Stack Developer • Data Engineer • AI Automation Specialist"
                                speed={20}
                            />
                        </p>
                    </div>

                    <p className="mt-1 text-neutral-400">• Brasília - DF, BR</p>

                    <p className="mt-4 max-w-[60ch] text-neutral-300">
                        My background bridges software development, cloud infrastructure, and data
                        pipelines, enabling me to design, build, and scale applications that deliver
                        measurable business value.
                    </p>

                    {/* Ações */}
                    <div className="mt-7 flex flex-wrap items-center gap-3">
                        <Link
                            href="/projects"
                            className="px-5 py-3 rounded-xl bg-violet-600 hover:bg-violet-500 font-medium"
                        >
                            Projects
                        </Link>
                        <Link
                            href="/contact"
                            className="px-5 py-3 rounded-xl border border-neutral-700 hover:bg-neutral-800"
                        >
                            Contact
                        </Link>

                        {/* Social */}
                        <a
                            href="https://www.linkedin.com/in/carlossaints"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="LinkedIn"
                            title="LinkedIn"
                            className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-neutral-700 hover:bg-neutral-800"
                        >
                            {/* LinkedIn icon */}
                            <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                                <path d="M6.94 6.5a1.94 1.94 0 11-3.88 0 1.94 1.94 0 013.88 0zM3.5 8.75h3v10.75h-3V8.75zm6 0h2.86v1.47h.04c.4-.75 1.38-1.54 2.85-1.54 3.05 0 3.61 2 3.61 4.61v6.21h-3V13.8c0-1.34-.02-3.07-1.87-3.07-1.87 0-2.15 1.46-2.15 2.97v5.8h-3V8.75z" />
                            </svg>
                        </a>
                        <a
                            href="https://github.com/cesaints"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="GitHub"
                            title="GitHub"
                            className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-neutral-700 hover:bg-neutral-800"
                        >
                            {/* GitHub icon */}
                            <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                                <path d="M12 .5a12 12 0 00-3.8 23.4c.6.1.8-.3.8-.6v-2.1c-3.3.7-4-1.6-4-1.6-.6-1.4-1.3-1.8-1.3-1.8-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1.1 1.8 2.9 1.3 3.6 1 .1-.8.4-1.3.7-1.6-2.6-.3-5.3-1.3-5.3-5.9 0-1.3.5-2.4 1.2-3.3-.1-.3-.5-1.6.1-3.2 0 0 1-.3 3.4 1.2a11.7 11.7 0 016.2 0C16.1 6.6 17 7 17 7c.6 1.6.2 2.9.1 3.2.8.9 1.2 2 1.2 3.3 0 4.6-2.7 5.6-5.3 5.9.4.3.8 1 .8 2.1v3.1c0 .3.2.7.8.6A12 12 0 0012 .5z" />
                            </svg>
                        </a>
                    </div>

                </div>
            </div>
        </section>
    );
}
