/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'light-b': 'rgba(99, 102, 241, 0.9)',
      },
      screens: {
        'media920':'902px',
        'media420':'420px',
      },
      animation: {
        'anim': 'anim 35s infinite linear;',
      },
      keyframes: {
        anim: {
          'from':{ transform: 'translateX(0)' },
          'to':{ transform: 'translateX(-100%)' },
        }
      },
    },
    fontFamily: {
      'mans': ["Manrope", 'sans-serif'],
    }
  },
  plugins: [plugin(function({ addVariant }) {
    addVariant("open", ".open &");
    addVariant("active", ".active&");
    addVariant("menu", ".menu&");
    addVariant("scroll", ".scroll&");
  })
],
}

