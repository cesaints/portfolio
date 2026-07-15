import type { Config } from "tailwindcss";

export default {
    content: [
        "./src/app/**/*.{ts,tsx}",
        "./src/features/**/*.{ts,tsx}",
        "./src/shared/**/*.{ts,tsx}",
        "./src/entities/**/*.{ts,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ["var(--font-sans)", "system-ui", "sans-serif"],
                display: ["var(--font-display)", "var(--font-sans)", "sans-serif"],
                mono: ["var(--font-mono)", "ui-monospace", "monospace"],
            },
            // Semantic tokens (brand violet/cyan use Tailwind's native scale, which already matches).
            colors: {
                bg: {
                    DEFAULT: "var(--bg)",
                    2: "var(--bg-2)",
                },
                surface: {
                    1: "var(--surface-1)",
                    2: "var(--surface-2)",
                    3: "var(--surface-3)",
                },
                line: {
                    DEFAULT: "var(--line)",
                    strong: "var(--line-strong)",
                },
                ink: {
                    DEFAULT: "var(--ink)",
                    2: "var(--ink-2)",
                },
                muted: {
                    DEFAULT: "var(--muted)",
                    2: "var(--muted-2)",
                },
            },
            boxShadow: {
                sm: "var(--shadow-sm)",
                md: "var(--shadow-md)",
                lg: "var(--shadow-lg)",
                glow: "var(--glow-violet)",
            },
            maxWidth: {
                prose: "65ch",
            },
        },
    },
    plugins: [],
} satisfies Config;
