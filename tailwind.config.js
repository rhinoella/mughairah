/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html"],
  theme: {
    extend: {
      colors: {
        "background": "#27272a",
        "foreground": "#1A1818",
        "foreground-transparent": "rgba(39, 39, 42, 0.2)",
        "background-darker": "#19191D",
      }
    },
  },
  plugins: [],
}

