import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        offwhite: {
          DEFAULT: "#f8fafc",
          50: "#fcfdfe",
          100: "#f8fafc",
          200: "#f1f5f9",
          300: "#e2e8f0",
        },
      },
      fontFamily: {
        sans: [
          'Inter',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          'sans-serif'
        ],
        mono: [
          "'Fira Code'",
          'ui-monospace',
          'SFMono-Regular',
          'Menlo',
          'Monaco',
          'Consolas',
          'monospace'
        ],
      },
      boxShadow: {
        'sky-glow': '0 0 25px -5px rgba(14, 165, 233, 0.25)',
        'sky-card': '0 10px 30px -5px rgba(14, 165, 233, 0.08), 0 2px 6px -1px rgba(15, 23, 42, 0.04)',
      }
    },
  },
  plugins: [],
};
export default config;
