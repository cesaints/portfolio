"use client";
import Image from "next/image";

export default function AvatarFrame({
    src = "/avatar.jpg",
    alt = "Carlos Eduardo (Cadu)",
    w = 340,
    h = 460,
}: {
    src?: string;
    alt?: string;
    w?: number;
    h?: number;
}) {
    return (
        <div className="relative isolate" style={{ width: w, height: h }}>
            {/* Calm single-source glow behind the portrait */}
            <div
                aria-hidden
                className="pointer-events-none absolute -inset-6 -z-10 rounded-[32px]"
                style={{
                    background:
                        "radial-gradient(55% 55% at 50% 40%, rgba(124,58,237,.18), rgba(34,211,238,.10) 40%, transparent 70%)",
                    filter: "blur(18px)",
                }}
            />
            {/* 1px gradient ring → inner surface → photo */}
            <div
                className="h-full w-full rounded-3xl p-px [background:var(--grad-brand)]"
                style={{ boxShadow: "var(--shadow-lg)" }}
            >
                <div className="h-full w-full overflow-hidden rounded-3xl bg-surface-1">
                    <Image
                        src={src}
                        alt={alt}
                        width={w}
                        height={h}
                        className="h-full w-full object-cover"
                        priority
                    />
                </div>
            </div>
        </div>
    );
}
