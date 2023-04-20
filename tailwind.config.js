/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        primary: "#212428",
        secondary: "#DB1C28",
        "primary-100": "#212128",
      },
      colors: {
        primary: "#C4CFDE",
        secondary: "#FF014F",
        "secondary-100": "#DB1C28",
      },
      hover: {
        primary: "#DB1C28",
      },
      animation: {
        "spin-slow": "spin 8s linear infinite",
      },
    },
  },

  plugins: [require("daisyui")],
};
