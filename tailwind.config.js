/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
        screens: {
          sm: '480px',
          md: '768px',
          lg: '976px',
          xl: '1440px',
        },
        colors: {
          'primary':         '#1B3764',
          'secondary':'#FFCA42',
          'bg-color':        '#F6F8FC',
          'overlay':         'rgba(16',
          'text-primary':    '#FFFFFF',
          'textsec':'#B4C7E7',
          'textblack':  'black',
        },
        flexBasis: {
          '3/4': '75%',
          '2/7': '28.5714286%',
          '3/7': '42.8571429%',
          '4/7': '57.1428571%',
          '5/7': '71.4285714%',
          '6/7': '85.7142857%',
        }
    //   fontSize: {

    //     'sm': ['1.5rem', {
    //       lineHeight: '2rem',
    //       letterSpacing: '-0.01em',
    //       fontWeight: '500',
    //     }],
    //     'base': ['1.1875rem', {
    //       lineHeight: '2rem',
    //       letterSpacing: '-0.01em',
    //       fontWeight: '500',
    //     }],
    //     'lg': ['1.5rem', {
    //       lineHeight: '2rem',
    //       letterSpacing: '-0.01em',
    //       fontWeight: '500',
    //     }],

    //     'xl': ['1.5rem', {
    //       lineHeight: '2rem',
    //       letterSpacing: '-0.01em',
    //       fontWeight: '500',
    //     }],
    //     '2xl': ['1.875rem', {
    //       lineHeight: '2.25rem',
    //       letterSpacing: '-0.02em',
    //       fontWeight: '700',
    //     }],
    //   }
     },
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}
