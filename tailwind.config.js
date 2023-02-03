/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        coral: '#f45f5f',
        'custom-blue': '#2E83AF',
        'light-blue': '#81FFE4',
        'off-black': '#343231'
      }
    }
  },
  plugins: []
}
