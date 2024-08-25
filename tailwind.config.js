/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}",
    "./formkit.config.ts"
  ],
  theme: {
    extend: {
      backgroundImage : {
        "app":"url('../public/img/1.png')"
      },
      colors: {
        "vtd-primary" : colors.blue
      }
    },
  },
  plugins: [],
}
