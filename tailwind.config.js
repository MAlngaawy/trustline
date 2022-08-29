/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        trustBlue1: "#51B4FF", //Sky blue
        trustBlue2: "#019FFE", //Main blue
        trustBlue3: "#152F4B", //Dark blue
        trustBlue4: "#763BBF", //Purple
        trustBlue5: "#351D4F", //Dark Purple
        trustGray: "#F5F5F5", // The Gray Background
        trustTextGray: "#9B9B9B", // The Gray text
        trustTextGray2: "#4f4f4f", // The Gray text
        boxGray: "#f8f8f8", // The Gray for services Boxs
        lightBlack: "#131414",
      },
    },
    fontFamily: {
      tajwal: ["Tajawal", "sans-serif"],
    },
    screens: {
      sm: "600px", // => @media (min-width: 600px)
      md: "800px", // => @media (min-width: 800px)
      lg: "1024px", // => @media (min-width: 1024px)
    },
  },
  plugins: [],
};
