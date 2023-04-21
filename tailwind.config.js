/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    fontFamily: {
      montserrat: ["var(--font-montserrat)"],
      encode: ["var(--font-encode)"]
    },
    gridTemplateColumns: {
      fluid: 'repeat(auto-fit,minmax(15rem,1fr))',
    },
    },
  },
  plugins: [],
}
