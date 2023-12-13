/** @type {import('tailwindcss').Config} */
module.exports = {
  mode:'jit',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily:{
      'logo':['Pattaya']
    },
    extend: {
      backgroundImage: {
        'hero-pattern': "linear-gradient(to right bottom, rgba('#7ed56f',0.8), rgba('#28b485',0.8)), url('./griya-nature/public/jumbotron/hero.jpg')",        
      },     
     screens: {
      'hp':'360px',
      'hp1':'361px',
      'hp2':'577px',
     
     }
    },
   
  },
  plugins: [],
}
