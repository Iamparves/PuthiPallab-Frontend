/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "15px",
        screens: {
          "2xl": "1280px",
        },
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        primary: "#4169E1",
      },
      fontSize: {
        xs: "13px",
      },
    },
  },
  plugins: [],
};
