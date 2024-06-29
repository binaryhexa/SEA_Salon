/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        background: {
          white: {
            'opacity-5': 'rgba(197, 197, 199, 5%)',
          },
        },
        primary10: '#ffc2cd',
        primary20: '#ff93ac',
        primary30: '#ff6289',
        primary40: '#fc3468',
        primary50: '#ff084a',
        neutral10: '#FFFFFF',
        neutral20: '#F5F5F6',
        neutral30: '#F7F7F7',
        neutral40: '#EEEEEF',
        neutral50: '#E1E2E3',
        neutral60: '#C3C4C7',
        neutral70: '#A0A2A6',
        neutral80: '#999CA2',
        neutral90: '#64686F',
        neutral100: '#434750',
        neutral110: '#0F141F',
        danger: '#E55353',
      },
    },
    fontize: {
      '2xs': '10px',
      xs: '12px',
      sm: ['14px', '140%'],
      base: ['16px', '140%'],
      lg: ['20px', '140%'],
      xl: ['24px', '120%'],
      '2xl': ['32px', '120%'],
      '3xl': ['40px', '110%'],
      '4xl': ['44px', '110%'],
      '5xl': ['48px', '110%'],
    },
  },
  plugins: [],
};
