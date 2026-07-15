"use client";
import { Mail, MapPin, Linkedin, Github } from "lucide-react";
import { Section, SectionHeader } from "@/shared/ui/Section";
import { ContactForm } from "@/features/contact";
import { siteConfig } from "@/shared/config/seo";
import { useI18n } from "@/shared/i18n/I18nProvider";

export default function ContactPage() {
    const { t } = useI18n();
    const c = t.contact;

    return (
        <Section>
            <SectionHeader title={c.heading} subtitle={c.sub} />

            <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
                <div className="space-y-4">
                    <ContactMeta
                        icon={<Mail className="h-5 w-5" aria-hidden />}
                        label={c.emailLabel}
                        value={siteConfig.socials.email}
                        href={`mailto:${siteConfig.socials.email}`}
                    />
                    <ContactMeta
                        icon={<MapPin className="h-5 w-5" aria-hidden />}
                        label={c.locationLabel}
                        value={c.locationValue}
                    />
                    <ContactMeta
                        icon={<Linkedin className="h-5 w-5" aria-hidden />}
                        label={c.linkedinLabel}
                        value="in/carlossaints"
                        href={siteConfig.socials.linkedin}
                    />
                    <ContactMeta
                        icon={<Github className="h-5 w-5" aria-hidden />}
                        label={c.githubLabel}
                        value="cesaints"
                        href={siteConfig.socials.github}
                    />
                </div>

                <ContactForm />
            </div>
        </Section>
    );
}

function ContactMeta({
    icon,
    label,
    value,
    href,
}: {
    icon: React.ReactNode;
    label: string;
    value: string;
    href?: string;
}) {
    const inner = (
        <div className="card flex items-center gap-4 p-5">
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-line bg-surface-2 text-violet-400">
                {icon}
            </span>
            <div>
                <p className="text-xs uppercase tracking-[0.12em] text-muted">{label}</p>
                <p className="text-ink">{value}</p>
            </div>
        </div>
    );
    return href ? (
        <a
            href={href}
            target={href.startsWith("http") ? "_blank" : undefined}
            rel={href.startsWith("http") ? "noreferrer" : undefined}
            className="block transition-transform hover:-translate-y-0.5"
        >
            {inner}
        </a>
    ) : (
        inner
    );
}
