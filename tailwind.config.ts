import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontSize: {
        "display-01": [
          "56px",
          {
            lineHeight: "56px",
            letterSpacing: "-2%",
          },
        ],
        "outlined-01": [
          "48px",
          {
            lineHeight: "56px",
            letterSpacing: "-2%",
          },
        ],
        "display-02": [
          "24px",
          {
            lineHeight: "28px",
            letterSpacing: "-2%",
          },
        ],
        "outlined-02": [
          "24px",
          {
            lineHeight: "28px",
            letterSpacing: "-2%",
          },
        ],
        "sub-heading": [
          "40px",
          {
            lineHeight: "48px",
            letterSpacing: "-2%",
          },
        ],
        "heading-01": [
          "36px",
          {
            lineHeight: "44px",
            letterSpacing: "-2%",
          },
        ],
        "heading-02": [
          "32px",
          {
            lineHeight: "40px",
            letterSpacing: "-2%",
          },
        ],
        "heading-03": [
          "28px",
          {
            lineHeight: "32px",
            letterSpacing: "-2%",
          },
        ],
        "heading-04": [
          "24px",
          {
            lineHeight: "24px",
            letterSpacing: "-2%",
          },
        ],
        "heading-05": [
          "20px",
          {
            lineHeight: "24px",
            letterSpacing: "-2%",
          },
        ],
        "p-01": [
          "20px",
          {
            lineHeight: "24px",
            letterSpacing: "2%",
          },
        ],
        "p-02": [
          "16px",
          {
            lineHeight: "20px",
            letterSpacing: "2%",
          },
        ],
        "p-03": [
          "12px",
          {
            lineHeight: "16px",
            letterSpacing: "2%",
          },
        ],
        "button-text-01": [
          "20px",
          {
            lineHeight: "20px",
            letterSpacing: "2%",
          },
        ],
        "button-text-02": [
          "16px",
          {
            lineHeight: "20px",
            letterSpacing: "2%",
          },
        ],
      },
      colors: {
        zinc: {
          100: "#f4f4f5",
          200: "#e4e4e7",
          300: "#d4d4d8",
          500: "#71717a",
          800: "#27272a",
        },
        neutral : "#404040",
        error: {
          500: "#ef4444",
        }
      },
    },
  },
  plugins: [],
};
export default config;
