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
        background: "#151134",
        primary: {
          DEFAULT: "#4A36CE",
          hover: "#7E83FB",
          light: "#C6CEFF",
        },
        secondary: "#201A4C",
        golden: {
          light: "#FCF5B3",
          dark: "#C7AD7F",
        },
        rarity: {
          100: "#929399",
          150: "#58585a",
          200: "#4E9F4F",
          250: "#4E9F4F",
          300: "#5A73C7FF",
          350: "#35457c",
          400: "#c4b5fd",
          450: "#a78bfa",
          500: "#FCF5B3",
          550: "#C7AD7F",
        },
        element: {
          light: "#F8E56C",
          ice: "#41AEFB",
          fire: "#F0744E",
          thunder: "#B46BFF",
          wind: "#55FFB5",
          dark: "#E649A6",
        },
      },
    },
  },
  plugins: [],
};
export default config;
