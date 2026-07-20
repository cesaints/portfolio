import type { Metadata } from "next";
import { buildMetadata } from "@/shared/config/seo";

export const metadata: Metadata = buildMetadata({
    title: "Projects",
    path: "/projects",
    description:
        "Case studies in product and engineering: the +55 HUB platform (55hubcorp.com), the Distópico holding " +
        "site (distopicoglobal.com) and TreinaEdital (Aprovaki), plus mission critical government systems (ANTT, SEST SENAT, SISRH).",
});

export default function ProjectsLayout({ children }: { children: React.ReactNode }) {
    return children;
}
