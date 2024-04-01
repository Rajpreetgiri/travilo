/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        color1: "#034752",
        color2: "#B4D330",
        color3: "#152F37",
        color4: "#35528B",
      },
      fontFamily: {
        poppins: ["Poppins"],
        Montserrat: ["Montserrat"],
      },
    },
  },
  plugins: [],
};
