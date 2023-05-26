/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'myTransparent': 'rgba(31, 31, 31, 0.3)',
        'myGreen': '#009600',
        'myBlue': '#5568FF',
        'myRed': '#F91647'
      },
      width: {
        '90%': '90%',
      },
      fontFamily: {
        'futura-pt-demi': ['futura pt demi', 'sans-serif']
      },
      
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    styled: true,
    themes: false,
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
    darkTheme: "dark",
  },
}