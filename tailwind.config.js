/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#E5E5E5",
        black: "00160A",
        teal: "#64FCD9",
      },
    },
  },
  plugins: [],
};
