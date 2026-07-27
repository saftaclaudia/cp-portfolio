/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        teal: {
          50: "#E1F5EE",
          400: "#5DCAA5",
          600: "#1D9E75",
          800: "#085041",
        },
        yellow: {
          400: "#FAC775",
          600: "#EF9F27",
        },
      },
    },
  },
  plugins: [],
};
