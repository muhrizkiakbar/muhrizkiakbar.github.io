/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

delete colors['lightBlue'];
delete colors['warmGray'];
delete colors['trueGray'];
delete colors['coolGray'];
delete colors['blueGray'];

module.exports = {
  content: ["index.html"],
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    colors: {
      ...colors, 
      primary: '#0ea5e9',
      dark: '#0f172a'
    },
    screen: {
      '2xl': '1320px',
    }
  },
  plugins: [],
}

