import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: "#2d4f3e",
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', "Georgia", "serif"],
      },
    },
  },
} satisfies Config;
