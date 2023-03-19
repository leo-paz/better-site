/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
const { transform } = require('typescript')

module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        nunito: ['Nunito Sans', 'sans-serif']
      },
      colors: {
        primary: {
          DEFAULT: '#141414',
          hover: '#234567',
          focus: '#345678',
          active: '#456789'
        }
      }
    }
  },
  variants: {
    extend: {
      backgroundColor: ['group-hover'],
      transform: ['group-hover'],
      transformOrigin: ['group-hover'],
      transitionDelay: ['group-hover'],
      transitionDuration: ['group-hover'],
      transitionProperty: ['group-hover'],
      transitionTimingFunction: ['group-hover'],
      translate: ['group-hover']
    }
  },
  plugins: []
}
