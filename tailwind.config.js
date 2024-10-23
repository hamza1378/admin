/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        ubuntu: ['Ubuntu', 'sans-serif'],
        trykker: ['Trykker', 'serif'],
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
      },
      colors: {
        primary: '#A557F5',
        secondary: '#7102FF',
        inputBorder: '#BABCBC',
        inputBackground: '#DBDDDD',
        inputPlaceholder: '#A4A6A6',
        labelRequired: '#F95152',
        label: '#000000',
        radio: '#7E7CE8',
        transparentBlack: 'rgba(0,0,0,0.5)',
        lightbrown: '#FDEDC9',
        navBg: '#4640E0',
        whiteTransparent: '#FFFFFF80',
        bluecolor: '#062FF0',
        mainBg: '#ECF4F7',
        greyBlack: '#4D4D4D',
        seagreen: '#4BBDBD',
        lightRed: '#FF4242',
        lightGreen: '#4BBDBD',
        lightPurple: '#9791D0',
        lightGreen2: '#219562',
        label: '#737373',
        grey: '#8C8C8C',
        black: '#262626',
        purple: '#B05AF7',
        orangeBrown: '#F2994A',
        fadeBlue: '#4A51F2',
        lightPurple2: '#D1CFF7',
        greenStart: '#00ff7f', // Light green
        greenEnd: '#008000', // Dark green
      },
    },
  },
  plugins: [],
}
