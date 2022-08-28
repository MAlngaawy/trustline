/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        trustBlue1: '#51B4FF', //Sky blue
        trustBlue2: '#019FFE', //Main blue
        trustBlue3: '#152F4B', //Dark blue
        trustBlue4: '#763BBF', //Purple
        trustBlue5: '#351D4F', //Dark Purple
        trustGray: '#F5F5F5' // The Gray Background
      }
    },
  },
  plugins: [],
}
