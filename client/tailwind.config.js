/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT")
module.exports = withMT({
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Include JavaScript and TypeScript files in the src folder
    "./public/index.html", // Include the main HTML file
  ],
  theme: {
    extend: {
      colors: {
        primary: {"50":"#f0f9ff","100":"#e0f2fe","200":"#bae6fd","300":"#7dd3fc","400":"#38bdf8","500":"#0ea5e9","600":"#0284c7","700":"#0369a1","800":"#075985","900":"#0c4a6e","950":"#082f49"}
      }
    },
  },
  plugins: [],
});

