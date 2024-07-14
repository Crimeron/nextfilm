/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        barlow: ['Barlow', 'sans-serif'],
        pt_sans: ['PT Sans', 'sans-serif'],
      },
      container: {
        center: true,
      },
      colors: {
        'web_black': '#1a1218',
        'web_dark_gray': '#30292F',
        'web_white': '#d4d7d2',
        'web_red': '#c82e40',
        'web_gray': '#a8aec2',
      },
    },
  },
  plugins: [],
};
