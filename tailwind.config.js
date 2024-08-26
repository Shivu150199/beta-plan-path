/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#603AC8',
        dark_gray:'#494747',
        light_gray:'#8A8A8A',
        dark_violet:'#31225C',
        light_violet:'#ECE4FF',
        placeholder:'#8A8A8A', // Example of a custom primary color
        success:'#2FAF47',
        failure:'#EF0000'
      },
      screens: {
        'xs': {'max': '300px'},  // Custom screen size for up to 300px
      },
    },
  },
  plugins: [require('daisyui'),],
  daisyui: {
    themes: ["light", "dark", "cupcake"],
  },
}