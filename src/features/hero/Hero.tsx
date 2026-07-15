"use client";
import Link from "next/link";
import AvatarFrame from "@shared/ui/AvatarFrame";
import Typewriter from "./Typewriter";
import { buttonClasses } from "@shared/ui/button/styles";
import { siteConfig } from "@/shared/config/seo";
import { useI18n } from "@/shared/i18n/I18nProvider";

export default function Hero() {
    const { t } = useI18n();
    const h = t.hero;

    return (
        <section
            className="relative flex min-h-[88vh] items-center pt-20 md:pt-28"
            aria-labelledby="hero-name"
        >
            <div
                aria-hidden
                className="aurora pointer-events-none absolute -inset-[10%] -z-10"
                style={{ background: "var(--g-hero)" }}
            />
            <div className="container-std grid items-center gap-12 md:grid-cols-[340px_minmax(0,1fr)]">
                <div className="justify-self-center md:justify-self-start">
                    <AvatarFrame w={340} h={460} />
                </div>

                <div className="min-w-0">
                    <p className="eyebrow">{h.eyebrow}</p>

                    <h1
                        id="hero-name"
                        className="mt-3 font-display text-5xl font-extrabold leading-[1.02] tracking-[-0.03em] md:text-7xl"
                    >
                        Carlos Eduardo
                    </h1>

                    <p className="mt-4 font-display text-xl font-semibold tracking-tight text-ink md:text-2xl">
                        {h.roleTitle} · <span className="text-gradient">{h.roleShort}</span>
                        <span className="block text-base font-normal text-muted">{h.org}</span>
                    </p>

                    <div className="mt-5 flex h-7 items-center md:h-8">
                        <Typewriter text={h.taglines} className="text-lg text-ink-2 md:text-xl" />
                    </div>

                    <p className="mt-5">
                        <span className="inline-flex items-center gap-2 rounded-lg border border-line bg-surface-1 px-2.5 py-1 text-[13px] text-muted md:text-sm">
                            <span
                                aria-hidden
                                className="pulse-soft h-1.5 w-1.5 rounded-full bg-[color:var(--success)] shadow-[0_0_6px_rgba(52,211,153,.6)]"
                            />
                            {h.location}
                        </span>
                    </p>

                    <p className="mt-6 max-w-[60ch] text-lg leading-relaxed text-ink-2">
                        {h.pitch}
                    </p>

                    <div className="mt-8 flex flex-wrap items-center gap-3">
                        <Link href="/projects" className={buttonClasses({ variant: "primary-grad", size: "lg" })}>
                            {h.ctaPrimary}
                        </Link>
                        <Link href="/contact" className={buttonClasses({ variant: "outline", size: "lg" })}>
                            {h.ctaSecondary}
                        </Link>

                        <a
                            href={siteConfig.socials.linkedin}
                            target="_blank"
                            rel="noreferrer"
                            aria-label="LinkedIn"
                            title="LinkedIn"
                            className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-line bg-surface-1 text-ink-2 transition-colors hover:border-line-strong hover:bg-surface-2"
                        >
                            <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                                <path d="M6.94 6.5a1.94 1.94 0 11-3.88 0 1.94 1.94 0 013.88 0zM3.5 8.75h3v10.75h-3V8.75zm6 0h2.86v1.47h.04c.4-.75 1.38-1.54 2.85-1.54 3.05 0 3.61 2 3.61 4.61v6.21h-3V13.8c0-1.34-.02-3.07-1.87-3.07-1.87 0-2.15 1.46-2.15 2.97v5.8h-3V8.75z" />
                            </svg>
                        </a>
                        <a
                            href={siteConfig.socials.github}
                            target="_blank"
                            rel="noreferrer"
                            aria-label="GitHub"
                            title="GitHub"
                            className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-line bg-surface-1 text-ink-2 transition-colors hover:border-line-strong hover:bg-surface-2"
                        >
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
