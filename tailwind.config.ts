import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container: {
        screens: {
          '2xl': '1400px'
        },
      },
      colors: {
        primary: {
          100: '#E5EDF9',
          200: '#91BDF5',
          300: '#F3F8FF',
          500: '#4B93E7'
        },

        gray: {
          100: '#DCE5F2',
          200: '#F1F4F9',
          300: '#CFD8DC',
          400: '#6479AB30',
        },

        secondary: {
          100: '#D3E2F4',
          200: '#071C50',
          300: '#E6EEF8',
          500: '#082777'
        },

        orange: {
          200: '#F7AC25',
          300: 'rgba(247, 172, 37, 0.56)',
        }

      },
      fontFamily: {
        poppins: ['var(--font-poppins)'],
      },
    },
  },
  plugins: [],
};
export default config;
