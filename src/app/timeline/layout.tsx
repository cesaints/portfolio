import type { Metadata } from "next";
import { buildMetadata } from "@/shared/config/seo";

export const metadata: Metadata = buildMetadata({
    title: "Timeline",
    path: "/timeline",
    description:
        "Career timeline of Carlos Eduardo (Cadu): from Software Developer Intern to " +
        "Diretor de Produto e Tecnologia (CPTO) at Distópico Holding, CPO/CTO at +55 HUB & Corporate Group, " +
        "and Founder & CEO of TreinaEdital. " +
        "Websis, CBOO, TCB, education and certifications.",
});

export default function TimelineLayout({ children }: { children: React.ReactNode }) {
    return children;
}
