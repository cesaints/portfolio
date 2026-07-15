// Localized case-study and timeline text, keyed by language then slug/id.
// Structural data (tags, stack, links, colors, icons) stays in the entities;
// only human text lives here. No em-dashes anywhere.
import type { Lang } from "./dictionary";
import type { Project } from "@/entities/project/types";
import type { TimelineItem } from "@/features/timeline/data";

export type CaseStudyText = {
    title: string;
    oneLiner: string;
    summary: string;
    role: string;
    context: string;
    problem: string;
    solution: string[];
    highlights: string[];
    metrics: { value: string; label: string }[];
};

export const caseStudyText: Record<Lang, Record<string, CaseStudyText>> = {
    en: {
        "55hubcorp": {
            title: "55hubcorp.com, the +55 HUB platform",
            oneLiner: "A trilingual public platform and its own internal CRM, shipped solo on Cloudflare's edge.",
            summary:
                "The full digital platform for +55 HUB & Corporate Group. A multilingual PT/EN/ES public site with an interactive Readiness Scorecard, landing pages, a properties area and an AI assisted blog, plus a purpose built internal CRM that turns captured leads into a deals pipeline. Designed, built, secured and deployed on my own with Astro 5 on Cloudflare Workers, D1, R2 and Workers AI.",
            role: "Product and platform engineer (CPO/CTO), built end to end",
            context:
                "+55 HUB & Corporate Group helps international companies and investors land and expand in Brazil, across real estate, global entry and corporate services. They needed one platform that speaks to a PT/EN/ES audience with a high trust feel, captures qualified leads from several entry points, and gives the internal team a real system to work those leads, without paying for and stitching together several SaaS tools.",
            problem:
                "Two products that usually live apart had to share one codebase and one budget. A marketing grade public site (fast, multilingual, SEO ready) and a back office CRM (auth, roles, pipeline, analytics). It had to be cheap to run, secure enough for B2B financial partnerships and LGPD, and maintainable by one person while the business scaled traffic.",
            solution: [
                "Public site (55hubcorp.com): trilingual PT/EN/ES experience, an interactive Readiness Scorecard, two conversion landing pages, a properties area and a blog.",
                "Internal CRM (app.55hubcorp.com): lead capture, a deals Kanban, tasks, team and users management, blog and properties admin, settings and analytics.",
                "One repository, two products, sharing i18n, design system, auth and data layer to keep cost and maintenance low.",
                "Lead to deal pipeline: public forms feed straight into the CRM, so marketing capture and sales work happen in the same system.",
                "AI assisted content: posts written in Portuguese are auto translated to EN and ES with Workers AI, keeping all three locales in sync.",
            ],
            highlights: [
                "Astro 5 (SSR plus static islands) on Cloudflare Workers, edge rendered and globally fast.",
                "Cloudflare D1 (SQLite) for data, R2 for file storage, Workers AI for PT to EN/ES translation.",
                "i18n by deep merge: Portuguese is the base, EN/ES are overrides, missing keys fall back to PT.",
                "Interactive world globe (Canvas 2D with d3-geo), lazy mounted, pauses off screen, static under reduced motion.",
                "React island Readiness Scorecard with a radar chart, so JS ships only where it is needed.",
                "Hardened lead pipeline: Turnstile anti bot, same origin CSRF protection, input sanitization.",
                "5 role RBAC (viewer, closer, gestor, admin, super_admin) with per owner data segregation.",
                "Security: PBKDF2 with salt, hashed session tokens, login rate limiting, CSP and HSTS headers.",
                "Analytics funnel: conversion by stage, revenue won and lost, loss reasons and lead source.",
            ],
            metrics: [
                { value: "PT/EN/ES", label: "Trilingual, single codebase" },
                { value: "2 products", label: "Public site and internal CRM" },
                { value: "5 roles", label: "RBAC with data segregation" },
                { value: "Edge", label: "Astro 5 on Cloudflare Workers" },
            ],
        },
        "gov-systems-websis": {
            title: "Mission critical government systems",
            oneLiner: "Building and leading delivery of high stakes systems for Brazilian federal agencies.",
            summary:
                "Development and agile delivery of mission critical systems for Brazilian government bodies (ANTT, SEST SENAT and SISRH) on a .NET, SQL Server and Angular stack. I grew from intern to fullstack developer to Scrum Master, shipping features and executive Power BI dashboards for public sector operations.",
            role: "Fullstack .NET developer, then Scrum Master",
            context:
                "Websis Tecnologia builds and runs software for the Brazilian federal government. These systems support real regulatory and administrative operations, where availability, correctness and auditability are not negotiable.",
            problem:
                "Public sector systems carry strict requirements around reliability, data integrity and traceability, and are worked on by teams that must ship predictably against agency expectations. The job was to deliver correct, performant features on a mature enterprise stack while keeping cadence tight and visible to stakeholders.",
            solution: [
                "Built and maintained features for ANTT, SEST SENAT and SISRH on a C# and ASP.NET (MVC) backend with Angular front ends.",
                "Data access with both Dapper and Entity Framework over SQL Server, picking the right tool per query path.",
                "Integrated Elasticsearch for fast search over large operational datasets.",
                "Built executive Power BI dashboards that gave leadership operational visibility.",
                "As Scrum Master, ran the agile ceremonies and protected team cadence and delivery predictability.",
            ],
            highlights: [
                "Grew from Software Developer Intern to Fullstack .NET Developer to Scrum Master on the same program.",
                "Enterprise .NET stack: C#, ASP.NET, MVC, Dapper, Entity Framework, SQL Server.",
                "Elasticsearch backed search over operational data.",
                "Power BI executive dashboards for public sector leadership.",
                "Agile leadership on government delivery with real accountability.",
            ],
            metrics: [
                { value: "3", label: "Agencies: ANTT, SEST SENAT, SISRH" },
                { value: "Intern to SM", label: "Developer to Scrum Master" },
                { value: "Power BI", label: "Executive dashboards delivered" },
            ],
        },
        "cboo-modernization": {
            title: "CBOO, legacy modernization and database architecture",
            oneLiner: "Modernizing a legacy PHP system to Vue.js, and re architecting the database beneath it.",
            summary:
                "Full stack modernization for CBOO (Conselho Brasileiro de Óptica e Optometria). Migrating a legacy PHP and Bootstrap application to a Vue.js front end while re architecting the MySQL schema, migrating data, and tuning performance as the acting DBA (backups, access control, indexing and SQL optimization).",
            role: "Software Engineer & Architect, DBA (freelance)",
            context:
                "CBOO is Brazil's council for optics and optometry. Its web system was a legacy PHP and Bootstrap application that needed modernizing for maintainability and a better user experience, while the database needed real architectural and performance work.",
            problem:
                "Legacy code and an under optimized database limited maintainability and performance. The system needed a modern front end, a sound relational schema, safe data migration off the old structure, and ongoing database administration, all delivered by one engineer working directly with the organization.",
            solution: [
                "Led the full stack modernization from legacy PHP and Bootstrap to a Vue.js front end.",
                "Re architected the MySQL schema and ran the data migration from the legacy structure.",
                "SQL optimization, performance tuning and indexing for faster, more reliable queries.",
                "Acting DBA: backups, access control, and day to day administration via phpMyAdmin and the CLI.",
                "Applied Clean Code practices to leave a maintainable codebase.",
            ],
            highlights: [
                "End to end ownership: front end modernization plus database architecture plus DBA, solo.",
                "Legacy PHP and Bootstrap replaced with a Vue.js front end.",
                "MySQL schema re architecture with a real data migration path.",
                "Performance work: query optimization, indexing, tuning.",
                "Database administration: backups and access control via phpMyAdmin and CLI.",
            ],
            metrics: [
                { value: "PHP to Vue", label: "Legacy front end modernized" },
                { value: "Re architected", label: "MySQL schema and data migration" },
                { value: "Since 2024", label: "Ongoing engagement" },
            ],
        },
    },
    pt: {
        "55hubcorp": {
            title: "55hubcorp.com, a plataforma da +55 HUB",
            oneLiner: "Uma plataforma pública trilíngue e o CRM interno dela, publicados sozinho na edge da Cloudflare.",
            summary:
                "A plataforma digital completa da +55 HUB & Corporate Group. Um site público multilíngue PT/EN/ES com um Readiness Scorecard interativo, landing pages, uma área de imóveis e um blog com apoio de IA, além de um CRM interno feito sob medida que transforma leads em um pipeline de negócios. Desenhado, construído, protegido e publicado por mim com Astro 5 em Cloudflare Workers, D1, R2 e Workers AI.",
            role: "Engenheiro de produto e plataforma (CPO/CTO), feito de ponta a ponta",
            context:
                "A +55 HUB & Corporate Group ajuda empresas e investidores internacionais a chegar e crescer no Brasil, em imóveis, entrada global e serviços corporativos. Eles precisavam de uma plataforma que falasse com um público PT/EN/ES com ar de confiança, capturasse leads qualificados de várias portas de entrada, e desse ao time interno um sistema de verdade para trabalhar esses leads, sem pagar e amarrar várias ferramentas SaaS.",
            problem:
                "Dois produtos que costumam viver separados tinham que dividir um só código e um só orçamento. Um site público de nível marketing (rápido, multilíngue, pronto para SEO) e um CRM de retaguarda (login, papéis, pipeline, análises). Tinha que ser barato de rodar, seguro para parcerias financeiras B2B e LGPD, e mantido por uma pessoa enquanto o negócio escalava o tráfego.",
            solution: [
                "Site público (55hubcorp.com): experiência trilíngue PT/EN/ES, um Readiness Scorecard interativo, duas landing pages de conversão, uma área de imóveis e um blog.",
                "CRM interno (app.55hubcorp.com): captura de leads, um Kanban de negócios, tarefas, gestão de time e usuários, administração de blog e imóveis, configurações e análises.",
                "Um repositório, dois produtos, compartilhando i18n, design system, autenticação e camada de dados para manter custo e manutenção baixos.",
                "Pipeline de lead a negócio: os formulários públicos caem direto no CRM, então captura de marketing e trabalho de vendas acontecem no mesmo sistema.",
                "Conteúdo com apoio de IA: posts escritos em português são traduzidos automaticamente para EN e ES com Workers AI, mantendo os três idiomas em sincronia.",
            ],
            highlights: [
                "Astro 5 (SSR mais ilhas estáticas) em Cloudflare Workers, renderizado na edge e rápido no mundo todo.",
                "Cloudflare D1 (SQLite) para dados, R2 para arquivos, Workers AI para tradução de PT para EN/ES.",
                "i18n por deep merge: o português é a base, EN/ES são overrides, chaves ausentes caem para PT.",
                "Globo do mundo interativo (Canvas 2D com d3-geo), carregado sob demanda, pausa fora da tela, estático com reduced motion.",
                "Readiness Scorecard como ilha React com gráfico radar, então o JS só vai onde é preciso.",
                "Pipeline de lead reforçado: anti bot Turnstile, proteção CSRF de mesma origem, sanitização de entrada.",
                "RBAC de 5 papéis (viewer, closer, gestor, admin, super_admin) com segregação de dados por dono.",
                "Segurança: PBKDF2 com salt, tokens de sessão com hash, rate limiting no login, headers CSP e HSTS.",
                "Funil de análises: conversão por etapa, receita ganha e perdida, motivos de perda e origem do lead.",
            ],
            metrics: [
                { value: "PT/EN/ES", label: "Trilíngue, um só código" },
                { value: "2 produtos", label: "Site público e CRM interno" },
                { value: "5 papéis", label: "RBAC com segregação de dados" },
                { value: "Edge", label: "Astro 5 na Cloudflare Workers" },
            ],
        },
        "gov-systems-websis": {
            title: "Sistemas críticos de governo",
            oneLiner: "Construção e liderança de entrega de sistemas de alto risco para órgãos federais.",
            summary:
                "Desenvolvimento e entrega ágil de sistemas críticos para órgãos do governo brasileiro (ANTT, SEST SENAT e SISRH) em uma stack .NET, SQL Server e Angular. Passei de estagiário a desenvolvedor fullstack e a Scrum Master, entregando funcionalidades e dashboards executivos em Power BI para operações do setor público.",
            role: "Desenvolvedor fullstack .NET, depois Scrum Master",
            context:
                "A Websis Tecnologia constrói e opera software para o governo federal brasileiro. Esses sistemas sustentam operações regulatórias e administrativas reais, onde disponibilidade, correção e auditabilidade não são negociáveis.",
            problem:
                "Sistemas do setor público têm requisitos rígidos de confiabilidade, integridade e rastreabilidade, e são tocados por times que precisam entregar de forma previsível diante das expectativas do órgão. O trabalho era entregar funcionalidades corretas e performáticas em uma stack corporativa madura, mantendo a cadência apertada e visível para os stakeholders.",
            solution: [
                "Construí e mantive funcionalidades para ANTT, SEST SENAT e SISRH em um backend C# e ASP.NET (MVC) com front ends em Angular.",
                "Acesso a dados com Dapper e Entity Framework sobre SQL Server, escolhendo a ferramenta certa para cada caminho de consulta.",
                "Integração com Elasticsearch para busca rápida sobre grandes bases operacionais.",
                "Dashboards executivos em Power BI que deram visibilidade operacional à liderança.",
                "Como Scrum Master, conduzi as cerimônias ágeis e protegi a cadência e a previsibilidade de entrega do time.",
            ],
            highlights: [
                "Cresci de Estagiário a Desenvolvedor Fullstack .NET e a Scrum Master no mesmo programa.",
                "Stack corporativa .NET: C#, ASP.NET, MVC, Dapper, Entity Framework, SQL Server.",
                "Busca com Elasticsearch sobre dados operacionais.",
                "Dashboards executivos em Power BI para a liderança do setor público.",
                "Liderança ágil em entrega de governo com responsabilidade real.",
            ],
            metrics: [
                { value: "3", label: "Órgãos: ANTT, SEST SENAT, SISRH" },
                { value: "Estágio a SM", label: "De desenvolvedor a Scrum Master" },
                { value: "Power BI", label: "Dashboards executivos entregues" },
            ],
        },
        "cboo-modernization": {
            title: "CBOO, modernização de legado e arquitetura de banco",
            oneLiner: "Modernizar um sistema legado em PHP para Vue.js, e rearquitetar o banco por baixo dele.",
            summary:
                "Modernização full stack para o CBOO (Conselho Brasileiro de Óptica e Optometria). Migração de uma aplicação legada em PHP e Bootstrap para um front end em Vue.js, rearquitetando o schema MySQL, migrando dados e ajustando performance como DBA responsável (backups, controle de acesso, indexação e otimização de SQL).",
            role: "Engenheiro e Arquiteto de Software, DBA (freelance)",
            context:
                "O CBOO é o conselho brasileiro de óptica e optometria. O sistema web era uma aplicação legada em PHP e Bootstrap que precisava ser modernizada para manutenção e uma melhor experiência, enquanto o banco precisava de trabalho real de arquitetura e performance.",
            problem:
                "Código legado e um banco pouco otimizado limitavam a manutenção e a performance. O sistema precisava de um front end moderno, um schema relacional sólido, migração segura de dados da estrutura antiga e administração contínua do banco, tudo entregue por um engenheiro trabalhando direto com a organização.",
            solution: [
                "Liderei a modernização full stack de PHP e Bootstrap legados para um front end em Vue.js.",
                "Rearquitetei o schema MySQL e conduzi a migração de dados da estrutura antiga.",
                "Otimização de SQL, ajuste de performance e indexação para consultas mais rápidas e confiáveis.",
                "DBA responsável: backups, controle de acesso e administração do dia a dia via phpMyAdmin e CLI.",
                "Apliquei práticas de Clean Code para deixar um código sustentável.",
            ],
            highlights: [
                "Responsabilidade de ponta a ponta: modernização do front end, arquitetura de banco e DBA, sozinho.",
                "PHP e Bootstrap legados substituídos por um front end em Vue.js.",
                "Rearquitetura do schema MySQL com um caminho real de migração de dados.",
                "Trabalho de performance: otimização de consultas, indexação, ajustes.",
                "Administração de banco: backups e controle de acesso via phpMyAdmin e CLI.",
            ],
            metrics: [
                { value: "PHP a Vue", label: "Front end legado modernizado" },
                { value: "Rearquitetado", label: "Schema MySQL e migração de dados" },
                { value: "Desde 2024", label: "Trabalho em andamento" },
            ],
        },
    },
};

/** Merge the current language's case-study text over the structural project. */
export function localizeProject(p: Project, lang: Lang): Project {
    const tx = caseStudyText[lang]?.[p.slug];
    return tx ? { ...p, ...tx } : p;
}

export type TimelineText = { title: string; org?: string; date: string; summary: string };

export const timelineText: Record<Lang, Record<string, TimelineText>> = {
    en: {
        "2026-55hub-cpo-cto": {
            title: "Diretor de Produto e Tecnologia (CPO/CTO)",
            org: "+55 HUB & Corporate Group",
            date: "Since 2026",
            summary:
                "Promoted from Head of Product to lead product and technology end to end. I own the roadmap (PMF, UX/UI across the customer journey), architecture and scalability (99.9% uptime target), Security and Compliance (LGPD), agile team leadership (Scrum/Kanban, 5 landing pages in 2 days), and systems integration (Bitrix CRM). I built the company platform on my own, 55hubcorp.com, and structured a data driven RevOps motion. KPIs I own: technical churn, product NPS, lead time and deployment, SLA.",
        },
        "2025-pg-innovation": {
            title: "Postgrad in Innovation, AI and Robotics",
            org: "GRAN",
            date: "2025 to 2026",
            summary: "Applied AI and automation to real products and workflows.",
        },
        "2025-pg-process-projects": {
            title: "Postgrad in Process and Project Management",
            org: "GRAN",
            date: "2025 to 2026",
            summary: "Agile and PMBOK hybrid execution for delivery at scale.",
        },
        "2024-cboo": {
            title: "Software Engineer & Architect (freelance)",
            org: "CBOO",
            date: "Since Nov 2024",
            summary:
                "Led the full stack modernization of a legacy PHP system to Vue.js, owning database architecture, data migration and performance. Designed and maintained the MySQL schema, tuned complex SQL, and handled DBA tasks (backups, access control, indexing) via phpMyAdmin and CLI.",
        },
        "2024-scrum-master": {
            title: "Scrum Master",
            org: "Websis",
            date: "Apr 2024 to Dec 2025",
            summary:
                "Scrum Master for cross functional squads delivering mission critical government systems on SQL Server and .NET. Ran the agile ceremonies, coordinated database deliverables across production, and built Power BI dashboards for executive visibility.",
        },
        "2024-certifications": {
            title: "Certifications",
            date: "2024",
            summary: "Scrum Fundamentals Certified, Registered Scrum Basics, Six Sigma Yellow Belt.",
        },
        "2023-2024-websis": {
            title: "Software Developer (.NET)",
            org: "Websis",
            date: "Sep 2023 to Apr 2024",
            summary:
                "C# and .NET developer on ASP.NET, Angular, Dapper, Entity Framework and SQL Server, building and maintaining government systems (ANTT, SEST SENAT, SISRH). Implemented Elasticsearch, MVC and Clean Code for performance and maintainability.",
        },
        "2023-pmi-hackathon": {
            title: "2nd place, PMI-DF Hackathon",
            date: "2023",
            summary: "Second place for the college (UDF) at the PMI-DF hackathon.",
        },
        "2022-2023-websis": {
            title: "Intern to Fullstack Developer (.NET)",
            org: "Websis",
            date: "Sep 2022 to Sep 2023",
            summary:
                "Fullstack web development intern on sustainability and financial projects. Worked with C#, .NET, ASP.NET, MVC, SQL Server, Dapper and Entity Framework, plus hands on React and Angular.",
        },
        "2022-tcb-trainee": {
            title: "Trainee, first industry program",
            org: "TCB (Brasília)",
            date: "Jul 2022 to Oct 2022",
            summary:
                "Trainee developer migrating a system from PHP and Laravel to Java, Spring Boot and Angular. Gained experience in technical support, networking and problem solving.",
        },
        "2022-udf": {
            title: "Systems Analysis and Development",
            org: "UDF",
            date: "2022 to 2024",
            summary: "Core software engineering, databases and web, with a move toward business and stakeholder communication.",
        },
    },
    pt: {
        "2026-55hub-cpo-cto": {
            title: "Diretor de Produto e Tecnologia (CPO/CTO)",
            org: "+55 HUB & Corporate Group",
            date: "Desde 2026",
            summary:
                "Promovido de Head of Product para liderar produto e tecnologia de ponta a ponta. Sou dono do roadmap (PMF, UX/UI em toda a jornada), da arquitetura e escalabilidade (meta de 99,9% de uptime), de Segurança e Conformidade (LGPD), da liderança ágil do time (Scrum/Kanban, 5 landing pages em 2 dias) e da integração de sistemas (Bitrix CRM). Construí a plataforma da empresa sozinho, a 55hubcorp.com, e estruturei um RevOps orientado a dados. KPIs que carrego: churn técnico, NPS de produto, lead time e deploy, SLA.",
        },
        "2025-pg-innovation": {
            title: "Pós em Inovação, IA e Robótica",
            org: "GRAN",
            date: "2025 a 2026",
            summary: "Apliquei IA e automação a produtos e fluxos reais.",
        },
        "2025-pg-process-projects": {
            title: "Pós em Gestão de Processos e Projetos",
            org: "GRAN",
            date: "2025 a 2026",
            summary: "Execução híbrida de ágil e PMBOK para entrega em escala.",
        },
        "2024-cboo": {
            title: "Engenheiro e Arquiteto de Software (freelance)",
            org: "CBOO",
            date: "Desde nov 2024",
            summary:
                "Liderei a modernização full stack de um sistema legado em PHP para Vue.js, com arquitetura de banco, migração de dados e performance. Desenhei e mantive o schema MySQL, ajustei SQL complexo e cuidei das tarefas de DBA (backups, controle de acesso, indexação) via phpMyAdmin e CLI.",
        },
        "2024-scrum-master": {
            title: "Scrum Master",
            org: "Websis",
            date: "Abr 2024 a dez 2025",
            summary:
                "Scrum Master de squads multifuncionais entregando sistemas críticos de governo em SQL Server e .NET. Conduzi as cerimônias ágeis, coordenei entregas de banco em produção e construí dashboards em Power BI para visibilidade executiva.",
        },
        "2024-certifications": {
            title: "Certificações",
            date: "2024",
            summary: "Scrum Fundamentals Certified, Registered Scrum Basics, Six Sigma Yellow Belt.",
        },
        "2023-2024-websis": {
            title: "Desenvolvedor de Software (.NET)",
            org: "Websis",
            date: "Set 2023 a abr 2024",
            summary:
                "Desenvolvedor C# e .NET em ASP.NET, Angular, Dapper, Entity Framework e SQL Server, construindo e mantendo sistemas de governo (ANTT, SEST SENAT, SISRH). Implementei Elasticsearch, MVC e Clean Code para performance e manutenção.",
        },
        "2023-pmi-hackathon": {
            title: "2º lugar, Hackathon PMI-DF",
            date: "2023",
            summary: "Segundo lugar pela faculdade (UDF) no hackathon do PMI-DF.",
        },
        "2022-2023-websis": {
            title: "Estágio a Desenvolvedor Fullstack (.NET)",
            org: "Websis",
            date: "Set 2022 a set 2023",
            summary:
                "Estágio de desenvolvimento web full stack em projetos de sustentabilidade e financeiros. Trabalhei com C#, .NET, ASP.NET, MVC, SQL Server, Dapper e Entity Framework, além de React e Angular na prática.",
        },
        "2022-tcb-trainee": {
            title: "Trainee, primeiro programa na indústria",
            org: "TCB (Brasília)",
            date: "Jul 2022 a out 2022",
            summary:
                "Desenvolvedor trainee migrando um sistema de PHP e Laravel para Java, Spring Boot e Angular. Ganhei experiência em suporte técnico, redes e resolução de problemas.",
        },
        "2022-udf": {
            title: "Análise e Desenvolvimento de Sistemas",
            org: "UDF",
            date: "2022 a 2024",
            summary: "Base de engenharia de software, bancos e web, com uma virada para negócio e comunicação com stakeholders.",
        },
    },
};

/** Merge the current language's timeline text over the structural item. */
export function localizeTimelineItem(item: TimelineItem, lang: Lang): TimelineItem {
    const tx = timelineText[lang]?.[item.id];
    return tx ? { ...item, ...tx } : item;
}
