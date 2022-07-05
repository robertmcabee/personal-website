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
        primary50: "rgb(var(--color-primary50) / <alpha-value>)",
        primary100: "rgb(var(--color-primary100) / <alpha-value>)",
        primary200: "rgb(var(--color-primary200) / <alpha-value>)",
        primary300: "rgb(var(--color-primary300) / <alpha-value>)",
        primary400: "rgb(var(--color-primary400) / <alpha-value>)",
        primary500: "rgb(var(--color-primary500) / <alpha-value>)",
        primary600: "rgb(var(--color-primary600) / <alpha-value>)",
        primary700: "rgb(var(--color-primary700) / <alpha-value>)",
        primary800: "rgb(var(--color-primary800) / <alpha-value>)",
        primary900: "rgb(var(--color-primary900) / <alpha-value>)",
        secondary50: "rgb(var(--color-secondary50) / <alpha-value>)",
        secondary100: "rgb(var(--color-secondary100) / <alpha-value>)",
        secondary200: "rgb(var(--color-secondary200) / <alpha-value>)",
        secondary300: "rgb(var(--color-secondary300) / <alpha-value>)",
        secondary400: "rgb(var(--color-secondary400) / <alpha-value>)",
        secondary500: "rgb(var(--color-secondary500) / <alpha-value>)",
        secondary600: "rgb(var(--color-secondary600) / <alpha-value>)",
        secondary700: "rgb(var(--color-secondary700) / <alpha-value>)",
        secondary800: "rgb(var(--color-secondary800) / <alpha-value>)",
        secondary900: "rgb(var(--color-secondary900) / <alpha-value>)",
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
