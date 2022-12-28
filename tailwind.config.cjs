/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "fjalla_one": ["Fjalla One", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
}
