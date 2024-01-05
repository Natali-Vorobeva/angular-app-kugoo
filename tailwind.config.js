/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontSize: {
      sm: '1.2rem',
      base: '1.4rem',
      xl: '1.6rem',
      '2xl': '1.8rem',
      '3xl': '2rem',
      '4xl': '2.5rem',
      '5xl': '3.5rem',
    },
    fontFamily: {
      jost: ["Jost", "sans-serif"],
      arial: ["Arial", "sans-serif"],
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'black': '#282739',
      'purple': '#6F73EE',
      'green': '#75D14A',
      'gray600': '#5D6C7B',
      'gray200': '#F4F7FB',
      'tahiti': '#3ab7bf',
      'silver': '#ecebff',
      'bubble-gum': '#ff77e9',
      'bermuda': '#78dcca',
    },
  },
  plugins: [
    plugin(function ({ addBase }) {
      addBase({
        'html': {
          fontSize: "62.5%",

        },
        'body': {
          fontFamily: "'Jost', sans-serif",
          boxSizing: 'border-box',
          padding: '0',
          margin: '0',
          color: '#282739'
        },
        'h1': {
          fontSize: "3.5rem",
          fontWeight: "600",
          lineHeight: "5.06rem"
        },
        'h2': {
          fontSize: "3rem",
          fontWeight: "700",
          lineHeight: "4rem"
        },
        'h3': {
          fontSize: "3.5rem",
          fontWeight: "600",
          lineHeight: "5.06rem"
        },
        'h4': {
          // fontSize: "62.5%"
        },

      })
    }),
    plugin(function ({ addVariant }) {
      addVariant('children', '&>*')
    })
  ],
}
