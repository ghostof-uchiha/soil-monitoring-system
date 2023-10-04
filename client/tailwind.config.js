/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT")
module.exports = withMT({
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Include JavaScript and TypeScript files in the src folder
    "./public/index.html", // Include the main HTML file
  ],
  theme: {
    extend: {},
  },
  plugins: [],
});

