import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1.25rem",
      screens: {
        "2xl": "1280px",
      },
    },
    extend: {
      colors: {
        ink: {
          DEFAULT: "#161F2E",
          light: "#243349",
        },
        ember: {
          DEFAULT: "#E8631C",
          light: "#FFA359",
          dark: "#B94A0F",
        },
        cream: "#F7F3EC",
        charcoal: "#20242B",
        steel: {
          DEFAULT: "#5B6B7A",
          light: "#8A97A4",
        },
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "serif"],
        body: ["var(--font-inter)", "sans-serif"],
        utility: ["var(--font-space)", "monospace"],
      },
      backgroundImage: {
        "heat-gradient": "linear-gradient(90deg, #161F2E 0%, #5B6B7A 45%, #E8631C 100%)",
        "heat-gradient-radial": "radial-gradient(circle at 30% 30%, #FFA359 0%, #E8631C 45%, transparent 70%)",
      },
      borderRadius: {
        lg: "0.75rem",
        md: "0.5rem",
        sm: "0.25rem",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "flow": {
          "0%": { backgroundPosition: "0% 50%" },
          "100%": { backgroundPosition: "100% 50%" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        flow: "flow 3s linear infinite alternate",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
