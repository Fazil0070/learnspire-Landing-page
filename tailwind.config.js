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
      fontFamily: {
        'sans': ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        'display': ['Kamerik 205', 'Inter', 'sans-serif'],
        'Kanit': ['Kanit', 'sans-serif'],
        'kamerik': ['Kamerik 205', 'Inter', 'sans-serif'],
      },
      colors: {
        surface: '#09090b',
        elevated: '#111113',
      },
      maxWidth: {
        '1400': '1400px',
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
      },
      animation: {
        'marquee-left': 'marquee-left 40s linear infinite',
        'marquee-right': 'marquee-right 35s linear infinite',
      },
    },
  },
  plugins: [],
}
