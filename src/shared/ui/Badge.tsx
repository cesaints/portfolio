import { cn } from "@shared/lib/cn";

/** Small chip used for tech tags, categories and status. */
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
        muted: "border-line bg-surface-1 text-muted",
        accent: "border-[color:var(--line-glow)] bg-surface-2 text-violet-400",
    } as const;
    return (
        <span
            className={cn(
                "inline-flex items-center gap-1.5 rounded-lg border px-2.5 py-1 text-xs font-medium",
                tones[tone],
                className
            )}
        >
            {children}
        </span>
    );
}
