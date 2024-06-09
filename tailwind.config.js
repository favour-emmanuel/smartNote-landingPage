/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        dmSans: ["'DM Sans'", "sans-serif"],
      },
      colors: {
        appBlack: "#080808",
        appWhite: "#EFECE6",
        appCyan: "#048C80",
        appGray: "#BABABA",
      },
      animation: {
        flow: "flow 10s linear infinite",
      },
    },
    keyframes: {
      flow: {
        "0%": { transform: "translateX(100%)" },
        "100%": { transform: "translateX(-100%)" },
      },
    },
    boxShadow: {
      "inner-border": "inset 0 0 0 1px #048C80",
    },
  },
  plugins: [],
};
