/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FF3811",
        light: "#737373",
        dark: "#151515"
      }
    },
  },
  plugins: [require("daisyui")],
}

