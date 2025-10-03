// server component
import { projects } from "@/entities/project/projects";
import ProjectCard from "@features/project-showcase/ProjectCard";
import { Section, SectionHeader } from "@/shared/ui/Section";

export default function ProjectsPage() {
    return (
        <>
            <Section>
                <div className="container-std text-center">
                    <SectionHeader
                        title="Projects"
                        subtitle="Selected work in product, architecture, and UX/UI."
                    />
                </div>
            </Section>

            <Section>
                <div className="container-std">
                    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                        {projects.map((p) => (
                            <ProjectCard key={p.slug} p={p} />
                        ))}
                    </div>
                </div>
            </Section>
        </>
    );
}
