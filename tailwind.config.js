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
    },
  },
  plugins: [],
}
