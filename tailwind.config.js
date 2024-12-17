/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      fontFamily:{
        'Raleway': ["Raleway", "serif"],
        'Kanit': ["Kanit", "sans-serif"],
        'kamerik': ['Kamerik 205', 'sans-serif'],
      },


      maxWidth: {
        '1400': '1400px',
      },
    },
  },
  plugins: [],

}