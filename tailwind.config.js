/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'main': "var(--main)",
        'mainFrom': "rgba(27,227,227,1)",
        'mainTo': "rgba(0,212,255,1)", 
        'accent1': "var(--accent1)",
        'accent2': "var(--accent2)",
        'accent3': "var(--accent3)",
        'accent4': "var(--accent4)",
      },
      gradientColorStopPositions: {
        '48%': '48%',
      },
      backgroundImage: {
        'main': 'var(--main)',
      }, 
    },
  },
  plugins: [],
}

