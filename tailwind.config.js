module.exports = {
  mode: 'jit',
  content: ['./public/**/*.{html,js}', './src/*.{html,js}'],
  darkMode: 'media',
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        primary: {
          tint: '#e6fbff',
          light: '#49bce6',
          DEFAULT: '#0088cc',
          dark: '#0069a6',
          textBlue: '#0093D6',
        },
        secondary: {
          tint: '#fff8e6',
          light: '#ffa929',
          DEFAULT: '#f98d00',
          dark: '#d47100',
        },
        black: {
          900: '#2d2d2d',
          800: '#4b4b4b',
          700: '#6f6f6f',
          600: '#909090',
          500: '#cccccc',
          400: '#ececec',
          300: '#f2f2f2',
          200: '#f6f6f6',
          100: '#f9f9f9',
        },
        white: {
          DEFAULT: '#ffffff',
        },
      },
      fontFamily: {
        display: ['Oswald'],
        proText: ['SF Pro Text'],
      },
      backgroundImage: {
        'testimonial': "url('/_assets/images/backgrounds/testimonial.svg')",
        'video': "url('/_assets/images/backgrounds/video.svg')",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
