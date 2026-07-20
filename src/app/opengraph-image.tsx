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
                    justifyContent: "center",
                    padding: "80px",
                    backgroundColor: "#080b14",
                    backgroundImage:
                        "radial-gradient(1200px 600px at 50% -10%, rgba(124,58,237,0.35), transparent 55%)," +
                        "radial-gradient(900px 600px at 90% 10%, rgba(34,211,238,0.22), transparent 55%)",
                    color: "#f2f5fa",
                    fontFamily: "sans-serif",
                }}
            >
                <div
                    style={{
                        fontSize: 30,
                        letterSpacing: 4,
                        textTransform: "uppercase",
                        color: "#38dbf0",
                        display: "flex",
                    }}
                >
                    Distópico Holding · +55 HUB &amp; Corporate Group
                </div>
                <div
                    style={{
                        fontSize: 76,
                        fontWeight: 800,
                        lineHeight: 1.05,
                        marginTop: 24,
                        display: "flex",
                    }}
                >
                    Carlos Eduardo · Cadu
                </div>
                <div
                    style={{
                        fontSize: 44,
                        fontWeight: 700,
                        marginTop: 20,
                        color: "#c4b5fd",
                        display: "flex",
                    }}
                >
                    Diretor de Produto e Tecnologia · CPTO
                </div>
                <div
                    style={{
                        fontSize: 28,
                        marginTop: 28,
                        color: "#8b93a7",
                        display: "flex",
                    }}
                >
                    A product leader with engineering roots.
                </div>
            </div>
        ),
        { ...size }
    );
}
