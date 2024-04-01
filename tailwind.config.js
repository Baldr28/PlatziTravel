module.exports = {
  content: ["./public/index.html", "./src/**/*.{html,js}"],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: {
        'bali': 'url(../img/bali.jpg)',
        'chicago': 'url(../img/chicago.jpg)',
        'europe': 'url(../img/europe.jpg)',
        'iceland': 'url(../img/iceland.jpg)',
        'LA': 'url(../img/LA.jpg)',
        'miami': 'url(../img/miami.jpg)',
        'new_york': 'url(../img/new_york.jpg)',
        'normay': 'url(../img/norway.jpg)',
        'sanFrancisco': 'url(../img/sanFrancisco.jpg)',
        'sanFranciscoDesktop': 'url(../img/sanFranciscoDesktop.jpg)',
        'seattle': 'url(../img/seattle.jpg)',
        'switzerland': 'url(../img/switzerland.jpg)',
        'sydney': 'url(../img/sydney.jpg)',
        'yosemite': 'url(../img/yosemite.jpg)',

      },
      backgroundColor: theme => ({
        ...theme('colors'),
        'primary': '#CC2D4A',
        'secondary': '#8FA206',
        'tertiary': '#61AEC9',
        
      }),
      textColor:{
        // ...theme('colors'),
        'primary': '#CC2D4A',
        'secondary': '#8FA206',
        'tertiary': '#61AEC9',
        'footerT': '#cccccccc',
        'notsowhite': '#F2F2F2',
      },
      fontFamily:{
        Montserrat: ['Montserrat', 'sans-serif']
      }, spacing: {
        '10': '2.5rem', 
        '11': '2.75rem',
        '12':'3rem',
        '100': '33rem',
        '120': '40rem',
        '84': '28rem',
        '163': '54rem',
        '104': '49rem',
      },
    },
  },
  variants: {
    width: ["responsive", "hover", "focus"],
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
};