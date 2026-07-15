"use client";
import Link from "next/link";
import { buttonClasses } from "@shared/ui/button/styles";
import { useI18n } from "@/shared/i18n/I18nProvider";

export default function CTASection() {
    const { t } = useI18n();
    const c = t.cta;

    return (
        <div className="rounded-md bg-ink px-8 py-16 md:px-14 md:py-24">
            <div className="max-w-3xl">
                <h2 className="font-display text-3xl font-extrabold leading-[1.05] tracking-[-0.02em] text-[color:var(--bg)] md:text-5xl">
                    {c.heading}
                </h2>
                <p className="mt-5 max-w-xl text-lg text-[color:var(--surface-3)]">
                    {c.body}
                </p>
                <div className="mt-9">
                    <Link
                        href="/contact"
                        className={buttonClasses({ variant: "primary-grad", size: "lg" })}
                    >
                        {c.button}
                    </Link>
                </div>
            </div>
        </div>
    );
}
