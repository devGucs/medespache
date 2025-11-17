/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./*.html",               // <--- isso aqui vê TODOS HTML da raiz
    "./src/**/*.{html,js,ts,jsx,tsx}", // <--- e os que estão dentro de src
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
