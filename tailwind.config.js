/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  // corePlugins: {
  //   preflight: false,
  // },
  // important: "#__next",
  theme: {
    extend: {
      boxShadow: {
        around: "0 0 25px 5px rgba(0, 0, 0, .1)",
        "around-sm": "0 0 5px 0 rgba(0, 0, 0, .1)",
      },
    },
  },
  plugins: [],
};
