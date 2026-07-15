"use client";
import { cn } from "@shared/lib/cn";

const fieldBase =
    "w-full rounded-xl border border-line bg-surface-1 px-4 py-3 text-ink placeholder:text-muted-2 " +
    "transition-colors focus:border-[color:var(--line-glow)] focus:outline-none focus:ring-2 focus:ring-violet-400/40";

export function Input(props: React.InputHTMLAttributes<HTMLInputElement>) {
    return <input {...props} className={cn(fieldBase, props.className)} />;
}

export function Textarea(props: React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
    return <textarea {...props} className={cn(fieldBase, props.className)} />;
}
