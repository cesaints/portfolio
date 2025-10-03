"use client";
import { cn } from "@shared/lib/cn";

type Variant = "primary" | "ghost" | "outline" | "success" | "danger";

const base = "px-5 py-3 rounded-xl font-medium transition disabled:opacity-60";
const variants: Record<Variant, string> = {
    primary: "bg-violet-600 hover:bg-violet-500",
    ghost: "bg-neutral-800 hover:bg-neutral-700",
    outline: "border border-neutral-700 hover:bg-neutral-800",
    success: "bg-emerald-600 hover:bg-emerald-500",
    danger: "bg-red-600 hover:bg-red-500",
};

export default function Button(
    { className, variant = "primary", ...props }:
        React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: Variant }
) {
    return <button {...props} className={cn(base, variants[variant], className)} />;
}
