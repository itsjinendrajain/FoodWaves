// const defaultTheme = require('tailwindcss/defaultTheme')
const  DefaultTheme =  require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  // darkMode: 'class',
  // darkMode: 'media',
  content: [
    "./src/**/*.{html,js}", 
    'node_modules/preline/dist/*.js',
  ],
  theme: {
    extend: {
      fontFamily: {
        // 'sans': ['Dancing Script', ...DefaultTheme.fontFamily.sans],
        'oswald': ['Oswald', ...DefaultTheme.fontFamily.sans],
        'robotocondensed': ['Roboto Condensed', ...DefaultTheme.fontFamily.sans],

      },
      animation: {
        // 'spin-slow': 'spin 3s linear infinite',
        "bounceOnce": 'wiggle 1s ease-in-out 1',
      }
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('preline/plugin'),

  ],
}