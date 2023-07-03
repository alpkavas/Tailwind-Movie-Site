/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    container: {
      center : true,
      screens: {
        lg: "1140px",
        xl: "1140px",
      "2xl": "1140px"
      }
    },
    extend: {
      fontFamily:{
        gemunu : ['Gemunu Libre', "sans-serif"],
        sans : ['Open Sans', "sans-serif"]
      },      
      colors: {
        'digi-red': '#BC1A45',
        'digi-melon': '#FFD369',
        'digi-grey': '#DDDDDD',
        'digi-white': '#F7F7F7',
      },
      backgroundImage: {
        item: "URL('./src/img/ss.png')"
      },
      spacing:{
      128: "32rem",
      }
    },
  },
  plugins: [],
}

