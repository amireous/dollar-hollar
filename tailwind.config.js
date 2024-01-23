/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    fontFamily: {
      sanSerif: ['Source Sans 3', 'sans-serif'],
      mono: ['Source Code Pro', 'monospace'],
      handWriting: ['Kalam', 'cursive']
    },
    extend: {
      colors: {
        lavenderIndigo: '#8657E1',
        daisyBush: '#4714a5',
        goldenFizz: '#feff40',
        black: '#000000',
        monsoon: '#777878',
        silver: '#c0c0c0',
        gallery: '#efead2',
        whisper: '#f9f4f9',
        white: '#ffffff',
        robinEggBlue: '#00e9c0',
        scarlet: '#f72f45',
        caribbeanGreen: '#1CC6A0',
        purple: '#7209b7',
        pastelPurple: '#b2a12bb',
        fog: '#decaec',
        blueGem: '#3813a0'     
      }
    },
  },
  plugins: [],
}

