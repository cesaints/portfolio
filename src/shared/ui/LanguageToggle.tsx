"use client";
import { useI18n } from "@/shared/i18n/I18nProvider";
import type { Lang } from "@/shared/i18n/dictionary";
import { cn } from "@shared/lib/cn";

const langs: { code: Lang; label: string }[] = [
    { code: "pt", label: "PT" },
    { code: "en", label: "EN" },
    { code: "es", label: "ES" },
];

export default function LanguageToggle({ className = "" }: { className?: string }) {
    const { lang, setLang } = useI18n();
    return (
        <div
            role="group"
            aria-label="Language"
            className={cn(
                "inline-flex items-center gap-0.5 rounded-lg border border-line bg-surface-1 p-0.5",
                className
            )}
        >
            {langs.map((l) => {
                const active = lang === l.code;
                return (
                    <button
                        key={l.code}
                        type="button"
                        onClick={() => setLang(l.code)}
                        aria-pressed={active}
                        className={cn(
                            "rounded-md px-2 py-1 text-xs font-semibold transition-colors",
                            active ? "bg-surface-3 text-ink" : "text-muted hover:text-ink"
                        )}
                    >
                        {l.label}
                    </button>
                );
            })}
        </div>
    );
}
