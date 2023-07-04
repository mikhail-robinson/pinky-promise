const { title } = require('process')

module.exports = {
  content: ['./client/**/*.{html,jsx,tsx}', './index.html'],
  theme: {
    extend: {
      colors: {
        purple: '#464FA3',
        lightPurple: '#606EEF',
        pink: '#FBEAF3',
        darkPink: '#F2BAD8',
        white: '#FFFFF',
      },
      fontFamily: {
        primary: 'Cherry Bomb One',
        secondary: 'VarelaRound',
        body: 'PTSans-Regular',
      },
      backgroundImage: {
        space: 'url(/image/background3.png)',
      },
      backgroundPosition: {
        rightbackgroundImage: 'right 3000px',
      },
      minHeight: {
        '1/2': '100px',
      },
      margin: {
        8: '2rem',
        9: '2.25rem',
      },
      keyframes: {
        pulse: {
          '0%': { 'box-shadow': '0 0 0 0px rgba(0, 0, 255, 0.7)' },
          '70%': { 'box-shadow': '0 0 0 0px rgba(0, 0, 255, 0.7)' },
          '100%': { 'box-shadow': '0 0 0 0px rgba(0, 0, 255, 0)' },
        },
      },
      animate: {
        pulse: {
          animation: 'pulse 2s infinite',
        },
      },
    },
  },
  plugins: [],
}
