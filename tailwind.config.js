/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primaryDarkRed: 'rgb(77, 19, 0)',
      },
    },
  },
  plugins: [require('tailwind-scrollbar'),],
  safelist: [
    {
      pattern: /(bg|text|border)-primary(DarkRed|)/,
    },
  ],
};
