module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        nodeDark: {
          1: '#8ab789',
          2: '#639f61',
          3: '#3c873a',
          4: '#306c2e',
          5: '#245123',
        },
        nodeLight: {
          1: '#a4c6a1',
          2: '#86b382',
          3: '#68a063',
          4: '#53804f',
          5: '#3e603b',
        },
        nodeBlack: {
          1: '#838383',
          2: '#595959',
          3: '#303030',
          4: '#262626',
          5: '#1d1d1d',
        },
        dark: '#131313',
        light: '#e1ece0',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
