/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        morado: '#887BB0', 
        azulBajito: '#D4F1F4', 
        rojo: "#D01110",
        amarillo: "#FEE900",
        gris: "#D6D6D6",
      },
      screens: {
        sm: "640px",
        md: "768px",
      },
    },
  },
  plugins: [],
};
