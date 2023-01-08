/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'xs': '320px',
      ...defaultTheme.screens,
    },
    extend: {
      backgroundImage: {
        'footer-decor1': "url('./images/footerdecorated_bgimage1.svg')",
        'footer-decor2': "url('./images/footerdecorated_bgimage2.svg')",
      },
      fontFamily: {
        "fjalla_one": ["Fjalla One", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  corePlugins: {
    aspectRatio: false,
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    // ...
  ],
}
