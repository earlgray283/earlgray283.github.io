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
        darkwhite: '#ffffffd0'
      },
      fontSize: {
        xs: ['0.85rem'],
        lg: ['1.0rem']
      },
      animation: {
        // https://tail-animista.vercel.app/play/text/focus-in/text-focus-in
        'text-focus-in':
          'text-focus-in cubic-bezier(0.550, 0.085, 0.680, 0.530) both',
        'text-focus-in-500': 'text-focus-in 500ms',
        'text-focus-in-1000': 'text-focus-in 1000ms'
      },
      keyframes: {
        'text-focus-in': {
          '0%': {
            filter: 'blur(12px)',
            opacity: '0'
          },
          to: {
            filter: 'blur(0)',
            opacity: '1'
          }
        }
      }
    }
  },
  plugins: []
}
