/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        primary: "#022A30",
        secondary: "#D5EC7B",
        "primary-100": "#fff",
      },
      colors: {
        primary: "#fff",
        secondary: "#ffa",
        "secondary-100": "#D5EC4B",
      },
      hover: {
        primary: "#120",
      },
      animation: {
        "spin-slow": "spin 1s linear infinite",
      },
    },
  },

  plugins: [require("daisyui")],
};
