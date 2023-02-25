/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'dark-iceblue': '#5382a1',
        iceblue: '#99b7dc',
        white: '#ffffffd0',
      },
    },
  },
  plugins: [],
};
