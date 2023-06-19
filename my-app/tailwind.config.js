/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      primary: "#8062F8",
      secondary: "#75E2FF",
      white: "#ffffff",
      red: "#ff0000",
      redShade: "#FFE6E0",
      cardColor: "#F3F3F3",

      card: "#ffffff",
    },

    extend: {},
  },
  plugins: [],
};
