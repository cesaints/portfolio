"use client";
import { projects } from "@/entities/project/projects";
import { ProjectShowcase } from "@features/project-showcase";
import { Section, SectionHeader } from "@/shared/ui/Section";
import { useI18n } from "@/shared/i18n/I18nProvider";

export default function ProjectsPage() {
    const { t } = useI18n();
    return (
        <Section>
            <SectionHeader title={t.projectsPage.heading} subtitle={t.projectsPage.sub} />
            <ProjectShowcase projects={projects} />
        </Section>
    );
}
