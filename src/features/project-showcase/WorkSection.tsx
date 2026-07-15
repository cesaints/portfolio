"use client";
import { Section, SectionHeader } from "@/shared/ui/Section";
import Reveal from "@shared/ui/Reveal";
import ProjectCard from "./ProjectCard";
import { projects } from "@/entities/project/projects";
import { useI18n } from "@/shared/i18n/I18nProvider";

export default function WorkSection() {
    const { t } = useI18n();
    const others = projects.filter((p) => !p.featured);

    return (
        <Section id="work" muted>
            <SectionHeader title={t.work.heading} subtitle={t.work.sub} />
            <div className="grid gap-6 md:grid-cols-2">
                {others.map((p, i) => (
                    <Reveal key={p.slug} delay={i * 0.05}>
                        <ProjectCard p={p} className="h-full" />
                    </Reveal>
                ))}
            </div>
        </Section>
    );
}
