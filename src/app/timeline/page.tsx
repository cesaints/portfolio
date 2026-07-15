"use client";
import { Section, SectionHeader } from "@/shared/ui/Section";
import { Timeline } from "@/features/timeline";
import { useI18n } from "@/shared/i18n/I18nProvider";

export default function TimelinePage() {
    const { t } = useI18n();
    return (
        <>
            <Section>
                <SectionHeader title={t.timelinePage.heading} subtitle={t.timelinePage.sub} />
            </Section>
            <Timeline />
        </>
    );
}
