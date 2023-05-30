/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#031411",
        secondary: "#e6732c",
        tertiary: "#16473e",
        "black-100": "#0f2420",
        "black-200": "#03261f",
        "white-100": "#f3f3f3",
        orange: "#e6732c",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      // backgroundImage: {
      //   "hero-pattern": "url('/src/assets/herobg.png')",
      // },
    },
  },
  plugins: [],
};
