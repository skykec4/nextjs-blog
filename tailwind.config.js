/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        jr: 'iceJaram-Rg',
        dodam: 'KCC-DodamdodamR',
      },
    },
  },
  plugins: [],
}
