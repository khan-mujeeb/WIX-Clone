/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {

    extend: {
      screens:{
        'xs': '475px',
        '3xl': '1920px',
      
      },
      colors: {
        "green-1000": "#035946"
      },
    },
  },
  plugins: [],
}