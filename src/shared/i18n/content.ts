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
        "treinaedital": {
            title: "TreinaEdital, a study platform for public exams",
            oneLiner: "Three apps, payments and AI generated questions, founded and built end to end.",
            summary:
                "TreinaEdital is a study platform for Brazilian public service exams. Students buy access to a specific exam and study through text lessons, AI assisted question practice, timed mock exams, performance tracking and a ranking against real vacancies. Built as a Turborepo monorepo with three Next.js apps (public site, student app, admin) over a shared package layer, with Stripe payments, mandatory 2FA and Anthropic Claude for question generation. As founder and CEO, I own product, engineering and go to market.",
            role: "Founder and CEO, product vision and full stack build",
            context:
                "Candidates for Brazilian public service exams often fail not from lack of effort but from studying the wrong material. TreinaEdital focuses each candidate only on what their specific edital actually charges, subject by subject, weighted by importance, with a ranking that compares performance against the real number of vacancies.",
            problem:
                "Delivering this meant three distinct products (a selling public site, a student learning app, and an admin to run exams, content, sales and marketing) on one secure, payment grade platform: money never trusted from the browser, webhooks idempotent, admin protected by 2FA, content behind signed links, and a question bank that can grow with AI without losing quality.",
            solution: [
                "Turborepo and pnpm monorepo: web (public site and checkout), app (student), admin (operations), plus a shared package layer.",
                "One time purchase per exam with lifetime access, priced on the server; an all access subscription on the roadmap.",
                "Stripe payments (card and Pix) with signed, idempotent webhooks, so a single event never grants access twice.",
                "PostgreSQL with Prisma, NextAuth v5 with mandatory TOTP 2FA for admin, and LGPD routines.",
                "AI question generation and PDF exam extraction with Anthropic Claude, output validated by zod, with a configurable model and a spend cap.",
                "Cloudflare R2 for content behind signed links, Resend for email, Upstash Redis for rate limit and cache, plus Sentry, PostHog, GA4 and Meta Pixel.",
            ],
            highlights: [
                "Founder and CEO: set the product vision and built the platform end to end.",
                "Three app Turborepo monorepo (web, student app, admin) over a shared package layer.",
                "Server side pricing plus signed, idempotent Stripe webhooks (card and Pix), so access is never double granted.",
                "Admin locked behind NextAuth v5 with mandatory TOTP 2FA, plus a dedicated security package.",
                "AI question generation and PDF extraction with Anthropic Claude, zod validated and cost capped.",
                "PostgreSQL and Prisma, Cloudflare R2 signed links, Upstash Redis, Resend, Sentry and PostHog.",
            ],
            metrics: [
                { value: "3 apps", label: "Site, student app, admin" },
                { value: "Founder & CEO", label: "Product and full stack build" },
                { value: "Card + Pix", label: "Stripe, server side pricing" },
                { value: "AI questions", label: "Claude, zod validated" },
            ],
        },
        "distopico-solutions": {
            title: "Distópico Solutions, the holding site and admin",
            oneLiner: "The multilingual site and admin for a global creative holding, on Next.js 16 and Cloudflare's edge.",
            summary:
                "The institutional multilingual (PT/EN/ES) website and admin panel for Distópico Solutions, a global creative holding built on results over appearance. A public site presenting the holding's five verticals, method and manifesto, plus a custom admin (auth, RBAC, leads, analytics, SEO, audit log), shipped on Next.js 16 running on Cloudflare Workers with D1, R2 and KV.",
            role: "CPTO, built the multilingual site and admin end to end",
            context:
                "Distópico Solutions is a global creative holding that governs a company's whole revenue architecture (strategy, creation, distribution, performance, reputation and measurement) under one integrated cycle, across five verticals (Performance, AD, Influence, Films, Academy). It needed a high craft trilingual presence that feels like the brand, results over appearance, and a real back office to capture and work leads.",
            problem:
                "The site had to feel premium and alive, with motion from start to finish, while staying fast and SEO ready in three languages with translated slugs and hreflang, and it had to ship with a genuine admin (auth, roles, leads, analytics, audit) rather than a static brochure, all cheap to run and maintainable solo.",
            solution: [
                "Public site in PT/EN/ES with next-intl: translated slugs per language and hreflang, covering home, Ecosystem (5 verticals), Method, Manifesto, Academy, Contact and legal pages.",
                "Custom admin panel (noindex): dashboard, leads, analytics, SEO editor, users and audit log.",
                "Own auth: Argon2id password hashing, 256 bit opaque database sessions, owner/admin/editor/viewer RBAC, forced temporary password reset and audit logging.",
                "Animated Rede Viva living network background (Canvas 2D) with motion and lenis, honoring prefers-reduced-motion.",
                "Drizzle ORM over SQLite in dev and Cloudflare D1 in production, from one schema.",
                "Deployed on Cloudflare Workers via OpenNext (D1, R2 and KV).",
            ],
            highlights: [
                "Next.js 16 (App Router, React 19): SSG on the public pages, dynamic on admin and API.",
                "Trilingual by design with next-intl: translated slugs, hreflang and full PT/EN/ES parity.",
                "Custom Argon2id auth with database sessions, 4 role RBAC and an audit log, no third party auth SaaS.",
                "Rede Viva Canvas 2D animated background, motion and lenis, reduced motion aware.",
                "Drizzle ORM: SQLite in dev and Cloudflare D1 in production from a single schema.",
                "Edge deploy via OpenNext on Workers with D1, R2 and KV.",
            ],
            metrics: [
                { value: "PT / EN / ES", label: "Trilingual, translated slugs" },
                { value: "5 verticals", label: "Holding ecosystem" },
                { value: "Site + admin", label: "Public site and back office" },
                { value: "Edge", label: "Next.js 16 on Cloudflare" },
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
        "treinaedital": {
            title: "TreinaEdital, plataforma de estudos para concursos",
            oneLiner: "Três apps, pagamentos e questões geradas por IA, fundada e construída de ponta a ponta.",
            summary:
                "A TreinaEdital é uma plataforma de estudos para concursos públicos. O aluno compra o acesso de um concurso e estuda por aulas em texto, prática de questões com apoio de IA, simulados cronometrados, acompanhamento de desempenho e um ranking contra as vagas reais. Construída como um monorepo Turborepo com três apps Next.js (site público, app do aluno, admin) sobre uma camada de pacotes compartilhados, com pagamentos Stripe, 2FA obrigatório e Anthropic Claude para geração de questões. Como fundador e CEO, sou dono de produto, engenharia e go to market.",
            role: "Fundador e CEO, visão de produto e construção full stack",
            context:
                "Candidatos a concursos públicos costumam ser reprovados não por falta de esforço, mas por estudar o material errado. A TreinaEdital foca cada candidato só no que o edital dele realmente cobra, matéria por matéria, com peso por importância, e um ranking que compara o desempenho ao número real de vagas.",
            problem:
                "Entregar isso exigiu três produtos distintos (um site público que vende, um app de estudo do aluno e um admin para operar concursos, conteúdo, vendas e marketing) em uma só plataforma segura e pronta para pagamentos: valor nunca confiado do navegador, webhooks idempotentes, admin protegido por 2FA, conteúdo atrás de links assinados e um banco de questões que cresce com IA sem perder qualidade.",
            solution: [
                "Monorepo Turborepo e pnpm: web (site público e checkout), app (aluno), admin (operação), mais uma camada de pacotes compartilhados.",
                "Compra única por concurso com acesso vitalício, com preço calculado no servidor; uma assinatura all access no roadmap.",
                "Pagamentos Stripe (cartão e Pix) com webhooks assinados e idempotentes, para que um mesmo evento nunca libere acesso duas vezes.",
                "PostgreSQL com Prisma, NextAuth v5 com 2FA TOTP obrigatório no admin, e rotinas de LGPD.",
                "Geração de questões e extração de provas em PDF com Anthropic Claude, saída validada por zod, com modelo configurável e teto de gasto.",
                "Cloudflare R2 para conteúdo atrás de links assinados, Resend para e-mail, Upstash Redis para rate limit e cache, além de Sentry, PostHog, GA4 e Meta Pixel.",
            ],
            highlights: [
                "Fundador e CEO: defini a visão de produto e construí a plataforma de ponta a ponta.",
                "Monorepo Turborepo de três apps (web, app do aluno, admin) sobre uma camada de pacotes compartilhados.",
                "Preço no servidor mais webhooks Stripe assinados e idempotentes (cartão e Pix), então o acesso nunca é liberado em dobro.",
                "Admin protegido por NextAuth v5 com 2FA TOTP obrigatório, mais um pacote de segurança dedicado.",
                "Geração de questões e extração de PDF com Anthropic Claude, validadas por zod e com teto de custo.",
                "PostgreSQL e Prisma, links assinados no Cloudflare R2, Upstash Redis, Resend, Sentry e PostHog.",
            ],
            metrics: [
                { value: "3 apps", label: "Site, app do aluno, admin" },
                { value: "Fundador & CEO", label: "Produto e construção full stack" },
                { value: "Cartão + Pix", label: "Stripe, preço no servidor" },
                { value: "Questões por IA", label: "Claude, validadas por zod" },
            ],
        },
        "distopico-solutions": {
            title: "Distópico Solutions, o site e o admin da holding",
            oneLiner: "O site multilíngue e o admin de uma holding criativa global, em Next.js 16 na edge da Cloudflare.",
            summary:
                "O site institucional multilíngue (PT/EN/ES) e o painel administrativo da Distópico Solutions, uma holding criativa global feita sobre resultado acima de aparência. Um site público apresentando as cinco verticais da holding, método e manifesto, mais um admin próprio (auth, RBAC, leads, analytics, SEO, audit log), publicado em Next.js 16 rodando em Cloudflare Workers com D1, R2 e KV.",
            role: "CPTO, construí o site multilíngue e o admin de ponta a ponta",
            context:
                "A Distópico Solutions é uma holding criativa global que governa toda a arquitetura de receita de uma empresa (estratégia, criação, distribuição, performance, reputação e medição) em um único ciclo integrado, através de cinco verticais (Performance, AD, Influence, Films, Academy). Ela precisava de uma presença trilíngue de alto acabamento com a cara da marca, resultado acima de aparência, e de um back office de verdade para capturar e trabalhar leads.",
            problem:
                "O site tinha que parecer premium e vivo, com animação do início ao fim, e ao mesmo tempo ser rápido e pronto para SEO em três idiomas, com slugs traduzidos e hreflang, e tinha que vir com um admin de verdade (auth, papéis, leads, analytics, auditoria) em vez de um folder estático, tudo barato de rodar e mantido sozinho.",
            solution: [
                "Site público em PT/EN/ES com next-intl: slugs traduzidos por idioma e hreflang, cobrindo home, Ecossistema (5 verticais), Método, Manifesto, Academy, Contato e páginas legais.",
                "Painel admin próprio (noindex): dashboard, leads, analytics, editor de SEO, usuários e audit log.",
                "Auth próprio: hash de senha Argon2id, sessões opacas de 256 bits em banco, RBAC owner/admin/editor/viewer, troca obrigatória de senha temporária e audit log.",
                "Fundo animado Rede Viva (Canvas 2D) com motion e lenis, respeitando prefers-reduced-motion.",
                "Drizzle ORM sobre SQLite no dev e Cloudflare D1 em produção, a partir de um só schema.",
                "Publicado em Cloudflare Workers via OpenNext (D1, R2 e KV).",
            ],
            highlights: [
                "Next.js 16 (App Router, React 19): SSG nas páginas públicas, dinâmico no admin e na API.",
                "Trilíngue por design com next-intl: slugs traduzidos, hreflang e paridade total PT/EN/ES.",
                "Auth Argon2id próprio com sessões em banco, RBAC de 4 papéis e audit log, sem SaaS de auth de terceiro.",
                "Fundo animado Rede Viva em Canvas 2D, motion e lenis, ciente de reduced motion.",
                "Drizzle ORM: SQLite no dev e Cloudflare D1 em produção a partir de um único schema.",
                "Deploy na edge via OpenNext em Workers com D1, R2 e KV.",
            ],
            metrics: [
                { value: "PT / EN / ES", label: "Trilíngue, slugs traduzidos" },
                { value: "5 verticais", label: "Ecossistema da holding" },
                { value: "Site + admin", label: "Site público e back office" },
                { value: "Edge", label: "Next.js 16 na Cloudflare" },
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
    es: {
        "55hubcorp": {
            title: "55hubcorp.com, la plataforma de +55 HUB",
            oneLiner: "Una plataforma pública trilingüe y su propio CRM interno, publicados en solitario en el edge de Cloudflare.",
            summary:
                "La plataforma digital completa de +55 HUB & Corporate Group. Un sitio público multilingüe PT/EN/ES con un Readiness Scorecard interactivo, landing pages, un área de propiedades y un blog con apoyo de IA, además de un CRM interno hecho a medida que convierte leads en un pipeline de negocios. Diseñado, construido, asegurado y publicado por mí con Astro 5 en Cloudflare Workers, D1, R2 y Workers AI.",
            role: "Ingeniero de producto y plataforma (CPO/CTO), hecho de punta a punta",
            context:
                "+55 HUB & Corporate Group ayuda a empresas e inversores internacionales a llegar y crecer en Brasil, en real estate, entrada global y servicios corporativos. Necesitaban una plataforma que hablara a un público PT/EN/ES con un aire de confianza, capturara leads calificados desde varias puertas de entrada, y diera al equipo interno un sistema de verdad para trabajar esos leads, sin pagar y unir varias herramientas SaaS.",
            problem:
                "Dos productos que suelen vivir separados tenían que compartir un solo código y un solo presupuesto. Un sitio público de nivel marketing (rápido, multilingüe, listo para SEO) y un CRM de back office (login, roles, pipeline, analítica). Tenía que ser barato de operar, seguro para alianzas financieras B2B y LGPD, y mantenible por una sola persona mientras el negocio escalaba el tráfico.",
            solution: [
                "Sitio público (55hubcorp.com): experiencia trilingüe PT/EN/ES, un Readiness Scorecard interactivo, dos landing pages de conversión, un área de propiedades y un blog.",
                "CRM interno (app.55hubcorp.com): captura de leads, un Kanban de negocios, tareas, gestión de equipo y usuarios, administración de blog y propiedades, ajustes y analítica.",
                "Un repositorio, dos productos, compartiendo i18n, design system, autenticación y capa de datos para mantener el costo y el mantenimiento bajos.",
                "Pipeline de lead a negocio: los formularios públicos caen directo en el CRM, así la captura de marketing y el trabajo de ventas ocurren en el mismo sistema.",
                "Contenido con apoyo de IA: los posts escritos en portugués se traducen automáticamente a EN y ES con Workers AI, manteniendo los tres idiomas en sincronía.",
            ],
            highlights: [
                "Astro 5 (SSR más islas estáticas) en Cloudflare Workers, renderizado en el edge y rápido en todo el mundo.",
                "Cloudflare D1 (SQLite) para datos, R2 para archivos, Workers AI para traducción de PT a EN/ES.",
                "i18n por deep merge: el portugués es la base, EN/ES son overrides, las claves ausentes caen a PT.",
                "Globo del mundo interactivo (Canvas 2D con d3-geo), cargado bajo demanda, se pausa fuera de pantalla, estático con reduced motion.",
                "Readiness Scorecard como isla React con gráfico radar, así el JS solo va donde hace falta.",
                "Pipeline de leads reforzado: anti bot Turnstile, protección CSRF de mismo origen, sanitización de entrada.",
                "RBAC de 5 roles (viewer, closer, gestor, admin, super_admin) con segregación de datos por dueño.",
                "Seguridad: PBKDF2 con salt, tokens de sesión con hash, rate limiting en el login, headers CSP y HSTS.",
                "Embudo de analítica: conversión por etapa, ingresos ganados y perdidos, motivos de pérdida y origen del lead.",
            ],
            metrics: [
                { value: "PT/EN/ES", label: "Trilingüe, un solo código" },
                { value: "2 productos", label: "Sitio público y CRM interno" },
                { value: "5 roles", label: "RBAC con segregación de datos" },
                { value: "Edge", label: "Astro 5 en Cloudflare Workers" },
            ],
        },
        "treinaedital": {
            title: "TreinaEdital, plataforma de estudio para oposiciones",
            oneLiner: "Tres apps, pagos y preguntas generadas por IA, fundada y construida de punta a punta.",
            summary:
                "TreinaEdital es una plataforma de estudio para oposiciones públicas de Brasil. El alumno compra el acceso a un examen y estudia con clases en texto, práctica de preguntas con apoyo de IA, simulacros cronometrados, seguimiento de desempeño y un ranking contra las vacantes reales. Construida como un monorepo Turborepo con tres apps Next.js (sitio público, app del alumno, admin) sobre una capa de paquetes compartidos, con pagos Stripe, 2FA obligatorio y Anthropic Claude para la generación de preguntas. Como fundador y CEO, soy dueño de producto, ingeniería y go to market.",
            role: "Fundador y CEO, visión de producto y construcción full stack",
            context:
                "Los candidatos a oposiciones públicas suelen fracasar no por falta de esfuerzo, sino por estudiar el material equivocado. TreinaEdital enfoca a cada candidato solo en lo que su convocatoria realmente exige, materia por materia, ponderado por importancia, con un ranking que compara el desempeño contra el número real de vacantes.",
            problem:
                "Entregar esto exigió tres productos distintos (un sitio público que vende, una app de estudio del alumno y un admin para operar exámenes, contenido, ventas y marketing) en una sola plataforma segura y lista para pagos: el importe nunca se confía desde el navegador, webhooks idempotentes, admin protegido por 2FA, contenido detrás de enlaces firmados y un banco de preguntas que crece con IA sin perder calidad.",
            solution: [
                "Monorepo Turborepo y pnpm: web (sitio público y checkout), app (alumno), admin (operación), más una capa de paquetes compartidos.",
                "Compra única por examen con acceso vitalicio, con precio calculado en el servidor; una suscripción all access en el roadmap.",
                "Pagos Stripe (tarjeta y Pix) con webhooks firmados e idempotentes, para que un mismo evento nunca libere el acceso dos veces.",
                "PostgreSQL con Prisma, NextAuth v5 con 2FA TOTP obligatorio en el admin, y rutinas de LGPD.",
                "Generación de preguntas y extracción de exámenes en PDF con Anthropic Claude, salida validada por zod, con modelo configurable y tope de gasto.",
                "Cloudflare R2 para contenido detrás de enlaces firmados, Resend para correo, Upstash Redis para rate limit y caché, además de Sentry, PostHog, GA4 y Meta Pixel.",
            ],
            highlights: [
                "Fundador y CEO: definí la visión de producto y construí la plataforma de punta a punta.",
                "Monorepo Turborepo de tres apps (web, app del alumno, admin) sobre una capa de paquetes compartidos.",
                "Precio en el servidor más webhooks Stripe firmados e idempotentes (tarjeta y Pix), así el acceso nunca se libera doble.",
                "Admin protegido por NextAuth v5 con 2FA TOTP obligatorio, más un paquete de seguridad dedicado.",
                "Generación de preguntas y extracción de PDF con Anthropic Claude, validadas por zod y con tope de costo.",
                "PostgreSQL y Prisma, enlaces firmados en Cloudflare R2, Upstash Redis, Resend, Sentry y PostHog.",
            ],
            metrics: [
                { value: "3 apps", label: "Sitio, app del alumno, admin" },
                { value: "Fundador & CEO", label: "Producto y construcción full stack" },
                { value: "Tarjeta + Pix", label: "Stripe, precio en el servidor" },
                { value: "Preguntas por IA", label: "Claude, validadas por zod" },
            ],
        },
        "distopico-solutions": {
            title: "Distópico Solutions, el sitio y el admin de la holding",
            oneLiner: "El sitio multilingüe y el admin de una holding creativa global, en Next.js 16 en el edge de Cloudflare.",
            summary:
                "El sitio institucional multilingüe (PT/EN/ES) y el panel administrativo de Distópico Solutions, una holding creativa global hecha sobre el resultado por encima de la apariencia. Un sitio público que presenta las cinco verticales de la holding, método y manifiesto, más un admin propio (auth, RBAC, leads, analítica, SEO, audit log), publicado en Next.js 16 sobre Cloudflare Workers con D1, R2 y KV.",
            role: "CPTO, construí el sitio multilingüe y el admin de punta a punta",
            context:
                "Distópico Solutions es una holding creativa global que gobierna toda la arquitectura de ingresos de una empresa (estrategia, creación, distribución, performance, reputación y medición) en un único ciclo integrado, a través de cinco verticales (Performance, AD, Influence, Films, Academy). Necesitaba una presencia trilingüe de alto acabado con la cara de la marca, resultado por encima de la apariencia, y un back office de verdad para capturar y trabajar leads.",
            problem:
                "El sitio tenía que sentirse premium y vivo, con animación de principio a fin, y a la vez ser rápido y listo para SEO en tres idiomas, con slugs traducidos y hreflang, y tenía que venir con un admin de verdad (auth, roles, leads, analítica, auditoría) en vez de un folleto estático, todo barato de operar y mantenible en solitario.",
            solution: [
                "Sitio público en PT/EN/ES con next-intl: slugs traducidos por idioma y hreflang, cubriendo home, Ecosistema (5 verticales), Método, Manifiesto, Academy, Contacto y páginas legales.",
                "Panel admin propio (noindex): dashboard, leads, analítica, editor de SEO, usuarios y audit log.",
                "Auth propio: hash de contraseña Argon2id, sesiones opacas de 256 bits en base de datos, RBAC owner/admin/editor/viewer, cambio obligatorio de contraseña temporal y audit log.",
                "Fondo animado Rede Viva (Canvas 2D) con motion y lenis, respetando prefers-reduced-motion.",
                "Drizzle ORM sobre SQLite en dev y Cloudflare D1 en producción, a partir de un solo esquema.",
                "Publicado en Cloudflare Workers vía OpenNext (D1, R2 y KV).",
            ],
            highlights: [
                "Next.js 16 (App Router, React 19): SSG en las páginas públicas, dinámico en admin y API.",
                "Trilingüe por diseño con next-intl: slugs traducidos, hreflang y paridad total PT/EN/ES.",
                "Auth Argon2id propio con sesiones en base de datos, RBAC de 4 roles y audit log, sin SaaS de auth de terceros.",
                "Fondo animado Rede Viva en Canvas 2D, motion y lenis, consciente de reduced motion.",
                "Drizzle ORM: SQLite en dev y Cloudflare D1 en producción desde un único esquema.",
                "Deploy en el edge vía OpenNext en Workers con D1, R2 y KV.",
            ],
            metrics: [
                { value: "PT / EN / ES", label: "Trilingüe, slugs traducidos" },
                { value: "5 verticales", label: "Ecosistema de la holding" },
                { value: "Sitio + admin", label: "Sitio público y back office" },
                { value: "Edge", label: "Next.js 16 en Cloudflare" },
            ],
        },
        "gov-systems-websis": {
            title: "Sistemas críticos de gobierno",
            oneLiner: "Construcción y liderazgo de entrega de sistemas de alto riesgo para agencias federales.",
            summary:
                "Desarrollo y entrega ágil de sistemas críticos para organismos del gobierno brasileño (ANTT, SEST SENAT y SISRH) en una stack .NET, SQL Server y Angular. Pasé de becario a desarrollador full stack y a Scrum Master, entregando funcionalidades y dashboards ejecutivos en Power BI para operaciones del sector público.",
            role: "Desarrollador full stack .NET, luego Scrum Master",
            context:
                "Websis Tecnologia construye y opera software para el gobierno federal brasileño. Estos sistemas sostienen operaciones regulatorias y administrativas reales, donde la disponibilidad, la corrección y la auditabilidad no son negociables.",
            problem:
                "Los sistemas del sector público tienen requisitos estrictos de fiabilidad, integridad y trazabilidad, y los trabajan equipos que deben entregar de forma predecible ante las expectativas del organismo. El trabajo era entregar funcionalidades correctas y performantes en una stack corporativa madura, manteniendo la cadencia ajustada y visible para los stakeholders.",
            solution: [
                "Construí y mantuve funcionalidades para ANTT, SEST SENAT y SISRH en un backend C# y ASP.NET (MVC) con front ends en Angular.",
                "Acceso a datos con Dapper y Entity Framework sobre SQL Server, eligiendo la herramienta correcta para cada consulta.",
                "Integración con Elasticsearch para búsqueda rápida sobre grandes bases operativas.",
                "Dashboards ejecutivos en Power BI que dieron visibilidad operativa al liderazgo.",
                "Como Scrum Master, conduje las ceremonias ágiles y protegí la cadencia y la previsibilidad de entrega del equipo.",
            ],
            highlights: [
                "Crecí de becario a desarrollador full stack .NET y a Scrum Master en el mismo programa.",
                "Stack corporativa .NET: C#, ASP.NET, MVC, Dapper, Entity Framework, SQL Server.",
                "Búsqueda con Elasticsearch sobre datos operativos.",
                "Dashboards ejecutivos en Power BI para el liderazgo del sector público.",
                "Liderazgo ágil en entrega de gobierno con responsabilidad real.",
            ],
            metrics: [
                { value: "3", label: "Organismos: ANTT, SEST SENAT, SISRH" },
                { value: "Becario a SM", label: "De desarrollador a Scrum Master" },
                { value: "Power BI", label: "Dashboards ejecutivos entregados" },
            ],
        },
        "cboo-modernization": {
            title: "CBOO, modernización de legado y arquitectura de base de datos",
            oneLiner: "Modernizar un sistema heredado en PHP hacia Vue.js, y rearquitectar la base de datos por debajo.",
            summary:
                "Modernización full stack para CBOO (Conselho Brasileiro de Óptica e Optometria). Migración de una aplicación heredada en PHP y Bootstrap a un front end en Vue.js, rearquitectando el esquema MySQL, migrando datos y ajustando el rendimiento como DBA responsable (backups, control de acceso, indexación y optimización de SQL).",
            role: "Ingeniero y Arquitecto de Software, DBA (freelance)",
            context:
                "CBOO es el consejo brasileño de óptica y optometría. Su sistema web era una aplicación heredada en PHP y Bootstrap que necesitaba modernizarse para el mantenimiento y una mejor experiencia, mientras la base de datos necesitaba trabajo real de arquitectura y rendimiento.",
            problem:
                "El código heredado y una base de datos poco optimizada limitaban el mantenimiento y el rendimiento. El sistema necesitaba un front end moderno, un esquema relacional sólido, migración segura de datos de la estructura antigua y administración continua de la base de datos, todo entregado por un ingeniero trabajando directo con la organización.",
            solution: [
                "Lideré la modernización full stack de PHP y Bootstrap heredados a un front end en Vue.js.",
                "Rearquitecté el esquema MySQL y ejecuté la migración de datos de la estructura antigua.",
                "Optimización de SQL, ajuste de rendimiento e indexación para consultas más rápidas y confiables.",
                "DBA responsable: backups, control de acceso y administración del día a día vía phpMyAdmin y CLI.",
                "Apliqué prácticas de Clean Code para dejar un código mantenible.",
            ],
            highlights: [
                "Responsabilidad de punta a punta: modernización del front end, arquitectura de base de datos y DBA, en solitario.",
                "PHP y Bootstrap heredados reemplazados por un front end en Vue.js.",
                "Rearquitectura del esquema MySQL con un camino real de migración de datos.",
                "Trabajo de rendimiento: optimización de consultas, indexación, ajustes.",
                "Administración de base de datos: backups y control de acceso vía phpMyAdmin y CLI.",
            ],
            metrics: [
                { value: "PHP a Vue", label: "Front end heredado modernizado" },
                { value: "Rearquitectado", label: "Esquema MySQL y migración de datos" },
                { value: "Desde 2024", label: "Trabajo en curso" },
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
        "2026-distopico-cpto": {
            title: "Diretor de Produto e Tecnologia (CPTO)",
            org: "Distópico Holding",
            date: "Since 2026",
            summary:
                "Promoted from Head of Product to lead product and technology end to end across the Distópico holding, a global creative group with five verticals that also owns the +55 HUB & Corporate Group. I own the roadmap (PMF, UX/UI across the journey), architecture and scalability (99.9% uptime target), Security and Compliance (LGPD), agile team leadership (Scrum/Kanban, 8 landing pages, 3 websites and a CRM in 13 days), and systems integration (Bitrix CRM). I built the holding platform distopicoglobal.com on my own (Next.js 16 on Cloudflare) and structured a data driven RevOps motion across the group's brands. KPIs I own: technical churn, product NPS, lead time, deployment frequency, SLA.",
        },
        "2026-55hub-cpo-cto": {
            title: "Diretor de Produto e Tecnologia (CPO/CTO)",
            org: "+55 HUB & Corporate Group",
            date: "Since 2026",
            summary:
                "Product and technology lead for +55 HUB & Corporate Group, the Distópico group company that helps international businesses and investors land and expand in Brazil. I built the +55 platform on my own, 55hubcorp.com, a trilingual PT/EN/ES public site plus an internal CRM with a full lead to deal pipeline, 5 role RBAC and analytics, on Astro 5 and Cloudflare Workers (D1, R2, Workers AI). I integrated Bitrix CRM into the RevOps motion and turned captured leads into a working sales pipeline.",
        },
        "2025-treinaedital-founder": {
            title: "Founder & CEO",
            org: "TreinaEdital",
            date: "Since 2025",
            summary:
                "Founded and lead TreinaEdital, a study platform for Brazilian public service exams. I set the product vision and built the platform end to end: a Turborepo monorepo with three Next.js apps (public site, student app, admin) over a shared package layer, PostgreSQL with Prisma, NextAuth v5 with mandatory 2FA for admin, Stripe payments (card and Pix) with server side pricing and idempotent webhooks, Cloudflare R2 with signed links, and AI generated and reviewed questions with Anthropic Claude. I own strategy, engineering, security (LGPD) and go to market.",
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
        "2026-distopico-cpto": {
            title: "Diretor de Produto e Tecnologia (CPTO)",
            org: "Distópico Holding",
            date: "Desde 2026",
            summary:
                "Promovido de Head of Product para liderar produto e tecnologia de ponta a ponta na holding Distópico, um grupo criativo global de cinco verticais que também é dono da +55 HUB & Corporate Group. Sou dono do roadmap (PMF, UX/UI em toda a jornada), da arquitetura e escalabilidade (meta de 99,9% de uptime), de Segurança e Conformidade (LGPD), da liderança ágil do time (Scrum/Kanban, 8 landing pages, 3 sites e um CRM em 13 dias) e da integração de sistemas (Bitrix CRM). Construí a plataforma da holding, a distopicoglobal.com, sozinho (Next.js 16 na Cloudflare) e estruturei um RevOps orientado a dados entre as marcas do grupo. KPIs que carrego: churn técnico, NPS de produto, lead time, frequência de deploy, SLA.",
        },
        "2026-55hub-cpo-cto": {
            title: "Diretor de Produto e Tecnologia (CPO/CTO)",
            org: "+55 HUB & Corporate Group",
            date: "Desde 2026",
            summary:
                "Líder de produto e tecnologia da +55 HUB & Corporate Group, a empresa do grupo Distópico que ajuda empresas e investidores internacionais a chegar e crescer no Brasil. Construí a plataforma da +55 sozinho, a 55hubcorp.com, um site público trilíngue PT/EN/ES mais um CRM interno com pipeline completo de lead a negócio, RBAC de 5 papéis e análises, em Astro 5 e Cloudflare Workers (D1, R2, Workers AI). Integrei o Bitrix CRM ao RevOps e transformei os leads capturados em um pipeline de vendas de verdade.",
        },
        "2025-treinaedital-founder": {
            title: "Fundador & CEO",
            org: "TreinaEdital",
            date: "Desde 2025",
            summary:
                "Fundei e lidero a TreinaEdital, uma plataforma de estudos para concursos públicos. Defini a visão de produto e construí a plataforma de ponta a ponta: um monorepo Turborepo com três apps Next.js (site público, app do aluno, admin) sobre uma camada de pacotes compartilhados, PostgreSQL com Prisma, NextAuth v5 com 2FA obrigatório no admin, pagamentos Stripe (cartão e Pix) com preço no servidor e webhooks idempotentes, Cloudflare R2 com links assinados e questões geradas e revisadas com apoio de IA (Anthropic Claude). Sou dono de estratégia, engenharia, segurança (LGPD) e go to market.",
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
    es: {
        "2026-distopico-cpto": {
            title: "Director de Producto y Tecnología (CPTO)",
            org: "Distópico Holding",
            date: "Desde 2026",
            summary:
                "Promovido de Head of Product a liderar producto y tecnología de punta a punta en la holding Distópico, un grupo creativo global de cinco verticales que también es dueño de +55 HUB & Corporate Group. Soy dueño del roadmap (PMF, UX/UI en todo el recorrido), de la arquitectura y escalabilidad (meta de 99,9% de uptime), de Seguridad y Cumplimiento (LGPD), del liderazgo ágil del equipo (Scrum/Kanban, 8 landing pages, 3 sitios y un CRM en 13 días) y de la integración de sistemas (Bitrix CRM). Construí la plataforma de la holding, distopicoglobal.com, en solitario (Next.js 16 en Cloudflare) y estructuré un RevOps orientado a datos entre las marcas del grupo. KPIs que llevo: churn técnico, NPS de producto, lead time, frecuencia de despliegue, SLA.",
        },
        "2026-55hub-cpo-cto": {
            title: "Director de Producto y Tecnología (CPO/CTO)",
            org: "+55 HUB & Corporate Group",
            date: "Desde 2026",
            summary:
                "Líder de producto y tecnología de +55 HUB & Corporate Group, la empresa del grupo Distópico que ayuda a empresas e inversores internacionales a llegar y crecer en Brasil. Construí la plataforma de +55 en solitario, 55hubcorp.com, un sitio público trilingüe PT/EN/ES más un CRM interno con un pipeline completo de lead a negocio, RBAC de 5 roles y analítica, en Astro 5 y Cloudflare Workers (D1, R2, Workers AI). Integré Bitrix CRM al RevOps y convertí los leads capturados en un pipeline de ventas de verdad.",
        },
        "2025-treinaedital-founder": {
            title: "Fundador & CEO",
            org: "TreinaEdital",
            date: "Desde 2025",
            summary:
                "Fundé y lidero TreinaEdital, una plataforma de estudio para oposiciones públicas de Brasil. Definí la visión de producto y construí la plataforma de punta a punta: un monorepo Turborepo con tres apps Next.js (sitio público, app del alumno, admin) sobre una capa de paquetes compartidos, PostgreSQL con Prisma, NextAuth v5 con 2FA obligatorio en el admin, pagos Stripe (tarjeta y Pix) con precio en el servidor y webhooks idempotentes, Cloudflare R2 con enlaces firmados y preguntas generadas y revisadas con apoyo de IA (Anthropic Claude). Soy dueño de estrategia, ingeniería, seguridad (LGPD) y go to market.",
        },
        "2025-pg-innovation": {
            title: "Posgrado en Innovación, IA y Robótica",
            org: "GRAN",
            date: "2025 a 2026",
            summary: "Apliqué IA y automatización a productos y flujos reales.",
        },
        "2025-pg-process-projects": {
            title: "Posgrado en Gestión de Procesos y Proyectos",
            org: "GRAN",
            date: "2025 a 2026",
            summary: "Ejecución híbrida de ágil y PMBOK para entrega a escala.",
        },
        "2024-cboo": {
            title: "Ingeniero y Arquitecto de Software (freelance)",
            org: "CBOO",
            date: "Desde nov 2024",
            summary:
                "Lideré la modernización full stack de un sistema heredado en PHP a Vue.js, con arquitectura de base de datos, migración de datos y rendimiento. Diseñé y mantuve el esquema MySQL, ajusté SQL complejo y me encargué de las tareas de DBA (backups, control de acceso, indexación) vía phpMyAdmin y CLI.",
        },
        "2024-scrum-master": {
            title: "Scrum Master",
            org: "Websis",
            date: "Abr 2024 a dic 2025",
            summary:
                "Scrum Master de squads multifuncionales entregando sistemas críticos de gobierno en SQL Server y .NET. Conduje las ceremonias ágiles, coordiné entregas de base de datos en producción y construí dashboards en Power BI para visibilidad ejecutiva.",
        },
        "2024-certifications": {
            title: "Certificaciones",
            date: "2024",
            summary: "Scrum Fundamentals Certified, Registered Scrum Basics, Six Sigma Yellow Belt.",
        },
        "2023-2024-websis": {
            title: "Desarrollador de Software (.NET)",
            org: "Websis",
            date: "Sep 2023 a abr 2024",
            summary:
                "Desarrollador C# y .NET en ASP.NET, Angular, Dapper, Entity Framework y SQL Server, construyendo y manteniendo sistemas de gobierno (ANTT, SEST SENAT, SISRH). Implementé Elasticsearch, MVC y Clean Code para rendimiento y mantenimiento.",
        },
        "2023-pmi-hackathon": {
            title: "2º lugar, Hackathon PMI-DF",
            date: "2023",
            summary: "Segundo lugar por la facultad (UDF) en el hackathon del PMI-DF.",
        },
        "2022-2023-websis": {
            title: "Becario a Desarrollador Full Stack (.NET)",
            org: "Websis",
            date: "Sep 2022 a sep 2023",
            summary:
                "Becario de desarrollo web full stack en proyectos de sostenibilidad y financieros. Trabajé con C#, .NET, ASP.NET, MVC, SQL Server, Dapper y Entity Framework, además de React y Angular en la práctica.",
        },
        "2022-tcb-trainee": {
            title: "Trainee, primer programa en la industria",
            org: "TCB (Brasília)",
            date: "Jul 2022 a oct 2022",
            summary:
                "Desarrollador trainee migrando un sistema de PHP y Laravel a Java, Spring Boot y Angular. Gané experiencia en soporte técnico, redes y resolución de problemas.",
        },
        "2022-udf": {
            title: "Análisis y Desarrollo de Sistemas",
            org: "UDF",
            date: "2022 a 2024",
            summary: "Base de ingeniería de software, bases de datos y web, con un giro hacia negocio y comunicación con stakeholders.",
        },
    },
};

/** Merge the current language's timeline text over the structural item. */
export function localizeTimelineItem(item: TimelineItem, lang: Lang): TimelineItem {
    const tx = timelineText[lang]?.[item.id];
    return tx ? { ...item, ...tx } : item;
}
