import type { Project } from "./types";

export type { Project } from "./types";

export const projects: Project[] = [
    {
        slug: "55hubcorp",
        title: "55hubcorp.com — +55 HUB Platform",
        category: "Product & Platform",
        year: "2025 – present",
        featured: true,
        role: "Solo Product & Platform Engineer (CPO/CTO) — built everything end-to-end",
        oneLiner:
            "A trilingual institutional platform and its own internal CRM, shipped solo on Cloudflare's edge.",
        summary:
            "The full digital platform for +55 HUB & Corporate Group: a multilingual (PT/EN/ES) public site with an interactive Readiness Scorecard, landing pages, a properties area and an AI-assisted blog — plus a purpose-built internal CRM that turns captured leads into a deals pipeline. Designed, built, secured and deployed solo on Astro 5 running on Cloudflare Workers, with D1, R2 and Workers AI.",
        context:
            "+55 HUB & Corporate Group helps international companies and investors land and expand in Brazil — real estate, global entry, and corporate services. They needed a single platform that speaks to a PT/EN/ES audience with an executive, high-trust feel, captures qualified leads from multiple entry points, and gives the internal team a real system to work those leads — without paying for and stitching together several SaaS tools.",
        problem:
            "Two normally-separate products had to live in one codebase and one budget: a marketing-grade public site (fast, multilingual, SEO-ready, conversion-oriented) and a back-office CRM (auth, roles, pipeline, analytics). It had to be cheap to run, secure enough for B2B financial partnerships and LGPD, and maintainable by a single person while the business scaled traffic.",
        solution: [
            "Public site (55hubcorp.com): trilingual PT/EN/ES institutional experience, an interactive Readiness Scorecard, two conversion landing pages (Real Estate; Global Entry & Expansion), a Properties area, and a Blog.",
            "Internal CRM (app.55hubcorp.com/console): lead capture, a deals Kanban, tasks, team & users management, blog and properties admin, settings, and an analytics dashboard.",
            "One repository, two products — sharing i18n, design system, auth and data layer to keep operating cost and maintenance low.",
            "Lead-to-deal pipeline: public forms feed straight into the CRM, so marketing capture and sales work happen in the same system.",
            "AI-assisted content: blog posts authored in Portuguese are auto-translated to EN and ES via Workers AI, keeping all three locales in sync without manual duplication.",
        ],
        highlights: [
            "Astro 5 (SSR + static islands) on Cloudflare Workers — edge-rendered, globally fast.",
            "Cloudflare D1 (SQLite) for data, R2 for file storage, Workers AI for PT→EN/ES blog translation.",
            "i18n via deep-merge: Portuguese is the base locale; EN/ES are overrides, missing keys fall back to PT — no blank strings.",
            "Interactive world globe on the home page: Canvas 2D via d3-geo + world-atlas, lazy-mounted through requestIdleCallback, pauses off-screen, static under prefers-reduced-motion.",
            "React island Readiness Scorecard with a radar chart — JS shipped only where it's needed.",
            "Lead → CRM pipeline hardened with Turnstile anti-bot, same-origin CSRF protection, and input sanitization.",
            "5-role RBAC hierarchy (viewer < closer < gestor < admin < super_admin) with per-owner data segregation.",
            "Security engineering: PBKDF2 + salt password hashing, hashed session tokens, login rate-limiting (per email and IP), CSP / HSTS / X-Content-Type-Options headers.",
            "Analytics funnel: conversion by stage, revenue won/lost, loss reasons and lead source, plus Cloudflare Web Analytics.",
        ],
        stack: [
            "Astro 5",
            "Cloudflare Workers",
            "Cloudflare D1 (SQLite)",
            "Cloudflare R2",
            "Workers AI",
            "React (islands)",
            "TypeScript",
            "Tailwind CSS v4",
            "d3-geo",
            "Turnstile",
        ],
        tags: ["Astro 5", "Cloudflare Workers", "D1", "Workers AI", "TypeScript"],
        metrics: [
            { value: "PT / EN / ES", label: "Trilingual, single codebase" },
            { value: "2 products", label: "Public site + internal CRM, one repo" },
            { value: "5 roles", label: "RBAC with data segregation" },
            { value: "Edge-native", label: "Astro 5 on Cloudflare Workers" },
        ],
        links: [
            { label: "Live site", href: "https://55hubcorp.com" },
            { label: "CRM app", href: "https://app.55hubcorp.com" },
            { label: "Source", href: "https://github.com/cesaints/mais55hub" },
        ],
        repo: "https://github.com/cesaints/mais55hub",
        demo: "https://55hubcorp.com",
        confidential: false,
    },
    {
        slug: "gov-systems-websis",
        title: "Mission-Critical Government Systems",
        category: "Enterprise / Government",
        year: "2022 – 2025",
        role: "Fullstack .NET Developer → Scrum Master",
        oneLiner:
            "Building and leading delivery of high-stakes systems for Brazilian federal agencies.",
        summary:
            "Development and agile delivery of mission-critical systems for Brazilian government bodies — ANTT (national land-transport agency), SEST SENAT, and SISRH — across a .NET / SQL Server / Angular stack. Grew from intern to fullstack developer to Scrum Master, shipping features and executive Power BI dashboards for public-sector operations.",
        context:
            "Websis Tecnologia builds and operates software for the Brazilian federal government. These systems support real regulatory and administrative operations, where availability, correctness and auditability are non-negotiable. The work spanned an intern year, a fullstack developer phase, and a Scrum Master phase leading delivery.",
        problem:
            "Public-sector systems carry strict requirements around reliability, data integrity and traceability, worked on by teams that must ship predictably against agency expectations. The challenge: deliver correct, performant features on a mature enterprise stack while keeping the team's cadence tight and stakeholder-visible.",
        solution: [
            "Developed and maintained features for ANTT, SEST SENAT and SISRH on a C# / ASP.NET (MVC) backend with Angular front-ends.",
            "Data access with both Dapper and Entity Framework over SQL Server, choosing the right tool per query-path.",
            "Integrated Elasticsearch for fast search over large operational datasets.",
            "Built executive Power BI dashboards giving leadership operational visibility.",
            "As Scrum Master, ran agile ceremonies and protected team cadence and delivery predictability.",
        ],
        highlights: [
            "Progression from Software Developer Intern → Fullstack .NET Developer → Scrum Master on the same mission-critical program.",
            "Enterprise .NET stack: C# / ASP.NET / MVC, Dapper + Entity Framework, SQL Server.",
            "Elasticsearch-backed search over operational data.",
            "Power BI executive dashboards for public-sector leadership.",
            "Agile leadership (Scrum) on government delivery with real accountability.",
        ],
        stack: [
            "C# / .NET",
            "ASP.NET (MVC)",
            "Angular",
            "Dapper",
            "Entity Framework",
            "SQL Server",
            "Elasticsearch",
            "Power BI",
            "Scrum",
        ],
        tags: ["C# / .NET", "Angular", "SQL Server", "Elasticsearch", "Scrum"],
        metrics: [
            { value: "3 agencies", label: "ANTT · SEST SENAT · SISRH" },
            { value: "Intern → SM", label: "Developer to Scrum Master" },
            { value: "Power BI", label: "Executive dashboards delivered" },
        ],
        confidential: true,
    },
    {
        slug: "cboo-modernization",
        title: "CBOO — Legacy Modernization & Database Architecture",
        category: "Modernization",
        year: "2024 – present",
        role: "Software Engineer & Database Administrator (freelance)",
        oneLiner:
            "Modernizing a legacy PHP/Bootstrap system to Vue.js — and re-architecting the database beneath it.",
        summary:
            "Full-stack modernization for CBOO (Conselho Brasileiro de Óptica e Optometria): migrating a legacy PHP/Bootstrap application to a Vue.js front-end while re-architecting the MySQL schema, migrating data, and tuning performance as the acting DBA — backups, access control, indexing and SQL optimization.",
        context:
            "CBOO is Brazil's council for optics and optometry. Its existing web system was a legacy PHP/Bootstrap application that needed modernizing for maintainability and a better user experience, while the underlying database needed real architectural and performance work.",
        problem:
            "Legacy code and an under-optimized database limited maintainability and performance. The system needed a modern front-end, a sound relational schema, safe data migration off the old structure, and ongoing database administration — all delivered by one engineer working directly with the organization.",
        solution: [
            "Led the full-stack modernization: legacy PHP/Bootstrap → a Vue.js front-end.",
            "Re-architected the MySQL schema and performed the data migration from the legacy structure.",
            "SQL optimization, performance tuning and indexing for faster, more reliable queries.",
            "Acting DBA: backups, access control, and day-to-day administration via phpMyAdmin and the CLI.",
            "Applied Clean Code practices to leave a maintainable codebase.",
        ],
        highlights: [
            "End-to-end ownership: front-end modernization + database architecture + DBA, solo.",
            "Legacy PHP/Bootstrap replaced with a Vue.js front-end.",
            "MySQL schema re-architecture with a real data migration path.",
            "Performance work: query optimization, indexing, tuning.",
            "Database administration: backups and access control (phpMyAdmin + CLI).",
        ],
        stack: [
            "Vue.js",
            "PHP (legacy)",
            "Bootstrap (legacy)",
            "MySQL",
            "phpMyAdmin",
            "SQL / DBA",
            "Clean Code",
        ],
        tags: ["Vue.js", "MySQL", "PHP", "DBA", "Performance"],
        metrics: [
            { value: "PHP → Vue.js", label: "Legacy front-end modernized" },
            { value: "Re-architected", label: "MySQL schema + data migration" },
            { value: "Since 2024", label: "Ongoing engagement" },
        ],
        confidential: true,
    },
];
