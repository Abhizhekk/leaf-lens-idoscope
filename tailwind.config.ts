import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        leaf: {
          light: "#e5eccd",
          primary: "#3b763b",
          accent: "#b1f149",
          dark: "#2a522a",
        },
      },
      fontFamily: {
        bebas: ["Bebas Neue", "sans-serif"],
        ripon: ["Ripon Script", "cursive"],
      },
      animation: {
        "leaf-bounce": "leaf-bounce 2s infinite",
      },
      keyframes: {
        "leaf-bounce": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;