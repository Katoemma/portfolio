/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      'md': '768px',
      'lg': '1024px',
      'xl': '1224px',
      '2xl': '1824px'
    },
    colors:{
      'goldy': '#ff0066',//#ff6600
      'white' : '#ffffff',
      'black' : '#000000',
      'gray': '#808080',
    },
    extend: {
      backgroundImage: {
        'mobileBg': "url('/img/background/smallBG.jpg')",
      }
    },
  },
  plugins: [],
};
