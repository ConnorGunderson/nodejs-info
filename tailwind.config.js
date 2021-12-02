module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        nodeDark: {
          100: "#d8e7d8",
          200: "#b1cfb0",
          300: "#8ab789",
          400: "#639f61",
          500: "#3c873a",
          600: "#306c2e",
          700: "#245123",
          800: "#183617",
          900: "#0c1b0c"
        },
        nodeLight: {
          100: "#e1ece0",
          200: "#c3d9c1",
          300: "#a4c6a1",
          400: "#86b382",
          500: "#68a063",
          600: "#53804f",
          700: "#3e603b",
          800: "#2a4028",
          900: "#152014"
        },
        nodeBlack: {
          100: "#d6d6d6",
          200: "#acacac",
          300: "#838383",
          400: "#595959",
          500: "#303030",
          600: "#262626",
          700: "#1d1d1d",
          800: "#131313",
          900: "#0a0a0a"
},
      }
    },
  },
  variants: {
    extend: {
      
    },
  },
  plugins: [],
}
