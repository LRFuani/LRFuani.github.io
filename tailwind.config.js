// tailwind.config.js
module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'landing-first': "url('/styling/images/jaguarOnTree.jpg')",
      })
    }
  },
  variants: {},
  plugins: [],
}