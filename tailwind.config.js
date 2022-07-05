/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ["Poppins", "sans-serif"],
    },
    extend: {
      colors: {
        base: "rgb(var(--color-base) / <alpha-value>)",
        primary500: "rgb(var(--color-primary500) / <alpha-value>)",
        secondary500: "rgb(var(--color-secondary500) / <alpha-value>)",
      },
      animation: {
        fadein: "fadein 1000ms ease-in-out",
      },
      keyframes: {
        fadein: {
          "0%": {
            opacity: "0",
          },
          "20%": {
            opacity: "0",
          },
          "100%": {
            opacity: "1",
          },
        },
      },
    },
  },
  plugins: [],
};
