/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ['"Syne"', '"Plus Jakarta Sans"', 'sans-serif'],
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      colors: {
        trs: {
          bg: "#FFFFFF",
          border: "#EFE8E8",
          text: "#121417",
          crimson: "#A31536",
          crimsonHover: "#8D102E",
          pillBg: "#FDF2F4",
          pillBorder: "#FCE1E6",
        }
      }
    },
  },
  plugins: [],
}