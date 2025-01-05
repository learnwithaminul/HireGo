/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      screens:{
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1200px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1440px',
      // => @media (min-width: 1536px) { ... }
      },
      fontFamily: {
        "sans": ["IBM Plex Sans Hebrew", "serif"]
      },
      colors:{
        btnBg : "#000000D9",
        textColor : "#000000D9",
        primaryBg : "#B1D8FC",
        secondaryBg : "#F5F5F5",
        checkmarkColor : "#FFEA79",
        darkBg : "#323232",
        headingOrange : "#FD852F",
        headingPurple : "#9149ED",
        bodyText : "#7d7d7d",

      }
    },
    container:{
      center: true,
      padding: {
        DEFAULT: '1.5rem',
        "sm": '2rem',
        "lg": '4rem',
        "xl": '5rem',
        "2xl" : '120px',
      },

    }
  },
  plugins: [],
}

