"use client";
import { Section, SectionHeader } from "@/shared/ui/Section";
import Reveal from "@shared/ui/Reveal";
import FeaturedCaseStudy from "./FeaturedCaseStudy";
import { projects } from "@/entities/project/projects";
import { useI18n } from "@/shared/i18n/I18nProvider";

export default function FlagshipSection() {
    const { t } = useI18n();
    const featured = projects.find((p) => p.featured);
    if (!featured) return null;

    return (
        <Section id="flagship">
            <SectionHeader title={t.flagship.heading} subtitle={t.flagship.sub} />
            <Reveal>
                <FeaturedCaseStudy project={featured} />
            </Reveal>
        </Section>
    );
}
