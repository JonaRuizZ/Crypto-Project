/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'bitcoin': "url('/fondo/bitcoin.jpg')"
      }
    },
  },
  plugins: [],
}
