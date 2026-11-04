/**
 * Palette unica del sito: per cambiare i colori modificare solo questo blocco.
 * Contrasti WCAG (testo su sfondo): ink/paper ~15:1, muted/paper 6:1, accent/paper 5.6:1, on-accent/accent 6.3:1.
 */
const palette = {
  paper: "#F6F2EB", // sfondo principale, off-white caldo
  ink: "#1C1B19", // testo principale e superfici scure
  mist: "#ECE6DB", // superfici secondarie, card, sezioni alternate
  muted: "#5E5A53", // testo secondario (6:1 su paper, 5.3:1 su mist)
  line: "#D8D0C3", // bordi e divisori
  accent: "#9E4620", // colore d'accento (5.6:1 su paper)
  "accent-hover": "#7A3414", // accento in hover e pressed
  "on-accent": "#FBF8F3", // testo su sfondo accent
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: palette,
      fontFamily: {
        display: ["Fraunces", "Georgia", "serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      keyframes: {
        "fade-up": {
          from: { opacity: "0", transform: "translateY(16px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s cubic-bezier(0.22, 1, 0.36, 1) both",
        "fade-in": "fade-in 0.4s ease-out both",
      },
    },
  },
  plugins: [],
};
