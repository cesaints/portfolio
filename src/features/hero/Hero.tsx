"use client";
import Link from "next/link";
import AvatarFrame from "@shared/ui/AvatarFrame";
import { buttonClasses } from "@shared/ui/button/styles";
import { siteConfig } from "@/shared/config/seo";
import { useI18n } from "@/shared/i18n/I18nProvider";

export default function Hero() {
    const { t } = useI18n();
    const h = t.hero;

    return (
        <section
            className="relative pt-16 md:pt-24"
            aria-labelledby="hero-name"
        >
            <div className="container-std">
                <div className="grid items-end gap-10 md:grid-cols-[1fr_280px]">
                    <div className="min-w-0">
                        <p className="eyebrow">{h.eyebrow}</p>

                        <h1
                            id="hero-name"
                            className="mt-5 font-display text-6xl font-black leading-[0.95] tracking-[-0.03em] text-ink sm:text-7xl md:text-8xl"
                        >
                            Carlos
                            <br />
                            Eduardo
                        </h1>

                        <p className="mt-6 font-display text-2xl font-bold tracking-[-0.01em] text-ink md:text-3xl">
                            {h.roleTitle}
                            <span className="text-accent"> · {h.roleShort}</span>
                        </p>
                        <p className="mt-1 font-mono text-sm text-muted">{h.org}</p>
                    </div>

                    <div className="justify-self-start md:justify-self-end">
                        <AvatarFrame w={280} h={340} />
                    </div>
                </div>

                <div className="mt-10 h-px w-full bg-line" />

                <div className="mt-10 grid gap-10 md:grid-cols-[1fr_auto] md:items-start">
                    <p className="max-w-prose text-xl leading-relaxed text-ink-2">
                        {h.pitch}
                    </p>

                    <div className="flex flex-col items-start gap-5">
                        <div className="flex flex-wrap items-center gap-3">
                            <Link
                                href="/projects"
                                className={buttonClasses({ variant: "primary", size: "lg" })}
                            >
                                {h.ctaPrimary}
                            </Link>
                            <Link
                                href="/contact"
                                className={buttonClasses({ variant: "outline", size: "lg" })}
                            >
                                {h.ctaSecondary}
                            </Link>
                        </div>

                        <div className="flex items-center gap-5 font-mono text-xs text-muted">
                            <span className="inline-flex items-center gap-1.5">
                                <span
                                    aria-hidden
                                    className="pulse-soft h-1.5 w-1.5 rounded-full bg-accent"
                                />
                                {h.location}
                            </span>
                        </div>

                        <div className="flex items-center gap-4">
                            <a
                                href={siteConfig.socials.linkedin}
                                target="_blank"
                                rel="noreferrer"
                                className="text-sm text-ink-2 underline-offset-4 transition-colors hover:text-accent hover:underline"
                            >
                                LinkedIn
                            </a>
                            <a
                                href={siteConfig.socials.github}
                                target="_blank"
                                rel="noreferrer"
                                className="text-sm text-ink-2 underline-offset-4 transition-colors hover:text-accent hover:underline"
                            >
                                GitHub
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
