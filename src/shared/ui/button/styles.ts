import { cn } from "@shared/lib/cn";

export type Variant =
    | "primary"
    | "primary-grad"
    | "outline"
    | "ghost"
    | "success"
    | "danger";
export type Size = "md" | "lg";

const base =
    "inline-flex items-center justify-center gap-2 rounded-md font-medium transition-colors duration-200 " +
    "disabled:opacity-50 disabled:pointer-events-none focus-visible:outline-none focus-visible:ring-2 " +
    "focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg";

const sizes: Record<Size, string> = {
    md: "h-11 px-5 text-sm",
    lg: "h-12 px-7 text-[15px]",
};

const variants: Record<Variant, string> = {
    // ink button that flips to the accent on hover
    primary: "bg-ink text-[color:var(--bg)] hover:bg-accent",
    // solid accent (used for the primary hero / CTA action)
    "primary-grad": "bg-accent text-white hover:bg-accent-600",
    outline:
        "border border-ink text-ink hover:bg-ink hover:text-[color:var(--bg)]",
    ghost: "text-ink hover:text-accent",
    success: "bg-ink text-[color:var(--bg)] hover:bg-accent",
    danger: "bg-accent text-white hover:bg-accent-600",
};

export function buttonClasses(opts?: {
    variant?: Variant;
    size?: Size;
    className?: string;
}) {
    const { variant = "primary", size = "md", className } = opts ?? {};
    return cn(base, sizes[size], variants[variant], className);
}
