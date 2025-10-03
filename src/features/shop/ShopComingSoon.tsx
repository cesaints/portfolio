import { Section, SectionHeader } from "@shared/ui/Section";

export default function ShopComingSoon() {
    return (
        <Section id="shop">
            <SectionHeader title="Shop" subtitle="Em construção — em breve produtos digitais." />
            <div className="card p-10 text-center">
                <div className="text-neutral-500 text-lg">🚧 Coming soon...</div>
            </div>
        </Section>
    );
}
