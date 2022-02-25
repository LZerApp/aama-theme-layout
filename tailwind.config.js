module.exports = {
  mode: 'jit',
  content: ['./public/**/*.{html,js}', './src/*.{html,js}'],
  darkMode: 'media',
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1440px',
    },
    container: {
      center: true,

      // or have default horizontal padding
      padding: '1rem',

      // default breakpoints but with 40px removed
      screens: {
        xl: '1136px',
      },
    },
    backgroundSize: {
      custom: '70%',
      createBanner: '200%',
      createBannerLarge: '100%',
    },
    extend: {
      backgroundImage: {
        testimonial: "url('../images/backgrounds/testimonial.svg')",
        video: "url('../images/backgrounds/video.svg')",
        largelogo: "url('../images/backgrounds/logo.svg')",
        footer: 'url(../images/backgrounds/footer.svg)',
        cocreate: 'url(../images/backgrounds/co-create.svg)',
        createMessage: 'url(../images/entrepreneur/report/example_2.svg)',
        about: 'url(../images/backgrounds/about.svg)',
        recruit: 'url(../images/backgrounds/recruit-banner.svg)',
        banner1: 'url(../images/sliders/banner-1.svg)',
      },
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
          DEFAULT: '#000000',
          footer: '#c4c4c4',
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
        border: {
          darkgray: '#909090',
          shallow: '#C4C4C4',
        },
      },
      fontFamily: {
        display: ['Oswald'],
        prodisplay: ['SF Pro Display'],
        protext: ['SF Pro Text'],
        neue: ['Helvetica Neue'],
      },
      fontSize: {
        h1: ['40px', '125%'],
        h2: ['32px', '125%'],
        h3: ['28px', '125%'],
        h4: ['24px', '140%'],
        h5: ['20px', '140%'],
        h6: ['18px', '140%'],
        title: ['16px', '140%'],
        subtitle: ['14px', '140%'],
        body1: ['16px', '160%'],
        body2: ['14px', '140%'],
        caption: ['12px', '140%'],
        small: ['11px', '140%'],
        tiny: ['10px', '140%'],
        ag: ['75px'],
      },
      lineHeight: {
        title: '125%',
        normal: '140%',
        loose: '160%',
      },
      width: {
        logo: '50px',
        articImg: '256px',
        createMessageImg: '382px',
      },
      heigh: {
        logo: '50px',
        articImg: '177px',
        createMessageImg: '298px',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
