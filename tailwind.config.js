/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "mainfont": ['Sono', "sans-serif"],
        "fancy1": ['Sligoil-Micro', "cursive"],
        "fancy2": ['Facade-est"', "cursive"],

      },
    },
  },
  plugins: [],
}