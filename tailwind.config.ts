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
        // --- PALETA LUXO MODERNA ---
        brand: {
          primary: "#475569",    // Azul Slate (Sério e Profissional)
          accent: "#C2A388",     // Champagne/Nude (Sofisticação)
          bg: "#FDFDFD",         // Off-White (Limpeza e Claridade)
          surface: "#F1F5F9",    // Azul Gelo (Para a Sidebar e Seções)
        },
        // Configuração para o sistema shadcn
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "#C2A388",
        background: "#FDFDFD",
        foreground: "#1E293B",
        primary: {
          DEFAULT: "#475569",
          foreground: "#FFFFFF",
        },
        secondary: {
          DEFAULT: "#F1F5F9",
          foreground: "#475569",
        },
        muted: {
          DEFAULT: "#F8FAFC",
          foreground: "#64748B",
        },
        accent: {
          DEFAULT: "#C2A388",
          foreground: "#FFFFFF",
        },
        card: {
          DEFAULT: "#FFFFFF",
          foreground: "#1E293B",
        },
        // --- SIDEBAR CLARA E MODERNA ---
        sidebar: {
          DEFAULT: "#F8FAFC", 
          foreground: "#475569",
          primary: "#475569",
          "primary-foreground": "#FFFFFF",
          accent: "#F1F5F9",
          "accent-foreground": "#475569",
          border: "#E2E8F0",
          ring: "#C2A388",
        },
      },
      borderRadius: {
        lg: "1rem",   // Bordas mais arredondadas para um look moderno
        md: "0.75rem",
        sm: "0.5rem",
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
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;