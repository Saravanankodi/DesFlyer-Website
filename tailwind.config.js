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
      fontSize:{
        64:"64px",
        62:"62px",
        58:"58px",
        42:"42px",
        38:"38px",
        32:"32px",
        28:"28px",
        26:"26px",
        22:"22px",
        16:"16px"
      },
      width:{
        620:"620px",
        600:"600px",
        500:"500px"
      },
      height:{
        50:"50px",
        100:"100px",
        382:"382px",
        400:"400px",
        425:"425px",
        436:"436px",
        472:"472px",
        500:"500px",
        560:"560px"
      },
      borderRadius:{
        20:"20px",
        25:"25px"
      },
      lineHeight:{
        head:"78px",
        tittle:"52px"
      },
      maxWidth:{
        card:"620px"
      }
    },
  },
  plugins: [],
}

