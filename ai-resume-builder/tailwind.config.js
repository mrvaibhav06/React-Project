/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,html}", // Adjust according to your folder structure
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#9f5bff', // Custom color
        secondary: '#F59E0B',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Custom font
      },
      borderRadius: {
        'xl': '1.5rem',
      },
      spacing: {
        '128': '32rem',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'), // For better form styling
    require('@tailwindcss/typography'), // For prose
    require('@tailwindcss/aspect-ratio'), // For media
  ],
  darkMode: 'class', // or 'media' or false
}
