"use client";
import { createContext, useContext, useEffect, useState } from "react";
import { dictionary, type Lang, type Dict } from "./dictionary";

type I18nContextValue = {
    lang: Lang;
    setLang: (l: Lang) => void;
    toggle: () => void;
    t: Dict;
};

const I18nContext = createContext<I18nContextValue | null>(null);
const DEFAULT_LANG: Lang = "en";
const STORAGE_KEY = "cadu-lang";

export function I18nProvider({ children }: { children: React.ReactNode }) {
    const [lang, setLangState] = useState<Lang>(DEFAULT_LANG);

    // Restore the stored preference after mount (SSR renders the default lang).
    useEffect(() => {
        const stored = localStorage.getItem(STORAGE_KEY);
        if (stored === "pt" || stored === "en" || stored === "es") setLangState(stored);
    }, []);

    useEffect(() => {
        document.documentElement.lang =
            lang === "pt" ? "pt-BR" : lang === "es" ? "es" : "en";
    }, [lang]);

    const setLang = (l: Lang) => {
        setLangState(l);
        try {
            localStorage.setItem(STORAGE_KEY, l);
        } catch {
            /* ignore */
        }
    };
    const order: Lang[] = ["en", "pt", "es"];
    const toggle = () => setLang(order[(order.indexOf(lang) + 1) % order.length]);

    return (
        <I18nContext.Provider value={{ lang, setLang, toggle, t: dictionary[lang] }}>
            {children}
        </I18nContext.Provider>
    );
}

export function useI18n() {
    const ctx = useContext(I18nContext);
    if (!ctx) throw new Error("useI18n must be used within I18nProvider");
    return ctx;
}
