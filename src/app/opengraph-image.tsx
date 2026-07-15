import { ImageResponse } from "next/og";
import { siteConfig } from "@/shared/config/seo";

export const alt = `${siteConfig.author} · ${siteConfig.jobTitle}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
    return new ImageResponse(
        (
            <div
                style={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    padding: "72px",
                    backgroundColor: "#f3f1ea",
                    color: "#17160f",
                    fontFamily: "sans-serif",
                }}
            >
                <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                    <div style={{ width: 22, height: 22, backgroundColor: "#d93a15", display: "flex" }} />
                    <div style={{ fontSize: 26, fontWeight: 700, letterSpacing: 1 }}>
                        Cadu
                    </div>
                </div>

                <div style={{ display: "flex", flexDirection: "column" }}>
                    <div style={{ fontSize: 24, letterSpacing: 3, textTransform: "uppercase", color: "#d93a15", display: "flex" }}>
                        Product &amp; Technology Leadership
                    </div>
                    <div style={{ fontSize: 104, fontWeight: 900, lineHeight: 0.98, marginTop: 18, display: "flex" }}>
                        Carlos Eduardo
                    </div>
                    <div style={{ fontSize: 40, fontWeight: 700, marginTop: 18, display: "flex" }}>
                        Diretor de Produto e Tecnologia · CPO / CTO
                    </div>
                </div>

                <div style={{ fontSize: 26, color: "#78756a", display: "flex" }}>
                    +55 HUB &amp; Corporate Group
                </div>
            </div>
        ),
        { ...size }
    );
}
