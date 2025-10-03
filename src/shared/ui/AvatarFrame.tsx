// src/shared/ui/AvatarFrame.tsx
"use client";
import Image from "next/image";

export default function AvatarFrame({
    src = "/avatar.jpg",
    alt = "Foto de perfil",
    w = 340,
    h = 460,
    ring = 10, // espessura da borda (px)
}: {
    src?: string;
    alt?: string;
    w?: number;
    h?: number;
    ring?: number;
}) {
    const R = 9999; // oval

    return (
        // isolate cria um stacking context: z-index funciona previsivelmente
        <div className="relative isolate" style={{ width: w, height: h }}>
            {/* GLOW externo — fica ATRÁS (não tinge a foto) */}
            <div
                className="pointer-events-none absolute -inset-6 z-0"
                style={{
                    borderRadius: R,
                    background:
                        "radial-gradient(55% 55% at 50% 40%, rgba(124,58,237,.22), rgba(34,211,238,.14) 35%, rgba(0,0,0,0) 65%)",
                    filter: "blur(14px)",
                }}
            />

            {/* FOTO — sem qualquer overlay/filtro */}
            <div
                className="relative z-10 overflow-hidden bg-neutral-950 border border-neutral-800/70"
                style={{ width: "100%", height: "100%", borderRadius: R }}
            >
                <Image
                    src={src}
                    alt={alt}
                    width={w}
                    height={h}
                    className="w-full h-full object-cover"
                    style={{ borderRadius: R }}
                    priority
                />
            </div>

            {/* ANEL RGB — camada própria, mascarada (apenas borda) */}
            <span
                className="pointer-events-none absolute inset-0 z-20"
                style={{
                    borderRadius: R,
                    padding: ring,
                    background:
                        "conic-gradient(from 210deg, #7c3aed, #22d3ee 30%, #a78bfa 55%, #22d3ee 80%, #7c3aed)",
                    // donut mask: remove o centro e deixa só a borda
                    WebkitMask:
                        "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
                    WebkitMaskComposite: "xor",
                    maskComposite: "exclude",
                    // anima apenas a cor do anel
                    animation: "hue 16s linear infinite",
                    boxShadow:
                        "0 0 26px rgba(124,58,237,.22), 0 0 16px rgba(34,211,238,.16)",
                }}
            />
        </div>
    );
}
