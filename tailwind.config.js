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
        'myRed': '#F91647',
        'secondary': '#282828',
        'tertiary': '#5F5F5F'
      },
      width: {
        '90%': '90%',
      },
      fontFamily: {
        'futura-pt-demi': ['futura pt demi', 'sans-serif'],
        'futura-pt-heavy': ['futura pt heavy', 'sans-serif'],
        'futur-pt-medium': ['futura pt medium', 'sans-serif'],
        'futura-pt-book': ['futura pt book', 'sans-serif']
      },
      backgroundImage: {
        'hiking': "linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('https://ik.imagekit.io/uddq1v9vn/electro_surge_website/hiking.jpg?updatedAt=1685241807442')",
        'forest': "linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('https://ik.imagekit.io/uddq1v9vn/electro_surge_website/forest.jpg?updatedAt=1685241807277')",
        'relief': "linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('https://ik.imagekit.io/uddq1v9vn/electro_surge_website/relief_aid.jpeg?updatedAt=1685241807282')",
        'beach': "linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('https://ik.imagekit.io/uddq1v9vn/electro_surge_website/beach.jpg?updatedAt=1685241807465')",
        'court': "linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('https://ik.imagekit.io/uddq1v9vn/electro_surge_website/basketball-transformed.jpeg?updatedAt=1685320375208')"
      },
      dropShadow: {
        'myDropShadow': '9px 6px 4px rgba(0, 0, 0, 0.25)',
      }
      
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
    darkTheme: "white",
  },
}