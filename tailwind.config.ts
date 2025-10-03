import type { Config } from "tailwindcss";

export default {
    content: [
        "./src/app/**/*.{ts,tsx}",
        "./src/features/**/*.{ts,tsx}",
        "./src/shared/**/*.{ts,tsx}",
        "./src/entities/**/*.{ts,tsx}",
    ],
    theme: { extend: {} },
    plugins: [],
} satisfies Config;
