/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Poppins: ["Poppins"],
      },
      colors: {
        myPurple: "hsl(259, 100%, 65%)",
        mylightred: "hsl(0, 100%, 67%)",
        myoff_white: "hsl(0, 0%, 94%)",
        mylight_grey: "hsl(0, 0%, 86%)",
        mysmokey_grey: "hsl(0, 1%, 44%)",
        myoff_black: "hsl(0, 0%, 8%)",
      },
    },
  },
  plugins: [],
  mode: "jit",
};
