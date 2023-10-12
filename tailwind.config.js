/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'main-circle': "url('@/assets/icons/circle.svg')",
      }
    },
    fontFamily: {
    'didatic-gothic': ['Didatic Gothic', 'sans-serif'],
    'inter': ['Inter', 'sans-serif']
    },
  },
  plugins: [],
}

