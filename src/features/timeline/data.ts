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
    // 2025 —
    {
        id: "2025-udemy",
        date: "2025 (ongoing)",
        title: "Udemy — Data Engineering & AI Automation",
        org: "Udemy",
        summary:
            "Focused track to become a Data Engineer and AI Automation Specialist: Python for data, SQL optimization, ETL/ELT with Airflow and dbt, batch/stream pipelines on Spark/Kafka, data lakes and warehouses on AWS/GCP, infra with Docker/Terraform, and LLM/RAG automation (LangChain, vector DBs) with production-grade observability.",
        tags: ["Python", "SQL", "Airflow", "dbt", "Spark", "Kafka", "ETL/ELT", "Data Lake", "Data Warehouse", "AWS/GCP", "Docker", "Terraform", "LLM", "RAG", "LangChain", "Vector DB"],
        color: "violet",
        icon: "study",
    },
    {
        id: "2025-alura",
        date: "2025 (ongoing)",
        title: "Alura — Full-Stack & Data Track",
        org: "Alura",
        summary:
            "Structured multi-track curriculum covering TypeScript, React, Node.js, SQL/NoSQL, APIs, testing, Docker, and Git; complements with data workflows, cloud basics, and practical projects focused on product thinking and delivery.",
        tags: ["Full-Stack", "TypeScript", "React", "Node.js", "SQL/NoSQL", "APIs", "Testing", "Docker", "Git", "Cloud"],
        color: "cyan",
        icon: "study",
    },
    {
        id: "2025-curso-dev",
        date: "2025 (ongoing)",
        title: "Course: curso.dev — Full-Stack JavaScript",
        org: "Filipe Deschamps",
        summary:
            "Hands-on program building a real product end-to-end with TypeScript, React, and Node.js; emphasis on Clean Code, testing, architecture, CI/CD, and production-grade practices.",
        tags: ["Full-Stack", "TypeScript", "React", "Node.js", "Clean Code", "TDD", "Architecture", "CI/CD", "Docker", "Deploy"],
        color: "green",
        icon: "study",
    },
    {
        id: "2025-pg-innovation",
        date: "2025 – 2026 (ongoing)",
        title: "Postgrad · Innovation, AI & Robotics",
        org: "GRAN",
        summary: "Applied AI and automation to real products and workflows.",
        tags: ["AI", "Automation", "Robotics"],
        color: "violet",
        icon: "study",
    },
    {
        id: "2025-pg-process-projects",
        date: "2025 – 2026 (ongoing)",
        title: "Postgrad · Process & Project Management",
        org: "GRAN",
        summary: "Agile + PMBOK hybrid execution for delivery at scale.",
        tags: ["PMBOK", "Scrum", "Kanban"],
        color: "cyan",
        icon: "study",
    },
    {
        id: "2025-ai-automation",
        date: "2025 – present",
        title: "AI Automation & Full-Stack Projects",
        summary:
            "Applying studies to real products: LLM automations, data workflows, and small B2B SaaS experiments.",
        tags: ["AI Automation", "Next.js", "TypeScript"],
        color: "violet",
        icon: "star",
    },

    // 2024 —
    {
        id: "2024-cboo",
        date: "Nov 2024 – present",
        title: "Software Engineer (Full-Stack)",
        org: "Cboo",
        summary:
            "I led the maintenance and enhancement of the system, implementing new functionalities and managing data efficiently. I took full responsibility for migrating the system from PHP and Bootstrap to a more optimized and modern version using Vue.js. I refactored the entire codebase, applying Clean Code principles to improve performance, maintainability, and scalability.",
        tags: ["PHP", "Trello", "Laravel", "MySQL", "Infra", "Javascript", "Leadership"],
        color: "cyan",
        icon: "work",
    },
    {
        id: "2024-scrum-master",
        date: "Apr 2024 – present",
        title: "Scrum Master",
        org: "Websis",
        summary:
            "I facilitated team communication, promoted agile best practices, and removed impediments to ensure efficient project execution.I acted as a servant leader, protecting the team and fostering a culture of continuous improvement.I led Scrum ceremonies and applied agile frameworks to increase team efficiency and project delivery.I contributed to a government project, ensuring alignment with organizational objectives and compliance requirements.",
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
        id: "2023-prayer-site",
        date: "Nov 2023",
        title: "My Prayer Site — applied studies",
        summary:
            "Searchable catalog with clean reading. Built with Next.js + MongoDB and deployed globally on Vercel.",
        tags: ["Next.js", "MongoDB", "Vercel"],
        link: { href: "https://my-prayer-site.vercel.app", label: "Live demo" },
        color: "green",
        icon: "code",
    },
    {
        id: "2023-2024-websis",
        date: "Sep 2023 – Apr 2024",
        title: "Software Developer (.NET)",
        org: "Websis",
        summary:
            "C# and .NET Developer specializing in ASP.NET, Angular, Dapper, Entity Framework, and SQL Server.Expert in the development and maintenance of government systems, including ANTT, SEST SENAT, and SISRH.Proficient in implementing Elasticsearch, MVC architecture, and Clean Code principles to optimize performance, scalability, and maintainability of systems.",
        tags: ["C#", ".NET", "ASP.NET", "SQL Server", "Dapper", "Angular", "Entity Framework", "Elasticsearch"],
        color: "cyan",
        icon: "work",
    },
    {
        id: "2023-pmi-hackathon",
        date: "2023",
        title: "2nd place — PMI-DF Hackathon",
        summary:
            "Team award delivering a viable solution under time constraints; scope control and agile cadence.",
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
            "Joined after a competitive college workshop (top-4). Features across ASP.NET, Angular, SQL Server, and Elasticsearch.",
        tags: [".NET", "Angular", "SQL Server"],
        color: "green",
        icon: "work",
    },
    {
        id: "2022-tcb-trainee",
        date: "Jul 2022 – Oct 2022",
        title: "Trainee — first industry program",
        org: "TCB (Brasília)",
        summary:
            "Network infrastructure and IT support. First professional exposure to enterprise environments.",
        tags: ["Networking", "Ops"],
        color: "cyan",
        icon: "work",
    },
    {
        id: "2022-udf",
        date: "2022 – 2024",
        title: "Associate Degree — Systems Analysis",
        org: "UDF",
        summary:
            "Core software engineering, databases, and web technologies; pivot toward business to strengthen persuasion and stakeholder communication.",
        tags: ["Software Eng.", "Databases", "Communication"],
        color: "green",
        icon: "study",
    },
];

export default data;
