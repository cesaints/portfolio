"use client";
import { useMemo, useState } from "react";
import emailjs from "@emailjs/browser";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { makeContactSchema, ContactInput } from "@shared/validations/contact";
import Button from "@shared/ui/button/Button";
import { Input, Textarea } from "@shared/ui/input/Input";
import { useI18n } from "@/shared/i18n/I18nProvider";

export default function ContactForm() {
    const { t } = useI18n();
    const c = t.contact;
    const [sent, setSent] = useState<"ok" | "err" | null>(null);

    const schema = useMemo(
        () => makeContactSchema({ name: c.validName, email: c.validEmail, message: c.validMessage }),
        [c.validName, c.validEmail, c.validMessage]
    );

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset,
    } = useForm<ContactInput>({ resolver: zodResolver(schema) });

    const onSubmit = async (data: ContactInput) => {
        setSent(null);
        try {
            // Sender name + email are sent under several common template variable
            // names so the EmailJS template captures them regardless of its setup.
            // reply_to lets you reply straight to the sender from your inbox.
            const res = await emailjs.send(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
                process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
                {
                    from_name: data.name,
                    name: data.name,
                    from_email: data.email,
                    email: data.email,
                    reply_to: data.email,
                    message: data.message,
                    title: "Portfolio contact",
                    subject: `Portfolio contact from ${data.name}`,
                },
                process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
            );
            if (res.status === 200) {
                setSent("ok");
                reset();
            } else {
                setSent("err");
            }
        } catch (e: unknown) {
            const err = e as { text?: string; message?: string };
            console.error("EmailJS error:", err?.text || err?.message || e);
            setSent("err");
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="card space-y-4 p-6">
            <div className="grid gap-4 sm:grid-cols-2">
                <div>
                    <Input {...register("name")} placeholder={c.namePh} autoComplete="name" />
                    {errors.name && (
                        <p className="mt-1 text-sm text-[color:var(--danger)]">{errors.name.message}</p>
                    )}
                </div>
                <div>
                    <Input
                        {...register("email")}
                        type="email"
                        placeholder={c.emailPh}
                        autoComplete="email"
                    />
                    {errors.email && (
                        <p className="mt-1 text-sm text-[color:var(--danger)]">{errors.email.message}</p>
                    )}
                </div>
            </div>
            <div>
                <Textarea {...register("message")} placeholder={c.messagePh} className="h-32" />
                {errors.message && (
                    <p className="mt-1 text-sm text-[color:var(--danger)]">{errors.message.message}</p>
                )}
            </div>
            <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center">
                <Button disabled={isSubmitting} className="w-full sm:w-auto">
                    {isSubmitting ? c.sending : c.send}
                </Button>
                {sent === "ok" && <p className="text-[color:var(--success)]">{c.ok}</p>}
                {sent === "err" && <p className="text-[color:var(--danger)]">{c.err}</p>}
            </div>
        </form>
    );
}
