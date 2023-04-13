/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-to-right":
          "linear-gradient(to right, hsla(145, 44%, 37%, 1), hsla(190, 53%, 56%, 1))",
      },
    },
  },
  plugins: [require("daisyui")],
};
