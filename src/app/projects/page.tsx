import { projects } from "@/entities/project/projects";
import { ProjectCard, FeaturedCaseStudy } from "@features/project-showcase";
import { Section, SectionHeader } from "@/shared/ui/Section";
import Reveal from "@/shared/ui/Reveal";

export default function ProjectsPage() {
    const featured = projects.find((p) => p.featured);
    const others = projects.filter((p) => !p.featured);

    return (
        <Section>
            <SectionHeader
                title="Case studies"
                subtitle="Selected work across product, architecture, UX/UI and database engineering."
            />

            {featured && (
                <div className="mb-8">
                    <FeaturedCaseStudy project={featured} />
                </div>
            )}

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
