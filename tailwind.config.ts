import type {Config} from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // removed doto font family
      },
      keyframes: {
        fadeIn: {
          "0%": {opacity: "0"},
          "100%": {opacity: "1"},
        },
        fadeInUp: {
          "0%": {opacity: "0", transform: "translateY(20px)"},
          "100%": {opacity: "1", transform: "translateY(0)"},
        },
        typing: {
          "0%": {width: "0"},
          "100%": {width: "100%"},
        },
      },
      animation: {
        "fade-in": "fadeIn 0.8s ease-out forwards",
        "fade-in-up": "fadeInUp 1s ease-out forwards",
        typing: "typing 1s steps(50, end) forwards",
      },
    },
  },
  plugins: [],
} satisfies Config;
