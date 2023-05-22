/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: "#F96162",
      },
      backgroundImage: {
        banner: `url('../public/image/banner.jpg')`,
      },
    },
  },
  plugins: [],
};
