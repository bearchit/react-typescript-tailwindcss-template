module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  //darkMode: "media", // or 'media' or 'class'
  darkMode: false,
  theme: {
    extend: {},
    flex: {
      '1': '1 1 0%',
      '2': '2 2 0%',
      'initial': '0 1 auto',
      'inherit': 'inherit',
      'auto': '1 1 auto',
      'none': 'none',
    }
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/aspect-ratio'),
  ],
};
