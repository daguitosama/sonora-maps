import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

export default {
    content: ["./app/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                sans: ["Montserrat", ...defaultTheme.fontFamily.sans],
                futura: ["Futura-Light", ...defaultTheme.fontFamily.sans],
            },
            fontSize: {
                "3xs": "0.3rem",
            },
        },
    },
    plugins: [],
} satisfies Config;
