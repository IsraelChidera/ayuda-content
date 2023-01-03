/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors:{
      primary: '#B73303',
      secondary: '#010101',
      dark: '#03014C',
      darker: '#1E1F4B',
      text: '#747474',
      "white": '#ffffff'
    },
    extend: {
      spacing: {
        '128': '31rem',
        '144': '36rem',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}