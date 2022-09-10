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