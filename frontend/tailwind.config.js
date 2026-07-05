/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      colors: {

        background: "#0B1220",

        surface: "#131C2E",

        card: "#1A2438",

        accent: "#3B82F6",

        success: "#22C55E",

        warning: "#F59E0B",

        danger: "#EF4444",

        text: "#F8FAFC",

        muted: "#94A3B8",

      },

      borderRadius: {
        xl: "12px",
      },

      fontFamily: {
        heading: ["Space Grotesk"],
        body: ["Inter"],
        mono: ["IBM Plex Sans"],
      },
    },
  },

  plugins: [],
}