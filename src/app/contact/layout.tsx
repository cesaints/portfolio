import type { Metadata } from "next";
import { buildMetadata } from "@/shared/config/seo";

export const metadata: Metadata = buildMetadata({
    title: "Contact",
    path: "/contact",
    description:
        "Get in touch with Carlos Eduardo (Cadu), Product and Technology Director (CPTO). " +
        "Send a message about product, technology, RevOps or engineering leadership.",
});

export default function ContactLayout({ children }: { children: React.ReactNode }) {
    return children;
}
