module.exports = {
  mode: "jit",
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#00040f",
        secondary: "#00f6ff",
        dimWhite: "rgba(255, 255, 255, 0.7)",
        dimBlue: "rgba(9, 151, 124, 0.1)",
        orange: "rgb(252,165,0)",
        poharBlue: "rgba(2,117,253,1)",
      },
      //fontFamily: {
      //  poppins: ["Poppins", "sans-serif"],
      //},
      animation: {
        'text':'text 10s ease infinite',
    },
    transitionDuration: {
      '300': '300ms',
      '1000': '1000ms',
      '2000': '2000ms',
      '3500': '3500ms',
    },

    keyframes: {
        'text': {
            '0%, 100%': {
               'background-size':'200% 200%',
                'background-position': 'left center'
            },
            '50%': {
               'background-size':'200% 200%',
                'background-position': 'right center'
            }
        },
    }
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};
