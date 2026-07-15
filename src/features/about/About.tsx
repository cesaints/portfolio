import Link from "next/link";
import Badge from "@shared/ui/Badge";

const clusters: { label: string; skills: string[] }[] = [
    { label: "Product", skills: ["Strategy", "Roadmap", "PMF", "UX/UI", "RevOps"] },
    { label: "Engineering", skills: ["Architecture", "TypeScript", ".NET", "Vue / Next", "Cloudflare"] },
    { label: "Data & Cloud", skills: ["SQL / NoSQL", "Azure", "Docker", "Power BI"] },
    { label: "Leadership", skills: ["Scrum / Kanban", "LGPD", "Team delivery"] },
];

export default function About() {
    return (
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="max-w-prose space-y-5 text-lg leading-relaxed text-ink-2">
                <p>
                    I started in the code — government-grade code, actually — building and
                    testing mission-critical systems for ANTT, SEST SENAT and SISRH as a
                    full-stack .NET developer, then leading delivery as a Scrum Master. Along the
                    way I ran database architecture and performance as a DBA, and modernized
                    legacy PHP platforms into Vue.js. I have owned software at every layer, from
                    the SQL index to the sprint board.
                </p>
                <p>
                    That depth pulled me toward the decisions above the code. At{" "}
                    <span className="text-ink">+55 HUB &amp; Corporate Group</span> I moved from
                    Head of Product to{" "}
                    <span className="text-ink">
                        Diretor de Produto e Tecnologia (CPO/CTO)
                    </span>{" "}
                    — owning what we build, how it scales, and how it converts. I built the
                    company&apos;s entire platform solo: a multilingual PT/EN/ES public site and an
                    internal CRM with a full lead-to-deal pipeline, RBAC and analytics, on
                    Cloudflare Workers, D1 and Workers AI.
                </p>
                <p>
                    The rare part is the combination. Most product leaders can&apos;t read the
                    architecture; most engineers don&apos;t own the roadmap. I do both — product
                    decisions grounded in what the code can actually do, RevOps designed by
                    someone who wired the CRM, and security treated as engineering, not
                    paperwork. Strategy on Monday, a pull request on Tuesday.
                </p>
                <p className="text-base">
                    <Link
                        href="/timeline"
                        className="text-violet-400 underline decoration-dotted underline-offset-4 hover:text-violet-300"
                    >
                        See the full career timeline →
                    </Link>
                </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
                {clusters.map((c) => (
                    <div key={c.label} className="card p-5">
                        <p className="eyebrow">{c.label}</p>
                        <div className="mt-3 flex flex-wrap gap-2">
                            {c.skills.map((s) => (
                                <Badge key={s}>{s}</Badge>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
