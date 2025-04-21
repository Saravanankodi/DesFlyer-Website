/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:"#0496FF",
        review:"#D9D9D980",
        footer:"#D9D9D9"
      },
      maxWidth:{
        card:"620px"
      }
    },
  },
  plugins: [],
}

