// Types and data for the Timeline
export type TimelineItem = {
    id: string;
    date: string;
    title: string;
    org?: string;
    summary: string;
    tags?: string[];
    link?: { href: string; label: string };
    color?: "violet" | "cyan" | "green";
    icon?: "star" | "work" | "code" | "study";
};

const data: TimelineItem[] = [
    // 2026 — the promotion (holding umbrella)
    {
        id: "2026-distopico-cpto",
        date: "2026 – present",
        title: "Diretor de Produto e Tecnologia (CPTO)",
        org: "Distópico Holding",
        summary:
            "Promoted from Head of Product to lead product and technology end-to-end across the Distópico holding and its +55 HUB & Corporate Group. Own the product roadmap (PMF, UX/UI across the customer journey), architecture & scalability (99.9% uptime target), Security & Compliance (LGPD), agile team leadership (Scrum/Kanban — 8 landing pages, 3 websites and a CRM in 13 days), and systems integration (Bitrix CRM). Built the group platforms solo — 55hubcorp.com and distopicoglobal.com — and structured a data-driven RevOps motion. KPIs owned: Technical Churn, Product NPS, Lead Time, Deployment Frequency, SLA.",
        tags: ["Product Strategy", "Architecture", "RevOps", "LGPD", "Cloudflare", "Next.js", "Astro"],
        color: "violet",
        icon: "star",
    },

    // 2025 — founder
    {
        id: "2025-aprovaki-founder",
        date: "2025 – present",
        title: "Founder & CEO",
        org: "Aprovaki (TreinaEdital)",
        summary:
            "Founded and lead Aprovaki, the company behind TreinaEdital, a study platform for Brazilian public-service exams. Set the product vision and built the platform end-to-end: a Turborepo monorepo with three Next.js apps (public site, student app, admin) over a shared package layer. PostgreSQL with Prisma, NextAuth v5 with mandatory 2FA for admin, Stripe payments (card and Pix) with server-side pricing and idempotent webhooks, Cloudflare R2 with signed links, and AI-generated and reviewed questions with Anthropic Claude. Own strategy, engineering, security (LGPD) and go-to-market.",
        tags: ["Founder", "CEO", "Product Strategy", "Next.js", "Turborepo", "PostgreSQL", "Prisma", "Stripe", "NextAuth", "Claude AI"],
        color: "violet",
        icon: "star",
    },

    // 2025 —
    {
        id: "2025-pg-innovation",
        date: "2025 – 2026",
        title: "Postgrad · Innovation, AI & Robotics",
        org: "GRAN",
        summary: "Applied AI and automation to real products and workflows.",
        tags: ["AI", "Automation", "Robotics"],
        color: "violet",
        icon: "study",
    },
    {
        id: "2025-pg-process-projects",
        date: "2025 – 2026",
        title: "Postgrad · Process & Project Management",
        org: "GRAN",
        summary: "Agile + PMBOK hybrid execution for delivery at scale.",
        tags: ["PMBOK", "Scrum", "Kanban"],
        color: "cyan",
        icon: "study",
    },

    // 2024 —
    {
        id: "2024-cboo",
        date: "Nov 2024 – present",
        title: "Software Engineer (Full-Stack)",
        org: "CBOO",
        summary:
            "Lead the full-stack modernization of a legacy PHP/Bootstrap system to Vue.js, owning database architecture, data migration, and performance optimization; designed and maintained the MySQL schema (integrity, normalization, efficient queries); wrote and tuned complex SQL for reporting and business logic (JOINs, subqueries, aggregations, conditional transformations); handled DBA tasks (backups, access control, migrations between legacy and modern stacks); performed performance analysis and indexing to cut response times on critical endpoints; administered MySQL via phpMyAdmin and CLI (DDL/DML, schema changes, production data fixes); migrated the full codebase to Vue.js applying Clean Code for maintainability/scalability; co-defined app+DB architecture with stakeholders, prioritizing work with clear technical impact analysis.",
        tags: ["PHP", "Clean Code", "Laravel", "MySQL", "Vue.js", "Data migration", "Database architecture", "SQL optimization", "Performance tuning", "DBA tasks", "phpMyAdmin", "CLI", "Full-stack modernization"],
        color: "cyan",
        icon: "work",
    },
    {
        id: "2024-scrum-master",
        date: "Apr 2024 – present",
        title: "Scrum Master",
        org: "Websis",
        summary:
            "Scrum Master for cross-functional squads delivering mission-critical government systems built on SQL Server and .NET; facilitated Agile ceremonies (Daily, Sprint Planning, Review, Retrospective) and removed impediments for dev/DB teams; coordinated database deliverables (schema changes, stored procedure deployments, data migrations) across production environments; built Power BI dashboards for executive visibility (DB performance KPIs, delivery metrics); ensured alignment across development, infrastructure, and DBA teams on backups, security compliance, and system integration; promoted Agile culture and continuous improvement to meet organizational and regulatory requirements.",
        tags: ["Scrum", "Agile", "Kanban", "Power BI", "Gitlab", "Communication", "Leadership"],
        color: "green",
        icon: "work",
    },
    {
        id: "2024-certifications",
        date: "2024",
        title: "Certifications",
        summary: "Scrum and quality credentials.",
        tags: [
            "Scrum Fundamentals Certified",
            "Registered Scrum Basics™",
            "Six Sigma Yellow Belt",
        ],
        color: "cyan",
        icon: "study",
    },

    // 2023 —
    {
        id: "2023-2024-websis",
        date: "Sep 2023 – Apr 2024",
        title: "Software Developer (.NET)",
        org: "Websis",
        summary:
            "C# and .NET Developer specializing in ASP.NET, Angular, Dapper, Entity Framework, and SQL Server. Expert in the development and maintenance of government systems, including ANTT, SEST SENAT, and SISRH. Proficient in implementing Elasticsearch, MVC architecture, and Clean Code principles to optimize performance, scalability, and maintainability of systems.",
        tags: ["C#", ".NET", "ASP.NET", "SQL Server", "Dapper", "Angular", "Entity Framework", "Elasticsearch"],
        color: "cyan",
        icon: "work",
    },
    {
        id: "2023-pmi-hackathon",
        date: "2023",
        title: "2nd place — PMI-DF Hackathon",
        summary:
            "The 2nd place award was won for the college (UDF) at the PMI-DF hackathon.",
        tags: ["Hackathon", "PMI-DF"],
        color: "violet",
        icon: "star",
    },

    // 2022 —
    {
        id: "2022-2023-websis",
        date: "Sep 2022 – Sep 2023",
        title: "Intern → Full-Stack Developer (.NET)",
        org: "Websis",
        summary:
            "Full-Stack Web Development Intern, contributing to sustainability systems and financial projects. Assisted in the development and optimization of services using C#, .NET, ASP.NET, MVC, SQL Server, Dapper, and Entity Framework. Gained hands-on experience with front-end technologies such as React and Angular, supporting the delivery of scalable and maintainable solutions.",
        tags: [".NET", "Angular", "SQL Server", "Dapper", "Entity Framework", "React", "MVC"],
        color: "green",
        icon: "work",
    },
    {
        id: "2022-tcb-trainee",
        date: "Jul 2022 – Oct 2022",
        title: "Trainee — first industry program",
        org: "TCB (Brasília)",
        summary:
            "Trainee Developer, responsible for migrating a system from PHP and Laravel to a new architecture using Java, Spring Boot, and Angular. Gained valuable experience in technical support and networking, troubleshooting issues, and ensuring system stability. Developed problem-solving skills while working in a dynamic and collaborative environment.",
        tags: ["Spring Boot", "PHP", "Laravel", "Angular", "Technical Support", "MySQL"],
        color: "cyan",
        icon: "work",
    },
    {
        id: "2022-udf",
        date: "2022 – 2024",
        title: "Systems Analysis and Development",
        org: "UDF",
        summary:
            "Core software engineering, databases, and web technologies; pivot toward business to strengthen persuasion and stakeholder communication.",
        tags: ["Software Eng.", "Databases", "Communication"],
        color: "green",
        icon: "study",
    },
];

export default data;
