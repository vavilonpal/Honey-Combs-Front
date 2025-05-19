/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'xl': '1440px'
    },
    extend: {
      colors: {
        'golden-honey' : '#F6C90E',
        'amber-nectar' : '#FFB547',
        'warm-taupe' : '#8C674F',
        'bee-black' : '#2F2F2F',
        'cream-white' : '#FFF8E1',
        'honey-shadow' : '#D9A441'
      }
    },
  },
  plugins: [],
}

