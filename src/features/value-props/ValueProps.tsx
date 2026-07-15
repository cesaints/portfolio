"use client";
import { Code2, Workflow, ServerCog, ShieldCheck, type LucideIcon } from "lucide-react";
import Reveal from "@shared/ui/Reveal";
import { Section, SectionHeader } from "@/shared/ui/Section";
import { useI18n } from "@/shared/i18n/I18nProvider";

const icons: LucideIcon[] = [Code2, Workflow, ServerCog, ShieldCheck];

export default function ValueProps() {
    const { t } = useI18n();
    const v = t.values;

    return (
        <Section id="value" muted>
            <SectionHeader title={v.heading} subtitle={v.sub} />
            <div className="grid gap-5 sm:grid-cols-2">
                {v.items.map((item, i) => {
                    const Icon = icons[i % icons.length];
                    return (
                        <Reveal key={item.title} delay={i * 0.05}>
                            <div className="card h-full p-6 md:p-8">
                                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-line bg-surface-2 text-violet-400">
                                    <Icon className="h-5 w-5" aria-hidden />
                                </span>
                                <h3 className="mt-4 font-display text-lg font-semibold text-ink">
                                    {item.title}
                                </h3>
                                <p className="mt-2 text-ink-2">{item.body}</p>
                            </div>
                        </Reveal>
                    );
                })}
            </div>
        </Section>
    );
}
