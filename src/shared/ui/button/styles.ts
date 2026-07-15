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
    "inline-flex items-center justify-center gap-2 rounded-xl font-medium transition-all duration-200 " +
    "disabled:opacity-50 disabled:pointer-events-none focus-visible:outline-none focus-visible:ring-2 " +
    "focus-visible:ring-violet-400 focus-visible:ring-offset-2 focus-visible:ring-offset-bg";

const sizes: Record<Size, string> = {
    md: "h-11 px-5 text-sm",
    lg: "h-12 px-6 text-base",
};

const variants: Record<Variant, string> = {
    primary:
        "bg-violet-600 text-white hover:bg-violet-500 hover:shadow-glow hover:-translate-y-px",
    "primary-grad":
        "text-white hover:brightness-110 hover:shadow-glow hover:-translate-y-px [background:var(--grad-brand)]",
    outline:
        "border border-line-strong bg-surface-1 text-ink hover:bg-surface-2 hover:border-[color:var(--line-glow)]",
    ghost: "bg-transparent text-muted hover:text-ink hover:bg-surface-1",
    success: "bg-[color:var(--success)] text-[#08110c] hover:brightness-110",
    danger: "bg-[color:var(--danger)] text-white hover:brightness-110",
};

/** Shared class builder so styled <Link>s can match the button system. */
export function buttonClasses(opts?: {
    variant?: Variant;
    size?: Size;
    className?: string;
}) {
    const { variant = "primary", size = "md", className } = opts ?? {};
    return cn(base, sizes[size], variants[variant], className);
}
