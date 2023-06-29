const { title } = require('process')

module.exports = {
  content: ['./client/**/*.{html,jsx,tsx}', './index.html'],
  theme: {
    extend: {
      colors: {
        purple: '#464FA3',
        pink: '#FBEAF3',
        white: '#FFFFF',
      },
      fontFamily: {
        primary: "Cherry Bomb One",
        secondary: "Varela Round"
      },
      backgroundImage: {
        space: 'url(/image/background.png)'
      }
    },
  },
  plugins: [],
}
