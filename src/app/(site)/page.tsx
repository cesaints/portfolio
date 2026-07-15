import type { Metadata } from "next";
import { Hero } from "@/features/hero";
import { StatsStrip } from "@/features/stats";
import { About } from "@/features/about";
import { ValueProps } from "@/features/value-props";
import { CTASection } from "@/features/cta";
import { ProjectCard, FeaturedCaseStudy } from "@/features/project-showcase";
import { Section, SectionHeader } from "@/shared/ui/Section";
import Reveal from "@/shared/ui/Reveal";
import { projects } from "@/entities/project/projects";
import { siteConfig, buildMetadata } from "@/shared/config/seo";

export const metadata: Metadata = buildMetadata({
    title: siteConfig.defaultTitle,
    path: "/",
    absoluteTitle: true,
});

export default function HomePage() {
    const featured = projects.find((p) => p.featured);
    const others = projects.filter((p) => !p.featured);

    return (
        <>
            <Hero />

            <StatsStrip />

            <Section id="about">
                <SectionHeader
                    title="From engineer to product & technology leader"
                    subtitle="A rare combination — I own the roadmap and the architecture."
                />
                <About />
            </Section>

            <Section id="value" muted>
                <SectionHeader
                    title="What I optimize"
                    subtitle="The KPIs I own, translated into how I work."
                />
                <ValueProps />
            </Section>

            {featured && (
                <Section id="flagship">
                    <SectionHeader
                        title="Flagship build"
                        subtitle="The +55 HUB platform — designed, built, secured and shipped solo."
                    />
                    <Reveal>
                        <FeaturedCaseStudy project={featured} />
                    </Reveal>
                </Section>
            )}

            <Section id="work" muted>
                <SectionHeader
                    title="Selected work"
                    subtitle="Mission-critical, professional engagements."
                />
                <div className="grid gap-6 md:grid-cols-2">
                    {others.map((p, i) => (
                        <Reveal key={p.slug} delay={i * 0.05}>
                            <ProjectCard p={p} className="h-full" />
                        </Reveal>
                    ))}
                </div>
            </Section>

            <Section>
                <CTASection />
            </Section>
        </>
    );
}
