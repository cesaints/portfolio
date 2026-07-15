// Self-hosted fonts via next/font (no render-blocking Google request, no CLS).
// Display = Montserrat (brand continuity with 55hubcorp). Body = Inter. Mono = JetBrains Mono for instrumented stats.
import { Montserrat, Inter, JetBrains_Mono } from "next/font/google";

export const display = Montserrat({
    subsets: ["latin"],
    weight: ["600", "700", "800"],
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
    weight: ["500"],
    variable: "--font-mono",
    display: "swap",
});

export const fontVariables = `${display.variable} ${sans.variable} ${mono.variable}`;
