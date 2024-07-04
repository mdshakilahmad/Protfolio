/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        Inter: ["Inter", "sans-serif"],
        Outfit: ["Outfit", "sans-serif"],
        Poppins: ["Poppins", "sans-serif"],
      },
      backgroundImage: {
        "about-img": "url('../images/about.png')",
      },
      colors: {
        primary: "#E35223",
        secondary: {
          100: "#2A2A2A",
          200: "#232323",
          300: "#25282B",
          400: "#444444",
          500: "#4A4A4A",
          600: "#5B5053",
        },
        "skill-icon": "#121314",
        "common-bg": "#F6F6EF",
      },
    },
  },
  plugins: [],
};
