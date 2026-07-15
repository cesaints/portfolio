import { cn } from "@shared/lib/cn";

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
        <div className="mb-8">
            <h2 className="h2">{title}</h2>
            {subtitle && <p className="sub mt-2">{subtitle}</p>}
        </div>
    );
}
