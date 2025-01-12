import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    colors: {
      yellow: "#B9FF66",
      black: "#191A23",
      lightGray: "#F3F3F9",
    },
  },
  plugins: [],
} satisfies Config;
