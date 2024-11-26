/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#0775AA",
        "blue-1": "#203E78",
        "blue-2": "#118AC5",
        "blue-3": "#80C1EF",
        "blue-4": "#DBEDFB",
        "dark-1": "#2F2F2F",
      },
      fontFamily: {
        "protest-strike": ["Protest Strike", "sans-serif"],
        "montserrat-alternates": ["Montserrat Alternates", "serif"],
        montserrat: ["Montserrat", "serif"],
        poppins: ["Poppins", "serif"],
        sora: ["Sora", "sans-serif"],
      },
    },
  },
  plugins: [],
};
