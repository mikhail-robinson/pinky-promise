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
        wave: {
          '0%': { transform: 'rotate(0.0deg)' },
          '10%': { transform: 'rotate(14deg)' },
          '20%': { transform: 'rotate(-8deg)' },
          '30%': { transform: 'rotate(14deg)' },
          '40%': { transform: 'rotate(-4deg)' },
          '50%': { transform: 'rotate(10.0deg)' },
          '60%': { transform: 'rotate(0.0deg)' },
          '100%': { transform: 'rotate(0.0deg)' },
        },
      },
      animation: {
        'waving-hand': 'wave 2s linear infinite',
      },
    },
  },
  plugins: [],
}
