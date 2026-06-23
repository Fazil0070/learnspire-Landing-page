/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    screens: {
      'xs': '475px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
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