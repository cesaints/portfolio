import type { LucideIcon } from "lucide-react";
import { Code2, Workflow, ServerCog, ShieldCheck } from "lucide-react";

export type ValueProp = {
    icon: LucideIcon;
    title: string;
    body: string;
};

export const valueProps: ValueProp[] = [
    {
        icon: Code2,
        title: "Product decisions grounded in code",
        body: "I set the roadmap knowing exactly what the architecture can ship — no promises the engineering can't keep.",
    },
    {
        icon: Workflow,
        title: "RevOps that shortens lead → deal",
        body: "Data-driven RevOps end-to-end — CRM, tracking and integrations (Bitrix hub) tuned to cut lead time and lift conversion.",
    },
    {
        icon: ServerCog,
        title: "Architecture that scales without breaking",
        body: "Designed for traffic growth without performance loss, targeting 99.9% uptime, with the KPIs owned end-to-end.",
    },
    {
        icon: ShieldCheck,
        title: "Security & compliance by design",
        body: "LGPD and financial-grade data protection built in — RBAC, hashed sessions, rate-limiting, hardened headers.",
    },
];
