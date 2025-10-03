// src/entities/project/projects.ts
export type Project = {
    slug: string;
    title: string;
    summary: string;
    tags: string[];
    repo?: string;
    demo?: string;
    cover: string;      // caminho dentro de /public
    gallery?: string[]; // opcional
};

export const projects = [
    {
        slug: "prayer-site",
        title: "My Prayer Site",
        summary:
            "Searchable catalog of Christian prayers with fast full-text search, clean reading mode, and mobile-first UI. Built with Next.js + TypeScript + Tailwind, backed by MongoDB, and deployed on Vercel’s edge.",
        tags: ["Next.js", "TypeScript", "MongoDB", "Tailwind", "Vercel"],
        repo: "https://github.com/cesaints/my-prayer-site",
        demo: "https://my-prayer-site.vercel.app",
        cover: "/projects/portal-oracoes/cover.png",
    },
];


