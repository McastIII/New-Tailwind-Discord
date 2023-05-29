/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        dark:'#323232',
        light:'#ffffff',
        primary:'#404eed',
        grey: '#f6f6f6',
      },


      backgroundImage: {
        'hmBG': 'url("./img/background.svg")',
        'stars': 'url("./img/stars-bg.svg")',
      },
    },  
  },
  plugins: [],
}

