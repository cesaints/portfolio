import { Section, SectionHeader } from "@/shared/ui/Section";
import { Timeline } from "@/features/timeline";

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
