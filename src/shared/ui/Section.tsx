import { cn } from "@shared/lib/cn";
import Reveal from "@shared/ui/Reveal";

export function Section({ id, muted = false, children }: {
    id?: string; muted?: boolean; children: React.ReactNode;
}) {
    return (
        <section id={id} className={cn("section", muted && "section-muted")}>
            <div className="container-std">{children}</div>
        </section>
    );
}

export function SectionHeader({ title, subtitle }: {
    title: string; subtitle?: string;
}) {
    return (
        <Reveal className="mb-10 md:mb-12">
            <h2 className="h2">{title}</h2>
            {subtitle && <p className="sub mt-3 max-w-2xl text-lg">{subtitle}</p>}
        </Reveal>
    );
}
