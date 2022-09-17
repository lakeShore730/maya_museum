/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#009688",
        lightPrimary: "#80CBC4",
        darkPrimary: "#00695C",
        secondary: "#9C27B0",
        lightSecondary: "#CE93D8",
        darkSecondary: "#6A1B9A",
        surface: "#FFFFFF",
        background: "#FFFFFF",
        error: "#B000020",
      },
    },
  },
  plugins: [],
};
