/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite-react/**/*.js",
  ],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
    },
    container: {
      center: true,
    },
    extend: {
      spacing: {
        'input-mobile': '44px',
        'input-desktop': '48px',
      }
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

