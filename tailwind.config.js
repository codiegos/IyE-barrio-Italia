/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    fontFamily: {
      sans: ['Cormorant Upright', 'serif']
    },
    extend: {
      backgroundImage: {
        triangle: 'url(assets/backgrounds/triangle.svg)'
      },
      colors: {
        primary: '#00C7D1',
        secondary: '#FCBB4D',
        tertiary: '#E6E451'
      }

    }
  },
  plugins: []
}
