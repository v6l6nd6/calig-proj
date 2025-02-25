import type { Config } from "tailwindcss";
// import dsad from "./src/app/"

export default {
  content: [
    './src/pages/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
    '.src//app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        fontAchivo: ['Archivo-Narrow', 'sans-serif'],
        fontDancing: ['Dancing-Script'],
        fontMarcellus: ['Marcellus-Regular'],
        fontSackers: ['Sackers-Italian'],
        fontTerminaMedium: ['Termina-Medium'],
        fontTerminaDemi: ['Termina-Demi', 'sans-serif'],
        seriouslyFont:['Seriously-Font','sans-serif'],
        tekoFont:['Teko','sans-serif'],
        Triodion:['Triodion-Regular','sans-serif'],
        DancingScript:['DancingScript','sans-serif'],
        Pacifico:['Pacifico','sans-serif'],

      },
      screens: {
        'sm': {'max': '320px'},
        'tb': {'max': '768px'},
        'lp': {'max': '1024px'}
      }
    },
  },
  plugins: [],
} satisfies Config;
