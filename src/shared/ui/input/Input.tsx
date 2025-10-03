"use client";
import { cn } from "@shared/lib/cn";
export function Input(props: React.InputHTMLAttributes<HTMLInputElement>) {
    return (
        <input
            {...props}
            className={cn(
                "w-full rounded-md bg-neutral-900/60 border border-neutral-800 p-3 outline-none focus:border-violet-600",
                props.className
            )}
        />
    );
}
export function Textarea(props: React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
    return (
        <textarea
            {...props}
            className={cn(
                "w-full rounded-md bg-neutral-900/60 border border-neutral-800 p-3 outline-none focus:border-violet-600",
                props.className
            )}
        />
    );
}
