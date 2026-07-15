// Single source of truth for primary navigation. `key` maps into the i18n nav dict.
export type NavKey = "home" | "projects" | "timeline" | "contact";
export type NavLink = { href: string; key: NavKey };

export const navLinks: NavLink[] = [
    { href: "/", key: "home" },
    { href: "/projects", key: "projects" },
    { href: "/timeline", key: "timeline" },
    { href: "/contact", key: "contact" },
];
