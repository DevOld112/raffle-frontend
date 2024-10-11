/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
export default {
  mode: 'jit',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}",
    "./formkit.config.ts"
  ],
  theme: {
    fontFamily: {
      "theme-heading": ["'Exo 2'", "sans-serif"],
      "theme-content": ["Alegreya Sans", "sans-serif"],
  },
    extend: {
      backgroundImage : {
        "app":"url('../public/img/1.png')"
      },
      colors: {
        "vtd-primary" : colors.blue,
        "theme-primary": "#5368DF",
        "theme-secondary": "#FA5757",
        "theme-grayish-blue": "#9194A1",
        "theme-dark-blue": "rgb(37, 43, 70)",
        "theme-dark-blue-tp": "rgba(37, 43, 70, 0.9)",
      }
    },
  },
  plugins: [],
}
