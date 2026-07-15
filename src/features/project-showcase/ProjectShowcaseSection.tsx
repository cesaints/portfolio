"use client";
import { Section, SectionHeader } from "@/shared/ui/Section";
import Reveal from "@shared/ui/Reveal";
import ProjectShowcase from "./ProjectShowcase";
import { projects } from "@/entities/project/projects";
import { useI18n } from "@/shared/i18n/I18nProvider";

export default function ProjectShowcaseSection() {
    const { t } = useI18n();
    return (
        <Section id="work">
            <SectionHeader title={t.work.heading} subtitle={t.work.sub} />
            <Reveal>
                <ProjectShowcase projects={projects} />
            </Reveal>
        </Section>
    );
}
