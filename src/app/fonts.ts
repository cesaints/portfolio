// Editorial type system: Archivo (strong grotesque display) + Inter (body) + JetBrains Mono (labels/numbers).
import { Archivo, Inter, JetBrains_Mono } from "next/font/google";

export const display = Archivo({
    subsets: ["latin"],
    weight: ["600", "700", "800", "900"],
    variable: "--font-display",
    display: "swap",
});

export const sans = Inter({
    subsets: ["latin"],
    weight: ["400", "500", "600"],
    variable: "--font-sans",
    display: "swap",
});

export const mono = JetBrains_Mono({
    subsets: ["latin"],
    weight: ["400", "500"],
    variable: "--font-mono",
    display: "swap",
});

export const fontVariables = `${display.variable} ${sans.variable} ${mono.variable}`;
