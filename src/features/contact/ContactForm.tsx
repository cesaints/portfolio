// src/features/contact/ContactForm.tsx
"use client";
import { useState } from "react";
import emailjs from "@emailjs/browser"; // use este pacote
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema, ContactInput } from "@shared/validations/contact";
import Button from "@shared/ui/button/Button";
import { Input, Textarea } from "@shared/ui/input/Input";

export default function ContactForm() {
    const [sent, setSent] = useState<"ok" | "err" | null>(null);
    const { register, handleSubmit, formState: { errors, isSubmitting }, reset } =
        useForm<ContactInput>({ resolver: zodResolver(contactSchema) });

    const onSubmit = async (data: ContactInput) => {
        setSent(null);
        try {
            const res = await emailjs.send(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,      // service_ljxp7sr
                process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,     // template_5sgfkng
                {
                    from_name: data.name,       // <- casa com {{from_name}}
                    from_email: data.email,     // <- casa com {{from_email}}
                    message: data.message,
                    title: "Portfolio",
                },
                process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!       // pk_...
            );
            if (res.status === 200) { setSent("ok"); reset(); } else { setSent("err"); }
        } catch (e: any) {
            console.error("EmailJS error:", e?.text || e?.message || e);
            setSent("err");
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="card p-6 space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
                <div>
                    <Input {...register("name")} placeholder="Your name" />
                    {errors.name && <p className="mt-1 text-sm text-red-400">{errors.name.message}</p>}
                </div>
                <div>
                    <Input {...register("email")} type="email" placeholder="Your email" autoComplete="email" />
                    {errors.email && <p className="mt-1 text-sm text-red-400">{errors.email.message}</p>}
                </div>
            </div>
            <div>
                <Textarea {...register("message")} placeholder="Your message" className="h-32" />
                {errors.message && <p className="mt-1 text-sm text-red-400">{errors.message.message}</p>}
            </div>
            <div className="flex items-center gap-3">
                <Button disabled={isSubmitting}>{isSubmitting ? "Sending..." : "Send message"}</Button>
                {sent === "ok" && <p className="text-emerald-400">Message sent. Thank you.</p>}
                {sent === "err" && <p className="text-red-400">Failed to send. Check config and try again.</p>}
            </div>
        </form>
    );
}
