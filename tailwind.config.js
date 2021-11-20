module.exports = {
  purge: ['./pages/**/*.tsx', './components/**/*.tsx'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'kaushan': ['Kaushan Script'],
    },
    extend: {
      colors: {
        // Build your palette here
        green:{
          DEFAULT:'#00F260',
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
