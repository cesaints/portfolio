"use client";
import Link from "next/link";
import { buttonClasses } from "@shared/ui/button/styles";
import { useI18n } from "@/shared/i18n/I18nProvider";

export default function CTASection() {
    const { t } = useI18n();
    const c = t.cta;

    return (
        <div className="card relative overflow-hidden p-8 text-center md:p-14">
            <span
                aria-hidden
                className="pointer-events-none absolute inset-0 opacity-60"
                style={{
                    background:
                        "radial-gradient(600px 240px at 50% -20%, rgba(124,58,237,.22), transparent 60%)",
                }}
            />
            <div className="relative">
                <h2 className="font-display text-3xl font-bold tracking-tight text-ink md:text-4xl">
                    {c.heading}
                </h2>
                <p className="mx-auto mt-3 max-w-xl text-ink-2">{c.body}</p>
                <div className="mt-7 flex justify-center">
                    <Link href="/contact" className={buttonClasses({ variant: "primary-grad", size: "lg" })}>
                        {c.button}
                    </Link>
                </div>
            </div>
        </div>
    );
}
