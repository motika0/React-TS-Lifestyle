/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
      'custom-xl': {'min': '1280px', 'max': '1800px'},
    },
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        comfortaa: ['Comfortaa', 'sans-serif'],
      },
      gridTemplateColumns: {
        'custom': 'repeat(auto-fit, minmax(500px, 1fr))',
      },
      colors: {
        customPink: '#D364AA',
        customGreen: '#64D370',
      },
    },
  },
  plugins: [],
};