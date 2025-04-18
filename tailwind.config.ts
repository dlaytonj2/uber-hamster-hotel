
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
        background: {
          DEFAULT: "30 20% 95%", // Light beige
          foreground: "30 10% 20%", // Dark brown
        },
        primary: {
          DEFAULT: "30 20% 40%", // Medium brown
          foreground: "30 5% 98%", // Off-white
        },
        secondary: {
          DEFAULT: "30 15% 80%", // Light brown
          foreground: "30 10% 20%", // Dark brown
        },
        muted: {
          DEFAULT: "30 15% 80%", // Light brown
          foreground: "30 10% 40%", // Medium brown
        },
        accent: {
          DEFAULT: "30 15% 80%", // Light brown
          foreground: "30 10% 20%", // Dark brown
        },
        border: "30 10% 70%", // Brown
        input: "30 10% 70%", // Brown
        ring: "30 10% 20%", // Dark brown
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'earth-gradient': 'linear-gradient(to right, #D2B48C, #8B4513)',
      }
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

