module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#004369',
      },
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
};
