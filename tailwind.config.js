/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        mint: {
          50: "#F0FBF8",
          100: "#D9FBF6",
          300: "#A6EFE7",
          500: "#5FD4C6",
          700: "#2A9D8F",
        },
        coral: {
          100: "#FFE0DD",
          300: "#FFA69F",
          500: "#F27A6E",
          700: "#C4483C",
        },
        cream: {
          100: "#FFF6E0",
          300: "#FFE9B9",
          500: "#F5CD7A",
        },
      },
    },
  },
  plugins: [],
};
