/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme';

export default {
  content: [ // tells Tailwind which files to scan for class names.
    "./src/**/*.{html,astro,js,ts,jsx,tsx}", 
  ],
  theme: { // defines custom colors, fonts, and an animation
    extend: {
      colors: {
        primary: 'var(--cm-color-primary)',
        secondary: 'var(--cm-color-secondary)',
        accent: 'var(--cm-color-accent-dark)',
        default: 'var(--cm-color-default-black)',
        muted: 'var(--cm-color-text-muted)',
      },
      fontFamily: {
        sans: ['var(--cm-font-sans)', ...defaultTheme.fontFamily.sans],
        heading: ['var(--cm-font-heading)', ...defaultTheme.fontFamily.sans],
      },
      fontWeight: {
        light: 'var(--cm-font-weight-light)',
        regular: 'var(--cm-font-weight-regular)',
        medium: 'var(--cm-font-weight-medium)',
        bold: 'var(--cm-font-weight-bold)',
      },

      animation: {
        fade: 'fadeInUp 1s both',
      },
    },
  },
  keyframes: { // defines the animation behavior
    fadeInUp: {
      '0%': { opacity: 0, transform: 'translateY(2rem)' },
      '100%': { opacity: 1, transform: 'translateY(0)' },
    },
  },

  plugins: [],
};

