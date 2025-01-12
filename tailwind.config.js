/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite-react/**/*.js",
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
    },
   
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms') ({
      strategy: 'class',
    }),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/container-queries'),
    require("flowbite/plugin"),
  ],
}

