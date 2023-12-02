/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      primary: 'Orbitron',
      secondary: 'Rajdhani',
      tertiary: 'Aldrich',
    },
    container: {
      padding: {
        DEFAULT: '15px',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '960px',
      xl: '1200px',
    },
    extend: {
      colors: {
        title:'#151D48',
        primary: '#0a0a0a',
        accent: '#B809C3',
        cardbg:'#EEEDED',
        cardcl:"#27374D",
        tech:"#526D82",
        ml:'#009FBD',
        django:"#1B9C85"
      },
    },
  },
    plugins:[],
}

