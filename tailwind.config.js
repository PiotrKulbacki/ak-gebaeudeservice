module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '380px',
        's': '400px',
        'm': '750px',
        'custom-md': '950px'
      }
    },
  },
  plugins: [],
}
