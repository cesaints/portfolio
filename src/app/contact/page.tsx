import { Section, SectionHeader } from "@/shared/ui/Section";
import { ContactForm } from "@/features/contact";

export default function ContactPage() {
    return (
        <>
            <Section>
                <div className="container-std text-center">
                    <SectionHeader
                        title="Contact"
                        subtitle="Send me a message and I’ll get back to you."
                    />
                </div>
            </Section>

            <Section>
                <div className="container-std">
                    <div className="mx-auto w-full max-w-2xl">
                        <ContactForm />
                    </div>
                </div>
            </Section>
        </>
    );
}
