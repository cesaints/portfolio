"use client";
import { useI18n } from "@/shared/i18n/I18nProvider";

export default function LanguageToggle({ className = "" }: { className?: string }) {
    const { lang, toggle, t } = useI18n();
    return (
        <button
            type="button"
            onClick={toggle}
            aria-label={lang === "pt" ? "Switch to English" : "Mudar para Português"}
            className={`inline-flex h-9 items-center gap-1.5 rounded-lg border border-line bg-surface-1 px-3 text-xs font-semibold text-muted transition-colors hover:border-line-strong hover:text-ink ${className}`}
        >
            <span className="text-ink">{lang.toUpperCase()}</span>
            <span aria-hidden className="text-muted-2">/</span>
            <span>{t.switchTo}</span>
        </button>
    );
}
