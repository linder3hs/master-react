import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/common/components/**/*.{ts,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/login/**/*.{ts,tsx,}",
    "./src/browse/**/*.{jsx,tsx}",
    "./src/home/**/*.{jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        netflix: "#e50914",
        "netflix-dark": "#b20710",
        "netflix-light": "#ff1f1f",
        "netflix-gray": "#333333",
        "netflix-gray-light": "#757575",
        "netflix-color-dark": "#141414",
        "netflix-color-error": "#e87c03",
        "netflix-placeholder": "#8c8c8c",
        "netflix-color-gray": "#737373",
        "netflix-color-gray-light": "#6d6d6e",
      },
    },
  },
  plugins: [],
};
export default config;
