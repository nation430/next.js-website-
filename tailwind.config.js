module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}',
   './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      container: {
        width: true,
      },
      colors: {
        yellow: {
          '600':'#c0df34'
        },
        purple:{
          '900':'#171347'

        },
        seablue:{
          '300':'#62759d;'
        },
        mycolor:{
          '900':'#152c5b'
        },
        mycolor2:{
          '900': '#008aff'

        },
        mycolor3:{
          '600':'#62759d'
        },
        mycolor4:{
          '900':'#718096'
        },
        whitelight:{
        '900': '#fafbfe',
        }
      }
    },
  },
  plugins: [],
}
