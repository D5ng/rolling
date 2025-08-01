/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        purple: {
          50: "#F8F0FF",
          100: "#ECD9FF",
          200: "#DCB9FF",
          300: "#C894FD",
          400: "#AB57FF",
          500: "#9935FF",
          600: "#5603A7",
          700: "#861DEE"
        },
        orange: {
          50: "#FFF0D6",
          100: "#FFE2AD",
          200: "#FFC583",
          300: "#FFAE65",
          400: "#FF8832"
        },
        blue: {
          50: "#E2F5FF",
          100: "#B1E4FF",
          200: "#7CD2FF",
          300: "#34B9FF",
          400: "#00A2FE"
        },
        green: {
          50: "#E4FBDC",
          100: "#D0F5C3",
          200: "#9BE282",
          300: "#60CF37",
          400: "#2BA600"
        },
        gray: {
          50: "#F6F6F6",
          100: "#EEEEEE",
          200: "#CCCCCC",
          300: "#999999",
          400: "#555555",
          500: "#4A4A4A",
          600: "#3A3A3A",
          700: "#2B2B2B",
          800: "#181818"
        },
        white: "#fff",
        black: "#000",
        error: "#DC3A3A",
        surface: "#F6F8FF"
      }
    }
  },
  plugins: []
}
