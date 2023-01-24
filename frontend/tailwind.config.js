/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      sans: ['Poppins', 'sans-serif'],
    },
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/background.jpg')",
      },
    },
    plugins: {
      'tailwindcss/nesting': 'postcss-nesting',
    },
  },
};
