/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{jsx,css}"],
  theme: {
    fontFamily: {
      "Poppins": ["Poppins", "sans-serif"]
    },

    colors: {
      "light-primary": "#F8F8F8",
      "light-secondary": "#DEDEDE",

      "dark-primary": "#1B1B1B",
      "dark-secondary": "#353535",

      "red-primary": "#E94178",
      "red-secondary": "#EE6F99",
    },

    extend: {
      boxShadow: {
        "default": "0px 3px 20px rgba(134, 134, 134, 0.18)"
      }
    },

    screens: {
      "default-sm": {"max": "340px", "min": "100px"}
    }
  },
  plugins: [],
}
