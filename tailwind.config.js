/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  safelist: ['outline-none'],
  theme: {
    fontFamily: {
      sans: ["Popins", "sans-serif"],
    },
    screens: {
      '2xs': '375px',
      'xs': '390px',
      'sm': '540px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1920px',
    },
    extend: {
      colors: {
        "black": 'var(--black)',
        "white": 'var(--white)',
        "gray": 'var(--gray)',
        "primary": 'var(--primary)',
        "primary50": 'var(--primary50)',
        "secondary": 'var(--secondary)',
        "secondary50": 'var(--secondary50)',
        "tertiary": 'var(--tertiary)',
        "tertiary50": 'var(--tertiary50)',
      },
    },
  },
  plugins: [],
}

