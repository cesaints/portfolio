// Canonical Project / case-study type. `projects.ts` imports from here.

/** A quantified or qualitative proof point rendered as a stat chip. */
export type ProjectMetric = {
    /** Headline value, e.g. "99.9%", "PT / EN / ES", "5 in 2 days". */
    value: string;
    /** What the value measures, e.g. "Uptime / SLA target". */
    label: string;
};

/** An outbound link (site, app, repo). Omitted entirely for confidential work. */
export type ProjectLink = {
    label: string;
    href: string;
};

/** A captured screenshot shown inside the browser-preview frame. */
export type ProjectScreenshot = {
    src: string;
    /** URL shown in the mock address bar, e.g. "55hubcorp.com". */
    url: string;
};

/** High-level grouping for filtering and section headers. */
export type ProjectCategory =
    | "Product & Platform"
    | "Enterprise / Government"
    | "Modernization";

export type Project = {
    // ── core ────────────────────────────────────────────────
    slug: string;
    title: string;
    /** Short paragraph used on the card. */
    summary: string;
    tags: string[];
    /** Optional real cover image path; when absent the card renders an on-brand gradient. */
    cover?: string;
    gallery?: string[];

    // ── enrichment (all optional) ───────────────────────────
    role?: string;
    oneLiner?: string;
    context?: string;
    problem?: string;
    solution?: string[];
    highlights?: string[];
    /** Full stack list for the detail view (tags stays the short card list). */
    stack?: string[];
    metrics?: ProjectMetric[];
    /** Outbound links; leave undefined for confidential work. */
    links?: ProjectLink[];
    /** Production screenshots for the browser-preview frame. */
    screenshots?: ProjectScreenshot[];
    repo?: string;
    demo?: string;
    /** When true, the UI hides links and shows a "Confidential" badge. */
    confidential?: boolean;
    /** Drives the flagship badge + FeaturedCaseStudy block. */
    featured?: boolean;
    year?: string;
    category?: ProjectCategory;
};
