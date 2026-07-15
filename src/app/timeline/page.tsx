import type { Metadata } from "next";
import { Section, SectionHeader } from "@/shared/ui/Section";
import { Timeline } from "@/features/timeline";
import { buildMetadata } from "@/shared/config/seo";

export const metadata: Metadata = buildMetadata({
    title: "Timeline",
    path: "/timeline",
    description:
        "Career timeline of Carlos Eduardo (Cadu): from Software Developer Intern to " +
        "Diretor de Produto e Tecnologia (CPO/CTO) at +55 HUB — Websis, CBOO, TCB, education and certifications.",
});

export default function TimelinePage() {
    return (
        <>
            <Section>
                <div className="container-std text-center">
                    <SectionHeader
                        title="My trajectory"
                        subtitle="Training, experiences and milestones."
                    />
                </div>
            </Section>
            <Timeline />
        </>
    );
}
