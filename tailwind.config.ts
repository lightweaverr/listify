import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        background: {
          DEFAULT: "#000000",
          secondary: "#050505",
        },
        paper: {
          700: "#121212",
          600: "#232323",
          500: "#181818",
          400: "#313131",
        },
        white: "#FEFFFE",
        purple: "#531640",
        primary: "#1DB954",
        gray: {
          DEFAULT: "#B3B3B3",
          dark: "#4D4D4D",
          light: "#AEAEAE",
        },
      },
    },
  },
  plugins: [],
};
export default config;
