import type { Metadata } from "next";
import { Hero } from "@/features/hero";
import { StatsStrip } from "@/features/stats";
import { About } from "@/features/about";
import { ValueProps } from "@/features/value-props";
import { CTASection } from "@/features/cta";
import { ProjectShowcaseSection } from "@/features/project-showcase";
import { Section } from "@/shared/ui/Section";
import { siteConfig, buildMetadata } from "@/shared/config/seo";

export const metadata: Metadata = buildMetadata({
    title: siteConfig.defaultTitle,
    path: "/",
    absoluteTitle: true,
});

export default function HomePage() {
    return (
        <>
            <Hero />
            <StatsStrip />
            <About />
            <ValueProps />
            <ProjectShowcaseSection />
            <Section>
                <CTASection />
            </Section>
        </>
    );
}
