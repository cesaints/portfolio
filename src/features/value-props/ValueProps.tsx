"use client";
import Reveal from "@shared/ui/Reveal";
import { Section, SectionHeader } from "@/shared/ui/Section";
import { useI18n } from "@/shared/i18n/I18nProvider";

export default function ValueProps() {
    const { t } = useI18n();
    const v = t.values;

    return (
        <Section id="value" muted>
            <SectionHeader title={v.heading} subtitle={v.sub} />
            <div className="grid gap-px overflow-hidden rounded-md border border-line bg-line sm:grid-cols-2">
                {v.items.map((item, i) => (
                    <Reveal key={item.title} delay={i * 0.05}>
                        <div className="h-full bg-surface-1 p-7 md:p-8">
                            <span className="font-mono text-sm text-accent">
                                {String(i + 1).padStart(2, "0")}
                            </span>
                            <h3 className="mt-4 font-display text-xl font-bold tracking-[-0.01em] text-ink">
                                {item.title}
                            </h3>
                            <p className="mt-2 text-ink-2">{item.body}</p>
                        </div>
                    </Reveal>
                ))}
            </div>
        </Section>
    );
}
