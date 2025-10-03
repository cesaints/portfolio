import ProjectCard from "./ProjectCard";
import { projects } from "@/entities/project/projects"; 

export default function ProjectsGrid() {
    return (
        <section className="section">
            <div className="container-std">
                <h2 className="h2">Projects</h2>

                <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {projects.map((p) => (
                        <ProjectCard key={p.slug} p={p} />
                    ))}
                </div>
            </div>
        </section>
    );
}
