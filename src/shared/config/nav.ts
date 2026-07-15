// Single source of truth for primary navigation.
export type NavLink = { href: string; label: string };

export const navLinks: NavLink[] = [
    { href: "/", label: "Home" },
    { href: "/projects", label: "Projects" },
    { href: "/timeline", label: "Timeline" },
    { href: "/contact", label: "Contact" },
];
