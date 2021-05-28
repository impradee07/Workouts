module.exports = {
  
    purge: {
      content: [
        './src/**/*.{html,ts}',
      ]
    },

  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      
    colors:{
      navFill:'#046B99',
        navActive:'#024A69',
        buttonColor:' #0073E7'
    
  },
    },
  },
  variants: {
    extend: {
      tableLayout: ['hover', 'focus'],
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
