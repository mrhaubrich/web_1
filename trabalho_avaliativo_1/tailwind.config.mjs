/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        dark: "#232322",
        "dark-text": "#eee",
        "dark-hover": "#383838",
      },
    },
  },
  safelist: [
    {
      pattern: /scale-(\d+)/, // This allows scale-100, scale-105, scale-110, etc.
      variants: ["responsive", "hover", "focus", "group-hover"],
    },
  ],
  plugins: [],
};
