/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,css}"],
  theme: {
    screens: {
      mobile: "480px",

      tablet: "640px",

      laptop: "1024px",

      desktop: "1280px",
    },

    fontSize: {
      sm: "1.5rem",
      base: "1.8rem",
      lg: "2.1rem",
      xl: "2.4rem",
    },
    extend: {},
  },
  plugins: [],
};
