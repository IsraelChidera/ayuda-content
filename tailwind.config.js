/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors:{
      primary: '#B73303',
      secondary: '#2E3E5C',
      dark: '#03014C',
      darker: '#1E1F4B',
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