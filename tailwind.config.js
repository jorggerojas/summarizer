/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  safelist: ["outline-none"],
  theme: {
    fontFamily: {
      sans: ["Popins", "sans-serif"],
    },
    boxShadow: {
      input: "0px 4px 5px -2px rgba(0, 0, 0, 0.25)",
      "input-focus": "0px 4.5px 5px -2px rgba(0, 0, 0, 0.35)",
    },
    fontSize: {
      sm: "0.75rem",
      base: "1rem",
      lg: "1.25rem",
      xl: "1.5rem",
      h3: "2.25rem",
      h2: "2.625rem",
      h1: "3rem",
    },
    screens: {
      "2xs": "375px",
      xs: "390px",
      sm: "540px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1920px",
    },
    extend: {
      colors: {
        black: "var(--black)",
        white: "var(--white)",
        gray: "var(--gray)",
        primary: "var(--primary)",
        primary50: "var(--primary50)",
        secondary: "var(--secondary)",
        secondary50: "var(--secondary50)",
        tertiary: "var(--tertiary)",
        tertiary50: "var(--tertiary50)",
        error: "var(--error)",
      },
    },
  },
  plugins: [],
};
