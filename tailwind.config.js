// tailwind.config.js
const colors = require("./tailwind.colors");
const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  content: ["./src/**/*.html", "./src/**/*.jsx", flowbite.content()],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    fontFamily: {
      display: ["Poppins", "system-ui", "sans-serif"],
      body: ["Poppins", "system-ui", "sans-serif"],
    },
    extend: {
      animation: {
        float: "float 3s ease-in-out infinite",
        fadeIn: "fadeIn 2s ease-in forwards",
      },
      keyframes: {
        shimmer: {
          "100%": {
            transform: "translateX(100%)",
          },
        },
      },
    },
    colors,
  },
  variants: {
    extend: {
      ringWidth: ["focus-visible"],
      ringColor: ["focus-visible"],
      ringOffsetWidth: ["focus-visible"],
      ringOffsetColor: ["focus-visible"],
    },
  },
  plugins: [
    flowbite.plugin(),
    require("flowbite/plugin")({
      charts: true,
    }),
  ],
};
