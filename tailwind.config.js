/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.ts"
],
  theme: {
    extend: {
      colors: {
        "background": "#1A1818",
        "foreground": "#1A1818",
        "foreground-transparent-0.2": "rgba(39, 39, 42, 0.2)",
        "dark-transparent-0.8": "rgba(18, 16, 17, 0.8)",
        "dark-transparent-0.8": "rgba(18, 16, 17, 0.4)",
        "dark-transparent-0.2": "rgba(18, 16, 17, 0.2)",
        "background-darker": "#161413",
        "dark": "rgba(18, 16, 17)",
      },
      backgroundImage: {
        'seif-flight': "url('../public/seif-writing.jpg')",
        'seif-flight-desktop': "url('../public/seif-writing-desktop.jpg')",
        'ruins': "url('../public/ruins.jpg')",
        'library': "url('../public/library.jpg')"
      },
      fontSize: {
        '10xl': "10rem",
      }
    },
  },
  plugins: [],
}

