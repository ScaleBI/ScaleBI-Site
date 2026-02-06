/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}", "./index.html"],
  theme: {
    extend: {
      fontFamily: {
        jetbrains: ['"JetBrains Mono"', 'monospace'],
        urbanist: ['Urbanist', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
