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
      fontFamily: {
        rubik: ["Rubik Variable", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        mulish: ["Mulish Variable", "sans-serif"],
      },
      animation: {
        'text':'text 10s ease infinite',
    },
    transitionDuration: {
      '300': '300ms',
      '1000': '1000ms',
      '2000': '2000ms',
      '3500': '3500ms',
      '4000': '4000ms',
      '4500': '4500ms',
      '5000': '5000ms',
      '6000': '6000ms',
      '7000': '7000ms',
      '8000': '8000ms',
    },

    transitionDelay: {
      '0': '0ms',
      '500': '500ms',
      '1000': '1000ms',
      '2000': '2000ms',
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
