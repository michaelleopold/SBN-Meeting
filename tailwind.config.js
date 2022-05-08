module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  important: '#__next',
  theme: {
    extend: {
      fontFamily: {
        title: ['Pacifico'],
        subtitle: ['Roboto'],
      },
    },
  },
  variants: {
    extend: {
      width: ['responsive', 'hover', 'focus'],
      backgroundColor: ['active', 'group-hover'],
      translate: ['active'],
      textColor: ['active', 'group-hover', 'group-focus'],
      display: ['group-hover'],
      visibility: ['group-hover'],
      position: ['group-hover'],
      transitionDelay: ['group-hover'],
      flexDirection: ['group-hover'],
    },
  },
  plugins: [],
}
