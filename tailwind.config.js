/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'main': "var(--main)",
        'accent1': "var(--accent1)",
        'accent2': "var(--accent2)",
        'accent3': "var(--accent3)",
        'accent4': "var(--accent4)",
      },
      backgroundImage: {
        'main': 'var(--main)',
      },
      transitionDuration: {
        '2000': '2000ms',
      },
      margin: {
        '21%': '21%',
      },
    },
  },
  plugins: [],
}

