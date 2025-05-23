// tailwind.config.js
module.exports = {
  darkMode: 'class', // class-based dark mode
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light", "dark"], // চাইলে custom theme পরে add করা যাবে
  },
}