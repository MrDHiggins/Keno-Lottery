module.exports = {
  mode: "jit",
  purge: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  //media: false, // or 'media' or 'class'
  theme: {
    extend: {
      width: {
        kenoLogoContainer: '13%',
        gridWidth: (windowWidth)=> {
          switch (true) {
            case windowWidth <= 849:
              return '91%'
            case windowWidth > 1619:
              return '48%'
            case windowWidth <= 1148:
              return '81%'
            default:
              return '50%'
          }
        },
        
      },
      gridTemplateColumns: {
        KenoGridTempCol: 'repeat(auto-fit,minmax(80px, 1fr))'
      },
      gridTemplateRows:{
        KenoGridTempRow: 'repeat(0,50px)'
      },
      zIndex: {
        'stickyNav': '999',
        'neg1': '-1',
        'bgImg': '1'
      },
      boxShadow: {
        'rsvpShadow': '0 8px 32px 0 rgba( 31, 38, 135, 0.37 )'
      }
    },
  },
};