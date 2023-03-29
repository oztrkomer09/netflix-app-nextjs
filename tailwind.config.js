/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        movies: "repeat(auto-fit, minmax(180px, 1fr));",
      },
      animation: {
        loadingSpin: "spin 1s ease-in-out infinite",
      },
      keyframes: {
        loadingSpin: {
          "0%, 100%": { transform: "rotate(-3deg)" },
        },
      },
    },
  },
  plugins: [],
};
