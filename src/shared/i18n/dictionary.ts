// Bilingual content dictionary. pt = Brazilian Portuguese (default), en = English.
// Rule: no em-dashes (—) or en-dashes (–) anywhere; plain, professional copy.

export type Lang = "pt" | "en";

const en = {
    nav: { home: "Home", projects: "Projects", timeline: "Timeline", contact: "Contact" },
    switchTo: "PT",
    hero: {
        eyebrow: "Product & Technology Leadership",
        roleTitle: "Diretor de Produto e Tecnologia",
        roleShort: "CPO / CTO",
        org: "at +55 HUB & Corporate Group",
        taglines: [
            "Product strategy backed by real engineering.",
            "From roadmap to production, hands on the code.",
            "RevOps, architecture, and shipping.",
            "I decide what to build, then I build it.",
        ],
        pitch:
            "I lead product and technology at +55 HUB. I own the roadmap, the architecture, and the RevOps that turns leads into deals, and I still write the code behind it. The numbers I answer for are product NPS, lead time to production, and a 99.9% uptime target.",
        location: "Brasília, DF, Brazil. Remote (Salvador, BA).",
        ctaPrimary: "View case studies",
        ctaSecondary: "Get in touch",
    },
    stats: [
        { value: "99.9%", label: "Uptime / SLA target" },
        { value: "PT/EN/ES", label: "Trilingual platform, built solo" },
        { value: "5 / 2 days", label: "Landing pages delivered" },
        { value: "3", label: "Government platforms delivered" },
    ],
    about: {
        heading: "From engineer to product and technology leader",
        sub: "I own the roadmap and the architecture.",
        paragraphs: [
            "I started in code. I built and tested mission critical systems for ANTT, SEST SENAT and SISRH as a full stack .NET developer, then led delivery as a Scrum Master. I ran database architecture and performance as a DBA, and modernized legacy PHP platforms into Vue.js. I have worked across the whole stack, from database design to sprint planning.",
            "That work pulled me toward the decisions above the code. At +55 HUB & Corporate Group I moved from Head of Product to Diretor de Produto e Tecnologia (CPO/CTO), where I own what we build, how it scales, and how it converts. I built the company platform on my own: a multilingual PT/EN/ES public site and an internal CRM with a full lead to deal pipeline, RBAC and analytics, running on Cloudflare Workers, D1 and Workers AI.",
            "I work on both sides. I read the architecture and I own the roadmap, so product decisions match what the code can actually deliver. Security and compliance (LGPD) are treated as engineering, not paperwork.",
        ],
        timelineLink: "See the full timeline",
        clusters: [
            { label: "Product", skills: ["Strategy", "Roadmap", "PMF", "UX/UI", "RevOps"] },
            { label: "Engineering", skills: ["Architecture", "TypeScript", ".NET", "Vue / Next", "Cloudflare"] },
            { label: "Data & Cloud", skills: ["SQL / NoSQL", "Azure", "Docker", "Power BI"] },
            { label: "Leadership", skills: ["Scrum / Kanban", "LGPD", "Team delivery"] },
        ],
    },
    values: {
        heading: "What I focus on",
        sub: "The metrics I own, and how I work toward them.",
        items: [
            { title: "Product decisions that match the code", body: "I set the roadmap knowing what the architecture can ship, so plans stay realistic." },
            { title: "RevOps that shortens lead to deal", body: "CRM, tracking and integrations, with Bitrix as the hub, tuned to cut lead time and raise conversion." },
            { title: "Architecture that holds under growth", body: "Built for more traffic without losing performance, with a 99.9% uptime target." },
            { title: "Security and compliance from the start", body: "LGPD and financial grade data protection built in: RBAC, hashed sessions, rate limiting, hardened headers." },
        ],
    },
    flagship: {
        heading: "Flagship project",
        sub: "The +55 HUB platform, designed, built and shipped on my own.",
        visit: "Visit 55hubcorp.com",
        source: "Source",
        badge: "Flagship",
        tabSite: "Public site",
        tabCrm: "Internal CRM",
        crmNote: "Internal system, secure login and 5-role access.",
        liveNote: "Live product, captured from production.",
    },
    work: {
        heading: "Selected work",
        sub: "Professional, mission critical engagements.",
        readCase: "Read case study",
        confidentialGov: "Confidential · Government",
        confidentialEnterprise: "Confidential · Enterprise",
        code: "Code",
        live: "Live",
    },
    caseStudyUi: {
        context: "Context",
        problem: "Problem",
        built: "What I built",
        highlights: "Engineering highlights",
        stack: "Stack",
        confidentialNote: "Confidential work, no public links.",
    },
    cta: {
        heading: "Let's build something that ships.",
        body: "Product strategy, architecture, RevOps. Tell me what you are building and where it needs to go.",
        button: "Get in touch",
    },
    contact: {
        heading: "Get in touch",
        sub: "Product, technology, RevOps or engineering leadership. Let's talk.",
        namePh: "Your name",
        emailPh: "Your email",
        messagePh: "Your message",
        send: "Send message",
        sending: "Sending...",
        ok: "Message sent. Thank you.",
        err: "Could not send. Please try again.",
        emailLabel: "Email",
        locationLabel: "Location",
        locationValue: "Brasília, DF, Brazil. Remote.",
        linkedinLabel: "LinkedIn",
        githubLabel: "GitHub",
        validName: "Please enter your name",
        validEmail: "Please enter a valid email",
        validMessage: "Your message is too short",
    },
    projectsPage: {
        heading: "Case studies",
        sub: "Work across product, architecture, UX/UI and database engineering.",
    },
    timelinePage: {
        heading: "Timeline",
        sub: "Training, roles and milestones.",
    },
};

type Shape = typeof en;

const pt: Shape = {
    nav: { home: "Início", projects: "Projetos", timeline: "Trajetória", contact: "Contato" },
    switchTo: "EN",
    hero: {
        eyebrow: "Liderança de Produto e Tecnologia",
        roleTitle: "Diretor de Produto e Tecnologia",
        roleShort: "CPO / CTO",
        org: "na +55 HUB & Corporate Group",
        taglines: [
            "Estratégia de produto com engenharia de verdade.",
            "Do roadmap à produção, com a mão no código.",
            "RevOps, arquitetura e entrega.",
            "Decido o que construir e construo.",
        ],
        pitch:
            "Lidero produto e tecnologia na +55 HUB. Sou dono do roadmap, da arquitetura e do RevOps que transforma leads em negócios, e continuo escrevendo o código por trás disso. Respondo por NPS de produto, lead time até produção e uma meta de 99,9% de uptime.",
        location: "Brasília, DF, Brasil. Remoto (Salvador, BA).",
        ctaPrimary: "Ver cases",
        ctaSecondary: "Falar comigo",
    },
    stats: [
        { value: "99,9%", label: "Meta de uptime / SLA" },
        { value: "PT/EN/ES", label: "Plataforma trilíngue, feita sozinho" },
        { value: "5 / 2 dias", label: "Landing pages entregues" },
        { value: "3", label: "Plataformas de governo entregues" },
    ],
    about: {
        heading: "De engenheiro a líder de produto e tecnologia",
        sub: "Sou dono do roadmap e da arquitetura.",
        paragraphs: [
            "Comecei no código. Construí e testei sistemas críticos para ANTT, SEST SENAT e SISRH como desenvolvedor full stack .NET, e depois liderei a entrega como Scrum Master. Cuidei da arquitetura e da performance do banco como DBA, e modernizei plataformas legadas em PHP para Vue.js. Trabalhei na stack inteira, do desenho do banco ao planejamento das sprints.",
            "Esse trabalho me levou às decisões acima do código. Na +55 HUB & Corporate Group passei de Head of Product a Diretor de Produto e Tecnologia (CPO/CTO), onde sou dono do que construímos, de como escala e de como converte. Construí a plataforma da empresa sozinho: um site público multilíngue PT/EN/ES e um CRM interno com pipeline completo de lead a negócio, RBAC e análises, rodando em Cloudflare Workers, D1 e Workers AI.",
            "Atuo dos dois lados. Leio a arquitetura e sou dono do roadmap, então as decisões de produto batem com o que o código entrega de fato. Segurança e conformidade (LGPD) são tratadas como engenharia, não como papelada.",
        ],
        timelineLink: "Ver a trajetória completa",
        clusters: [
            { label: "Produto", skills: ["Estratégia", "Roadmap", "PMF", "UX/UI", "RevOps"] },
            { label: "Engenharia", skills: ["Arquitetura", "TypeScript", ".NET", "Vue / Next", "Cloudflare"] },
            { label: "Dados e Cloud", skills: ["SQL / NoSQL", "Azure", "Docker", "Power BI"] },
            { label: "Liderança", skills: ["Scrum / Kanban", "LGPD", "Entrega de time"] },
        ],
    },
    values: {
        heading: "No que eu foco",
        sub: "As métricas que eu carrego, e como trabalho para elas.",
        items: [
            { title: "Decisões de produto que batem com o código", body: "Defino o roadmap sabendo o que a arquitetura entrega, então os planos ficam realistas." },
            { title: "RevOps que encurta o lead até o negócio", body: "CRM, tracking e integrações, com o Bitrix como hub, ajustados para reduzir o lead time e aumentar a conversão." },
            { title: "Arquitetura que aguenta o crescimento", body: "Feita para mais tráfego sem perder performance, com meta de 99,9% de uptime." },
            { title: "Segurança e conformidade desde o início", body: "Proteção de dados nível financeiro e LGPD já embutidas: RBAC, sessões com hash, rate limiting e headers reforçados." },
        ],
    },
    flagship: {
        heading: "Projeto principal",
        sub: "A plataforma da +55 HUB, desenhada, construída e publicada por mim.",
        visit: "Acessar 55hubcorp.com",
        source: "Código",
        badge: "Destaque",
        tabSite: "Site público",
        tabCrm: "CRM interno",
        crmNote: "Sistema interno, login seguro e acesso por 5 papéis.",
        liveNote: "Produto no ar, capturado da produção.",
    },
    work: {
        heading: "Trabalhos selecionados",
        sub: "Projetos profissionais e críticos.",
        readCase: "Ver o case",
        confidentialGov: "Confidencial · Governo",
        confidentialEnterprise: "Confidencial · Corporativo",
        code: "Código",
        live: "Ao vivo",
    },
    caseStudyUi: {
        context: "Contexto",
        problem: "Problema",
        built: "O que construí",
        highlights: "Destaques de engenharia",
        stack: "Stack",
        confidentialNote: "Trabalho confidencial, sem links públicos.",
    },
    cta: {
        heading: "Vamos construir algo que vai pro ar.",
        body: "Estratégia de produto, arquitetura, RevOps. Me conte o que você está construindo e aonde precisa chegar.",
        button: "Falar comigo",
    },
    contact: {
        heading: "Falar comigo",
        sub: "Produto, tecnologia, RevOps ou liderança de engenharia. Vamos conversar.",
        namePh: "Seu nome",
        emailPh: "Seu e-mail",
        messagePh: "Sua mensagem",
        send: "Enviar mensagem",
        sending: "Enviando...",
        ok: "Mensagem enviada. Obrigado.",
        err: "Não foi possível enviar. Tente novamente.",
        emailLabel: "E-mail",
        locationLabel: "Localização",
        locationValue: "Brasília, DF, Brasil. Remoto.",
        linkedinLabel: "LinkedIn",
        githubLabel: "GitHub",
        validName: "Digite seu nome",
        validEmail: "Digite um e-mail válido",
        validMessage: "Sua mensagem está muito curta",
    },
    projectsPage: {
        heading: "Cases",
        sub: "Trabalhos em produto, arquitetura, UX/UI e engenharia de dados.",
    },
    timelinePage: {
        heading: "Trajetória",
        sub: "Formação, cargos e marcos.",
    },
};

export const dictionary = { en, pt } as const;
export type Dict = Shape;
