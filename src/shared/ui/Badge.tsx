import { cn } from "@shared/lib/cn";

/** Small bordered chip, editorial mono style. */
export default function Badge({
    children,
    className,
    tone = "default",
}: {
    children: React.ReactNode;
    className?: string;
    tone?: "default" | "muted" | "accent";
}) {
    const tones = {
        default: "border-line bg-surface-2 text-ink-2",
        muted: "border-line bg-transparent text-muted",
        accent: "border-accent text-accent bg-transparent",
    } as const;
    return (
        <span
            className={cn(
                "inline-flex items-center gap-1.5 rounded border px-2 py-0.5 font-mono text-xs",
                tones[tone],
                className
            )}
        >
            {children}
        </span>
    );
}
