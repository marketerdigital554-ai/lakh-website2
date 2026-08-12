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
      padding: "1.5rem",
      screens: {
        "2xl": "1280px",
      },
    },
    extend: {
      colors: {
        // Core brand tokens — mirrors the approved LAKH palette 1:1.
        navy: {
          DEFAULT: "#0B1730",
          800: "#122347",
          700: "#1B2E56",
        },
        solar: {
          yellow: "#FFC629",
          orange: "#FF8A3D",
        },
        energy: {
          green: "#22C55E",
          lime: "#BEF264",
        },
        sky: {
          cyan: "#38BDF8",
          blue: "#2563EB",
        },
        warm: {
          white: "#FFFDF9",
          surface: "#F4F1EA",
        },
        border: {
          DEFAULT: "#E7E2D6",
        },
        ink: {
          primary: "#0B1730",
          secondary: "#5B6472",
          onDark: "#F4F1EA",
        },
        status: {
          warning: "#F59E0B",
          error: "#EF4444",
          success: "#22C55E",
        },
      },
      backgroundImage: {
        "gradient-solar": "linear-gradient(135deg, #FFC629 0%, #FF8A3D 100%)",
        "gradient-growth": "linear-gradient(135deg, #22C55E 0%, #BEF264 100%)",
        "gradient-tech": "linear-gradient(135deg, #2563EB 0%, #38BDF8 100%)",
        "gradient-dusk":
          "linear-gradient(180deg, rgba(11,23,48,0.10) 0%, rgba(11,23,48,0.85) 100%)",
      },
      fontFamily: {
        sans: ["var(--font-plus-jakarta)", "system-ui", "sans-serif"],
      },
      fontSize: {
        "hero-mobile": ["2.25rem", { lineHeight: "1.08", fontWeight: "800" }],
        "hero-desktop": ["4.5rem", { lineHeight: "1.05", fontWeight: "800" }],
        "h2-mobile": ["1.75rem", { lineHeight: "1.15", fontWeight: "700" }],
        "h2-desktop": ["2.5rem", { lineHeight: "1.15", fontWeight: "700" }],
      },
      borderRadius: {
        sm: "8px",
        md: "12px",
        lg: "16px",
        xl: "20px",
        pill: "999px",
      },
      boxShadow: {
        card: "0 4px 16px rgba(11, 23, 48, 0.06)",
        "card-hover": "0 12px 28px rgba(11, 23, 48, 0.12)",
        "cta-solar": "0 8px 20px rgba(255, 140, 61, 0.25)",
        "cta-growth": "0 8px 20px rgba(34, 197, 94, 0.22)",
      },
      spacing: {
        section: "6rem",
        "section-mobile": "3.5rem",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "particle-drift": {
          "0%": { transform: "translateY(0)", opacity: "0" },
          "10%": { opacity: "0.6" },
          "100%": { transform: "translateY(-120px)", opacity: "0" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s ease-out both",
        "particle-drift": "particle-drift 6s ease-in infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
