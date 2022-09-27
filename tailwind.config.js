module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens: {
      xs: '0px',
      // => @media (min-width: 640px) { ... }

      sm: '600px',
      // => @media (min-width: 768px) { ... }

      md: '900px',
      // => @media (min-width: 1024px) { ... }

      lg: '1200px',
      // => @media (min-width: 1280px) { ... }

      xl: '1536px',
      // => @media (min-width: 1536px) { ... }
    },
  },
  plugins: [],
};
